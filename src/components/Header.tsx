"use client"

import Link from "next/link"
import { useState } from "react";


const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Blog", link: "/blog" },
    { name: "About", link: "/about" },
  ];

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };



  return (
    <header className="bg-black p-3 shadow  fixed w-screen opacity-80"> 
    
    <div className="container mx-auto flex justify-between items-center">
    <div className="flex items-center">
    <div className=" relative w-0 h-0 border-l-[20px] border-r-[20px] border-t-[26px] 
    border-l-transparent border-r-transparent border-t-[#007580] rounded-full hover:opacity-50 cursor-pointer"/>
    
      <h1 className="pl-2 text-xl font-bold text-white hover:opacity-50 cursor-pointer">My Dynamic Blog</h1>
    
    </div>
      <ul className="lg:flex hidden">
      {navItems.map((item, i) => (
        <li key={i}>
          <Link href={item.link} className="font-semibold text-white px-4 hover:opacity-50 hover:underline">
          {item.name}
        </Link>

        </li>
      ))}
        </ul>
        
        {/* Hamburger Menu for mobile */}
        <div className="block sm:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#007580] text-2xl">
            &#9776;
          </button>
          
        </div>

        {/* Mobile Menu (when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-[74px] left-0 w-full bg-[#f0f3f3] p-4">
          <ul className="flex flex-col items-center gap-4">
            {navItems.map((item, i) => (
              <li key={i} className="text-[14px]" onClick={handleMenuItemClick}>
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      
    </div>
  </header>
  )
}

export default Header