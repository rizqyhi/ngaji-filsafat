import { getAll } from "$lib/data/figures";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
  return {
    figures: getAll(),
  };
}) satisfies PageServerLoad;
