import type { Episode } from "../../../types";
import type { PageServerLoad } from "./$types";

export const load = (async ({ fetch, params }) => {
  const response = await fetch("/database.json");
  const allEpisodes: Episode[] = await response.json();
  const episodes = allEpisodes.filter(
    (episode) => episode.topic === params.topic
  );

  return {
    episodes,
    title: `${params.topic} - Ngaji Filsafat`,
  };
}) satisfies PageServerLoad;
