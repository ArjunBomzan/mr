import Head from "next/head";
import BannerWrapper from "../components/common/BannerWrapper";
import { IoLocationSharp } from "react-icons/io5";

import { Inter } from '@next/font/google'
import Swoosh from "../components/common/Swoosh";
const inter = Inter({ subsets: ['latin'] })

export default function contact() {
    let meta_description = ""
    return (
        <div>
            <Head>
                <title>Contact</title>
                <meta name="keywords"
                    content="mindrisers nepal, courses,contact, it training center, kathmandu" />
                {/* facebook og tags */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={"MindRisers Contact | IT related courses in Kathmandu, Nepal"} />
                <meta property="og:description" content={meta_description} />
                {/* <meta property="og:image" content={meta_image} /> */}

                {/* twitter og tags */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="Mindrisers" /><meta name="twitter:creator" content="@mindrisers" />
                <meta property="twitter:title" content={"MindRisers contact | IT related courses in Kathmandu, Nepal"} />
                <meta property="twitter:description" content={meta_description} />
                {/* <meta name="twitter:image" content={meta_image} /> */}
            </Head>
            <BannerWrapper size="small">
                <div className="container text-center">
                    <p className="header-xl leading-[145%] title-space">Contact us</p>
                    <p className="text-xl font-semibold text-primary">We would love to talk to you</p>
                </div>
            </BannerWrapper>
            <section className="container section-wrapper-m">
                <div className="grid  lg:grid-cols-2 gap-base-double !2xl:gap-[9.375rem]">
                    <form className="section-p bg-orange-100 rounded-xl">
                        <div className="text-center title-space-3xl">
                            <p className="header-md text-secondary title-space ">Tell us about yourself</p>
                            <p>Whether you have questions or you would just like to say hello, contact us.</p>
                        </div>
                        <div className="grid  md:grid-cols-2 gap-x-5 title-space-3xl">
                            <div className="form-group">
                                <label htmlFor="" className="required-field form-label">Name</label>
                                <input type="text" className="form-control" placeholder="Enter name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="require-field form-label">Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="require-field form-label">Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="require-field form-label">Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="require-field form-label">Name</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="flex justify-end ">
                            <button className="btn btn-secondary-simple ">Send Enquiry</button>
                        </div>
                    </form>
                    <div className="">
                        <div className="title-space-3xl text-center lg:text-left ">
                            <p className=" title-space sub-header-lg leading-[145%]">Contact us by Phone or Location</p>
                            <p className="text-lg">We are 24*7 available to help you out.</p>
                        </div>
                        <div className=" text-xl 2xl:text-2xl">
                            <ul className="flex flex-col items-center lg:items-start">
                                <li className=" font-medium flex items-center gap-5">
                                    <IoLocationSharp className="text-primary" />
                                    <span className={inter.className}>Kumari Galli 2, Kathmandu 44600</span>
                                </li>
                                <li className=" font-medium flex items-center gap-5">
                                    <IoLocationSharp className="text-primary" />
                                    <span className={inter.className}>Kumari Galli 2, Kathmandu 44600</span>
                                </li>
                                <li className=" font-medium flex items-center gap-5">
                                    <IoLocationSharp className="text-primary" />
                                    <span className={inter.className}>Kumari Galli 2, Kathmandu 44600</span>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-wrapper-m container">
                <p className="header-md text-center title-space-3xl"><Swoosh type="secondary">Visit us at</Swoosh></p>
                <div className="bg-orange-100 p-[0.625rem] rounded-xl overflow-hidden">
                    <iframe className="w-full bg-gray-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7065.320961881295!2d85.31935314317536!3d27.696886654753925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19688077a1ff%3A0x3ea9b1c08b4234dc!2sMind%20Risers%20Consortium%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1702963933651!5m2!1sen!2snp" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
        </div>
    )
}