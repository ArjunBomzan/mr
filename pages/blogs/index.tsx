import Head from "next/head";
import Blogs from "../../components/BlogsComponents/Blogs";
import Header from "../../components/HeaderComponents/Header";
import BannerWrapper from "../../components/common/BannerWrapper";
import Image from "next/image";
import Swoosh from "../../components/common/Swoosh";



import React from 'react'

export function BlogCard() {
    return (
        <li className=" ">
            <Image
                src={"/assets/images/blogs/image 46.png"} alt="" width={500} height={500}
                className="h-[176px] w-full rounded-tr-xl rounded-tl-xl "
            />
            <div className="p-5 border border-border rounded-br-xl rounded-bl-xl ">
                <p className="title font-semibold leading-[145%]">MERN Stack project to grab your first Internship in Kathmandu? | Mindrisers</p>
                <div className="flex justify-between mt-[13px] text-[14px]">
                    <span>Coding</span>
                    <span>.</span>
                    <span>Apr 23, 2023</span>
                    <span>.</span>
                    <span>365 Views</span>
                </div>
            </div>
        </li>
    )
}


export default function blogs({ blogs, total_data, current_page }) {

    let meta_description = "Are you searching for a Practical IT Training Center in Kathmandu Nepal then MindRisers is the perfect platform for you to learn Digital Skils"
    let meta_image = `${process.env.NEXT_PUBLIC_DOMAIN}/assets/images/blogs.png`

    let blogsContainerClass = "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-x-base-half gap-y-base "

    return (
        <div>
            <Head>
                <title>Blogs - Trends, Ideas and Tips </title>
                <meta name="keywords"
                    content="mindrisers nepal, blogs, it training center, kathmandu" />
                {/* facebook og tags */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={"Blogs | MindRisers Nepal"} />
                <meta property="og:description" content={meta_description} />
                <meta property="og:image" content={meta_image} />

                {/* twitter og tags */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="Mindrisers" /><meta name="twitter:creator" content="@mindrisers" />
                <meta property="twitter:title" content={"Blogs | MindRisers Nepal"} />
                <meta property="twitter:description" content={meta_description} />
                <meta name="twitter:image" content={meta_image} />
            </Head>

            <BannerWrapper size="small">
                <div className="container  ">
                    <div className="text-center">
                        <p className="header-xl title-space leading-[145%]">Blogs</p>
                        <p className="text-primary font-semibold title">Our Latest updates and hand-picked resources</p>
                    </div>

                </div>
            </BannerWrapper>
            <div className="section-wrapper-m">
                <div className="section-space container">
                    <ul className="flex gap-[12px] flex-wrap justify-center lg:justify-start  ">
                        {
                            ["all", "digital marketing", "flutter", "python"].map(el => {
                                return <li className="rounded-xl capitalize p-[10px] bg-green-50 text-primary text-[14px] leading-[145%]">
                                    {el}
                                </li>
                            })
                        }
                    </ul>
                </div>

                <section className="container">
                    <ul className={blogsContainerClass}>
                        {
                            new Array(8).fill(null).map(el => {
                                return <BlogCard />
                            })
                        }
                    </ul>
                </section>

                <div className="container">
                    <section className="bg-green-50 section-wrapper-m-xxs p-[20px] md:p-[30px] lg:p-[40px]  rounded-3xl">  {/* TODO: 40px  = my-8 */}
                        <div className="flex flex-col md:flex-row justify-between items-center gap-[20px] md:gap-0">
                            <div>
                                <p className="header-md mb-5">Getting <Swoosh type="secondary">interested ?</Swoosh></p>
                                <p className="text-primary max-w-[465px] lg:max-w-[570px] capitalize">Surf tons of courses provided by us which helps you learn market-fit skills and land a great job.</p>
                            </div>
                            <button className="btn" type="button">
                                View Courses
                            </button>
                        </div>
                    </section>
                </div>

                <section className="container">
                    <ul className={blogsContainerClass}>
                        {
                            new Array(8).fill(null).map(el => {
                                return <BlogCard />
                            })
                        }
                    </ul>
                </section>
                <section className="mt-10 container flex flex-col md:flex-row gap-5 md:gap-0 justify-center items-center  md:justify-between">
                    <p>Showing 10 out of 100</p>
                    <div className="flex gap-[10px] ">
                        <span className="border border-white-600 rounded-full p-[10px]">01</span>
                        <span className="border border-white-600 rounded-full p-[10px]">02</span>
                        <span className="border border-white-600 rounded-full p-[10px]">03</span>
                    </div>
                </section>
            </div>


        </div>
    )
}