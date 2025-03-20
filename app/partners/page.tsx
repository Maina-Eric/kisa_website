import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className="pt-10 pl-50 flex flex-col font-serif mb-10">
    <div className='flex flex-col sm:flex-row items-center sm:items-start'>
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
        <ul style={{ listStyleType: "disc" }} className="pl-4 sm:pl-6 md:pl-7 text-lg sm:text-xl md:text-2xl">
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

    <div className="text-center italic leading-relaxed max-w-3xl mx-10 mt-5">
      <h1 className="text-lg sm:text-xl md:text-2xl">
        KiSA owes thanks to our current partners who have contributed to KiSA&apos;s growth whether by time, efforts, or insights.
        <br />
        They are as follows:
      </h1>
    </div> 
    <div className="flex pt-12">
      <div>
        <Image
          src="/mwani-africa.jpeg"
          alt="Mwani Africa"
          width={500}
          height={500}
          className='object-contain w-full h-full'/>
      </div> 
      <div className="w-md">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          Mwani Africa
        </h1>
        <p className='text-lg sm:text-xl md:text-2xl pt-4'>
        Mwani Africa deals in the seaweed rehabilitation &amp; value-addition along the coast of Kenya,
        leveraging the innovation to assist local smallholder communities in seaweed aquaculture
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
    <hr className=' mt-10 w-full max-w-4xl' />
    <div className="flex pt-8">
    <div className="w-md">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          Aramid II Consortium
        </h1>
        <p className='text-lg sm:text-xl md:text-2xl pt-4'>
        The Aramid II international student&apos;s consortium (online) is global gathering of college students, providing a platform to present innovative and scientific recearch topics.
        </p>
        <p className='text-lg sm:text-xl md:text-2xl pt-4'>
          A collaborative between universities in  USA, Kenya, Greece, the Phillipines, Indonesia, Uganda and Nigeria.
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
      <div>
        <Image
          src="/aramiid-ii-consortium.png"
          alt="Aramid II Consortium"
          width={500}
          height={500}
          className='object-contain w-xs h-full m-3'/>
      </div> 
    </div>
    <hr className=' mt-10 w-full max-w-4xl' />
    <div className="flex pt-12">
      <div>
        <Image
          src="/sevenett-data-analytics.png"
          alt="sevenett data analytics"
          width={500}
          height={500}
          className='object-contain w-xs h-full'/>
      </div> 
      <div className="w-md">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          Sevenett Data Analytics
        </h1>
        <p className='text-lg sm:text-xl md:text-2xl pt-4'>
          Sevenett is an edTech company that offers career pathways into the tech industry for Africans and African immigrants through 
          data analytics, data science training, and coding classes for children.
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
    <div className="flex pt-8">
    <div className="w-md">
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
          className='object-contain w-xs h-full m-3'/>
      </div> 
    </div>
    <hr className=' mt-10 w-full max-w-4xl' />
    <div className="flex pt-12">
      <div>
        <Image
          src="/codekenya.png"
          alt="CodeKenya"
          width={500}
          height={500}
          className='object-contain w-full h-full'/>
      </div> 
      <div className="w-lg pl-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          codeKenya
        </h1>
        <p className='text-lg sm:text-xl md:text-2xl pt-4'>
          codeKenya brings together students enthusiastic about technology, travel, experiential learning and charity. They promote adventure through travel, 
          education through immersive in-person and online experiences and charity efforts centered around tech programs in the countries we travel to—worldwide.
        </p>
        <Link 
          href="https://www.linkedin.com/company/codekenya/"
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center px-6 py-1 bg-black text-white rounded-md hover:bg-gray-800 text-xl font-serif h-11 w-full max-w-md mt-7"
        >
          codeKenya LinkdIn
        </Link>
      </div>
    </div>
  </div>

  )
}

export default page