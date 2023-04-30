import { getAll } from "$lib/data/topics";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
  return {
    topics: getAll(),
  };
}) satisfies PageServerLoad;
