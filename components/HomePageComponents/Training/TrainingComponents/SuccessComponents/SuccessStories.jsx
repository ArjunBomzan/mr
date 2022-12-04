import { Autoplay, FreeMode, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SuccessStory from "./SuccessStory";

const SuccessStories = (props) => {

    const w = window.innerWidth;
    console.log("stories", props?.course?.data?.course[0]?.title)
    return (
        <>
            {
                props?.course?.data?.success_story[0] &&
                <div className='my-10 ' id="success_stories">
                    <p className="font-bold text-3xl lg:px-44 md:px-20 px-2">Success Stories</p>
                    <Swiper
                        slidesPerView={w < 400 ? 1 : w < 900 ? 3 : 3}
                        spaceBetween={25}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination, Autoplay, Navigation]}
                        className="mySwiper lg:mx-40 md:mx-20 mx-2"
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                    >
                        {
                            props?.course?.data?.success_story?.map((success_story) => {
                                return <SwiperSlide key={success_story.id}><SuccessStory success_story={success_story} title={props?.course?.data?.course[0]?.title} /></SwiperSlide>

                            })
                        }
                    </Swiper>
                </div>
            }
        </>
    )
}

export default SuccessStories