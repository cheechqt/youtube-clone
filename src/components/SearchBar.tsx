import { useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import useWindowWidth from "utils/useWindowWidth";

interface SearchBarProps {
  isSmallScreenSearchOpen: boolean;
  setIsSmallScreenSearchOpen: Function;
}

const SearchBar = (props: SearchBarProps) => {
  const { isSmallScreenSearchOpen, setIsSmallScreenSearchOpen } = props;
  const width = useWindowWidth();

  const toggleView = () => {
    setIsSmallScreenSearchOpen(!isSmallScreenSearchOpen);
  };
  console.log(isSmallScreenSearchOpen);

  if (width >= 850)
    return (
      <div className="flex-center w-full">
        <div className="flex-center group w-full mr-20">
          <div className="flex-center text-3xl border border-[#2e2e2e] rounded-l-3xl py-1 h-full w-full max-w-[520px] group-focus-within:border-blue-500">
            <AiOutlineSearch className="hidden group-focus-within:block ml-4" />
            <input
              className="w-full bg-transparent outline-none appearance-none text-base py-1 pl-4"
              placeholder="Search"
              type="search"
            />
            <AiOutlineClose className="cursor-pointer hidden group-focus-within:block mx-3" />
          </div>
          <div className="py-2 pl-5 pr-4 bg-[#222222] border-l-transparent border border-[#1e2e2e] rounded-r-3xl">
            <AiOutlineSearch />
          </div>
          <button className="flex-start bg-[#181818] hover:bg-[#303030] rounded-full p-2.5 ml-2">
            <TiMicrophone />
          </button>
        </div>
      </div>
    );

  return (
    <div className="w-full flex-end gap-x-1.5">
      <div className="flex-end">
        {isSmallScreenSearchOpen ? (
          <div className="flex-center w-full">
            <div className="flex-center group w-full mr-20">
              <div className="flex-center text-3xl border border-[#2e2e2e] rounded-l-3xl py-1 h-full w-full max-w-[520px] group-focus-within:border-blue-500">
                <AiOutlineSearch className="hidden group-focus-within:block ml-4" />
                <input
                  className="w-full bg-transparent outline-none appearance-none text-base py-1 pl-4"
                  placeholder="Search"
                  type="search"
                />
                <AiOutlineClose className="cursor-pointer hidden group-focus-within:block mx-3" />
              </div>
              <div className="py-2 pl-5 pr-4 bg-[#222222] border-l-transparent border border-[#1e2e2e] rounded-r-3xl">
                <AiOutlineSearch />
              </div>
              <button className="flex-start bg-[#181818] hover:bg-[#303030] rounded-full p-2.5 ml-2">
                <TiMicrophone />
              </button>
            </div>
          </div>
        ) : (
          <>
            <button
              onClick={toggleView}
              className="hover:bg-[#303030] rounded-full p-2.5"
            >
              <AiOutlineSearch />
            </button>
            <div className="bg-[#181818]">
              <button className="flex-start hover:bg-[#303030] rounded-full p-2.5">
                <TiMicrophone />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default SearchBar;
