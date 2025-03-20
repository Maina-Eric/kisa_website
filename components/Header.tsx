import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className="flex flex-col sm:flex-row w-full bg-[#F5F5F5] h-auto sm:h-20 p-4 items-center">
      <Link href={"/"} className="pl-2 sm:pl-4 md:pl-7 pr-4 sm:pr-8">
        <img 
          src="cropped-kisa-logo-oficiel.webp" 
          alt="KiSA Logo" 
          className="w-24 sm:w-32 md:w-28 "
        />
      </Link>
      <div className="flex flex-wrap justify-center sm:justify-end w-full sm:w-auto space-x-0 sm:space-x-2 md:space-x-4">
        <Link href={"/"} className="flex items-center justify-center px-3 sm:px-4 py-1 sm:py-2 m-1 bg-black text-white rounded-md hover:bg-gray-800 text-base sm:text-lg md:text-xl font-serif">Home</Link>
        <Link href={"/about"} className="flex items-center justify-center px-3 sm:px-4 py-1 sm:py-2 m-1 bg-black text-white rounded-md hover:bg-gray-800 text-base sm:text-lg md:text-xl font-serif">About</Link>
        <Link href={"/gallery"} className="flex items-center justify-center px-3 sm:px-4 py-1 sm:py-2 m-1 bg-black text-white rounded-md hover:bg-gray-800 text-base sm:text-lg md:text-xl font-serif">Gallery</Link>
        <Link href={"/partners"} className="flex items-center justify-center px-3 sm:px-4 py-1 sm:py-2 m-1 bg-black text-white rounded-md hover:bg-gray-800 text-base sm:text-lg md:text-xl font-serif">Partners</Link>
        <Link href={"/contact"} className="flex items-center justify-center px-3 sm:px-4 py-1 sm:py-2 m-1 bg-black text-white rounded-md hover:bg-gray-800 text-base sm:text-lg md:text-xl font-serif">Contact</Link>
      </div>
    </div>
  )
}

export default Header
