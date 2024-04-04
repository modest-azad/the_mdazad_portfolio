'use client'
import Image from "next/image"
import { useState } from "react";

const data = [
    {
        tittle: "TechKitiz UI",
        subtittle: "designing",
        link: "https://the-mdazad.vercel.app/",
        image: "/Graphic.png",
    },
    {
        tittle: "TechKitiz UI",
        subtittle: "development",
        link: "https://techkshitiz.onrender.com/",
        image: "/Graphic.png",
    },
    {
        tittle: "TechKitiz UI",
        link: "https://the-mdazad.vercel.app/",
        image: "/Graphic.png",
    },
    
    
]

export default function Project() {
    const [currentData, setData] = useState(data);

    return (
        <div className="p-[5%] w-full ">
            <span className="tittle">
                <p className="text-sm text-zinc-600">CASE STUDYS</p>
                <h2 className="text-2xl font-bold">My Projects</h2>
            </span>

            <span className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-6">
                {
                    data.map((currentData) => {
                        return (
                            <div key={1} className="transition duration-300 bg-gray-100 rounded-lg overflow-hidden aspect-[4/3] w-full">
                                <div className="relative h-full bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                                    <div className=" absolute inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center flex-col opacity-0 hover:opacity-100 transition duration-300">
                                        <h2 className="text-white text-lg font-semibold">{currentData.tittle}</h2>
                                        <span className="flex">
                                        <a className="text-white text-sm m-2" href="#">
                                            <Image src="/icons/link.png" alt="icon" width={30} height={30}/>
                                        </a>                                        
                                        <a className="text-white  text-sm m-2" href="#">
                                            <Image src={(currentData.subtittle === "development")? "/icons/github.png" : "/icons/figma.png"} alt="icon" width={30} height={30}/>
                                        </a>                                        
                                        </span>
                                            
                                    </div>
                                    <div >
                                        {/* <p>Card content goes here.</p> */}
                                        <Image className="w-full" src={currentData.image} alt="image" width={500} height={500} />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </span>
        </div>
    )

}