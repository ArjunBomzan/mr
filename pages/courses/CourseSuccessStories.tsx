import React, { useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { useWindowSize } from '../../components/home/Testimonials'
import Image from 'next/image'

export default function CourseSuccessStories(props) {
    const size = useWindowSize({ useEffect, useState })

    const [success_stories, setSuccessStories] = useState([])

    useEffect(() => {
        setSuccessStories(props.success_stories)
    }, [])

    return (
        <div className="title-space-3xl-reverse">
            <Swiper
                className="custom-swiper-dots custom !overflow-x-clip !overflow-y-visible "
                loop={false}
                slidesPerView={
                    size.width >= 1536
                        ? 3
                        : size.width >= 1280
                          ? 3
                          : size.width >= 768
                            ? 2
                            : 1
                }
                spaceBetween={
                    size.width >= 1536
                        ? 20
                        : size.width >= 1280
                          ? 20
                          : size.width >= 768
                            ? 15
                            : 10
                }
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                    dynamicMainBullets: 3
                }}
                modules={[Pagination]}
            >
                {success_stories?.map((el) => {
                    return (
                        <SwiperSlide className="max-w-full cursor-grab select-none rounded-xl border border-green-200 bg-green-50 p-5 md:min-w-[407px] ">
                            <div className="gap-base-half title-space-xl grid grid-cols-[40%,60%]">
                                <Image
                                    src={el.image}
                                    className=" aspect-square rounded-full border-4 border-primary bg-cover object-cover"
                                    alt=""
                                    height={200}
                                    width={200}
                                />
                                <div>
                                    <p className="title-space text-[18px] font-semibold leading-[28px] text-gray-800">
                                        {el.title}
                                    </p>
                                    <p>{el.position}</p>
                                    <h3 className="mt-[4px] font-medium">
                                        <span className="text-secondary">
                                            @
                                        </span>{' '}
                                        {el.working_at?.name}
                                    </h3>
                                </div>
                            </div>
                            <div className="title-space-xl">
                                <p className="title-xxs mb-[4px]">
                                    course taken
                                </p>
                                <h3 className="text-[18px] font-medium">
                                    {el.course.page_title}
                                </h3>
                            </div>
                            {/* <div>
                                <p className="title-xxs mb-[4px]">college</p>
                                <h3 className="text-[18px] font-medium">
                                    {el.college}
                                </h3>
                            </div> */}
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}
