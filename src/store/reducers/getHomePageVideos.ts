import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "store";
import { YT_API_URL } from "utils/constants";
import { parseData } from "utils";
import { HomePageVideos } from "Types";

const API_KEY = process.env.REACT_APP_YT_API_KEY;

export const getHomePageVideos = createAsyncThunk(
  "ytApp/homePageVideos",
  async (isNext: boolean, { getState }) => {
    const {
      ytApp: { nextPageToken: nextPageTokenFromState, videos }
    } = getState() as RootState;

    const {
      data: { items, nextPageToken }
    } = await axios.get(
      `${YT_API_URL}/search?maxResults=20&q="lofi music"&key=${API_KEY}&part=snippet&type=video`
    );
    console.log({ items, nextPageTokenFromState, nextPageToken });
    const parsedData: HomePageVideos[] = await parseData(items);
    return { parsedData: [...videos, ...parsedData], nextPageToken };
  }
);
