import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className="flex w-full bg-[#F5F5F5] h-24 pt-5">
      <Link href={"/"} className="pl-7 pr-16"><img src="cropped-kisa-logo-oficiel.webp"/></Link>
      <div className="flex w-full text-center">
        <Link href={"/"} className="flex items-center justify-center px-6 py-1 mx-2 bg-black text-white rounded-md hover:bg-gray-800 text-xl font-serif h-11">Home</Link>
        <Link href={"/about"}className="flex items-center justify-center px-6 py-1 mx-2 bg-black text-white rounded-md hover:bg-gray-800 text-xl font-serif h-11">About</Link>
        <Link href={"/gallery"}className="flex items-center justify-center px-6 py-1 mx-2 bg-black text-white rounded-md hover:bg-gray-800 text-xl font-serif h-11">Gallery</Link>
        <Link href={"/patners"}className="flex items-center justify-center px-6 py-1 mx-2 bg-black text-white rounded-md hover:bg-gray-800 text-xl font-serif h-11">Patners</Link>
        <Link href={"/contact"}className="flex items-center justify-center px-6 py-1 mx-2 bg-black text-white rounded-md hover:bg-gray-800 text-xl font-serif h-11">Contact</Link>
      </div>
    </div>
  )
}

export default Header