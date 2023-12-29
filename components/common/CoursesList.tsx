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
};

export default function CoursesList({ courses }: { courses: courseType[] }) {
    const size = useWindowSize({ useEffect, useState });

    const router = useRouter();
    const route = router.route;

    return (
        <div>
            <div
                className={classNames("lg:hidden", {
                    hidden: route != "/",
                })}
            >
                <Swiper
                    className="custom-swiper-dots !overflow-x-clip !overflow-y-visible select-none h-full"
                    // className="items-stretch"
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
                                  : 1
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
                    {courses.map((el) => {
                        return (
                            <SwiperSlide className="h-full cursor">
                                <li className="h-full">
                                    <Link
                                        href={`/courses/${el.slug}`}
                                        className="hover:shadow-medium group block rounded-xl border border-border p-5 transition hover:border-primary"
                                    >
                                        <Image
                                            priority
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
                {courses.map((el) => {
                    return (
                        <li className="   ">
                            <Link
                                href={`/courses/${el.slug}`}
                                className="hover:shadow-medium group block rounded-xl border border-border p-5 transition hover:border-primary"
                            >
                                <Image
                                    priority
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
                                <button className="btn-gray transition group-hover:bg-green-50  group-hover:text-primary ">
                                    <span className="transition-all group-hover:mr-2">
                                        Learn More
                                    </span>
                                </button>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
