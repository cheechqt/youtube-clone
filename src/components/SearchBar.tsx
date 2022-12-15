import { useEffect } from "react";
import {
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineArrowLeft
} from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { useLocation, useNavigate } from "react-router-dom";
import { changeSearchTerm, clearVideos, toggleSmallSearchbar } from "store";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getSearchPageVideos } from "store/reducers/getSearchPageVideos";
import useWindowWidth from "utils/useWindowWidth";

const SearchBarInput = () => {
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.ytApp.searchTerm);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = () => {
    if (location.pathname !== "/search") {
      navigate("/search");
    } else {
      dispatch(clearVideos());
      dispatch(getSearchPageVideos(false));
    }
  };

  const handleToggleSmallSearchbar = () => dispatch(toggleSmallSearchbar());

  return (
    <form
      className="flex-center w-full"
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
        handleToggleSmallSearchbar();
      }}
    >
      <div className="flex-center text-3xl border border-[#2e2e2e] rounded-l-3xl py-1 h-full w-full max-w-[520px] group-focus-within:border-blue-500">
        <AiOutlineSearch className="hidden group-focus-within:block ml-4" />
        <input
          className="w-full bg-transparent outline-none appearance-none text-base py-1 pl-4"
          placeholder="Search"
          type="search"
          value={searchTerm}
          onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
        />
        {searchTerm && (
          <AiOutlineClose
            className="cursor-pointer mx-3 group-focus-within:scale-105"
            onClick={(e) => {
              e.preventDefault();
              dispatch(changeSearchTerm(""));
            }}
          />
        )}
      </div>
      <button
        type="submit"
        className="py-2 pl-5 pr-4 bg-[#222222] border-l-transparent border border-[#1e2e2e] rounded-r-3xl"
      >
        <AiOutlineSearch />
      </button>
    </form>
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
      {isSmallSearchbarOpen && isSmallScreen && (
        <div className="absolute z-[49] w-full flex flex-nowrap bg-[#0f0f0f] py-2 pr-8">
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
