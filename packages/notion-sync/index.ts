import * as dotenv from "dotenv";
import { writeFileSync } from "node:fs";
import { Client, collectPaginatedAPI } from "@notionhq/client";
import {
  BlockObjectResponse,
  CheckboxPropertyItemObjectResponse,
  NumberPropertyItemObjectResponse,
  PageObjectResponse,
  ParagraphBlockObjectResponse,
  RichTextPropertyItemObjectResponse,
  TextRichTextItemResponse,
  TitlePropertyItemObjectResponse,
  UrlPropertyItemObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

dotenv.config();

type CustomRichTextPropertyItemObjectResponse =
  RichTextPropertyItemObjectResponse & {
    rich_text: TextRichTextItemResponse[];
  };

type EpisodeItem = {
  episode: NumberPropertyItemObjectResponse;
  youtube: UrlPropertyItemObjectResponse;
  download: UrlPropertyItemObjectResponse;
  youtube_non_official: CheckboxPropertyItemObjectResponse;
  date: CustomRichTextPropertyItemObjectResponse;
  topic: CustomRichTextPropertyItemObjectResponse;
  figure: CustomRichTextPropertyItemObjectResponse;
  title: TitlePropertyItemObjectResponse & {
    title: TextRichTextItemResponse[];
  };
};

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_API_TOKEN,
});

(async () => {
  console.info("Fetching database items");
  const pages = await collectPaginatedAPI(notion.databases.query, {
    database_id: "43a82b0866c54c0fa847acc9d3bfa0f9",
    sorts: [
      {
        property: "episode",
        direction: "ascending",
      },
    ],
  });

  const episodes = await Promise.all(
    (pages as PageObjectResponse[]).map(async (item) => {
      const properties = item.properties as unknown as EpisodeItem;
      const videoRegex = extractVideoIdFromUrl(properties.youtube.url);
      const video_ids = videoRegex
        ? [videoRegex]
        : (await getVideoUrlsFromPageContent(item.id)).map(
            extractVideoIdFromUrl
          );

      return {
        id: item.id,
        episode: properties.episode.number,
        date: parseDate(properties.date.rich_text[0]?.plain_text),
        title: properties.title.title[0]?.plain_text,
        topic: properties.topic.rich_text[0]?.plain_text,
        figure: properties.figure.rich_text[0]?.plain_text,
        is_official: !properties.youtube_non_official.checkbox,
        video_ids,
        video_url: properties.youtube.url,
        download_url: properties.download.url,
      };
    })
  );

  console.info("Writing to JSON file");
  writeFileSync("../../data/database.json", JSON.stringify(episodes, null, 2));
  console.info("Done");
})();

async function getVideoUrlsFromPageContent(pageId: string): Promise<string[]> {
  console.info(`Fetching video URLs for page: ${pageId}`);
  const blocks = await notion.blocks.children.list({
    block_id: pageId,
  });

  return (blocks.results as ParagraphBlockObjectResponse[])
    .filter((block) => block.object === "block" && block.type === "paragraph")
    .map((block) => block.paragraph.rich_text[0]?.href || "")
    .filter((url) => url !== "");
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
    throw new Error("INVALID_DATE_FORMAT");
  }

  const d = new Date();
  d.setUTCHours(0, 0, 0);
  d.setFullYear(2000 + Number(year));
  d.setMonth(Number(month) - 1);
  d.setDate(Number(date));

  return d.toJSON();
}
