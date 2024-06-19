"use client";
import ThemeSwitch from "./ThemeSwitch";
import { Image } from "@nextui-org/react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import Link from "next/link";

let tabs = [
  {
    id: "About",
    navigate: "/",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "Skills",
    navigate: "Skills",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "Projects",
    navigate: "Projects",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  
  {
    id: "Gallery",
    navigate: "Gallery",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "Contact Me",
    navigate: "Contact_Me",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];


export default function NavigationBar() {
  
  return (
    <div className="flex sticky top-4 z-50 justify-between items-center overflow-x-auto py-4 w-full ">
      <Image
        src="/images/azadPhoto.jpg"  
        alt="azad photo"
        width={50}
        height={50}
        className="mx-auto md:flex hidden"
        radius="full"
      />

      <div className="p-3 rounded-3xl" style={{
  backdropFilter: 'blur(9.5px)',
  WebkitBackdropFilter: 'blur(9.5px)',
}}
      >
        {tabs.map((item) =><Link
          className="px-3  hover:border-b-2 hover:border-blue-600"
        key={item.id} href={`/${item.navigate}`} >{item.id}</Link>)

        }
      </div>
  
        <ThemeSwitch />

    </div>
  );
}
