import { Autoplay, FreeMode, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { homeSuccessStoriesApi } from "../../pages/api/apiCalls";
import { useEffect, useState } from 'react'

const HomeSuccessStories = () => {
    const [successStoreis, setSuccessStories] = useState([]);
    useEffect(() => {
        homeSuccessStoriesApi({ setSuccessStories })
    }, []);
    const Card = ({ title, content, img }) => {
        return (
            <div className="flex justify-center my-10 w-full" style={{ paddingLeft: "5px", paddingTop: "5px", marginLeft: "-5px", marginTop: "-5px" }}>
                <div className="rounded-lg shadow-lg bg-white max-w-sm block card-shadow cursor-pointer  w-full">
                    <a href="#!">
                        <img className="rounded-t-lg  w-full h-48" src={`${img}`} alt="" />
                    </a>
                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
                        <p className="text-gray-700 text-base mb-4">
                            {content}
                        </p>
                    </div>
                </div>
            </div >
        )
    }
    return (
        <div className='my-10 lg:px-44 md:px-20 px-2 bg-neutral-100 py-8' id="success_stories">
            <p className="font-bold text-3xl mb-6">Success Stories</p>
            <Swiper
                slidesPerView={3}
                spaceBetween={35}
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
            >
                {
                    successStoreis?.map((successStory) => {
                        return <SwiperSlide key={successStory.id} className="my-3"><Card title={successStory.title} content={successStory.content} img={successStory.image} /></SwiperSlide>
                    })
                }
            </Swiper>
        </div >
    )
}

export default HomeSuccessStories