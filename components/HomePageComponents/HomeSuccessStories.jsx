import { Autoplay, FreeMode, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";


const HomeSuccessStories = () => {
    const Card = ({ title, content }) => {
        return (
            <div class="flex justify-center my-10 " style={{ paddingLeft: "5px", paddingTop: "5px", marginLeft: "-5px", marginTop: "-5px" }}>
                <div class="rounded-lg shadow-lg bg-white max-w-sm block card-shadow cursor-pointer ">
                    <a href="#!">
                        <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />
                    </a>
                    <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">{title}</h5>
                        <p class="text-gray-700 text-base mb-4">
                            {content}
                        </p>
                    </div>
                </div>
            </div >
        )
    }
    return (
        <div className='my-10 lg:px-44 md:px-20 px-2' id="success_stories">
            <p className="font-bold text-3xl mb-8">Success Stories</p>
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
                <SwiperSlide><Card title="Title" content="Content" /></SwiperSlide>
                <SwiperSlide><Card title="Title" content="Content" /></SwiperSlide>
                <SwiperSlide><Card title="Title" content="Content" /></SwiperSlide>
                <SwiperSlide><Card title="Title" content="Content" /></SwiperSlide>
            </Swiper>
        </div >
    )
}

export default HomeSuccessStories