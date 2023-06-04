export type Episode = {
  id: number;
  episode: number;
  date: string;
  title: string;
  topic: string;
  figure: string;
  is_official: boolean;
  video_ids: string[];
  download_url: string;
};
