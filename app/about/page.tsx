import { Timeline } from '@/components/ui/Timeline';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function page() {
  const timelineData = [
    {
      title: "March 2022",
      content: (
        <div className="mb-8">
          <p className="text-xl md:text-xl font-normal mb-4">
            Met for Lunch at the National NSBE Convention in Anaheim, CA.
          </p>
          <p className="text-xl md:text-xl font-normal">Originally &ldquo;Kenyans @NSBE&rdquo;</p>
          <div>
            <Image
              src="/NSBE 1.jpeg"
              alt="NSBE Anaheim, CA"
              width={500}
              height={500}
              className="rounded-lg object-cover h-auto md:h-auto lg:h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "April 2022 - June 2023",
      content: (
        <div className='mb-8'>
          <p className=" text-xl md:text-xl font-normal">
            More members bought into the vission
          </p>
          <p className="text-xl md:text-xl font-normal">
            Grew from 16 to ~140 members
          </p>
          <div>
            <Image
              src="/NSBE 2.jpeg"
              alt="Bedan Gitau attains an internship offer at NSBE 2022"
              width={500}
              height={500}
              className="rounded-lg object-cover h-auto md:h-auto lg:h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "July 2023",
      content: (
        <div>
          <h1 className="text-xl md:text-xl font-semibold">
            KISA IS BORN
          </h1>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-xl md:text-xl font-normal">
              ✅ Rebranded from &ldquo;Kenyans @ NSBE&rdquo; to &ldquo;Kenyans in STEM Association&rdquo;
            </div>
          </div>
          <div className="">
            <Image
              src="/AfroTech 7.jpeg"
              alt="KiSA @ AfroTech 2023, Austin, TX"
              width={500}
              height={500}
              className="rounded-lg object-cover h-auto md:h-auto lg:h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "January 2024",
      content: (
        <div>
          <p className="text-xl md:text-xl font-normal mb-8">
            The First KISA General Meeting
          </p>
          <div>
            <Image
              src="/KiSA Groundbreaking Group Pic 3.png"
              alt="KiSA First General Meeting"
              width={500}
              height={500}
              className="rounded-lg object-cover h-auto md:h-auto lg:h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className='pt-10 pb-12'>
      <div className="font-serif pl-4 sm:pl-10 md:pl-20 lg:pl-40 flex flex-col sm:flex-row">
        
        <div className='w-full sm:w-md'>
          <h1 className="text-xl sm:text-2xl md:text-3xl pt-3 font-semibold">Quick Facts</h1>
          <ul style={{ listStyleType: "disc" }} className="pl-4 sm:pl-6 md:pl-7 text-lg sm:text-xl md:text-2xl">
            <li>253+ members (January 2025)</li>
            <li className="font-semibold">
              Demographic
              <ul style={{ listStyleType: "circle" }} className="font-normal pl-4 sm:pl-6 md:pl-7">
                <li>College Students in Engineering and STEM Sciences</li>
                <li>Early - Mid Career Professionals in STEM Careers</li>
              </ul>
            </li>
            <li className="font-semibold">
              Main Presence: <span className="font-normal">United States</span>
              <ul style={{ listStyleType: "circle" }} className="font-normal pl-4 sm:pl-6 md:pl-7">
                <li className="font-semibold">
                  Prospects: <span className="font-normal">Canada, Europe, Middle East, and Kenya</span>
                </li>
              </ul>
            </li>
            <li className="font-semibold">
              Popular Majors: <span className="font-normal">Computer Science, Electrical Engineering, Mechanical Engineering, Data Analytics</span>
            </li>
          </ul>
        </div>

        
        <div className="pl-4 sm:pl-6 md:pl-10 mt-8 sm:mt-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl pt-3 font-semibold">Affiliated Organizations:</h1>
          <ul style={{ listStyleType: "disc" }} className='text-lg sm:text-xl md:text-2xl underline pl-4 sm:pl-6 md:pl-7'>
            <li>
              <Link href="https://nsbe.org/" target="_blank" rel="noopener noreferrer">
                National Society of Black Engineers (NSBE)
              </Link>
            </li>
            <li>
              <Link href="https://swe.org/" target="_blank" rel="noopener noreferrer">
                Society of Women Engineers (SWE)
              </Link>
            </li>
            <li>
              <Link href="https://rewritingthecode.org/" target="_blank" rel="noopener noreferrer">
                Rewriting the Code (RTC)
              </Link>
            </li>
            <li>
              <Link href="https://www.colorstack.org/" target="_blank" rel="noopener noreferrer">
                ColorStack
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className='ml-4 sm:ml-10 md:ml-20 lg:ml-40 mt-10 w-full md:w-6xl'/>

      <Timeline data ={timelineData}/>

      <Link href={"/gallery"}className="flex items-center justify-center px-6 py-1 mx-2 bg-black text-white rounded-md hover:bg-gray-800 text-xl font-serif h-11 w-48">Learn More</Link>
    </div>
  )
}

export default page