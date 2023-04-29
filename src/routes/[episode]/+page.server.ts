import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { slugify } from "$lib/helpers";
import type { Episode } from "../../types";

export const load = (async ({ fetch, params }) => {
  const response = await fetch("/database.json");
  const episodes: Episode[] = await response.json();
  const episode = episodes.find((e) => e.episode.toString() === params.episode);

  if (!episode) {
    throw error(404, "Episode not found");
  }

  throw redirect(307, `/${episode.episode}/${slugify(episode.title)}`);
}) satisfies PageServerLoad;
