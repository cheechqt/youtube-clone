import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "store";
import { RecommendedVideos } from "Types";
import { parseRecommendedData } from "utils";
import { YT_API_URL } from "utils/constants";

const API_KEY = process.env.REACT_APP_YT_API_KEY;

export const getRecommendedVideos = createAsyncThunk(
  "ytApp/getRecommendedVideos",
  async (videoId: string, { getState }) => {
    const {
      ytApp: {
        currentPlaying: {
          channelInfo: { id: channelId }
        }
      }
    } = getState() as RootState;

    const {
      data: { items }
    } = await axios.get(
      `${YT_API_URL}/activities?key=${API_KEY}&channelId=${channelId}&part=snippet,contentDetails&maxResults=20&type=video&video&videoId=${videoId}`
    );

    const parsedData: RecommendedVideos[] = await parseRecommendedData(
      items,
      videoId
    );

    return { parsedData };
  }
);
