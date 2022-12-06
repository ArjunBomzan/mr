import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";

import Prabhu from '../../assets/partners/prabhu-pay.png'
import Pentagram from '../../assets/partners/pentagram.jpg'
import RealPath from '../../assets/partners/realpath.jpg'
import TummyTruck from '../../assets/partners/tummy-truck.png'
import Vianet from '../../assets/partners/vianet.png'
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

interface partnerInterface {
  image: any,
  name: string
}

const Partner = ({ image, name }: partnerInterface) => {
  return (
    <Image
      src={image}
      alt={name}
      className='w-32 h-32 mx-auto 2xl:h-32 2xl:w-32'
    />

  )
}

const Partners = () => {
  const useTwo = useMediaQuery({ query: '(min-width: 640px)' })
  const useThree = useMediaQuery({ query: '(min-width: 1024px)' })
  return (
    <section className='flex flex-col px-5 py-20 space-y-12 bg-neutral-100 h-max sm:pt-24 sm:px-10 md:px-20 lg:px-40 xl:px-48'>
      <div className='flex flex-col'>
        <h3 className='w-full mb-5 text-2xl font-bold text-center sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>We strive to work with the best</h3>
        <p className='w-full text-center'>
          We have worked with successful companies, who have nothing but good things to say about us.
        </p>
      </div>
      <div className='w-full'>
        <Swiper
          slidesPerView={useThree ? 3 : useTwo ? 2 : 1}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          speed={800}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loopFillGroupWithBlank={false}
          // pagination={{
          //   clickable: false,
          // }}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Partner
              image={Prabhu}
              name='PrabhuPay'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Partner
              image={TummyTruck}
              name='TummyTruck'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Partner
              image={Vianet}
              name='Vianet'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Partner
              image={Pentagram}
              name='Pentagram'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Partner
              image={RealPath}
              name='realpath'
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Partners
