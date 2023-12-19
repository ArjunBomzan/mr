
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, FreeMode, Scrollbar, A11y } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Rating from '../common/Rating';
import Swoosh from '../common/Swoosh';
import { useEffect, useState } from 'react';


export function useWindowSize(props) {
    const [windowSize, setWindowSize] = props?.useState({
        width: undefined,
        height: undefined,
    });
    props?.useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}


export default function Testimonials() {
    const size = useWindowSize({ useEffect, useState });

    return (
        <section className='section-wrapper-m section-wrapper-p-double bg-gray'>
            <p className='header-lg text-center mb-[60px]'>What our <Swoosh type="secondary"> Partnered</Swoosh> companies says about us</p>
            <div>
                <Swiper
                    className='custom-swiper-dots !overflow-x-clip !overflow-y-visible'
                    loop={false}
                    slidesPerView={size.width >= 1536 ? 5 : size.width >= 1280 ? 4 : size.width >= 768 ? 3 : 1}
                    spaceBetween={size.width >= 1536 ? 40 : size.width >= 1280 ? 30 : size.width >= 768 ? 20 : 10}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                        dynamicMainBullets: 3,
                    }}
                    /* TODO: add dots in both screens  */
                    modules={[Pagination]}
                >
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(el => {
                            return <SwiperSlide className='cursor-pointer'>
                                {/* <Image src="/assets/images/home/khalti.png" alt="" className='w-full h-[36px] object-contain' width={200} height={200} /> */}
                                {/* slider -{el} */}
                                <div className='bg-white rounded-[12px] p-5 text-gray-600'>
                                    <Rating rating={3} />
                                    <p className=' my-5 testimonial-card-clamp  clamp-7'>
                                        Mind Risers is the only IT training institute in Kathmandu, Nepal offering paid internships after the course completion.
                                    </p>
                                    <div className='w-1/5 h-[4px] bg-border rounded-2xl '></div>
                                    <div className='mt-5'>
                                        <p className='text-[14px] font-bold mb-[4px]'>Prabha Bhattaria</p>
                                        <p className='text-[14px] mb-[4px]'>CEO</p>
                                        <p>Slack Inc</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        })
                    }


                </Swiper>
            </div>
        </section>
    )
}