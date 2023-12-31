import React, { useEffect } from "react";

// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";
import {
    Navigation,
    Pagination,
    Autoplay,
    FreeMode,
    Scrollbar,
    A11y,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Opportunity from "../../public/assets/images/common/Opportunity";
import Link from "next/link";
import Image from "next/image";
import TypeWriter from "../../components/common/TypeWriter";
import classNames from "classnames";

export default function index({ data }) {
    let ourImage = "";
    // let ourData = [
    //     {
    //         box:[1,5],
    //         image:ourImage
    //     }
    // ];

    /* 4, 12, 14, 20, 22, 24   */
    let fillabledatas = [4, 12, 14, 20, 22, 24];

    let ourData = [
        [1, 5], // 4
        [2, 4], // 5
        [2, 6],
        [3, 3],
        [3, 5],
        [3, 6],
    ]; // wher edata need to be filled

    return (
        <>
            <p className="invisible">llasdf</p>
            <div
                className="mx-auto grid h-96 w-96 border  bg-cover bg-center my-96  "
                style={{
                    gridTemplateColumns: "1fr 3fr 1fr 3fr 1fr 3fr 1fr 3fr 1fr",
                    // gridTemplateRows: "1fr 3fr 1fr 3fr 1fr 3fr 1fr 3fr 1fr",
                    backgroundImage: "url('/mindrisers.png')",
                }}
            >
                {new Array(90).fill(null).map((el, index) => {
                    return (
                        <li
                            className={classNames(
                                "flex-center list-none border",
                                {
                                    invisible: !fillabledatas.includes(index),
                                },
                            )}
                        >
                            <div className="">
                                <Image
                                    src={"/assets/images/person.jpg"}
                                    height={200}
                                    width={200}
                                    alt=""
                                    className="h-full w-full rounded-full"
                                ></Image>
                            </div>
                        </li>
                    );
                })}
            </div>
        </>
    );
    // return <>
    //     <TypeWriter contents={["one","two","three","four","five"]}/>
    // </>

    return (
        <>
            <div className=" h-96 bg-[rgba(0,0,0,0.5)]">
                <div className="banner-b-white-curve relative h-full w-full"></div>
            </div>
        </>
    );
    return (
        <>
            <p className="container opacity-10 ">hello</p>
            {/* <Opportunity/> */}
            <div className="parent relative ml-10 h-5 w-5 scale-100 border p-5 opacity-100">
                <div className="child absolute -left-20 -top-20">cont</div>
                <div className="child absolute -right-[130px] top-[50%] scale-50">
                    cont
                </div>
            </div>
            <div className="container">
                {/* <Opportunity/> */}
                <section className=" borde relative overflow-hidden rounded-[24px] bg-primary-light px-[10px] py-[40px] text-center md:px-[20px] lg:px-[30px] xl:px-[40px] ">
                    <div className="relative z-20">
                        <p className="title-space font-medium text-gray-900">
                            Never miss an Opportunity !
                        </p>
                        <p className="header-lg title-space text-expanded">
                            Want to learn TOP 2024 IT Skills ?
                        </p>
                        <p className="text-gray-600">
                            We open IT skill classes Monthly in Design,
                            Development, Deployment, Data etc.
                        </p>
                        <div className="mt-[40px] ">
                            <p className="mb-5 text-gray-600">
                                Have something to Ask ?
                            </p>
                            <Link
                                className="btn inline-block"
                                target="_blank"
                                href={"/online-admission"}
                            >
                                get admission enquiry
                            </Link>
                        </div>
                    </div>

                    <div>
                        {/* TODO: why are the arrows opaciaty and all not being changed in mobile */}
                        <Image
                            alt=""
                            src={"/assets/images/home/arrows-left.svg"}
                            className="bloc hidde absolute -left-20 -top-20 z-10 h-auto w-[136px]  scale-50 opacity-10  2xl:left-[38px] 2xl:top-[28px] 2xl:scale-100 2xl:opacity-100 "
                            width={400}
                            height={400}
                        />
                        <Image
                            alt=""
                            src={"/assets/images/home/arrows-right.svg"}
                            className="bloc hidde absolute -right-[130px] top-[50%] z-10 h-auto w-[144px] opacity-10 2xl:right-[30px] 2xl:top-[88px] 2xl:opacity-100"
                            width={400}
                            height={400}
                        />
                    </div>
                </section>
            </div>
        </>
    );

    function Next() {
        return <div>next</div>;
    }

    let commonClass = ` absolute top-0 -right-8 bg-white text-black p-2 z-[200]`;
    // commonClass = ` `
    return (
        <div className="parent group h-[400px] w-[400px] border border-red-100">
            <div className="child max-h-0 max-h-[9999px] w-1/2 overflow-hidden border border transition-all duration-1000 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Inventore commodi, dicta natus deleniti voluptatibus dolorem
                odio, explicabo quod fugiat, eveniet ullam impedit delectus
                veritatis quisquam maiores illo! Modi, atque aliquid!
            </div>
        </div>
    );

    return (
        <>
            <div className="bg-[#333] py-[30rem] text-white ">
                <div className="container h-[200px] border">
                    <Swiper
                        className="h-ful relative mx-auto w-[50%] overflow-visible"
                        loop={true}
                        slidesPerView={4}
                        spaceBetween={100}
                        // navigation={{
                        //     // nextEl: <Next/>
                        //     nextEl:<div>next</div>

                        // }}
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
                        {[1, 2, 3, 4, 5, 6, 7].map((el) => {
                            return (
                                <SwiperSlide className="h-full border">
                                    <div>slide-{el}</div>
                                </SwiperSlide>
                            );
                        })}
                        <div
                            className={`swiper-button-prev-cus ${commonClass} -left-8 right-[initial] `}
                        >
                            <div>custom prev arrow</div>
                        </div>
                        <div
                            className={`swiper-button-next-cus ${commonClass} `}
                        >
                            <div>custom next arrow</div>
                        </div>
                    </Swiper>
                </div>
            </div>
        </>
    );
}
