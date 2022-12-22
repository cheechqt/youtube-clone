import { BiLike, BiDislike } from "react-icons/bi";
import { HiScissors } from "react-icons/hi";
import { FaShare } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { CurrentPlaying } from "Types";

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

export default function WatchInfoBelow({ data }: { data: CurrentPlaying }) {
  return (
    <div className="mt-5">
      <h3 className="text-2xl font-medium">{data.videoTitle}</h3>
      <div className="flex-start lg:flex-between flex-col gap-y-3 lg:flex-row mt-3">
        <div className="flex-start w-full gap-x-3 lg:mr-6">
          <div>
            <img
              className="rounded-full w-12"
              alt="channel logo"
              src={data.channelInfo.image}
            />
          </div>
          <div>
            <p className="font-medium line-clamp-1">{data.channelInfo.name}</p>
            <p className="text-sm text-[#AAAAAA]">
              {data.channelInfo.subscribers} subscribers
            </p>
          </div>
          <button className="bg-white hover:bg-[#D9D9D9] text-black rounded-full h-10 px-4 py-1.5 font-medium">
            Subscribe
          </button>
        </div>
        <div className="flex gap-x-4 w-full">
          <div className="flex">
            <button className="relative flex gap-x-2 bg-[#272727] hover:bg-[#3F3F3F] rounded-l-full py-2.5 px-4 after:absolute after:right-0 after:top-[20%] after:h-[60%] after:border-r after:border-r-[#3D3D3D]">
              <BiLike className="text-xl" />
              <strong>{data.videoLikes}</strong>
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
  );
}
