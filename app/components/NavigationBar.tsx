"use client";
import ThemeSwitch from "./ThemeSwitch";
import { Image } from "@nextui-org/react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
// React-icons
import { FaGithub } from "react-icons/fa";

export default function NavigationBar() {

 
  
  let tabs = [
    {
      id: "Introduction",
      label: "Introduction",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "Skills",
      label: "Skills",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "Projects",
      label: "Projects",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    
    {
      id: "Gallery",
      label: "Gallery",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "ContactMe",
      label: "Contact me",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <div className="flex sticky top-4 z-50 justify-between overflow-x-auto py-4 w-full ">
      <Image
        src="/images/azadPhoto.jpg"
        alt="azad photo"
        width={50}
        height={50}
        className="mx-auto md:flex hidden"
        radius="full"
      />

      <Tabs
        aria-label="Dynamic tabs"
        radius="full"
        color="primary"
        items={tabs}
      >
        {(item) =><Tab key={item.id} title={item.label} />

        }
      </Tabs>
  
        <ThemeSwitch />

    </div>
  );
}
