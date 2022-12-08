import { useEffect } from "react";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getHomePageVideos } from "store/reducers/getHomePageVideos";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "components/Spinner";
import Card from "components/Card";
import { HomePageVideos } from "Types";
import { clearVideos } from "store";

export default function Home() {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.ytApp.videos);

  useEffect(() => {
    return () => {
      dispatch(clearVideos());
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);

  return (
    <div className="max-h-screen overflow-hidden">
      <Navbar />
      <div className="flex h-full overflow-hidden">
        {videos.length ? (
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getHomePageVideos(true))}
            hasMore={videos.length < 500}
            loader={<Spinner />}
            height={650}
          >
            <div className="grid gap-y-14 grid-cols-1 p-8 w-full">
              {videos.map((item: HomePageVideos) => {
                console.log(item);
                return <Card data={item} key={item.videoId} />;
              })}
            </div>
          </InfiniteScroll>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}
