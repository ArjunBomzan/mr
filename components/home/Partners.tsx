import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, FreeMode, Scrollbar, A11y } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Swoosh from "../common/Swoosh";
import { useEffect, useState } from "react";
import { useWindowSize } from "./Testimonials";


export default function Partners() {

    /* TODO: slider used in multiple palces can be minimized?? */
    const size = useWindowSize({ useEffect, useState });
    let commonClass = ` absolute top-0 left-0 bg-white text-black p-2 z-[200] top-[50%] -translate-y-[50%] hidden md:flex-center`

    return (
        <section className='text-primary text-center container my-[100px] bg-primary-light py-[60px] rounded-[24px]'>
            <p className='header-lg title-space-lg text-expanded'>Our Top <Swoosh type="secondary"> Partnering</Swoosh> Companies</p>
            <p>We have partnered with Top companies in nepal to help you land in great <br /> internships, opportunities and Job placements.</p>
            {/* FIXME: istead of br we have to use max-width for mobile breakpoitns */}
            <div className='my-[60px] relative lg:px-[56px] h-[116px]'>
                {/* width:{size.width} */}
                <div className="bg-green-100 h-full flex items-center ">
                    {/* TODO: fixme ; dots in mboile and no arrow while  arrow in bigg but no dots */}

                    <Swiper
                        className=' borderr hide-custom-swiper-dots !overflow-x-clipp !overflow-y-visiblee '
                        loop={false}
                        slidesPerView={size.width > 1535 ? 7 : size.width > 1279 ? 6 : size.width > 767 ? 5 : 2.8}
                        // spaceBetween={size.width > 1536 ? 60 : size.width > 1280 ? 50 : size.width > 768 ? 40 : 30}
                        spaceBetween={0}
                        navigation={{ prevEl: '.swiper-button-prev-cus', nextEl: '.swiper-button-next-cus' }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                            dynamicMainBullets: 3
                        }}
                    modules={[Pagination, Navigation]}
                    >
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(el => {
                                return <SwiperSlide className='px-[10px] md:px-[25px] lg:px-[40px] xl:px-[40px] 2xl:px-[50px]'>
                                    <Image src="/assets/images/home/khalti.png" alt="" className='w-full h-[72px] md:h-[36px] object-contain' width={200} height={200} />
                                </SwiperSlide>
                            })
                        }

                    </Swiper>
                </div>

                <div className={`swiper-button-prev-cus h-[36] w-[36] rounded-full bg-green-100 flex-center ${commonClass} `}>
                    <FaArrowLeft className="text-primary text-xl inline-block" />
                </div>
                <div className={`swiper-button-next-cus h-[36] w-[36] rounded-full bg-green-100 flex-center ${commonClass} right-0 left-[initial] `}>
                    <FaArrowRight className="text-primary text-xl inline-block" />
                </div>
            </div>
            <p>Our partnership includes companies in sectors like Fintech, Ed-tech, Banking,,<br /> SAAS companies, IT Companies, Corporates.</p>
        </section>
    )
}