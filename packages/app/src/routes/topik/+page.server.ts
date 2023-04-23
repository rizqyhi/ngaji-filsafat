import type { Episode } from "../../types";
import type { PageServerLoad } from "./$types";
import uniq from "lodash-es/uniq";

export const load = (async ({ fetch }) => {
  const response = await fetch("/database.json");
  const episodes: Episode[] = await response.json();
  const topics = uniq(episodes.map((episode) => episode.topic)).sort();

  return {
    topics,
  };
}) satisfies PageServerLoad;
