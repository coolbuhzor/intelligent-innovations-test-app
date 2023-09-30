import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const NavLink = (props: {
  name: string;
  href: string;
  slug?: string;
}) => {
  const pathName = usePathname();

  return (
    <div
      className={`relative w-full text-base pl-4 py-2 transition  ${
        pathName === `${props.href}`
          ? "font-medium text-[#2B2B2B] border rounded-md"
          : "font-medium text-[#aaa]"
      }`}
    >
      <Link href={props.href}>{props.name}</Link>
    </div>
  );
};
