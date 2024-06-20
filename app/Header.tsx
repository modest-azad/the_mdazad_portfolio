import { Button, Image } from "@nextui-org/react";
import { FiLinkedin } from "react-icons/fi";
import { MdWavingHand } from "react-icons/md";
import { PiFileHtml, PiFileCss } from "react-icons/pi";
import { SiJavascript, SiTailwindcss } from "react-icons/si";

import { RiNextjsLine } from "react-icons/ri";
import { SiNextui } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { SiWindows11 } from "react-icons/si";
import {
  FaNodeJs,
  FaFigma,
  FaGitAlt,
  FaPhp,
  FaReact,
  FaLinux,
  FaGithub,
} from "react-icons/fa";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAndroidstudio } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FcLink } from "react-icons/fc";
import { FaGlobe } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <Introduction />
      <Skills />
      <Projects />
      <Gallery />
    </>
  );
}

export function Introduction() {
  return (
    <>
      <center className="heroSection px-[5%] py-16 w-full ">
        <div className="heroContents ">
          <h3 className="my-5 text-2xl md:text-4xl md:w-[60%] text-gray-500 leading-snug">
            <MdWavingHand />
            Hello, <br /> I&apos;m{" "}
            <span className="underline outline-current">azad</span>, working as
            an{" "}
            <span className="underline outline-current text-blue-500">
              ui/ux designer
            </span>{" "}
            and{" "}
            <span className="underline text-blue-500">frontend developer</span>{" "}
            since last 2 years along with the hobby of photography.
          </h3>
          <a className="font-bold mt-4" href="#">
            <Button
              variant="flat"
              color="primary"
              radius="full"
              size="lg"
              startContent={<FiLinkedin />}
            >
              Linkedin
            </Button>
          </a>
        </div>
      </center>
    </>
  );
}

export function Skills() {
  return (
    <>
      <div id="skills" className="heroSection px-[5%] py-16 w-full ">
        <span className=" border-b-2 outline-current text-3xl text-blue-500 text-left">
          Skills
        </span>

        <div className="skillsGrid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-4">
          <div className="col1">
            <h3 className="text-gray-500">Languages</h3>
            <div className="SkillsIcons text-5xl grid grid-cols-5 gap-4 my-4">
              <PiFileHtml className="hover:text-orange-700" />{" "}
              <PiFileCss className="hover:text-sky-700" />{" "}
              <SiJavascript className="hover:text-yellow-500" /> <FaPhp />{" "}
              <SiMysql /> <TbBrandCpp />
            </div>
          </div>
          <div className="col2">
            <h3 className="text-gray-500">Libraries/Frameworks</h3>
            <div className="SkillsIcons text-5xl grid grid-cols-5 gap-4 my-4">
              <SiTailwindcss /> <FaNodeJs /> <FaReact /> <RiNextjsLine />{" "}
              <SiNextui />
            </div>
          </div>
          <div className="col3">
            <h3 className="text-gray-500">Tools</h3>
            <div className="SkillsIcons text-5xl grid grid-cols-5 gap-4 my-4">
              <FaGitAlt /> <FaGithub />{" "}
              <VscVscode className="hover:text-sky-500" />{" "}
              <SiAndroidstudio className="hover:text-green-500" /> <FaFigma />{" "}
              <SiAdobephotoshop className="hover:text-sky-700" />{" "}
              <SiAdobeillustrator />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export function Projects() {
  return (
    <>
      <div id="skills" className="heroSection px-[5%] py-6 w-full ">
        <span className=" border-b-2 outline-current text-3xl text-blue-500 text-left">
          Projects
        </span>

        <div className="skillsGrid grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          {[
            "/thumbnails/Designer (3).jpeg",
            "/thumbnails/Designer.jpeg",
            "/thumbnails/game1.jpg",
            "/thumbnails/portfolio.jpg",
          ].map((item, index: any) => {
            return (
              <div
                key={index}
                className="bg-gray-500/15 p-2 rounded-xl grid grid-cols-3"
              >
                <Image
                  src={item}
                  alt="azad photo"
                  className="object-cover w-full h-full rounded-lg"
            
                />
                <div className="col-span-2 flex flex-col gap-2 card-content p-3 w-full">
                  <span>
                    <p className="text-sm text-zinc-500">Project Tittle</p>
                    <h2 className="text-sm ">Collezian</h2>
                  </span>
                  <span>
                    <p className="text-sm text-zinc-500">Features</p>
                    <h2 className="text-sm ">Responsive, Dynamic</h2>
                  </span>

                  <span>
                    <p className="text-sm text-zinc-500">
                      Languages/Frameworks
                    </p>
                    <h2 className="text-sm">
                      Node.js | Next.js | Tailwind CSS | Express | NextUI
                    </h2>
                  </span>
                  <span>
                  <Button
                      variant="light"
                      color="primary"
                      radius="full"
                      size="md"
                      startContent={<FaGithub />}
                    >
                      Code
                    </Button>
                    <Button
                      variant="light"
                      color="primary"
                      radius="full"
                      size="sm"
                      startContent={<FaGlobe />}
                    >
                      Demo
                    </Button>
                    

                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export function Gallery() {
  return (
    <>
      <div id="skills" className="heroSection px-[5%] py-6 w-full ">
        <span className=" border-b-2 outline-current text-3xl text-blue-500 text-left">
          Gallery
        </span>

        <div className="skillsGrid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 my-4">
          {["/thumbnails/Designer (3).jpeg", "/thumbnails/Designer.jpeg"].map(
            (item, index: any) => {
              return (
                <Image
                  key={index}
                  src={item}
                  alt="azad photo"
                  className="mx-auto md:flex hidden"
                  radius="none"
                />
              );
            }
          )}
        </div>
      </div>
    </>
  );
}
