"use client";
import { useState } from 'react';
import Link from 'next/link';
import TextGradient from './TextGradient';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='sticky top-0 z-10 bg-white bg-opacity-30 backdrop-blur-lg '>
      <nav className=" border-gray-200 p-[5%] py-4">
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center mx-auto">
          <a href="https://instagram.com/@the_mdazad" className="flex items-center">
            <span className="self-center font-semibold whitespace-nowrap ">
              <Link href="./"><TextGradient text='Portfolio'/></Link>
              </span>
          </a>
          <div className="flex items-center lg:order-2">
            <button
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg  ring-2 ring-gray-200 dark:text-gray-400 hover:bg-zinc-200 "
              onClick={toggleMenu} // Add onClick event handler to toggle menu
              aria-expanded={isMenuOpen ? 'true' : 'false'} // Set aria-expanded attribute based on menu state
            >
              <span className="sr-only">Open main menu</span>
              <svg className={`w-6 h-6 ${isMenuOpen ? 'hidden' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
              </svg>
              <svg className={`w-6 h-6 ${isMenuOpen ? '' : 'hidden'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>

          <div className={`flex justify-end w-full ${isMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu-2"> {/* Add conditional class based on menu state */}
          <ul className="flex lg:justify-end items-center px-8 w-full flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
             
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 hover:text-blue-600  lg:hover:text-primary-700 lg:p-0 ">About</a>
              </li>
              <li>
                <Link href="./Project">Project</Link>
                {/* <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 hover:text-blue-600  lg:hover:text-primary-700 lg:p-0 ">Projects</a> */}
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 hover:text-blue-600  lg:hover:text-primary-700 lg:p-0 ">Contact me</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
