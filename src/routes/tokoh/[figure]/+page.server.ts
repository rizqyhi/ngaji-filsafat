import type { Episode } from "../../../types";
import type { PageServerLoad } from "./$types";

export const load = (async ({ fetch, params }) => {
  const response = await fetch("/database.json");
  const allEpisodes: Episode[] = await response.json();
  const episodes = allEpisodes.filter(
    (episode) => episode.figure === params.figure
  );

  return {
    episodes,
    title: `${params.figure} - Ngaji Filsafat`,
  };
}) satisfies PageServerLoad;
