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

export const load = (async ({ fetch }) => {
  const response = await fetch("/database.json");
  const episodes: Episode[] = await response.json();

  return {
    episodes,
  };
}) satisfies PageServerLoad;
