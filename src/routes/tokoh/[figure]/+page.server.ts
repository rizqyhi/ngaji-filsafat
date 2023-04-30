import { findByFigureName } from "$lib/data/figures";
import type { PageServerLoad } from "./$types";

export const load = (async ({ params }) => {
  return {
    episodes: findByFigureName(params.figure),
    title: `${params.figure} - Ngaji Filsafat`,
  };
}) satisfies PageServerLoad;
