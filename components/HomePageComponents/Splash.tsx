import Link from 'next/link'
import SplashBg from "../../assets/homePage/splash-new.webp";
const Splash = () => {
  return (
    <div className='relative z-[0] '>

      <div className='w-full bg-splash-bg bg-no-repeat bg-cover ' style={{
        backgroundImage: `url(${SplashBg.src})`,
      }}>
        <div className='flex flex-col items-center justify-center w-full h-full bg-mask py-10 '>
          <div
            className='text-green-400 text-md'>
            <p style={{
              fontSize: "2em"
            }}>#1</p>
          </div>
          <p className='w-4/5 mt-2  text-[1rem] font-extrabold text-center text-white text-fade h-max sm:w-1/2 sm:text-[2rem]'>
            IT Training Institute In Nepal
          </p>
          <div
            // className='w-1/2 text-center slide-right-to-left mt-5 text-slate-400'
            className='w-1/2 text-center mt-5 text-gray-400'
          >
            Mindrisers is the only IT training institute in Nepal offering paid internships after the course completion. With various courses covering everything from programming to designing and marketing, our professional instructor of highly educated educators is committed to assisting you in succeeding.
          </div>
          <Link href='/contact-us'>
            <button className='p-3 px-6 text-sm text-green-500 duration-500 border-2 border-green-500 rounded-md mt-9 hover:bg-green-500 hover:text-white'>
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div >
  )
}

export default Splash
