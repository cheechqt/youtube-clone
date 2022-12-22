import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getRecommendedVideos } from "store/reducers/getRecommendedVideos";
import { getVideoDetails } from "store/reducers/getVideoDetails";
import WatchReccomendations from "components/WatchRecommendations";
import WatchInfoBelow from "components/WatchInfoBelow";
import WatchDescription from "components/WatchDescription";

export default function Watch() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentPlaying = useAppSelector((state) => state.ytApp.currentPlaying);

  useEffect(() => {
    if (id) {
      dispatch(getVideoDetails(id));
    } else {
      navigate("/");
    }
  }, [id, navigate, dispatch]);

  useEffect(() => {
    if (currentPlaying && id) dispatch(getRecommendedVideos(id));
  }, [currentPlaying, dispatch, id]);

  return (
    <>
      {currentPlaying && currentPlaying?.videoId === id && (
        <div className="h-full w-full px-4 overflow-scroll">
          <iframe
            width="100%"
            height="60%"
            src={`https:youtube.com/embed/${id}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <div className="flex flex-col lg:flex-row lg:gap-x-3">
            <div className="lg:w-2/3">
              <WatchInfoBelow data={currentPlaying} />
              <WatchDescription data={currentPlaying} />
            </div>
            {getRecommendedVideos.length && <WatchReccomendations />}
          </div>
        </div>
      )}
    </>
  );
}
