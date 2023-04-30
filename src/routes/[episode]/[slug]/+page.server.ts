import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { findByEpisode } from "$lib/data/episodes";

export const load = (async ({ params, request }) => {
  const episode = findByEpisode(parseInt(params.episode));

  if (!episode) {
    throw error(404, "Episode not found");
  }

  return {
    episode,
    title: `#${episode.episode}: ${episode.title} - Ngaji Filsafat`,
    backTo: request.headers.get("Referer") ?? "/",
  };
}) satisfies PageServerLoad;
