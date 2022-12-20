import { Link } from "react-router-dom";
import { RecommendedVideos } from "Types";

export default function WarchCard({ data }: { data: RecommendedVideos }) {
  return (
    <div className="flex">
      <div className="relative min-w-fit">
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
            className="h-24 w-40"
            alt="thumbnail"
          />
        </Link>
      </div>
      <div className="flex gap-1 flex-col">
        <h4 className="text-sm">
          <a href="#" className="hover:text-white">
            {data.videoTitle}
          </a>
        </h4>
        <div>
          <div>
            <a href="#" className="line-clamp-2">
              {data.channelInfo.name}
            </a>
          </div>
          <div>
            <span className="after:content-['•'] after:mx-1">
              {data.videoViews}
            </span>
            <span>{data.videoAge}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
