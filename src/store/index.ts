import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "Types";
import { getHomePageVideos } from "store/reducers/getHomePageVideos";
import { getSearchPageVideos } from "store/reducers/getSearchPageVideos";
import { getVideoDetails } from "./reducers/getVideoDetails";
import { getRecommendedVideos } from "./reducers/getRecommendedVideos";

const initialState: InitialState = {
  videos: [],
  currentPlaying: null,
  searchTerm: "",
  searchResults: [],
  nextPageToken: null,
  recommendedVideos: [],
  isSidebarOpen: false,
  isSmallSearchbarOpen: false
};

const YoutubeSlice = createSlice({
  name: "ytApp",
  initialState,
  reducers: {
    clearVideos: (state) => {
      state.videos = [];
      state.nextPageToken = null;
    },
    changeSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    toggleSmallSearchbar: (state) => {
      state.isSmallSearchbarOpen = !state.isSmallSearchbarOpen;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getHomePageVideos.fulfilled, (state, action) => {
      state.videos = action.payload.parsedData;
      state.nextPageToken = action.payload.nextPageToken;
    });
    builder.addCase(getSearchPageVideos.fulfilled, (state, action) => {
      state.videos = action.payload.parsedData;
      state.nextPageToken = action.payload.nextPageToken;
    });
    builder.addCase(getVideoDetails.fulfilled, (state, action) => {
      state.currentPlaying = action.payload;
    });
    builder.addCase(getRecommendedVideos.fulfilled, (state, action) => {
      state.recommendedVideos = action.payload.parsedData;
    });
  }
});

export const store = configureStore({
  reducer: {
    ytApp: YoutubeSlice.reducer
  }
});

export const {
  clearVideos,
  changeSearchTerm,
  toggleSidebar,
  toggleSmallSearchbar
} = YoutubeSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
