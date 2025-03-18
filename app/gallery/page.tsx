import { Carousel } from '@/components/ui/carousel'
import { carouselPics } from '@/data'
import React from 'react'


function page() {
  return (
    <div className="pt-20 pl-40 font-serif pb-10 flex flex-col overflow-hidden">
      <h1 className="text-2xl">We.... meet a lot.</h1>
      <h1 className="text-2xl pb-5">And we have pics to show for it. 🙂</h1>
      <hr className='w-4xl '/>
      <h1 className="text-4xl pt-3 font-semibold">General Meetings</h1>
      <h1 className="text-2xl pb-4">Held Virtualy Every Month</h1>

      <Carousel slides={carouselPics}/>

      {/* <Carousel slides={carouselPics}/> */}

    </div>
  )
}

export default page