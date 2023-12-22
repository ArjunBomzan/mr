import React, { useEffect } from 'react'

// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, FreeMode, Scrollbar, A11y } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Opportunity from '../../public/assets/images/common/Opportunity';
import Link from 'next/link';
import Image from 'next/image';
import TypeWriter from '../../components/common/TypeWriter';

export default function index({ data }) {
    return <>
        <TypeWriter contents={["one","two","three","four","five"]}/>
    </>

    return <>

        <div className=' h-96 bg-[rgba(0,0,0,0.5)]'>
            <div className='banner-b-white-curve w-full relative h-full'>

            </div>

        </div>
    </>
    return <>
        <h1 className='container opacity-10 '>hello</h1>
        {/* <Opportunity/> */}
        <div className="parent relative h-5 w-5 border p-5 ml-10 scale-100 opacity-100">
            <div className="child absolute -top-20 -left-20">cont</div>
            <div className="child absolute top-[50%] -right-[130px] scale-50">cont</div>
        </div>
        <div className="container">
        {/* <Opportunity/> */}
        <section className=' text-center py-[40px] px-[10px] md:px-[20px] lg:px-[30px] xl:px-[40px] bg-primary-light rounded-[24px] relative overflow-hidden borde '>
            <div className="relative z-20">
                <p className='font-medium text-gray-900 title-space'>Never miss an Opportunity !</p>
                <p className='header-lg title-space text-expanded'>Want to learn TOP 2024 IT Skills ?</p>
                <p className='text-gray-600'>We open IT skill classes Monthly in Design, Development, Deployment, Data etc.</p>
                <div className='mt-[40px] '>
                    <p className='text-gray-600 mb-5'>Have something to Ask ?</p>
                    <Link
                        className="btn inline-block"
                        target="_blank"
                        href={"/online-admission"}>
                        get admission enquiry
                    </Link>
                </div>
            </div>

            <div>
                {/* TODO: why are the arrows opaciaty and all not being changed in mobile */}
                <Image alt='' src={"/assets/images/home/arrows-left.svg"}
                    className='bloc hidde z-10 w-[136px] h-auto absolute -top-20 -left-20  opacity-10 scale-50  2xl:opacity-100 2xl:scale-100 2xl:top-[28px] 2xl:left-[38px] '
                    width={400} height={400} />
                <Image alt='' src={"/assets/images/home/arrows-right.svg"} 
                className='bloc hidde z-10 w-[144px] h-auto absolute top-[50%] -right-[130px] opacity-10 2xl:opacity-100 2xl:top-[88px] 2xl:right-[30px]' 
                width={400} height={400} />
            </div>

        </section>
        </div>
    </>

    function Next() {
        return (
            <div>next</div>
        )
    }

    let commonClass = ` absolute top-0 -right-8 bg-white text-black p-2 z-[200]`
    // commonClass = ` `
    return <div className="parent h-[400px] w-[400px] border border-red-100 group">
        <div className="child border w-1/2 max-h-[9999px] max-h-0 overflow-hidden border transition-all duration-1000 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore commodi, dicta natus deleniti voluptatibus dolorem odio, explicabo quod fugiat, eveniet ullam impedit delectus veritatis quisquam maiores illo! Modi, atque aliquid!
        </div>
    </div>

    return (
        <>

            <div className='py-[30rem] bg-[#333] text-white '>
                <div className='container border h-[200px]'>
                    <Swiper
                        className='h-ful relative overflow-visible w-[50%] mx-auto'
                        loop={true}
                        slidesPerView={4}
                        spaceBetween={100}
                        // navigation={{
                        //     // nextEl: <Next/>
                        //     nextEl:<div>next</div>

                        // }}
                        navigation={{ prevEl: '.swiper-button-prev-cus', nextEl: '.swiper-button-next-cus' }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                            dynamicMainBullets: 3,

                        }}
                        modules={[Pagination, Navigation]}

                    >
                        {
                            [1, 2, 3, 4, 5, 6, 7].map(el => {
                                return <SwiperSlide className='border h-full'>
                                    <div>slide-{el}</div>
                                </SwiperSlide>
                            })
                        }
                        <div className={`swiper-button-prev-cus ${commonClass} right-[initial] -left-8 `}>
                            <div>custom prev arrow</div>
                        </div>
                        <div className={`swiper-button-next-cus ${commonClass} `}>
                            <div>custom next arrow</div>
                        </div>
                    </Swiper>
                </div>

            </div>

        </>
    )
}
