import Image from 'next/image'
import { useRouter } from "next/router"
import { useRef, useState } from 'react'
import Link from 'next/link'

import ComputerMan from '../../assets/homePage/computer-man.jpg'

const OurServices = () => {
  const router = useRouter()
  const ref = useRef(null)


  return (
    <section className="flex flex-col px-5 py-20 space-y-12 bg-neutral-100 h-max lg:flex-row sm:py-32 sm:px-32 lg:space-y-0 px-4 gap-4 lg:gap-16">
      <div className='w-full lg:w-1/2' >
        <Image src={ComputerMan} ref={ref} alt='Services' className={`rounded-md w-full object-cover`} />
      </div>
      <div className='flex flex-col w-full lg:w-1/2 space-y-9'>
        <h4 className='font-sans font-medium tracking-widest text-green-500 text-md'>OUR SERVICE</h4>
        <h2 className='w-5/6 text-xl font-bold text-black sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl' >Managed IT solutions and IT training tailored to your business and for your career growth.</h2>
        <p className='text-black'>
          Our team is capable of making applications as sophisticated as you can imagine. We do not only make top-of-the-line mobile applications, web applications, and enterprise applications, but also specialize in digital marketing, and teaching you modern technologies. MindRisers is known as the best IT services provider and IT training centre in Kathmandu Nepal.
        </p>
        {router.pathname === '/services' &&
          <button
            onClick={() => window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth'
            })}
            className='px-4 py-3 text-white duration-500 bg-green-400 rounded-md hover:bg-slate-400 hover:text-black h-max w-max'
          >
            Learn More
          </button>
        }
        {router.pathname === '/' &&
          <Link href='services'>
            <button className='px-4 py-3 text-white duration-500 bg-green-400 rounded-md hover:bg-slate-400 hover:text-black h-max w-max'>
              Learn More
            </button>
          </Link>
        }
      </div>
    </section>
  )
}

export default OurServices
