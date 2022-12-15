import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { HomePageVideos } from "Types";
import useWindowWidth from "utils/useWindowWidth";

const SearchCardMobile = ({ data }: { data: HomePageVideos }) => {
  return (
    <div className="flex-center flex-col gap-3">
      <div className="relative w-full h-full">
        {data.videoDuration.includes("P") ? (
          <span className="absolute bottom-1 right-1 text-sm bg-[#B90101] px-2 py-0.5 z-10 rounded-lg">
            LIVE
          </span>
        ) : (
          <span className="absolute bottom-1 right-1 text-sm bg-gray-900 px-2 py-0.5 z-10 rounded-lg">
            {data.videoDuration}
          </span>
        )}
        <Link to={`/watch/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            className="w-full object-cover rounded-xl"
            alt="thumbnail"
          />
        </Link>
      </div>
      <div className="flex-between gap-4">
        <div className="min-w-fit my-auto ml-4 mr-3">
          <a href="#" className="flex items-center gap-2 text-xs text-gray-400">
            <img
              src={data.channelInfo.image}
              alt="channel"
              className="h-9 w-9 rounded-full"
            />
          </a>
        </div>

        <div className="flex flex-col">
          <h4 className="leading-tight">
            <a href="#" className="line-clamp-2">
              {data.videoTitle}
            </a>
          </h4>
          <div className="text-xs text-[#979797] line-clamp-2">
            <span className="after:content-['•'] after:mx-1">
              {data.channelInfo.name}
            </span>
            <span className="after:content-['•'] after:mx-1">
              {data.videoViews} views
            </span>
            <span>{data.videoAge}</span>
          </div>
        </div>
        <button className="text-2xl">
          <BsThreeDotsVertical />
        </button>
      </div>
    </div>
  );
};

const SearchCardDesktop = ({ data }: { data: HomePageVideos }) => {
  return (
    <div className="flex gap-6">
      <div className="relative">
        <span className="absolute bottom-3 right-3 text-sm bg-gray-900 px-2 py-0.5 z-10">
          {data.videoDuration}
        </span>
        <Link to={`/watch/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            className="h-52 w-96 rounded-xl"
            alt="thumbnail"
          />
        </Link>
      </div>
      <div className="flex gap-1 flex-col">
        <h3 className="max-w-2xl">
          <a href="#" className="line-clamp-2">
            {data.videoTitle}
          </a>
        </h3>
        <div className="text-xs text-[#979797]">
          <div>
            <div>
              <span className="after:content-['•'] after:mx-1">
                {data.videoViews} views
              </span>
              <span>{data.videoAge}</span>
            </div>
          </div>
        </div>
        <div className="min-w-fit my-2">
          <a href="#" className="flex items-center gap-2 text-xs">
            <img
              src={data.channelInfo.image}
              alt="channel"
              className="h-9 w-9 rounded-full"
            />
            <span>{data.channelInfo.name}</span>
          </a>
        </div>
        <div className="max-w-2xl line-clamp-2 text-sm text-[#979797]">
          <p>{data.videoDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default function SearchCard({ data }: { data: HomePageVideos }) {
  const width = useWindowWidth();
  const isMobile = width < 540;

  return isMobile ? (
    <SearchCardMobile data={data} />
  ) : (
    <SearchCardDesktop data={data} />
  );
}
