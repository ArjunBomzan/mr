// import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link'
// import SplashBg from "../../assets/homePage/splash-bg.jpg";
import SplashBg from "../../assets/homePage/splash-new.webp";
const Splash = () => {
  return (
    <div className='relative z-[0] '>

      <div className='w-full bg-splash-bg bg-no-repeat bg-cover ' style={{
        backgroundImage: `url(${SplashBg.src})`,
        // backgroundColor: "rgba(0,0,0,0.5)",
        // backgroundBlendMode: "darken"
      }}>
        <div className='flex flex-col items-center justify-center w-full h-full bg-mask py-10 '>
          <div
            // className='text-green-400 slide-left-to-right text-md'
            className='text-green-400 text-md'
          >
            <p style={{
              fontSize: "2em"
            }}>#1</p>
          </div>
          <h1 className='w-4/5 mt-2  text-[1rem] font-extrabold text-center text-white text-fade h-max sm:w-1/2 sm:text-[2rem]'>
            IT Training Institue In Nepal
          </h1>
          <div
            // className='w-1/2 text-center slide-right-to-left mt-5 text-slate-400'
            className='w-1/2 text-center mt-5 text-gray-400'
          >
            Mind Risers is the only IT training institute in Nepal offering paid internships after the course completion. With various courses covering everything from programming to designing and marketing, our professional instructor of highly educated educators is committed to assisting you in succeeding.
          </div>
          <Link href='/contact-us'>
            <button className='p-3 px-6 text-sm text-green-500 duration-500 border-2 border-green-500 rounded-md mt-9 hover:bg-green-500 hover:text-white'>
              Get Started
            </button>
          </Link>
        </div>
      </div>
      {/* <Swiper
        // @ts-expect-error
        style={{ "--swiper-navigation-color": "#fff", "--swiper-pagination-color": "#fff", }}
        speed={800}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide >
          <div className='w-full bg-splash-bg bg-no-repeat bg-cover h-[65vh]' style={{ backgroundImage: `url(${SplashBg.src})` }}>
            <div className='flex flex-col items-center justify-center w-full h-full bg-mask '>
              <div
                // className='text-green-400 slide-left-to-right text-md'
                className='text-green-400 text-md'
              >
                MANAGED IT SOLUTIONS
              </div>
              <h2 className='w-4/5 mt-2  text-[1rem] font-extrabold text-center text-white text-fade h-max sm:w-1/2 sm:text-[2rem]'>
                Reliable, scalable and built for your business.
              </h2>
              <div
                // className='w-1/2 text-center slide-right-to-left mt-5 text-slate-400'
                className='w-1/2 text-center mt-5 text-slate-400'
              >
                MindRisers Consortium is a forward-thinking app and website development company in Kathmandu Nepal with many years of experience to make what you wish.
              </div>
            
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className='w-full bg-splash-bg bg-no-repeat bg-cover h-[65vh]' style={{ backgroundImage: `url(${SplashBg.src})` }}>
            <div className='flex flex-col items-center justify-center w-full h-full bg-mask'>
              <div className='text-green-400 slide-left-to-right text-md'>SOFTWARE DEVELOPMENT TRAININGS</div>
              <h2 className='w-4/5 mt-2  text-[1rem] font-extrabold text-center text-white text-fade h-max sm:w-1/2 sm:text-[2rem]'>
                We can teach you all the latest technologies
              </h2>
              <div className='w-1/2 text-center slide-right-to-left mt-9 text-slate-400'>
                Our experienced in-house developers will teach you to be the best you can be
              </div>
             
            </div>
          </div>
        </SwiperSlide> */}

      {/* This is to be removed
        <SwiperSlide>
            <div className='w-full h-screen bg-splash-ed bg-cover'>
              <div className='flex flex-col items-center justify-center w-full h-full bg-mask'>
                <div className='text-green-400 slide-left-to-right text-md'>EDUCATION CONSULTANCY</div>
                <h2 className='w-4/5 mt-2  text-4xl font-extrabold text-center text-white text-fade h-max sm:w-1/2 sm:text-6xl'>
                  We make your dreams come true
                </h2>
                <div className='w-1/2 text-center slide-right-to-left mt-9 text-slate-400'>
                  We have many years of experience to provide educational consultacy services.
                </div>
              </div>
            </div>
          </SwiperSlide> */}

      {/* </Swiper> */}
    </div >
  )
}

export default Splash
