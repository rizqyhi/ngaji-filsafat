/**
 * @see https://gist.github.com/codeguy/6684588?permalink_comment_id=4325476#gistcomment-4325476
 */
export const slugify = (text: string): string => {
  return text
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\_/g, "-")
    .replace(/\-\-+/g, "-")
    .replace(/\-$/g, "");
};
