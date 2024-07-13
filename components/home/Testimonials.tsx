import { Swiper, SwiperSlide } from "swiper/react";
import {
    Navigation,
    Pagination,
    Autoplay,
    FreeMode,
    Scrollbar,
    A11y,
} from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Rating from "../common/Rating";
import Swoosh from "../common/Swoosh";
import { useEffect, useState } from "react";

export function useWindowSize(props) {
    const [windowSize, setWindowSize] = props?.useState({
        width: undefined,
        height: undefined,
    });
    props?.useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}

export default function Testimonials({testimonials:testimonailasData}) {
    const size = useWindowSize({ useEffect, useState });

    const testimonailasData1 = [
        {
            starCount: 5,
            image: "img",
            name: "",
            company: "Realpath Engineering Consulancy Pvt.Ltd.",
            position: "CEO",
            testimonial:
                "Thank you Mindrisers for making our job easy for Human resource (HR) department.",
        },
        {
            starCount: 5,
            image: "img",
            name: "",
            company: "Pentagram Consulting & Construction Pvt. Ltd.",
            position: "CEO",
            testimonial:
                "In only 5-6 months we have experienced rapid growth in our social media marketing. All thanks to Mindrisers Consortium, the best team with the best manpower to uplift your Business.",
        },
        {
            starCount: 5,
            image: "img",
            name: "",
            company: "Prabhu Group/Prabhu Pay",
            position: "CEO",
            testimonial:
                "We chose Mindrisers Consortium because we simply could not find any other providers that offered all the services we needed. Great Team with great services.",
        },
        {
            starCount: 5,
            image: "img",
            name: "Samip ChudaL",
            company: "Damak Nagar Palika",
            position: "IT Officer",
            testimonial:
                "We chose Mindrisers Consortium because it provides good services and offers we need.",
        },
        {
            starCount: 5,
            image: "img",
            name: "Khushal Regmi",
            position: "Vice President",
            company: "CAN",
            testimonial: "It provides good services and offers we need.",
        },
        {
            starCount: 5,
            image: "img",
            name: "Kritika Shah",
            position: "CEO",
            company: "Tummy Truck",
            testimonial:
                "Mindrisers is the best in town for providing sound knowledge to freshers.",
        },
        {
            starCount: 5,
            image: "img",
            name: "Safal Sharma",
            position: "CEO",
            company: "Rato Pati",
            testimonial:
                "Service is all what you expect when you are bound to work with providers and whom we are connected with it's Mindrisers Consortium. The best team to provide efficient and timely service.",
        },
        {
            starCount: 5,
            image: "img",
            name: "Niranjan Kandel ",
            company: "Reliance Life Insurance",
            position: "Deputy CEO",
            testimonial:
                "What makes you happy is when your business meets your customer's satisfaction. Mindrisers Consortium made this part so easy and effective, thank you!",
        },
        {
            starCount: 5,
            image: "img",
            name: "",
            company: "EVO Store",
            position: "Digital Marketing Department",
            testimonial:
                "We can positively say Mindrisers provides the best knowledge and services to our clients. We are very happy with the service we received from Mindrisers Consortium.",
        },
        {
            starCount: 5,
            image: "img",
            compnay: "VEDA",
            name: "Sanjan Piya",
            position: "Co-founder",
            testimonial:
                "Extremely satisfied with Mindrisers Consortium. The best team to deal with, helpful, friendly, and service-oriented.",
        },
        {
            starCount: 5,
            image: "img",
            name: "",
            company: "Samanantar Group",
            position: "HR Department",
            testimonial:
                "We greatly appreciate Mindrisers Consortium, an amazing team who are keen to help in every step of the way to support with all the software.",
        },
        {
            starCount: 5,
            image: "img",
            company: "Grow By Data",
            name: "Suresh Thapa",
            position: "Development Team Head",
            testimonial: "Unbelievably helpful with great services you seek.",
        },
    ];

    return (
        <section
            className="section-wrapper-m section-wrapper-p-double bg-gray bg-center"
            style={{
                backgroundImage:
                    "url('/assets/images/testimonials/stroke-bg.svg')",
            }}
        >
            <div className="container">
                <h2 className="header-lg title-space-4xl text-center">
                    What our <Swoosh type="secondary"> Students</Swoosh>{" "}
                    says about us
                </h2>
            </div>
            <div>
                <Swiper
                    className="custom-swiper-dots !overflow-x-clip !overflow-y-visible"
                    // className="items-stretch"
                    loop={false}
                    slidesPerView={
                        size.width >= 1536
                            ? 5
                            : size.width >= 1280
                              ? 4
                              : size.width >= 768
                                ? 3
                                : size.width >= 576
                                  ? 2
                                  : 1.1
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
                    /* TODO: add dots in both screens  */
                    modules={[Pagination]}
                >
                    {testimonailasData.map((el) => {
                        return (
                            <SwiperSlide className="">
                                <div className="relative min-h-[350px] cursor-move rounded-xl bg-white p-5 text-gray-600">
                                    <Rating rating={el.review} />
                                    <p className=" testimonial-card-clamp clamp-7  my-5 custom-sidebar">
                                        {el.testimonial}
                                    </p>
                                    <div className="h-1 w-1/5 rounded-2xl bg-border "></div>
                                    <div className="absolute bottom-5 left-5 right-5 mt-5">
                                        <p className="mb-1 text-sm font-bold flex items-center">
                                            <Image alt={el.student_photo} src={el.student_photo} width={32} height={32}/>
                                            &nbsp;
                                            &nbsp;
                                            <span>{el.student_name}</span>
                                        </p>
                                        {/* <p className="mb-1 text-sm">
                                            {el.course_taken}
                                        </p> */}
                                        {/* <p>{el.company}</p> */}
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
}
