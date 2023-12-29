import Head from "next/head";
import BannerWrapper from "../components/common/BannerWrapper";
import Image from "next/image";
import Swoosh from "../components/common/Swoosh";
import Opportunity from "../public/assets/images/common/Opportunity";
import { makeFullApiUrl } from "../utils/makeFullUrl";

const services = ({ successStoreis }) => {
    console.log(successStoreis);

    let meta_title = " Internships | Job Placements | Mindrisers Nepal";
    let meta_description = "";
    return (
        <>
            <Head>
                <title>Success stories of mindrisers trainees</title>
                <meta
                    name="keywords"
                    content="best computer institute in kathmandu,it courses in nepal, Computer Training Institute in kathmandu Nepal, Professional IT Training institute in Nepal, computer learning center , computer training center in nepal, computer courses in nepal ,computer institute in nepal, python programming, python course in nepal, python training in nepal, learn python in nepal, python training in kathmandu, python, learn python, python language, python coding, python certification, python basics, flutter framework training, flutter framework training in nepal, graphic design in nepal, graphic design course in nepal, graphic design training in nepal, graphic design course fee in nepal, graphic designer course in nepal, graphic design course in kathmandu, graphic design company in nepal, graphic designing course price in nepal, cost of graphic design course in nepal, graphic designer nepal, graphic design in kathmandu, mern stack course in Nepal, mern stack training in Nepal, mern stack training in Kathmandu, mern stack training centre in Kathmandu, digital marketing course in Nepal, digital marketing training in Nepal, digital marketing course in Kathmandu, digital marketing training in Kathmandu, learn digital marketing, digital marketing, online marketing, digital marketing agency, marketing agency, digital marketing courses, digital marketing company, digital marketing services, google digital marketing, web design course in Nepal, web design training in Kathmandu, web designing course price in Nepal, web designing course in Kathmandu, web page designing course in Nepal, cost of web designing course in Nepal, web designing in Nepal, Placement Parner ,Interships , Job Placements"
                />
                {/* facebook og tags */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={meta_title} />
                <meta property="og:description" content={meta_description} />
                {/* <meta property="og:image" content={meta_image} /> */}

                {/* twitter og tags */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="Mindrisers" />
                <meta name="twitter:creator" content="@mindrisers" />
                <meta property="twitter:title" content={meta_title} />
                <meta
                    property="twitter:description"
                    content={meta_description}
                />
                {/* <meta name="twitter:image" content={meta_image} /> */}
            </Head>
            <BannerWrapper>
                <div className="container ">
                    <div className=" gap-base  grid   items-center lg:grid-cols-[60%,40%]">
                        <div className="text-center lg:text-left">
                            <h1>
                                <span className="header-xl block leading-[145%]">
                                    You are at great
                                </span>
                                <span className="header-xl block leading-[145%] text-secondary">
                                    Hand !
                                </span>
                            </h1>

                            <p className=" title mt-5 text-primary">
                                We have provided more than 1000s of experts to
                                the market. Know about few who are doing
                                extraordinary in various companies in their
                                niche.
                            </p>
                        </div>
                        <Image
                            src={"/assets/images/gallery/people-chatting 1.svg"}
                            alt=""
                            height={500}
                            width={500}
                            className="hidden w-full lg:block"
                        />
                    </div>
                </div>
            </BannerWrapper>
            <section className="section-wrapper-m container">
                <div className="text-center">
                    <p className="text-primary">Success Stories</p>
                    <h2 className="title-space sub-header-lg mx-auto max-w-[633px] ">
                        See how <Swoosh type="secondary">Mindrisers</Swoosh> is
                        helping learners get expertise and pursue their future.
                    </h2>
                </div>
                <div className="section-wrapper-p-sm">
                    <ul className="flex flex-wrap justify-center gap-[12px] ">
                        {["all", "digital marketing", "flutter", "python"].map(
                            (el) => {
                                return (
                                    <li className="rounded-xl bg-green-50 p-[10px] text-[14px] capitalize leading-[145%] text-primary">
                                        {el}
                                    </li>
                                );
                            },
                        )}
                    </ul>
                </div>
                <div>
                    <ul className="mt-[65px] grid gap-x-[40px] gap-y-[85px] md:grid-cols-2 xl:grid-cols-4">
                        {successStoreis.map((el) => {
                            return (
                                <li className="hover:shadow-small relative rounded-xl border border-border p-5 pt-[80px] transition hover:border-primary ">
                                    <Image
                                        priority
                                        src={el.image}
                                        alt=""
                                        height={400}
                                        width={400}
                                        className="absolute left-0 right-0 top-0 mx-auto h-[130px]  w-[130px] -translate-y-[50%] rounded-full border-8 border-green-100 object-cover"
                                    />
                                    <div className="mb-5 text-center leading-[28px]">
                                        <p className="title mb-[10px] font-semibold text-gray-950 ">
                                            Kiran
                                        </p>
                                        <h2 className="mb-[4px]">{el.title}</h2>
                                        <p className="font-medium">
                                            <span className="text-secondary">
                                                @
                                            </span>
                                            Varosa Technology
                                        </p>
                                    </div>
                                    <div className="border-t border-border">
                                        <div className="mt-5">
                                            <p className="title-xxs mb-[4px]">
                                                Course taken
                                            </p>
                                            <p className="text-[18px] font-medium leading-[28px]">
                                                Q&A Automation
                                            </p>
                                        </div>
                                        <div className="my-5">
                                            <h3 className="title-xxs mb-[4px]">
                                                Tools learned
                                            </h3>
                                            <ul className="flex gap-[20px]">
                                                <li>
                                                    <Image
                                                        className="rounded"
                                                        src={
                                                            "/assets/images/gallery/fa6-brands_square-js.svg"
                                                        }
                                                        height={24}
                                                        width={24}
                                                        alt=""
                                                    />
                                                </li>
                                                <li>
                                                    <Image
                                                        className="rounded"
                                                        src={
                                                            "/assets/images/gallery/fa6-brands_square-js.svg"
                                                        }
                                                        height={24}
                                                        width={24}
                                                        alt=""
                                                    />
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="title-xxs mb-[4px]">
                                                {" "}
                                                College
                                            </p>
                                            <p className="text-[18px] font-medium leading-[28px]">
                                                Global Capital College
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>
            <section className="contianer section-wrapper-m">
                <Opportunity />
            </section>
        </>
    );
};

export async function getStaticProps() {
    let data = [];
    try {
        const res = await fetch(makeFullApiUrl(`/successstoryhome/`));
        data = await res.json();
    } catch (err) {}
    return {
        props: { successStoreis: data },
        // revalidate: 60 * 60 * 24  //  1 day
        revalidate: 60 * 1, // this may cause server unndecessary loads, since the data merely gets changed. but it is definately better than SSR ?  SSR doesnot trigger the html and store it  while ISR does -> ISR > SSR cause SSR will also create load on server since, every time, the server needs to create html and send as response while ISR will simply cache it and set it.
    };
}

export default services;
