import { Autoplay, FreeMode, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { homeSuccessStoriesApi } from "../../pages/api/apiCalls";
import { useEffect, useState } from 'react'
import { useWindowSize } from "../ScreenSize";


const HomeSuccessStories = () => {
    const size = useWindowSize({ useEffect, useState });
    const [successStoreis, setSuccessStories] = useState([]);
    useEffect(() => {
        homeSuccessStoriesApi({ setSuccessStories })
    }, []);
    const Card = ({ title, content, img }) => {
        return (
            <div className="flex justify-center w-full bg-white rounded-lg shadow-lg card-shadow cursor-pointer">
                <div className="block w-full">
                    <div className='training-card-img-div'>
                        <img className="rounded-t-lg" src={`${img}`} alt="" style={{ aspectRatio: "4 / 2.3" }} />
                    </div>
                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
                        <p className="text-gray-700 text-base">
                            {content}
                        </p>
                    </div>
                </div>
            </div >
        )
    }
    return (
        <div className='py-8 lg:px-44 md:px-20 px-2 bg-neutral-100' id="success_stories">
            <p className="font-bold text-3xl">Success Stories</p>
            <Swiper
                slidesPerView={size.width > 990 ? 3 : size.width > 700 ? 2.5 : size.width > 600 ? 2 : size.width > 400 ? 1.5 : 1.2}
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
                className="!-mx-2 md:!mx-0"
            // style={{ marginLeft: "-0.5rem" }}
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