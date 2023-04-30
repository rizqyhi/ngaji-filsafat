import { getAll } from "$lib/data/episodes";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
  return {
    episodes: getAll(),
  };
}) satisfies PageServerLoad;
