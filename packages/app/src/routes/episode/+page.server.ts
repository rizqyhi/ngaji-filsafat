import type { Episode } from "../../types";
import type { PageServerLoad } from "./$types";

export const load = (async ({ fetch }) => {
  const response = await fetch("/database.json");
  const episodes: Episode[] = await response.json();

  return {
    episodes,
  };
}) satisfies PageServerLoad;
