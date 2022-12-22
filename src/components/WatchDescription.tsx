import { useState } from "react";
import { CurrentPlaying } from "Types";

export default function WatchDescription({ data }: { data: CurrentPlaying }) {
  const [showMoreStatus, setShowMoreStatus] = useState<boolean>(false);

  return (
    <div
      className={`bg-[#272727] p-2 rounded-xl mt-3 ${
        !showMoreStatus && "hover:bg-[#3F3F3F] cursor-pointer"
      }`}
      onClick={() => (!showMoreStatus ? setShowMoreStatus(true) : "")}
    >
      <div
        className={`${
          !showMoreStatus ? "max-h-12 overflow-hidden" : ""
        } text-sm w-11/12`}
      >
        <div className="font-bold">
          <span className="after:content-['•'] after:mx-1">
            {data.videoViews}
          </span>
          <span>{data.videoAge} ago</span>
        </div>
        <pre
          style={{
            fontFamily: `"Roboto", sans-serif`
          }}
          className="whitespace-pre-wrap"
        >
          {data.videoDescription}
        </pre>
      </div>
      <div>
        <button
          className="font-semibold text-sm cursor-pointer"
          onClick={() => setShowMoreStatus(!showMoreStatus)}
        >
          Show {showMoreStatus ? "less" : "more"}
        </button>
      </div>
    </div>
  );
}
