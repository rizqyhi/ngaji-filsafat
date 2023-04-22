export type Episode = {
  id: string;
  episode: number;
  date: string;
  title: string;
  topic: string;
  is_official: boolean;
  video_ids: string[];
  video_url: string;
  download_url: string;
};
