import Logo from "components/Logo";
import { useState } from "react";

import { BiUserCircle } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const [isSmallScreenSearchOpen, setIsSmallScreenSearchOpen] = useState(false);
  return (
    <div className="flex-between px-4 py-2 bg-[#0F0F0F] opacity-95 sticky top-0 z-30 text-white text-2xl">
      {!isSmallScreenSearchOpen ? (
        <>
          <div className="flex-center gap-2 xl:mr-12 mr-24">
            <button className="flex-center p-2 rounded-full hover:bg-zinc-700">
              <GiHamburgerMenu />
            </button>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <SearchBar
            isSmallScreenSearchOpen={isSmallScreenSearchOpen}
            setIsSmallScreenSearchOpen={setIsSmallScreenSearchOpen}
          />
          <div className="flex-center gap-2.5">
            <button className="p-2">
              <BsThreeDotsVertical />
            </button>
            <button className="flex-center gap-1 text-blue-500 whitespace-nowrap border border-[#2e2e2e] rounded-3xl pl-2 py-1.5 pr-3">
              <BiUserCircle />
              <span className="text-sm">Sign In</span>
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
}
