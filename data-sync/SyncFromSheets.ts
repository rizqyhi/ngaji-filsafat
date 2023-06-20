import * as dotenv from "dotenv";
import fetch from "node-fetch";
import path from "node:path";
import { writeFileSync } from "node:fs";
import { extractVideoIdFromUrl, parseDate } from "./utils";
import type { Episode } from "../src/types";

dotenv.config();

type SheetsResponse = {
  range: string;
  majorDimension: string;
  values: string[][];
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
    `https://sheets.googleapis.com/v4/spreadsheets/${process.env.SHEETS_ID}/values/${process.env.SHEETS_NAME}!A1:L?key=${process.env.SHEETS_API_KEY}`
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
      date: parseDate(columns[1], columns[0]),
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
