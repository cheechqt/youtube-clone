import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getRecommendedVideos } from "store/reducers/getRecommendedVideos";
import { getVideoDetails } from "store/reducers/getVideoDetails";
import WatchCard from "components/WatchCard";
import { BiLike, BiDislike } from "react-icons/bi";
import { HiScissors } from "react-icons/hi";
import { FaShare } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

interface BlackButtonProps {
  children: React.ReactNode;
  classes?: string;
}

const BlackButton = ({ children, classes }: BlackButtonProps) => {
  return (
    <button
      className={`flex-center gap-x-2 bg-[#272727] hover:bg-[#3F3F3F] rounded-full p-2.5 ${classes}`}
    >
      {children}
    </button>
  );
};

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
  console.log(currentPlaying.videoDescription);
  return (
    <>
      {currentPlaying && currentPlaying?.videoId === id && (
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
          <div className="mt-5">
            <h3 className="text-2xl font-medium">
              {currentPlaying.videoTitle}
            </h3>
            <div className="flex-between mt-3">
              <div className="flex-center gap-x-3 mr-6">
                <div>
                  <img
                    className="rounded-full w-14"
                    alt="channel logo"
                    src={currentPlaying.channelInfo.image}
                  />
                </div>
                <div>
                  <p className="font-medium line-clamp-1">
                    {currentPlaying.channelInfo.name}
                  </p>
                  <p className="text-sm text-[#AAAAAA]">
                    {currentPlaying.channelInfo.subscribers} subscribers
                  </p>
                </div>
                <button className="bg-white hover:bg-[#D9D9D9] text-black rounded-full h-10 px-4 py-1.5 font-medium">
                  Subscribe
                </button>
              </div>
              <div className="flex gap-x-4">
                <div className="flex">
                  <button className="relative flex gap-x-2 bg-[#272727] hover:bg-[#3F3F3F] rounded-l-full py-2.5 px-4 after:absolute after:right-0 after:top-[20%] after:h-[60%] after:border-r after:border-r-[#3D3D3D]">
                    <BiLike className="text-xl" />
                    <strong>{currentPlaying.videoLikes}</strong>
                  </button>
                  <button className="flex gap-x-2 bg-[#272727] hover:bg-[#3F3F3F] rounded-r-full p-2.5 px-4">
                    <BiDislike className="text-xl" />
                  </button>
                </div>
                <BlackButton classes="px-4">
                  <FaShare className="text-xl" />
                  <strong>Share</strong>
                </BlackButton>
                <BlackButton classes="px-4">
                  <HiScissors className="text-xl" />
                  <strong>Clip</strong>
                </BlackButton>
                <BlackButton>
                  <BsThreeDots className="text-xl" />
                </BlackButton>
              </div>
            </div>
          </div>
          <div
            className={`${
              !showMoreStatus ? "max-h-16 overflow-hidden" : ""
            } text-sm w-11/12`}
          >
            <pre
              style={{
                fontFamily: `"Roboto", sans-serif`
              }}
              className="whitespace-pre-wrap"
            >
              {currentPlaying.videoDescription}
            </pre>
          </div>
          <div>
            <button
              className="uppercase text-sm cursor-pointer"
              onClick={() => setShowMoreStatus(!showMoreStatus)}
            >
              Show {showMoreStatus ? "less" : "more"}
            </button>
          </div>
          <div className="mr-24 flex flex-col gap-3">
            {getRecommendedVideos.length &&
              recommendedVideos.map((item) => {
                return <WatchCard data={item} key={item.videoId} />;
              })}
          </div>
        </div>
      )}
    </>
  );
}
