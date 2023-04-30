import database from "../../../data/database.json";
import collect from "collect.js";
import type { Episode } from "../../types";

export function getAll(): { [key: string]: number[] } {
  const episodes = database as Episode[];

  return collect(episodes)
    .filter((item) => !!item.figure)
    .mapToGroups((item: Episode) => [item.figure, item.episode])
    .sortKeys()
    .all();
}

export function findByFigureName(name: string): Episode[] {
  return (database as Episode[]).filter((item) => item.figure === name);
}
