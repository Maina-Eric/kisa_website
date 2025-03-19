import React from 'react'

function page() {
  return (
    <div className="pt-10 pl-4 sm:pl-10 md:pl-20 lg:pl-40 font-serif mb-10 flex flex-col md:flex-row items-center md:items-start">
      <div className="w-full md:w-auto">
        <div>
          <h1 className="text-lg sm:text-xl">info@kisa23.org</h1>
        </div>
        <div className="mt-4">
          <form className="flex flex-col items-start space-y-2">
            <label className="text-lg sm:text-xl font-semibold">Name</label>
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full sm:w-80 md:w-96 p-2 border border-gray-400 rounded-md h-12"
            />
            <label className="text-lg sm:text-xl font-semibold">Email</label>
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full sm:w-80 md:w-96 p-2 border border-gray-400 rounded-md h-12"
            />
            <label className="text-lg sm:text-xl font-semibold">Message</label>
            <textarea 
              placeholder="Message" 
              className="w-full sm:w-80 md:w-96 p-2 border border-gray-400 rounded-md h-40 resize-none"
            />
            <button 
              type="submit" 
              className="px-6 py-2 mt-2 bg-black text-white rounded-md hover:bg-gray-800 w-full sm:w-80 md:w-96"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 md:mt-0 md:ml-14">
        <img 
          src="Future Looks Bright - KiSA 2024.png" 
          className="w-full sm:w-80 md:w-auto pl-0 md:pl-14 pr-0 md:pr-7" 
          alt="Future Looks Bright"
        />
      </div>
    </div>
  )
}

export default page
