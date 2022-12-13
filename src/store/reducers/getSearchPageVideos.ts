import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "store";
import { HomePageVideos } from "Types";
import { parseData } from "utils";
import { YT_API_URL } from "utils/constants";

const API_KEY = process.env.REACT_APP_YT_API_KEY;

export const getSearchPageVideos = createAsyncThunk(
  "ytApp/searchPageVideos",
  async (isNext: boolean, { getState }) => {
    const {
      ytApp: { nextPageToken: nextPageTokenFromState, videos, searchTerm }
    } = getState() as RootState;

    const {
      data: { items, nextPageToken }
    } = await axios.get(
      `${YT_API_URL}/search?q=${searchTerm}&key=${API_KEY}&part=snippet&type=video&${
        isNext ? `pageToken=${nextPageTokenFromState}` : ""
      }`
    );

    const parsedData: HomePageVideos[] = await parseData(items);
    return { parsedData: [...videos, ...parsedData], nextPageToken };
  }
);
