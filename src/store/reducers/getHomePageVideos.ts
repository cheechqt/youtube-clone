import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "store";
import { YT_API_URL } from "utils/constans";
import { parseData } from "utils";

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
    const parsedData = await parseData(items);
  }
);
