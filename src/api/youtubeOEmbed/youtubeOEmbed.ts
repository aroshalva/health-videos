import { baseApi } from "../baseApi";
import { apiUrls } from "../apiUrls";

export type YoutubeVideoOEmbed = {
  title: string;
  author_name: string;
  author_url: string;
};

export const fetchYoutubeVideoOEmbed = ({
  videoId,
}: {
  videoId: string;
}): Promise<YoutubeVideoOEmbed> =>
  baseApi.get({ url: apiUrls.youtubeOEmbed(videoId) });
