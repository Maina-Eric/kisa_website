import React from 'react'

function Footer() {
  return (
    <div className="flex pb-9 pt-4 bg-[#F5F5F5] pl-4">
      <div>
        <p className="font-semibold text-lg">&copy; Kenyans in STEM Association - KISA</p>
      </div>
      <div>
        <form className="flex flex-col items-start space-y-2 mx-10 w-full">
          <label className="text-lg font-semibold">Email</label>
          <input type="email" placeholder="Enter your email" className="w-full p-2 border border-gray-400 rounded-md h-12"/>
          <button type="submit" className="px-6 py-2 mt-2 bg-black text-white rounded-md hover:bg-gray-800 w-full">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Footer