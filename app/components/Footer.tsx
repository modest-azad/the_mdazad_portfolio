export default function Footer() {
    return (
        <>
        <hr/>
        <div className=" text-zinc-600 p-[5%] text-sm w-full grid gap-6 grid-cols-4">
            <span className="col-span-4 lg:col-span-2 flex flex-col">
                <h3 className="font-bold my-2 text-zinc-800">GET INTOUCH</h3>
                <p>Campus of Government Engineering College, Siwan <br /> Bihar, India</p>
                <a><i className="fi fi-sr-envelope"></i> Collezian@gmail.com</a>
                <a><i className="fi fi-sr-phone-call"></i> +91 9576454472</a>

            </span>
            <span className="max-sm:col-span-2  flex flex-col text-center">
                <h3 className="font-bold my-2 text-zinc-800">FOLLOW ME ON</h3>
                <a>Instagram</a>
                <a>Twitter</a>
                <a>Linkedin</a>
            </span>
            <span className="max-sm:col-span-2  flex flex-col text-center">
                <h3 className="font-bold my-2 text-zinc-800">QUICK LINKS</h3>
                <a>About</a>
                <a>Projects</a>
                <a>Hire Me</a>
            </span>
            
        </div>
        </>

    )
}