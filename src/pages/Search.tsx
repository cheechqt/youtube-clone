import SearchCard from "components/SearchCard";
import Spinner from "components/Spinner";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import { clearVideos } from "store";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getSearchPageVideos } from "store/reducers/getSearchPageVideos";
import { HomePageVideos } from "Types";

export default function Search() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.ytApp.videos);
  const searchTerm = useAppSelector((state) => state.ytApp.searchTerm);

  useEffect(() => {
    dispatch(clearVideos());
    if (searchTerm === "") navigate("/");
    else {
      dispatch(getSearchPageVideos(false));
    }
  }, [dispatch, navigate, searchTerm]);

  return (
    <div className="flex">
      {videos.length ? (
        <div className="pb-8 pl-8 flex flex-col gap-5 w-full">
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getSearchPageVideos(true))}
            hasMore={videos.length < 500}
            loader={<Spinner />}
            style={{ height: "86vh" }}
          >
            {videos.map((item: HomePageVideos) => {
              return (
                <div className="py-3 pr-3">
                  <SearchCard data={item} key={item.videoId} />
                </div>
              );
            })}
          </InfiniteScroll>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
