import Head from "next/head";
import BannerWrapper from "../components/common/BannerWrapper";
import { IoLocationSharp } from "react-icons/io5";

import { Inter } from "@next/font/google";
import Swoosh from "../components/common/Swoosh";
import DropMessage from "../components/ContactUsComponents/DropMessage";
import ContactDetails from "../components/ContactUsComponents/ContactDetails";
const inter = Inter({ subsets: ["latin"] });

export default function contact() {
    let meta_description = "";
    return (
        <div>
            <Head>
                <title>Contact</title>
                <meta
                    name="keywords"
                    content="mindrisers nepal, courses,contact, it training center, kathmandu"
                />
                {/* facebook og tags */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content={
                        "MindRisers Contact | IT related courses in Kathmandu, Nepal"
                    }
                />
                <meta property="og:description" content={meta_description} />
                {/* <meta property="og:image" content={meta_image} /> */}

                {/* twitter og tags */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="Mindrisers" />
                <meta name="twitter:creator" content="@mindrisers" />
                <meta
                    property="twitter:title"
                    content={
                        "MindRisers contact | IT related courses in Kathmandu, Nepal"
                    }
                />
                <meta
                    property="twitter:description"
                    content={meta_description}
                />
                {/* <meta name="twitter:image" content={meta_image} /> */}
            </Head>
            <BannerWrapper size="small">
                <div className="container text-center">
                    <h1>
                        <span className="header-xl title-space block leading-[145%]">
                            Contact us
                        </span>
                        <span className="block text-xl font-semibold text-primary">
                            We would love to talk to you
                        </span>
                    </h1>
                </div>
            </BannerWrapper>
            <section className="section-wrapper-m container">
                <div className="gap-base-double  !2xl:gap-[9.375rem] grid lg:grid-cols-2">
                    <DropMessage />
                    <ContactDetails />
                    <div className="hidden">
                        <div className="title-space-3xl text-center lg:text-left ">
                            <h2 className=" title-space sub-header-lg leading-[145%]">
                                Contact us by Phone or Location
                            </h2>
                            <p className="text-lg">
                                We are 24*7 available to help you out.
                            </p>
                        </div>
                        <div className=" text-xl 2xl:text-2xl">
                            <ul className="flex flex-col items-center lg:items-start">
                                <li className=" flex items-center gap-5 font-medium">
                                    <IoLocationSharp className="text-primary" />
                                    <span className={inter.className}>
                                        Kumari Galli 2, Kathmandu 44600
                                    </span>
                                </li>
                                <li className=" flex items-center gap-5 font-medium">
                                    <IoLocationSharp className="text-primary" />
                                    <span className={inter.className}>
                                        Kumari Galli 2, Kathmandu 44600
                                    </span>
                                </li>
                                <li className=" flex items-center gap-5 font-medium">
                                    <IoLocationSharp className="text-primary" />
                                    <span className={inter.className}>
                                        Kumari Galli 2, Kathmandu 44600
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-wrapper-m container">
                <h2 className="header-md title-space-3xl text-center">
                    <Swoosh type="secondary">Visit us at</Swoosh>
                </h2>
                <div className="overflow-hidden rounded-xl bg-orange-100 p-[0.625rem]">
                    <iframe
                        className="w-full bg-gray-100"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7065.320961881295!2d85.31935314317536!3d27.696886654753925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19688077a1ff%3A0x3ea9b1c08b4234dc!2sMind%20Risers%20Consortium%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1702963933651!5m2!1sen!2snp"
                        width="600"
                        height="450"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
        </div>
    );
}
