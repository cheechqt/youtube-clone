import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getRecommendedVideos } from "store/reducers/getRecommendedVideos";
import { getVideoDetails } from "store/reducers/getVideoDetails";

export default function Watch() {
  const [showMoreStatus, setShowMoreStatus] = useState<boolean>(false);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentPlaying = useAppSelector((state) => state.ytApp.currentPlaying);
  const recommendedVideos = useAppSelector(
    (state) => state.ytApp.recommendedVideos
  );

  useEffect(() => {
    if (id) {
      dispatch(getVideoDetails(id));
      setShowMoreStatus(false);
    } else {
      navigate("/");
    }
  }, [id, navigate, dispatch]);

  useEffect(() => {
    if (currentPlaying && id) dispatch(getRecommendedVideos(id));
  }, [currentPlaying, dispatch, id]);

  return (
    <div className="h-full w-full px-4">
      <iframe
        width="100%"
        height="60%"
        src={`https:youtube.com/embed/${id}?autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
}
