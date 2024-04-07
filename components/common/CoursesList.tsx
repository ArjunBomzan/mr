import Image from "next/image";
import Link from "next/link";
import { makeFullUrl } from "../../utils/makeFullUrl";
import { useWindowSize } from "../home/Testimonials";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import {
    Navigation,
    Pagination,
    Autoplay,
    FreeMode,
    Scrollbar,
    A11y,
} from "swiper/modules";
import { useRouter } from "next/router";
import classNames from "classnames";
import DiscountCart from "./DiscountCart";

/**
 * list of courses
 * @param  {Array} courses
 *
 * @returns
 */

type courseType = {
    image: string;
    title: string;
    duration: string;
    slug: string;
    discount: number
};

export default function CoursesList({ courses }: { courses: courseType[] }) {
    const size = useWindowSize({ useEffect, useState });

    const router = useRouter();
    const route = router.route;

    return (
        <div>
            {courses.length == 0 && (
                <p className="my-10">
                    0 course found matching your search key / tag{" "}
                </p>
            )}

            <div
                className={classNames("lg:hidden", {
                    hidden: route != "/",
                })}
            >
                <Swiper
                    className="custom-swiper-dots h-fulll custom select-none !overflow-x-clip !overflow-y-visible "
                    loop={false}
                    slidesPerView={
                        size.width >= 1536
                            ? 5
                            : size.width >= 1280
                                ? 4
                                : size.width >= 768
                                    ? 2.5
                                    : size.width >= 576
                                        ? 2
                                        : 1.15
                        //   : 3
                    }
                    spaceBetween={
                        size.width >= 1536
                            ? 40
                            : size.width >= 1280
                                ? 30
                                : size.width >= 768
                                    ? 20
                                    : 10
                    }
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                        dynamicMainBullets: 3,
                    }}
                    modules={[Pagination]}
                >
                    {courses.map((el, index) => {
                        return (
                            <SwiperSlide
                                className="h-fulll !w-[296px]]"
                                style={
                                    {
                                        // height:"100%"
                                    }
                                }
                            >
                                <li className="h-full">
                                    <Link
                                        href={`/courses/${el.slug}`}
                                        className="hover:shadow-medium group block h-full rounded-xl border border-border p-5 bg-white transition hover:border-primary"
                                    >
                                        {
                                            el?.discount &&
                                            <DiscountCart discount={el.discount} />
                                        }
                                        <Image

                                            alt=""
                                            src={makeFullUrl(el.image)}
                                            width={300}
                                            height={300}
                                            className="mb-5"
                                        />
                                        {/* Property 'image' does not exist on type '{ el: courseType; }'.t */}
                                        <h3 className="sub-header title-space-md text-expanded">
                                            {el.title}
                                        </h3>
                                        <p className="header-space-xs">
                                            {el.duration}
                                        </p>
                                        <button className="btn-gray transition group-hover:bg-green-50  group-hover:text-primary ">
                                            <span className="transition-all group-hover:mr-2">
                                                Learn More
                                            </span>
                                        </button>
                                    </Link>
                                </li>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>

            <ul
                className={classNames(
                    "gap-base-half  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ",
                    { "hidden lg:grid": route == "/" },
                    { "grid md:grid": route != "/" },
                )}
            >
                {courses.map((el, index) => {


                    if (
                        index >= (size.width >= 1280 ? 8 : 6) &&
                        route === "/"
                    ) {
                        return null;
                    }
                    return (
                        <li className=" relative h-full   ">

                            <Link
                                href={`/courses/${el.slug}`}
                                className="hover:shadow-medium group block h-full rounded-xl border border-border p-5 
                                transition hover:border-primary relative  bg-white  "
                            >{
                                    el?.discount &&
                                    <DiscountCart discount={el.discount} />
                                }

                                <Image

                                    alt=""
                                    src={makeFullUrl(el.image)}
                                    width={300}
                                    height={300}
                                    className="mb-5"
                                />
                                {/* Property 'image' does not exist on type '{ el: courseType; }'.t */}
                                <h3 className="sub-header title-space-md text-expanded">
                                    {el.title}
                                </h3>
                                <p className="header-space-xs">{el.duration}</p>

                                {/* this is for mainting space */}
                                <span className="btn-gray invisible inline-block opacity-70 ">
                                    <span className="">Learn More</span>
                                </span>

                                <button className="btn-gray absolute bottom-5  
                                left-5 transition group-hover:bg-green-50 group-hover:text-primary z-10 ">
                                    <span className="transition-all group-hover:mr-2">
                                        Learn More
                                    </span>
                                </button>
                            </Link>
                        </li>
                    );
                })}
            </ul>
            {route == "/" && (
                <div
                    className={classNames("mr-3 mt-5 flex justify-end ", {
                        hidden: route != "/",
                        "hidden lg:flex": route != "/",
                    })}
                >
                    <Link
                        href={"/courses"}
                        className="is- btn-gray group transition  hover:bg-green-50 hover:text-primary "
                    >
                        <span className="transition-all group-hover:mr-2">
                            view All
                        </span>
                    </Link>
                </div>
            )}
        </div>
    );
}
