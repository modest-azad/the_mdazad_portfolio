import Image from "next/image";
import project from "./components/Project";
import Project from "./components/Project";

export default function Homepage() {
  return (
    <>
      <div className=" px-[5%] w-full flex gap-6 max-sm:h-[70vh] ">
        <div className="self-center text-sm">
          <p>
            <i className="fi fi-rr-hand-wave"></i> MD AZAD
          </p>
          <h2 className="text-[48px] font-bold leading-tight ">
            Website and User Interface Designer
          </h2>
          <p className="my-5 text-zinc-600">
            I&apos;m a passionate Designer & Developer dedicated to crafting
            engaging and <br /> innovative digital experiences. Explore my work
            below and feel free to get in touch!
          </p>
          <a className="font-bold  text-blue-600" href="#">
            View about me
          </a>
        </div>
        <div className="hidden lg:flex justify-center ">
          {" "}
          <Image
            className="w-full mx-20"
            src="/HeroImage.png"
            alt="Image"
            width={900}
            height={900}
          />
        </div>
      </div>

      <div className="flex justify-center mt-[-64px] mb-4">
      <Image  src="/mouse.png" alt="mouse" width={50} height={50}/>
      </div>
        
     <Project/>

      {/* OUR SERVICE */}
      <div className="p-[5%] w-full ">
        <span className="tittle text-center">
          <p className="text-sm text-zinc-600">OUR SERVICES</p>
          <h2 className="text-2xl font-bold">What I Can Do For You!</h2>
        </span>

       
        <span className="cards grid  justify-center items-end  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
          <div  className="flex items-center flex-col">
            <Image src="/Graphic_designing.png" alt="image" width={200} height={200}/>
            <h3>Graphic Designing</h3>
            <p className="text-sm text-center">Crafting visually striking designs that effectively communicate messages and captivate audiences, showcasing expertise and creativity.</p>
          </div>
          <div className="flex items-center flex-col">
            <Image src="/UIUX.png" alt="image" width={250} height={250}/>
            <h3>UI/UX Designing</h3>
            <p className="text-sm text-center">Creating intuitive and visually engaging user interfaces, prioritizing user experience to deliver seamless and delightful interactions.</p>
          </div>
          <div className="flex items-center flex-col">
            <Image src="/development.png" alt="image" width={200} height={200}/>
            <h3>Web Development</h3>
            <p className="text-sm text-center">Building responsive, user-friendly websites with clean code and innovative design, enhancing digital experiences and functionality for seamless interaction.</p>
          </div>
        </span>
        
      </div>

      {/* OUR CLIENT */}
      <div className="p-[5%] w-full ">
        <span className="tittle text-center">
          <p className="text-sm text-zinc-600">HAPPY CLIENTS</p>
          <h2 className="text-2xl font-bold">I Have Worked For</h2>
        </span>

        <span className="cards grid  justify-center items-middle  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
           <a href="https://technical-website-1-0.onrender.com/" target="_blank">
             <Image className="w-full "  src="/TechKshitizLogo.png" alt="image" width={300} height={50}/>
            </a>         
          
        </span>
      </div>
    </>
  );
}
