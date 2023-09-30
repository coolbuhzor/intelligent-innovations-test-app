import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { Caret, Notification } from "@/assets/svg";

const dropDownItems = [
  {
    name: "Business Profile",
    link: "/dashboard/business",
    id: 1,
  },
  {
    name: "Change Password",
    link: "/dashboard/change-password",
    id: 2,
  },
];
export const HeaderDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: any) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  return (
    <div className="relative w-[150px]">
      <div
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex gap-4 items-center w-full justify-between "
      >
        <div>
          <Notification />
        </div>
        <div className="h-14 w-14 rounded-full border"></div>

        <Caret className="stroke-[#342C9A]" />
      </div>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        className={`absolute right-0 mt-4 flex w-[200px] flex-col rounded-sm border bg-white shadow-default  ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7 border border-red-500 ">
          {dropDownItems.map((item) => (
            <li key={item.id}>
              <div className="flex items-center gap-2 font-[450] duration-300 ease-in-out hover:text-[#FFA400] text-primary text-sm">
                {/* {item.icon} */}
                {item.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  );
};
