import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getHomePageVideos } from "store/reducers/getHomePageVideos";

export default function Home() {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.ytApp.videos);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);

  return (
    <div className="max-h-screen overflow-hidden">
      <Navbar />
      <Sidebar />
    </div>
  );
}
