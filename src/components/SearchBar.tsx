import {
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineArrowLeft
} from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { toggleSmallSearchbar } from "store";
import { useAppDispatch, useAppSelector } from "store/hooks";
import useWindowWidth from "utils/useWindowWidth";

const SearchBarInput = () => {
  return (
    <>
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
    </>
  );
};

const SearchBar = () => {
  const width = useWindowWidth();
  const dispatch = useAppDispatch();

  const isSmallScreen = width <= 850;

  const isSmallSearchbarOpen = useAppSelector(
    (state) => state.ytApp.isSmallSearchbarOpen
  );

  const handleToggleSmallSearchbar = () => dispatch(toggleSmallSearchbar());

  return (
    <>
      <div className="flex-center w-full">
        <div
          className={`flex-center group w-full ${!isSmallScreen && "mr-20"}`}
        >
          {!isSmallScreen ? (
            <SearchBarInput />
          ) : (
            <button
              onClick={handleToggleSmallSearchbar}
              className="ml-auto rounded-full p-2.5 hover:bg-[#303030]"
            >
              <AiOutlineSearch />
            </button>
          )}
          <div
            className={`ml-2 ${
              width <= 850 ? "bg-[#212121]" : "bg-[#181818] rounded-full"
            }`}
          >
            <button className="flex-start hover:bg-[#303030] rounded-full p-2.5">
              <TiMicrophone />
            </button>
          </div>
        </div>
      </div>
      {/*modal - small searchbar*/}
      {isSmallSearchbarOpen && (
        <div className="absolute z-[60] w-full flex flex-nowrap bg-[#0f0f0f] py-2 pr-8">
          <button
            onClick={handleToggleSmallSearchbar}
            className="rounded-full p-2.5 hover:bg-[#303030]"
          >
            <AiOutlineArrowLeft />
          </button>
          <div className="flex w-full ml-6">
            <SearchBarInput />
          </div>
          <div className="ml-2 bg-[#212121]">
            <button className="flex-start hover:bg-[#303030] rounded-full p-2.5">
              <TiMicrophone />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default SearchBar;
