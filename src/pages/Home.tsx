import { useEffect } from "react";
import Navbar from "components/Navbar";
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
    <div className="h-screen overflow-hidden">
      <Navbar />
      <div className="flex h-screen overflow-hidden">
        {videos.length ? (
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getHomePageVideos(true))}
            hasMore={videos.length < 500}
            loader={<Spinner />}
            style={{ height: "100vh" }}
          >
            <div className="grid gap-y-8 gap-x-6 grid-cols-1  md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 p-8 w-screen">
              {videos.map((item: HomePageVideos) => {
                // console.log(item);
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
