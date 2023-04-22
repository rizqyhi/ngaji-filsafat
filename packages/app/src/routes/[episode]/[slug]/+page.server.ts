import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

type Episode = {
  id: string;
  episode: number;
  date: string;
  title: string;
  topic: string;
  is_official: boolean;
  video_ids: string[];
  video_url: string;
  download_url: string;
};

export const load = (async ({ fetch, params }) => {
  const response = await fetch("/database.json");
  const episodes: Episode[] = await response.json();
  const episode = episodes.find((e) => e.episode.toString() === params.episode);

  if (!episode) {
    throw error(404, "Episode not found");
  }

  return { episode };
}) satisfies PageServerLoad;
