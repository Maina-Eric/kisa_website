import { Carousel } from '@/components/ui/carousel'
import { afrotechPics, carouselPics, nsbePics } from '@/data'
import React from 'react'


function page() {
  return (
    <div className="pt-20 pl-40 font-serif pb-10 flex flex-col overflow-hidden">
      <h1 className="text-2xl">We.... meet a lot.</h1>
      <h1 className="text-2xl pb-5">And we have pics to show for it. 🙂</h1>
      <hr className='w-6xl '/>
      <h1 className="text-4xl pt-3 font-semibold">General Meetings</h1>
      <h1 className="text-2xl pb-4 pt-3">Held Virtualy Every Month</h1>

      <Carousel slides={carouselPics}/>

      <hr className='w-6xl mt-11'/>

      <h1 className="text-4xl pt-3 font-semibold">Conferences</h1>
      <h1 className="text-2xl pb-4 pt-4">NSBE - National Society of Black Engineers</h1>

      <Carousel slides={nsbePics}/>

      <h1 className="text-4xl pt-5 font-semibold">AfroTech</h1>

      <Carousel slides={afrotechPics}/>
    </div>
  )
}

export default page