import Link from "next/link";
import React from "react";
import { HeaderDropdown } from "./header-drop-down";
import { useSearch } from "@/context/search-context";
import { SearchIcon } from "@/assets/svg";

const Header = (props: any) => {
  const { searchQuery, setSearch } = useSearch();
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <header className="sticky top-0 z-[10] flex w-full bg-white border-b border-[#B7B3BF] drop-shadow-1 ">
      <div className="flex flex-grow sm:items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11 flex-col sm:flex-row items-start">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            aria-expanded={props.sidebarOpen}
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-10 block rounded-sm border bg-white p-1.5 shadow-sm lg:hidden"
          >
            {/* <Hamburger /> */}- - -
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link className="block flex-shrink-0 lg:hidden" href="/">
            home
          </Link>
        </div>

        <div className=" flex items-center gap-3 w-full justify-between ">
          <div className="flex py-2 w-full shadow-2xl border-[0.5px] rounded px-4">
            <div className="w-full relative flex ">
              <div className="w-10 h-full flex justify-center items-center relative ">
                <SearchIcon />
              </div>
              <input
                type="text"
                className="h-10 w-full outline-none"
                placeholder="Find something..."
                value={searchQuery}
                onChange={handleSearch}
              />
              <button className="px-4 py-2 bg-[#342C9A] rounded text-white font-medium">
                search
              </button>
            </div>
          </div>
          {/* <!-- User Area --> */}
          <HeaderDropdown />
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
