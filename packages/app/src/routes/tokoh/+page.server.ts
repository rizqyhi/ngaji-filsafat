import type { Episode } from "../../types";
import type { PageServerLoad } from "./$types";
import collect from "collect.js";

export const load = (async ({ fetch }) => {
  const response = await fetch("/database.json");
  const episodes: Episode[] = await response.json();
  const figures: { [key: string]: number[] } = collect(episodes)
    .filter((item) => !!item.figure)
    .mapToGroups((item: Episode) => [item.figure, item.episode])
    .sortKeys()
    .all();

  return {
    figures,
  };
}) satisfies PageServerLoad;
