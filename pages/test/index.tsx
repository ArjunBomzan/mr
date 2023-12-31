import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';

export default function index() {
    return (
        <Swiper
            className="border my-10 custom"
            loop={false}
            slidesPerView={3}
            spaceBetween={10}
        >
            {[1, 2, 3, 4].map((el, index) => {
                return (
                    <SwiperSlide className="">
                        <div className="border border p-4 h-full">
                            {" "}
                            {index == 2 ? (
                                <p>Lorem ipsum dolor sit amet.</p>
                            ) : (
                                index
                            )}
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}
