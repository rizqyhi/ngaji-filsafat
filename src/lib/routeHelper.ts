import { slugify } from "./helpers";

export function generateEpisodeRoute(id: number, title: string): string {
  return `/${id}/${slugify(title)}`;
}
