import React, { useState, useRef, useEffect } from "react";
import { Caret, Notification } from "@/assets/svg";
import image from "@/assets/img/image.webp";
import image2 from "@/assets/img/img-2.webp";
import image3 from "@/assets/img/img-3.webp";
import Image from "next/image";

const dropDownItems = [
  {
    header: "Micheal Liked you",
    message: "About 20 minutes ago",
    id: 1,
    img: image,
  },
  {
    header: "Jack Liked you",
    message: "About 40 minutes ago",
    id: 2,
    img: image2,
  },
  {
    header: "Martins commented on your photo",
    message: "About 56 minutes ago",
    id: 3,
    img: image3,
  },
];
export const HeaderDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const trigger = useRef<HTMLDivElement>(null);
  const dropdown = useRef<HTMLDivElement>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: any) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger?.current?.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  return (
    <div className="relative w-full  sm:w-[150px] ">
      <div
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex justify-end gap-4 items-center w-full sm:justify-between "
      >
        <div>
          <Notification />
        </div>
        <div
          className="h-14 relative w-14 rounded-full border select-none"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={image}
            alt="profile image"
            fill
            className="rounded-full"
          />
        </div>

        <Caret
          className="stroke-[#342C9A]"
          onClick={(e: { stopPropagation: () => any }) => e.stopPropagation()}
        />
      </div>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        className={`absolute right-0 mt-4 flex w-[300px] flex-col bg-white rounded-md z-10 shadow-lg  ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-5 ">
          {dropDownItems.map((item, index) => (
            <section key={item.id}>
              <div
                className={`flex gap-2 font-[450] duration-300 ease-in-out px-3 py-2 hover:text-[#342C9A] text-sm  ${
                  index === dropDownItems.length - 1 ? "" : "border-b"
                }`}
              >
                <div className="h-7 w-7 rounded-full relative border">
                  <Image
                    src={item.img}
                    alt="profile picture"
                    fill
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p>{item.header}</p>
                  <p className="text-xs text-gray-400">{item.message}</p>
                </div>
              </div>
            </section>
          ))}
        </ul>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  );
};
