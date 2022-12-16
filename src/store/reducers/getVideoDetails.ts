import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { convertRawViewstoString, timeSince } from "utils";
import { YT_API_URL } from "utils/constants";

const API_KEY = process.env.REACT_APP_YT_API_KEY;

export const getVideoDetails = createAsyncThunk(
  "ytApp/videoDetails",
  async (id: string) => {
    const {
      data: { items }
    } = await axios.get(
      `${YT_API_URL}/videos?key=${API_KEY}&part=snippet,statistics&type=video&id=${id}`
    );
    return parseData(items[0]);
  }
);

const parseData = async (item: {
  snippet: {
    channelId: string;
    title: string;
    description: string;
    published: Date;
    channelTitle: string;
  };
  id: string;
  statistics: { viewCount: string; likeCount: string };
}) => {
  const {
    data: {
      items: [
        {
          snippet: {
            thumbnails: {
              default: { url: channelImage }
            }
          },
          statistics: { subscriberCount }
        }
      ]
    }
  } = await axios.get(
    `${YT_API_URL}/channels?part=snippet,statistics=${item.snippet.channelId}&key=${API_KEY}`
  );

  return {
    videoId: item.id,
    videoTitle: item.snippet.title,
    videoDescription: item.snippet.description,
    videoViews: parseInt(item.statistics.viewCount).toLocaleString(),
    videoLikes: convertRawViewstoString(item.statistics.likeCount),
    videoAge: timeSince(new Date(item.snippet.published)),
    channelInfo: {
      id: item.snippet.channelId,
      image: channelImage,
      name: item.snippet.channelTitle,
      subscribers: convertRawViewstoString(subscriberCount, true)
    }
  };
};
