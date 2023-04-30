import { findByTopic } from "$lib/data/topics";
import type { PageServerLoad } from "./$types";

export const load = (async ({ params }) => {
  return {
    episodes: findByTopic(params.topic),
    title: `${params.topic} - Ngaji Filsafat`,
  };
}) satisfies PageServerLoad;
