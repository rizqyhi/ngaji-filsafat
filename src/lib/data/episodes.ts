import database from "../../../data/database.json";
import type { Episode } from "../../types";

export function getAll(): Episode[] {
  return (database as Episode[]).sort((a, b) => a.episode - b.episode);
}

export function getLatest(number: number = 5): Episode[] {
  return getAll()
    .sort((a, b) => b.episode - a.episode)
    .slice(0, number);
}

export function findByEpisode(episode: number): Episode | undefined {
  return getAll().find((item) => item.episode === episode);
}
