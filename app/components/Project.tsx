import Image from "next/image"
export default function Project() {

    return (
        <div className="p-[5%] w-full ">
            <span className="tittle">
                <p className="text-sm text-zinc-600">CASE STUDYS</p>
                <h2 className="text-2xl font-bold">My Projects</h2>
            </span>

            <span className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-6">
                <div className="grayscale-0 hover:grayscale transition duration-300 bg-gray-100 rounded-lg overflow-hidden aspect-[1/1] w-full">
                    <div className="relative h-full bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                            <h2 className="text-white text-lg font-semibold">Card Title</h2>
                        </div>
                        <div >
                            {/* <p>Card content goes here.</p> */}
                            <Image className="w-full" src="/flower1.jpg" alt="image" width={50} height={50} />
                        </div>
                    </div>
                </div>
                <div className="grayscale-0 hover:grayscale transition duration-300 bg-gray-100 rounded-lg overflow-hidden aspect-[1/1] w-full">
                    <div className="relative h-full bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                            <h2 className="text-white text-lg font-semibold">Card Title</h2>
                        </div>
                        <div >
                            {/* <p>Card content goes here.</p> */}
                            <Image className="w-full" src="/flower.jpg" alt="image" width={50} height={50} />
                        </div>
                    </div>
                </div>
                <div className="grayscale-0 hover:grayscale transition duration-300 bg-gray-100 rounded-lg overflow-hidden aspect-[1/1] w-full">
                    <div className="relative h-full bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                            <h2 className="text-white text-lg font-semibold">Card Title</h2>
                        </div>
                        <div >
                            {/* <p>Card content goes here.</p> */}
                            <Image className="w-full" src="/HeroImage.png" alt="image" width={50} height={50} />
                        </div>
                    </div>
                </div>
                <div className="grayscale-0 hover:grayscale transition duration-300 bg-gray-100 rounded-lg overflow-hidden aspect-[1/1] w-full">
                    <div className="relative h-full bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                            <h2 className="text-white text-lg font-semibold">Card Title</h2>
                        </div>
                        <div >
                            {/* <p>Card content goes here.</p> */}
                            <Image className="w-full" src="/ramadan.jpg" alt="image" width={40} height={40} />
                        </div>
                    </div>
                </div>
            </span>
        </div>
    )

}