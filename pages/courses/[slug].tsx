import BannerWrapper from "../../components/common/BannerWrapper"
import Image from "next/image"
import Swoosh from "../../components/common/Swoosh"
import Faqs from "../../components/common/Faqs"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import { useWindowSize } from "../../components/home/Testimonials";
import { useEffect, useState } from "react";
// import { Autoplay, FreeMode, Navigation, Pagination } from "swiper";


export default function course(props) {

    const size = useWindowSize({ useEffect, useState });


    let specs = [
        { title: "Training Level", ans: "Beginner to Expert" },
        { title: "Foramte", ans: "Physical Class" },
        { title: "Duration", ans: "2.5 Months" },
        { title: "Career Prospect", ans: "Python Developer" },
    ]

    let faqs = [
        {
            title: "one",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias omnis reprehenderit quas saepe cupiditate, quia ipsa consequuntur ab quidem, blanditiis ex totam beatae doloremque, vero repellat doloribus architecto minus. Numquam?"
        },
        {
            title: "two",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias omnis reprehenderit quas saepe cupiditate, quia ipsa consequuntur ab quidem, blanditiis ex totam beatae doloremque, vero repellat doloribus architecto minus. Numquam?"
        },
        {
            title: "three",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias omnis reprehenderit quas saepe cupiditate, quia ipsa consequuntur ab quidem, blanditiis exipsum dolor sit amet consectetur adipisicing elit. Molestias omnis reprehenderit quas saepe cupiditate, quia ipsa consequuntur ab quidem, blanditiis exipsum dolor sit amet consectetur adipisicing elit. Molestias omnis reprehenderit quas saepe cupiditate, quia ipsa consequuntur ab quidem, blanditiis exipsum dolor sit amet consectetur adipisicing elit. Molestias omnis reprehenderit quas saepe cupiditate, quia ipsa consequuntur ab quidem, blanditiis ex totam beatae doloremque, vero repellat doloribus architecto minus. Numquam?"
        }
    ]

    return (

        <div>
            <BannerWrapper>
                <div className="container grid lg:grid-cols-[60%,40%] gap-[30px] items-center ">
                    <div>
                        <p className="header-md leading-[145%]  title-space text-center lg:text-left">Python with Django Training in Nepal</p>
                        <p className="md:text-[20px] text-primary">Mind Risers offers Python training courses in Nepal with the goal of preparing participants to create and deploy dynamic web applications. In addition to covering the architecture, templates, forms, and models of the Django web framework...</p>
                        <div className="mt-[30px] md:mt-[40px]">
                            <ul className=" relative grid md:grid-cols-2 gap-x-[40px] gap-y-[20px]  text-primary w-maxx
                            md:after:content-['']
                            md:after:absolute
                            md:after:left-0
                            md:after:right-0
                            md:after:top-[50%]
                            md:after:-translate-y-[50%]
                            md:after:mx-auto
                            md:after:h-[80%]
                            md:after:w-[1px]
                            md:after:border-l
                            md:after:border-primary
                            md:after:bg-primary
                           
                            ">
                                {
                                    specs.map(el => {
                                        return <li className="  ">
                                            <p className="grid grid-cols-2">
                                                <span className="capitalize">{el.title}</span>
                                                <span className="font-semibold capitalize pl-1">{el.ans}</span>
                                            </p>
                                        </li>
                                    })
                                }
                            </ul>

                            <div className="title-space-3xl-reverse flex justify-center gap-base-half">
                                <button className="btn-simple">Get Admission</button>
                                <button className="btn-simple-outline">Send Enquiry</button>
                            </div>

                        </div>
                    </div>
                    <Image alt="" width={500} height={500} className=" hidden lg:block border-4 border-primary rounded-[12px]" src={"https://mindrisers.com.np/_next/image?url=https%3A%2F%2Fmindrisers.com.np%2F%2Fstatic%2FImages%2Fcourses%2Fpython_c2iyOFB.jpg&w=640&q=75"} />
                </div>
            </BannerWrapper>

            <main className="container">
                <section className="section-wrapper-m">
                    <div className="grid lg:grid-cols-[70%,30%] gap-base-half">
                        <div>
                            <section>
                                <p className="border-b border-border flex gap-base-half">
                                    <span className="text-center inline-block p-[10px]  border-b-[3px] border-primary font-medium text-primary">Course Overview</span>
                                    <span className="text-center inline-block p-[10px]">Syllabus</span>
                                </p>
                            </section>
                            <section className="title-space-3xl-reverse title-space-xl">
                                <p className="sub-header-lg">Course Overview</p>
                                <p>Python with Django Training in Nepal

                                    Mind Risers offers Python training courses in Nepal with the goal of preparing participants to create and deploy dynamic web applications. In addition to covering the architecture, templates, forms, and models of the Django web framework, the course's curriculum also teaches students about the syntax, data types, and security features of the Python programming language. The goal is to offer hands-on instruction in developing and deploying web applications with Python and Django. This course presents the possibilities of Python and Django training available in Nepal, as well as the rising demand for developers in this industry as a result of the growth of e-commerce, digital marketing, and mobile apps. The training is appropriate for students, working professionals, freelancers, and entrepreneurs.

                                    Python is simple to learn high-level programming language best known for its readability, simplicity and versatility. It is generally used for web development, data analysis and ultimately for data science. The flexibility that the Django framework has created for programmers is remarkable as it has its own predefined back-end admin panel and also it can quickly create complex, scalable and secure web applications. Many built-in facilities like user authentication, database ORM, and the templating system have attracted several new developers in this community. Django sticks to the DRY (Don't Repeat Yourself) concept and the Model-View-Controller (MVC) design, making it simple to extend and maintain. In summary, Python with Django is indeed a strong web development combination that empowers programmers to create scalable, sustainable, and effective web applications.

                                    Learn Python programming language in Nepal with our expert developers at Mind Risers from basic to advanced. A framework like Django, one of the most popular programming frameworks in this digital age is in every company's demand. We have Python training courses in Nepal with a practical learning environment where you get intense, in-depth practical project-based learning.

                                    Mind Risers provides you with Python training courses from basic to advance with the guidance of experts. Within the course, you will have to work on a project using Python. The focus of the course is to critically engage students with intelligent approaches to creating interactive web apps using Python.</p>
                            </section>

                            <section className="">
                                <article className="title-space-3xl-reverse  title-space-xl">
                                    <p className="sub-header-lg" id="syllabus">Syllabus</p>
                                </article>
                            </section>
                            <section>
                                <Faqs faqs={faqs} /> {/* make it headless */}
                            </section>

                        </div>
                        <div className="">
                            <form onSubmit={() => {

                            }}
                            >
                                <div className="p-5 rounded-xl bg-orange-100 ">
                                    <p className="text-secondary mb-5">Quick Enquiry</p>
                                    <div className="form-group">
                                        <label htmlFor="" className="required-field form-label">Name</label>
                                        <input type="text" className="form-control" placeholder="Enter name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="" className="required-field form-label">Name</label>
                                        <input type="text" className="form-control " placeholder="Enter name" />
                                    </div>
                                    <div className="flex lg:justify-end  title-space-3xl-reverse">
                                        <button className="btn-secondary-simple   ">
                                            Submit Enquiry
                                        </button>
                                    </div>
                                </div>


                            </form>

                        </div>
                    </div>
                </section>
                <section className="section-wrapper-m">
                    <div className="text-primary flex justify-between title-space">
                        <p>Success Stories</p>
                        <p>View success stories</p>
                    </div>
                    <p className="sub-header-lg max-w-[633px]">See how <Swoosh type="secondary">Mindrisers</Swoosh> is helping learners get expertise and pursue their future.</p>
                    <div className="title-space-3xl-reverse">
                        <Swiper
                            className='custom-swiper-dots !overflow-x-clip !overflow-y-visible '
                            loop={false}
                            slidesPerView={size.width >= 1536 ? 3 : size.width >= 1280 ? 3 : size.width >= 768 ? 2 : 1}
                            spaceBetween={size.width >= 1536 ? 20 : size.width >= 1280 ? 20 : size.width >= 768 ? 15 : 10}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                                dynamicMainBullets: 3
                            }}
                            modules={[Pagination]}
                        >
                            {
                                [1, 2, 3, 4, 5].map(el => {
                                    return <SwiperSlide
                                        className="bg-green-50 border border-green-200 rounded-xl p-5 max-w-full md:min-w-[407px] select-none cursor-grab ">
                                        <div className="grid grid-cols-[40%,60%] gap-base-half title-space-xl">
                                            <Image src={"/assets/images/person.jpg"} className=" rounded-full border-4 border-primary aspect-square bg-cover" alt="" height={200} width={200} />
                                            <div>
                                                <p className="text-[18px] title-space leading-[28px] font-semibold text-gray-800">Diya Manandhar</p>
                                                <p>Digital Marketer</p>
                                                <p className="font-medium mt-[4px]"><span className="text-secondary">@</span> Global Vicors pvt ltd</p>
                                            </div>
                                        </div>
                                        <div className="title-space-xl">
                                            <p className="text-[12px] mb-[4px]">course taken</p>
                                            <p className="text-[18px] font-medium">Digital Marketing</p>
                                        </div>
                                        <div>
                                            <p className="text-[12px] mb-[4px]">college</p>
                                            <p className="text-[18px] font-medium">xyz college</p>
                                        </div>
                                    </SwiperSlide>
                                })
                            }
                        </Swiper>
                    </div>
                </section>

            </main>
        </div>
    )
}