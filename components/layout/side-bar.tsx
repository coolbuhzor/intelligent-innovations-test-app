import Link from "next/link";
import React, { useRef } from "react";
import { NavLink } from "./nav-link";

const routes = [
  {
    id: 1,
    href: "/",
    title: "Home",
  },
  {
    id: 2,
    href: "/message",
    title: "Message",
  },
  {
    id: 3,
    href: "/ranking",
    title: "Ranking",
  },
  {
    id: 4,
    href: "/challenge",
    title: "Challenge",
  },
  {
    id: 5,
    href: "/party",
    title: "Party",
  },
  {
    id: 6,
    href: "/connect",
    title: "Connect",
  },
  {
    id: 7,
    href: "/parade",
    title: "Parade",
  },
  {
    id: 8,
    href: "/group",
    title: "Group",
  },
];

const Sidebar = (props: ISideBarProps) => {
  const { setSidebarOpen, sidebarOpen } = props;
  const trigger = useRef<HTMLButtonElement>(null);
  const sidebar = useRef<HTMLElement>(null);

  return (
    <aside
      ref={sidebar}
      className={`absolute border left-0 top-0 z-[999] border-r shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex h-screen w-52 flex-col overflow-y-hidden bg-white duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex flex-col mt-9 justify-between gap-2 px-6 ">
        <p className="text-xl font-bold text-[rgb(77,59,211)]">BLUECUBE</p>
        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden text-primary border w-fit"
        >
          X
        </button>
      </div>

      {/* <!-- SIDEBAR HEADER --> */}

      <div className=" h-full flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-4 py-4 px-4 lg:mt-9 lg:px-6 flex flex-col justify-between h-full">
          <ul className="flex flex-col gap-2 w-full">
            {routes.slice(0, 2).map((item) => (
              <li key={item.id}>
                <NavLink href={item.href} name={item.title} />
              </li>
            ))}
            <li className="font-medium text-base">SHARE</li>
            {routes.slice(2, 8).map((item) => (
              <li key={item.id}>
                <NavLink href={item.href} name={item.title} />
              </li>
            ))}
          </ul>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
