import Image from "next/image";
import Project from "./Project/page";
import { Button } from "@nextui-org/react";


export default function Header() {
  return (
    <>
      <center className="py-16 w-full gap-6  content-center ">
        
          <p>
            <i className="fi fi-rr-hand-wave"></i> I&apos;m Azad
          </p>
          <h2 className="text-5xl font-bold leading-tight ">
            UI Designer <br/> Front-end Developer
          </h2>
          <p className="my-5 text-gray-500">
            I&apos;m a passionate Designer & Developer dedicated to crafting
            engaging and <br /> innovative digital experiences. Explore my work
            below and feel free to get in touch!
          </p>
          <a className="font-bold" href="#">
           <Button variant="flat" color="primary">Linkedin</Button>
          </a>
    
        
      </center>
        

      {/* my interest */} 
      <div>
        <span className="tittle text-center">
          <p className="text-sm text-gray-500">MY INTERESTS</p>
          <h2 className="text-2xl font-bold">What I Love To Do </h2>
        </span>

       
        <span className="snap-x snap-mandatory cards flex items-end  overflow-y-hidden gap-8 my-4">
          <div  className="snap-center flex items-center flex-col min-w-[300px]">
            <Image src="/Graphic_designing.png" alt="image" width={200} height={200}/>
            <h3>Graphic Designing</h3>
            <p className="text-sm text-center text-gray-500">Crafting visually striking designs that effectively communicate messages and captivate audiences.</p>
          </div>
          <div className="snap-center flex items-center flex-col min-w-[300px]">
            <Image src="/UIUX.png" alt="image" width={200} height={200}/>
            <h3>UI/UX Designing</h3>
            <p className="text-sm text-center text-gray-500">Creating intuitive and visually engaging user interfaces, prioritizing user experience to deliver seamless and delightful interactions.</p>
          </div>
          <div className="snap-center flex items-center flex-col min-w-[300px]">
            <Image src="/development.png" alt="image" width={200} height={200}/>
            <h3>Web Development</h3>
            <p className="text-sm text-center text-gray-500">Building responsive, user-friendly websites with clean code and innovative features.</p>
          </div>
        </span>
        
      </div>

      {/* OUR CLIENT */}
      <div className="w-full py-6 my-12 bg-gray-100 rounded-3xl">
        <span className="tittle text-center">
          <p className="text-sm text-zinc-600">HAPPY CLIENTS</p>
          <h2 className="text-2xl font-bold">I Have Worked For</h2>
        </span>

        <span className="cards flex justify-center gap-4 my-6 ">
           <a className="max-w-[100px] bg-gray-200 rounded-full aspect-square flex content-center" href="https://techkshitiz.com/" target="_blank">
             <Image className="object-contain" src="/TechKshitizLogo.png" alt="image" width={300} height={50}/>
            </a>         
           <a className="max-w-[100px] bg-gray-200 rounded-full overflow-hidden aspect-square" href="https://techkshitiz.com/" target="_blank">
             <Image className="object-contain" src="/gecsiwan.jpg" alt="image" width={150} height={50}/>
            </a>         
          
        </span>
      </div>

      <Project/>
    </>
  );
}
