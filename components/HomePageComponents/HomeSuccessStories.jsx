import { Autoplay, FreeMode, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { homeSuccessStoriesApi } from "../../pages/api/apiCalls";
import { useEffect, useState } from 'react'
import { useWindowSize } from "../ScreenSize";
import Image from "next/image"

const HomeSuccessStories = (props) => {
    const size = useWindowSize({ useEffect, useState });
    const [successStoreis, setSuccessStories] = useState([]);
    useEffect(() => {
        homeSuccessStoriesApi({ setSuccessStories })
    }, []);
    const Card = ({ title, content, img }) => {
        return (
            <div className="flex justify-center w-full bg-white rounded-lg shadow-lg card-shadow cursor-pointer">
                <div className="block w-full" >
                    <Image height={450} width={450} src={img} style={{
                        height: "130px",
                        width: "100%",
                        objectFit: "cover"
                    }} className="training-card-img-div" />
                    <div className="p-4" style={{
                        height: "130px"
                    }}>
                        <h3 className="text-gray-900 text-xl font-medium mb-2">{title}</h3>
                        <p className="text-gray-700 text-base line-clamp-3">
                            {content}
                        </p>
                    </div>
                </div>
            </div >
        )
    }
    return (
        <div className={`${props.in_training_page ? "" : "py-8 lg:px-44 md:px-20 px-2 bg-neutral-100"}`} id="success_stories">
            <h2 className={`${props.in_training_page ? "mt-10 font-bold text-3xl" : "font-bold text-3xl"} `}>Success Stories</h2>
            <Swiper
                slidesPerView={size.width > 1500 ? 4 : size.width > 1200 ? 3 : size.width > 600 ? 2.3 : 1.3}
                spaceBetween={35}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination, Autoplay, Navigation]}
                loop={false}
                autoplay={{
                    delay: 200000,
                    disableOnInteraction: false,
                }}
                className="!-mx-2 md:!mx-0"
            >
                {
                    successStoreis?.map((successStory) => {
                        return <SwiperSlide key={successStory.id} className="mb-16 mt-10 mx-2 md:mx-0"><Card title={successStory.title} content={successStory.content} img={successStory.image} /></SwiperSlide>
                    })
                }
            </Swiper>
        </div >
    )
}

export default HomeSuccessStories