import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className="pt-10 px-5 sm:px-10 md:px-20 lg:px-50 flex flex-col font-serif mb-10">
      <div className='flex flex-col sm:flex-row items-center sm:items-start gap-4'>
        <div className="overflow-hidden max-w-md sm:w-96">
          <Image
            src="/call-for-partners.webp"
            alt="Call for partners"
            width={500}
            height={500}
            className="w-full object-contain h-96"
          />
        </div>
        <div className='w-full max-w-md'>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            Partner with KiSA Today
          </h1>
          <ul className="list-disc pl-4 sm:pl-6 md:pl-7 text-lg sm:text-xl md:text-2xl">
            <li>Want to support us in our mission to uplift Kenyans in STEM?</li>
            <li>Need help in advancing your mission</li>
          </ul>
          <h1 className="pl-4 sm:pl-6 md:pl-7 text-lg font-semibold pt-4 sm:text-xl md:text-2xl">
            Partner with KiSA Today!
          </h1>
          <Link 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfEcOG1_I8D858HYCOKCpQT9W-maeT85I0dOOEkwAjA0eyMQw/viewform"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-1 bg-black text-white rounded-md hover:bg-gray-800 text-xl font-serif h-11 w-full max-w-md mt-7"
          >
            Fill this Partnership Form
          </Link>
        </div>
      </div>
      <hr className=' mt-10 w-full max-w-4xl' />

      <div className="text-center italic leading-relaxed max-w-3xl mx-5 md:mx-10 mt-5">
        <h1 className="text-lg sm:text-xl md:text-2xl">
          KiSA owes thanks to our current partners who have contributed to KiSA&apos;s growth whether by time, efforts, or insights. They are as follows:
        </h1>
      </div>
    <div className='space-y-12 pt-12'>
      <div className='flex flex-col sm:flex-row items-center gap-6'>
        <div className="">
            <Image
              src="/mwani-africa.jpeg"
              alt="Mwani Africa"
              width={500}
              height={500}
              className='object-contain w-full h-full'
            />
          </div>
          <div className="w-full max-w-md">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              Mwani Africa
            </h1>
            <p className='text-lg sm:text-xl md:text-2xl pt-4'>
              Mwani Africa deals in the seaweed rehabilitation & value-addition along the coast of Kenya,
              leveraging innovation to assist local smallholder communities in seaweed aquaculture.
            </p>
            <Link
              href="https://www.linkedin.com/company/mwaniafrica/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-1 bg-black text-white rounded-md hover:bg-gray-800 text-xl font-serif h-11 w-full max-w-md mt-7"
            >
              Mwani Africa LinkedIn
            </Link>
          </div>
        </div>
      </div>
      <hr className='mt-10 w-full max-w-4xl' />
      <div className='flex flex-col sm:flex-row items-center gap-6 pt-8'>
        <div className="w-full max-w-md">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            Aramid II Consortium
          </h1>
          <p className='text-lg sm:text-xl md:text-2xl pt-4'>
            The Aramid II international student&spos;s consortium (online) is a global gathering of college students, providing a platform to present innovative and scientific research topics.
          </p>
          <p className='text-lg sm:text-xl md:text-2xl pt-4'>
            A collaborative between universities in USA, Kenya, Greece, the Philippines, Indonesia, Uganda, and Nigeria.
          </p>
          <Link
            href="https://aramidconsortium.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-1 bg-black text-white rounded-md hover:bg-gray-800 text-xl font-serif h-11 w-full max-w-md mt-7"
          >
            Aramid II Website
          </Link>
        </div>
        <div className="overflow-hidden max-w-sm sm:w-96">
          <Image
            src="/aramiid-ii-consortium.png"
            alt="Aramid II Consortium"
            width={500}
            height={500}
            className='object-contain w-full h-full'
          />
        </div>
      </div>
      <hr className=' mt-10 w-full max-w-4xl' />
      <div className='flex flex-col sm:flex-row items-center gap-6 pt-8'>
        <div className="overflow-hidden max-w-sm sm:w-96">
          <Image
            src="/sevenett-data-analytics.png"
            alt="Sevenett Data Analytics"
            width={500}
            height={500}
            className='object-contain w-full h-full'
          />
        </div>
        <div className="w-full max-w-md">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            Sevenett Data Analytics
          </h1>
          <p className='text-lg sm:text-xl md:text-2xl pt-4'>
            Sevenett is an edTech company that offers career pathways into the tech industry for Africans and African immigrants through data analytics, data science training, and coding classes for children.
          </p>
          <Link
            href="https://sevenett.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-1 bg-black text-white rounded-md hover:bg-gray-800 text-xl font-serif h-11 w-full max-w-md mt-7"
          >
            Sevenett Website
          </Link>
        </div>
      </div>
      <hr className=' mt-10 w-full max-w-4xl' />
      <div className="flex flex-col sm:flex-row items-center gap-6 pt-8">
        <div className="w-full max-w-md">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            Kenya USA Tech (KUSAT) Forum
          </h1>
          <p className='text-lg sm:text-xl md:text-2xl pt-4'>
            KUSAT is a non-profit organization dedicated to fostering bilateral relations and cross-border collaborations between the tech industries of Kenya and the United States, 
            with a focus on accelerating innovation and economic growth.
          </p>
          <Link 
              href="https://www.kusat.tech/"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-1 bg-black text-white rounded-md hover:bg-gray-800 text-xl font-serif h-11 w-full max-w-md mt-7"
            >
              KUSAT Website
            </Link>
          </div>
        <div>
          <Image
            src="/kusat.png"
            alt="Kenya USA Tech (KUSAT) Forum"
            width={500}
            height={500}
            className='overflow-hidden max-w-sm sm:w-96'/>
        </div> 
      </div>
      <hr className=' mt-10 w-full max-w-4xl' />
      <div className='flex flex-col sm:flex-row items-center gap-6'>
          <div className=" sm:w-96">
            <Image
              src="/codekenya.png"
              alt="CodeKenya"
              width={500}
              height={500}
              className='object-contain w-52 h-full'
            />
          </div>
          <div className="w-full">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              codeKenya
            </h1>
            <p className='text-lg sm:text-xl md:text-2xl pt-4'>
              codeKenya brings together students enthusiastic about technology, travel, experiential learning and charity. They promote adventure through travel, education through immersive in-person and online experiences, and charity efforts centered around tech programs in the countries we travel to—worldwide.
            </p>
            <Link
              href="https://www.linkedin.com/company/codekenya/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-1 bg-black text-white rounded-md hover:bg-gray-800 text-xl font-serif h-11 w-full max-w-md mt-7"
            >
              codeKenya LinkedIn
            </Link>
          </div>
        </div>
        <hr className=' mt-10 w-full max-w-4xl' />
        <div className='flex flex-col sm:flex-row items-center gap-6 pt-8'>
          <div className="w-full max-w-md">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              National African Student Association (NAFSA)
            </h1>
            <p className='text-lg sm:text-xl md:text-2xl pt-4'>
              The National African Student Association (NAFSA) is a non-profit organization founded by former university students from Africa and the USA, aimed at addressing the challenges faced by immigrant and non-immigrant students and professionals due to limited exposure, knowledge, and resources.
            </p>
            <Link
              href="https://nationalafsa.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-1 bg-black text-white rounded-md hover:bg-gray-800 text-xl font-serif h-11 w-full max-w-md mt-7"
            >
              NAFSA Website
            </Link>
          </div>
          <div className=' max-w-md sm:w-96'>
            <Image
              src="/nafsa.png"
              alt="National African Student Association (NAFSA)"
              width={500}
              height={500}
              className='object-contain w-xs h-full m-3'
            />
          </div>
        </div>
        <hr className=' mt-10 w-full max-w-4xl' />
        <div className='flex flex-col sm:flex-row items-center gap-6 pt-8'>
        <div className='overflow-hidden max-w-md sm:w-96'>
            <Image
              src="/inspireher-stem.png"
              alt="InspireHER STEM"
              width={500}
              height={500}
              className='object-contain w-xs h-full ml-5'
            />
          </div>
          <div className="w-full max-w-md">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              InspireHER STEM
            </h1>
            <p className='text-lg sm:text-xl md:text-2xl pt-4'>
              InspireHER is a resource center empowering girls, especially in rural areas, to use technology to solve everyday problems and overcome barriers like lack of infrastructure, cultural obstacles, and financial challenges.
            </p>
            <Link
              href="https://www.linkedin.com/company/inspireherstem/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-1 bg-black text-white rounded-md hover:bg-gray-800 text-xl font-serif h-11 w-full max-w-md mt-7"
            >
              InspireHer LinkedIn
            </Link>
          </div>
        </div>
    <hr className=' mt-10 w-full max-w-4xl' />
    <div className='flex flex-col sm:flex-row items-center gap-6 pt-8'>
          <div className="w-full max-w-md">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              Kenyan Scientists in Diaspora Network (KESNET)
            </h1>
            <p className='text-lg sm:text-xl md:text-2xl pt-4'>
              Kenyan Scientists in Diaspora Network (KESNET) is a non-profit organization that brings together Kenyan professionals in STEM fields to collaborate on solving societal challenges both abroad and in Kenya.
            </p>
            <Link
              href="https://www.kenyanscientistsindiaspora.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-1 bg-black text-white rounded-md hover:bg-gray-800 text-xl font-serif h-11 w-full max-w-md mt-7"
            >
              KESNET Website
            </Link>
          </div>
          <div className='sm:w-96'>
            <Image
              src="/kesnet.jpg"
              alt="Kenyan Scientists in Diaspora Network (KESNET)"
              width={500}
              height={500}
              className='object-contain w-48 h-full m-3 ml-24'
            />
          </div>
        </div>
        <hr className=' mt-10 w-full max-w-4xl' />
        <div className='flex flex-col sm:flex-row items-center gap-6 pt-8'>
        <div className='overflow-hidden max-w-md sm:w-96'>
            <Image
              src="/ykp-connect-logo.jpg"
              alt="YKP Connect"
              width={500}
              height={500}
              className='object-contain w-48 h-full ml-5'
            />
          </div>
          <div className="w-full">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              Young Professionals (YKP) Connect
            </h1>
            <p className='text-lg sm:text-xl md:text-2xl pt-4'>
              YKP Connect is a non-profit organization focused on empowering young professionals in the global diaspora by offering education, mentorship, and community engagement.
            </p>
            <Link
              href="https://www.ykpconnect.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-1 bg-black text-white rounded-md hover:bg-gray-800 text-xl font-serif h-11 w-full max-w-md mt-7"
            >
              YKP Connect Website
            </Link>
          </div>
          
        </div>
        <hr className=' mt-10 w-full max-w-4xl' />
        <div className='flex flex-col sm:flex-row items-center gap-6'>
          <div className="w-full">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              Red Carpet Night DC
            </h1>
            <p className='text-lg sm:text-xl md:text-2xl pt-4'>
              Red Carpet Night DC is an annual event that celebrates the achievements of young Kenyan professionals in the diaspora, providing a platform to connect, share stories, and honor outstanding contributions.
            </p>
            <Link
              href="https://www.redcarpetnight.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-1 bg-black text-white rounded-md hover:bg-gray-800 text-xl font-serif h-11 w-full max-w-md mt-7"
            >
              Red Carpet Night DC Website
            </Link>
          </div>
          <div className="overflow-hidden max-w-md sm:w-96">
            <Image
              src="/red-carpet-night-dc.jpg"
              alt="Red Carpet Night DC"
              width={500}
              height={500}
              className="w-48 object-contain h-96"
            />
          </div>
        </div>
  </div>

  )
}

export default page