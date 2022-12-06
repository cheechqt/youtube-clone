import React, { useEffect } from "react";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getHomePageVideos } from "store/reducers/getHomePageVideos";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../components/Spinner";
import Card from "../components/Card";
import { HomePageVideos } from "../Types";

export default function Home() {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.ytApp.videos);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch, videos]);

  return (
    <div className="max-h-screen overflow-hidden">
      <Navbar />
      <Sidebar />
      {videos.length ? (
        <InfiniteScroll
          dataLength={videos.length}
          next={() => dispatch(getHomePageVideos(true))}
          hasMore={videos.length < 500}
          loader={<Spinner />}
          height={650}
        >
          <div className="grid gap-y-14 gap-x-8 grid-cols-4 p-8">
            {videos.map((item: HomePageVideos) => {
              return <Card data={item} key={item.videoId} />;
            })}
          </div>
        </InfiniteScroll>
      ) : (
        <Spinner />
      )}
      <Spinner />
    </div>
  );
}
