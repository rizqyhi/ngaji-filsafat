import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { generateEpisodeRoute } from "$lib/routeHelper";
import { findByEpisode } from "$lib/data/episodes";

export const load = (async ({ params }) => {
  const episode = findByEpisode(parseInt(params.episode));

  if (!episode) {
    throw error(404, "Episode not found");
  }

  throw redirect(307, generateEpisodeRoute(episode.episode, episode.title));
}) satisfies PageServerLoad;
