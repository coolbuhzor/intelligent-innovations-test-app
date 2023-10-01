import React, { useState } from "react";
import Link from "next/link";
import { HeaderDropdown } from "./header-drop-down";
import { useData } from "@/context/search-context";
import { Hamburger, SearchIcon } from "@/assets/svg";

const Header = (props: ISideBarProps) => {
  const { setSearch } = useData();
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    setSearch(query);
  };
  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    const value = e.target.value;
    if (value === "") {
      setSearch("");
    }
    setQuery(e.target.value);
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
            className="z-10 block rounded-sm border bg-white shadow-sm lg:hidden w-9"
          >
            <Hamburger />
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link className="block flex-shrink-0 lg:hidden" href="/">
            <p className="text-xl font-bold text-[rgb(77,59,211)]">BLUECUBE</p>
          </Link>
        </div>

        <div className=" flex flex-col sm:flex-row items-center gap-3 w-full justify-between md:pl-2 lg:pl-[unset] ">
          <div className="flex py-1 w-full shadow-2xl mt-2 sm:mt-[unset] border-[0.5px] rounded px-4">
            <div className="w-full relative flex ">
              <div className="w-10 h-full flex justify-center items-center relative ">
                <SearchIcon />
              </div>
              <input
                type="text"
                className="h-10 w-full outline-none"
                placeholder="Find something..."
                value={query}
                onChange={(e) => handleChange(e)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    // Call your search function here
                    handleSearch();
                  }
                }}
              />
              <button
                onClick={handleSearch}
                className="px-4 py-1 text-sm bg-[#342C9A] rounded text-white font-medium"
              >
                search
              </button>
            </div>
          </div>
          <HeaderDropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;
