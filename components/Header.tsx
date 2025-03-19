"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react' // Using Lucide for icons

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex w-full bg-[#F5F5F5] h-24 p-5 items-center">
      
      <Link href={"/"} className="pl-7 pr-16">
        <img src="cropped-kisa-logo-oficiel.webp" alt="KiSA Logo" className="w-28" />
      </Link>

      <div className="sm:hidden cursor-pointer absolute right-5" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Navigation Links */}
      <div className={`flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 absolute sm:static top-20 left-0 bg-[#F5F5F5] w-full sm:w-auto transition-all duration-300 ${isOpen ? 'flex' : 'hidden'} sm:flex`}>
        <Link href={"/"} className="block text-center px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 text-xl font-serif">Home</Link>
        <Link href={"/about"} className="block text-center px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 text-xl font-serif">About</Link>
        <Link href={"/gallery"} className="block text-center px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 text-xl font-serif">Gallery</Link>
        <Link href={"/partners"} className="block text-center px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 text-xl font-serif">Partners</Link>
        <Link href={"/contact"} className="block text-center px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 text-xl font-serif">Contact</Link>
      </div>
    </div>
  )
}

export default Header

