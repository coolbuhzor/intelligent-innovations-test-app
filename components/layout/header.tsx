import Link from "next/link";
import React, { useState, useEffect } from "react";
import { HeaderDropdown } from "./header-drop-down";

const Header = (props: any) => {
  return (
    <header className="sticky top-0 z-[10] flex w-full bg-white border-b border-[#B7B3BF] drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
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
            {/* <img src={logo} alt="Logo" /> */}
            {/* Logo */}
            home
          </Link>
        </div>

        <div className=" flex items-center gap-3 2xsm:gap-7 self-end">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            {/* <!-- Dark Mode Toggler --> */}
            {/* <DarkModeSwitcher /> */}
            {/* <!-- Dark Mode Toggler --> */}

            {/* <!-- Notification Menu Area --> */}
            {/* <DropdownNotification /> */}
            {/* <!-- Notification Menu Area --> */}

            {/* <!-- Chat Notification Area --> */}
            {/* <DropdownMessage /> */}
            {/* <!-- Chat Notification Area --> */}
          </ul>

          {/* <!-- User Area --> */}
          <HeaderDropdown />
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
