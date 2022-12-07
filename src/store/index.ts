import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "Types";
import { getHomePageVideos } from "store/reducers/getHomePageVideos";

const initialState: InitialState = {
  videos: [],
  currentPlaying: null,
  searchTerm: "",
  searchResults: [],
  nextPageToken: null,
  recommendedVideos: []
};

const YoutubeSlice = createSlice({
  name: "ytApp",
  initialState,
  reducers: {
    clearVideos: (state) => {
      state.videos = [];
      state.nextPageToken = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getHomePageVideos.fulfilled, (state, action) => {
      state.videos = action.payload.parsedData;
      state.nextPageToken = action.payload.nextPageToken;
    });
  }
});

export const store = configureStore({
  reducer: {
    ytApp: YoutubeSlice.reducer
  }
});

export const { clearVideos } = YoutubeSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
