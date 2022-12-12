import { HomePageVideos } from "Types";
import { Link } from "react-router-dom";

export default function Card({ data }: { data: HomePageVideos }) {
  return (
    <div className="w-full h-full flex gap-3 flex-col mx-auto xs:max-w-[450px] md:max-w-full">
      <div className="relative">
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
            className="object-cover h-[210px] md:h-[160px] w-full rounded-xl"
            alt="thumbnail"
          />
        </Link>
      </div>
      <div className="flex gap-2">
        <div className="min-w-fit">
          <a href="#">
            <img
              src={data.channelInfo.image}
              alt="channel"
              className="h-9 w-9 rounded-full"
            />
          </a>
        </div>
        <div>
          <h3>
            <a href="#" className="line-clamp-2">
              {data.videoTitle}
            </a>
          </h3>
          <div className="text-sm text-gray-400 mt-2">
            <div>
              <a href="#" className="hover:text-white">
                {data.channelInfo.name}
              </a>
            </div>
            <div>
              <span className="after:content-['•'] after:mx-1">
                {data.videoViews} views
              </span>
              <span>{data.videoAge}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
