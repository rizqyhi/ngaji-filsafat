import type { PageServerLoad } from "./$types";
import { getLatest } from "$lib/data/episodes";

export const load = (async () => {
  return {
    episodes: getLatest(),
  };
}) satisfies PageServerLoad;
