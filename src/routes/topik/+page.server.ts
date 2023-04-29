import type { Episode } from "../../types";
import type { PageServerLoad } from "./$types";
import groupBy from "lodash-es/groupBy";

export const load = (async ({ fetch }) => {
  const response = await fetch("/database.json");
  const episodes: Episode[] = await response.json();
  const topics = groupBy(episodes, "topic");

  return {
    topics,
  };
}) satisfies PageServerLoad;
