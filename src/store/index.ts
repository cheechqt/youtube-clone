import { configureStore, createSlice } from "@reduxjs/toolkit";
import { InitialState } from "Types";
import { getHomePageVideos } from "store/reducers/getHomePageVideos";

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
  }
});

export const store = configureStore({
  reducer: {
    ytApp: YoutubeSlice.reducer
  }
});

export const { clearVideos, toggleSidebar, toggleSmallSearchbar } =
  YoutubeSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
