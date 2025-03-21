import React from 'react'

function Footer() {
  return (
    <div className="flex flex-col md:flex-row pb-9 pt-4 bg-[#F5F5F5] pl-4 font-serif space-y-4 md:space-y-0">
      <div>
        <p className="font-semibold text-lg text-center md:text-left">&copy; Kenyans in STEM Association - KISA</p>
      </div>
      <div className="w-full md:w-auto px-4">
        <form className="flex flex-col items-start space-y-2 mx-auto w-full md:w-80">
          <label className="text-lg font-semibold">Email</label>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full p-2 border border-gray-400 rounded-md h-12"
          />
          <button 
            type="submit" 
            className="px-6 py-2 mt-2 bg-black text-white rounded-md hover:bg-gray-800 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Footer
