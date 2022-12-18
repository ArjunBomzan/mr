import { Autoplay, FreeMode, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SuccessStory from "./SuccessStory";
import { useEffect, useState } from 'react'
import { useWindowSize } from "../../../ScreenSize";

const SuccessStories = (props) => {
    const size = useWindowSize({ useEffect, useState });
    return (
        <>
            {
                props?.course?.data?.success_story[0] &&
                <div className='my-10 lg:px-18 md:px-14 px-8' id="success_stories">
                    <p className="font-bold text-3xl">Success Stories</p>
                    <Swiper
                        slidesPerView={size.width > 990 ? 3 : size.width > 700 ? 2.5 : size.width > 600 ? 2 : size.width > 400 ? 1.5 : 1.2}
                        spaceBetween={25}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination, Autoplay, Navigation]}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        className="!-mx-8 md:!mx-0"
                    >
                        {
                            props?.course?.data?.success_story?.map((success_story) => {
                                return <SwiperSlide key={success_story.id} className="mx-8 md:mx-0"><SuccessStory success_story={success_story} title={props?.course?.data?.course[0]?.title} /></SwiperSlide>

                            })
                        }
                    </Swiper>
                </div>
            }
        </>
    )
}

export default SuccessStories