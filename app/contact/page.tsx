import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className="pt-10 pl-40 font-serif mb-10 flex">
      <div>
        <div>
          <h1 className="text-xl">info@kisa23.org</h1>
        </div>
        <div className="mt-4">
          <form className="flex flex-col items-start space-y-2">
            <label className="text-xl font-semibold">Name</label>
            <input type="text" placeholder="Name" className="w-96 p-2 border border-gray-400 rounded-md h-12"/>
            <label className="text-xl font-semibold">Email</label>
            <input type="email" placeholder="Email" className="w-96 p-2 border border-gray-400 rounded-md h-12"/>
            <label className="text-xl font-semibold">Message</label>
            <textarea placeholder="Message" className="w-96 p-2 border border-gray-400 rounded-md h-50 resize-none"/>
            <button type="submit" className="px-6 py-2 mt-2 bg-black text-white rounded-md hover:bg-gray-800 w-96">Send</button>
          </form>
        </div>
      </div>
      <div>
        <img src="Future Looks Bright - KiSA 2024.png" className="pl-14 pr-7"/>
      </div>
    </div>
  )
}

export default page