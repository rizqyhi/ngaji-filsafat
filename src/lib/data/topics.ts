import database from "../../../data/database.json";
import groupBy from "lodash-es/groupBy";
import type { Episode } from "../../types";

export function getAll(): { [topic: string]: Episode[] } {
  const episodes = (database as Episode[]).sort(
    (a, b) => a.episode - b.episode
  );

  return groupBy(episodes, "topic");
}

export function findByTopic(topic: string): Episode[] {
  return getAll()[topic];
}
