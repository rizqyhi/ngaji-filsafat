export function extractVideoIdFromUrl(videoUrl: string | null): string {
  if (videoUrl === null) return "";

  const videoRegex = videoUrl.match(
    /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/i
  );

  return videoRegex ? videoRegex[1] : "";
}

export function parseDate(toBeParsedDate: string, episode: string): string {
  try {
    const [year, month, date] = toBeParsedDate.split("-");

    if (!year || !month || !date) {
      throw new Error(`INVALID_DATE_FORMAT: ${toBeParsedDate}`);
    }

    const d = new Date();
    d.setUTCHours(0, 0, 0, 0);
    d.setFullYear(2000 + Number(year));
    d.setMonth(Number(month) - 1);
    d.setDate(Number(date));

    return d.toJSON();
  } catch (e) {
    throw new Error(
      `FAILED_PARSING_DATE: episode: ${episode}, date value: ${toBeParsedDate}`
    );
  }
}
