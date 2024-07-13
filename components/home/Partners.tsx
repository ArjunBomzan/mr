import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Navigation,
    Pagination,
    Autoplay,
    FreeMode,
    Scrollbar,
    A11y,
} from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Swoosh from "../common/Swoosh";
import { useEffect, useState } from "react";
import { useWindowSize } from "./Testimonials";
import { makeFullUrl } from "../../utils/makeFullUrl";
import Link from "next/link"

export default function Partners({ partners }) {
    /* TODO: slider used in multiple palces can be minimized?? */
    const size = useWindowSize({ useEffect, useState });
    let commonClass = ` absolute top-0 left-0 text-black p-2 z-[200] top-[50%] -translate-y-[50%] hidden md:flex-center`;

    return (
        <section className="section-wrapper-m section-wrapper-p-xs container rounded-3xl bg-primary-light text-center text-primary">
            <h2 className="header-lg title-space-lg text-expanded">
                Our Top <Swoosh type="secondary"> Partnering</Swoosh> Companies
            </h2>
            <p>
                We have partnered with Top companies in nepal to help you land
                in great <br /> internships, opportunities and Job placements.
            </p>
            {/* FIXME: istead of br we have to use max-width for mobile breakpoitns */}
            <div className="section-wrapper-m-xs relative h-[7.25rem] lg:px-[3.5rem]">
                {/* width:{size.width} */}
                <div className="flex h-full items-center bg-green-100 ">
                    {/* TODO: fixme ; dots in mboile and no arrow while  arrow in bigg but no dots */}
                    <Swiper
                        className=" borderr hide-custom-swiper-dots !overflow-x-clipp !overflow-y-visiblee cursor-grab "
                        loop={false}
                        slidesPerView={
                            size.width > 1535
                                ? 7
                                : size.width > 1279
                                  ? 6
                                  : size.width > 767
                                    ? 5
                                    : 2.8
                        }
                        // spaceBetween={size.width > 1536 ? 60 : size.width > 1280 ? 50 : size.width > 768 ? 40 : 30}
                        spaceBetween={0}
                        navigation={{
                            prevEl: ".swiper-button-prev-cus",
                            nextEl: ".swiper-button-next-cus",
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                            dynamicMainBullets: 3,
                        }}
                        modules={[Pagination, Navigation]}
                    >
                        {partners.map((el) => {
                            return (
                                <SwiperSlide className="px-[10px] md:px-[25px] lg:px-[30px]  ">
                                    <Link href={el.link} aria-label={`visit ${el.name} page`} className="h-[72px] w-full  md:h-[46px] borde border-border select-none">
                                    <Image
                                        title={el.name}
                                        src={makeFullUrl(el.image)}
                                        alt=""
                                        className="h-[72px] w-full object-cover object-center md:h-[46px] border border-border cursor-pointer "                                        width={200}
                                        height={200}
                                    />
                                    </Link>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>

                <div
                    className={`swiper-button-prev-cus flex-center h-[36px] w-[36px] rounded-full bg-green-100 ${commonClass} cursor-pointer `}
                >
                    <GoArrowLeft className="inline-block text-xl font-thin text-primary" />
                </div>
                <div
                    className={`swiper-button-next-cus flex-center h-[36px] w-[36px] rounded-full bg-green-100 ${commonClass} left-[initial] right-0 cursor-pointer `}
                >
                    <GoArrowRight className="inline-block text-xl font-thin text-primary" />
                </div>
            </div>
            <p>
                Our partnership includes companies in sectors like Fintech,
                Ed-tech, Banking,,
                <br /> SAAS companies, IT Companies, Corporates.
            </p>
        </section>
    );
}
