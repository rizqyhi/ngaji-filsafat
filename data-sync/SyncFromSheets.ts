import * as dotenv from "dotenv";
import fetch from "node-fetch";
import path from "node:path";
import { writeFileSync } from "node:fs";

dotenv.config();

type SheetsResponse = {
  range: string;
  majorDimension: string;
  values: string[][];
};

type Episode = {
  id: number;
  episode: number;
  date: string;
  title: string;
  topic: string;
  figure: string;
  is_official: boolean;
  video_ids: string[];
  download_url: string;
};

(async () => {
  console.info("Fetching records from Google Sheets");
  const episodes = await fetchRecordsFromGoogleSheets();

  console.info("Writing to JSON file");
  writeJsonFile(path.resolve("data/database.json"), episodes);

  console.info("Done");
})();

async function fetchRecordsFromGoogleSheets(): Promise<Episode[]> {
  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${process.env.SHEETS_ID}/values/A1:L?key=${process.env.SHEETS_API_KEY}`
  );

  const rows = (await response.json()) as SheetsResponse;

  return rows.values.slice(1).map((columns) => {
    const videoIds = columns
      .slice(6, 10)
      .filter((url) => url !== "")
      .map(extractVideoIdFromUrl);

    return {
      id: parseInt((columns[0] + columns[1]).replaceAll("-", "")),
      episode: parseInt(columns[0]),
      date: parseDate(columns[1]),
      title: columns[2],
      topic: columns[3],
      figure: columns[4] || "",
      is_official: columns[5] === "Yes",
      video_ids: videoIds,
      download_url: columns[10] || "",
    };
  });
}

function writeJsonFile(filePath: string, episodes: Episode[]) {
  writeFileSync(filePath, JSON.stringify(episodes, null, 2));
}

function extractVideoIdFromUrl(videoUrl: string | null): string {
  if (videoUrl === null) return "";

  const videoRegex = videoUrl.match(
    /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/i
  );

  return videoRegex ? videoRegex[1] : "";
}

function parseDate(toBeParsedDate: string): string {
  const [year, month, date] = toBeParsedDate.split("-");

  if (!year || !month || !date) {
    throw new Error(`INVALID_DATE_FORMAT: ${toBeParsedDate}`);
  }

  const d = new Date();
  d.setUTCHours(0, 0, 0, 0);
  d.setFullYear(2000 + Number(year));
  d.setMonth(Number(month) - 1);
  d.setDate(Number(date));

  return d.toJSON();
}
