import Logo from "components/Logo";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useAppDispatch } from "store/hooks";
import SearchBar from "./SearchBar";
import { toggleSidebar } from "store";

export default function Navbar() {
  const dispatch = useAppDispatch();

  const handleToggleSidebar = () => dispatch(toggleSidebar());

  return (
    <div className="flex-between px-4 py-2 bg-[#0F0F0F] opacity-95 sticky top-0 z-30 text-white text-2xl">
      <div className="flex-center gap-2 md:mr-12 mr-auto">
        <button
          className="flex-center p-2 rounded-full hover:bg-zinc-700"
          onClick={handleToggleSidebar}
        >
          <GiHamburgerMenu />
        </button>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <SearchBar />
      <div className="flex-center gap-2.5">
        <button className="p-2">
          <BsThreeDotsVertical />
        </button>
        <button className="pl-2 pr-4 w-[58px]">
          <img
            className="rounded-full"
            src="https://picsum.photos/200"
            alt="avatar"
          />
        </button>
      </div>
    </div>
  );
}
