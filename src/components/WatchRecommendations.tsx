import WatchCard from "components/WatchCard";
import { useAppSelector } from "store/hooks";

export default function WatchReccomendations() {
  const recommendedVideos = useAppSelector(
    (state) => state.ytApp.recommendedVideos
  );
  return (
    <div className="mr-24 lg:mr-0 flex flex-col gap-3 mt-3 lg:mt-5 lg:w-1/3">
      {recommendedVideos.map((item) => {
        return <WatchCard data={item} key={item.videoId} />;
      })}
    </div>
  );
}
