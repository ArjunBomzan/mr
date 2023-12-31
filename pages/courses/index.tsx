import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import BannerWrapper from "../../components/common/BannerWrapper";
import Image from "next/image";
import Swoosh from "../../components/common/Swoosh";
import CoursesList from "../../components/common/CoursesList";
import { makeFullApiUrl } from "../../utils/makeFullUrl";
import TypeWriter from "../../components/common/TypeWriter";
import { typeWriters } from "..";

export async function getStaticProps() {
    // export async function getServerSideProps({query}) {
    let data = [];
    try {
        const res = await fetch(
            `https://mindrisers.com.np/blog/api/v1/course/`,
        );

        data = await res.json();
    } catch (err) {}

    return {
        props: { courses_all: data },

        revalidate: 60 * 1,
    };
}

const Courses = ({ courses_all }) => {
    let [courses, setcourses] = useState(courses_all); 

    const router = useRouter();

    // useEffect(() => {
    //     const fetchCourses = async () => {
    //         if (router.isReady) {
    //             try {
    //                 console.log(
    //                     makeFullApiUrl(
    //                         `/course/?tag=` + (router.query.tag || ""),
    //                     ),
    //                 );
    //                 let data = [];
    //                 const res = await fetch(
    //                     makeFullApiUrl(
    //                         `/course/?tag=` + (router.query.tag || ""),
    //                     ),
    //                 );
    //                 data = await res.json();

    //                 setcourses(data);
    //             } catch (err) {
    //                 console.log(err);
    //             }
    //         }
    //     };
    //     fetchCourses();
    // }, [router.isReady, router.query.tag]);

    let meta_description =
        "Are you searching for a Practical IT Training Center in Kathmandu Nepal then Mindrisers is the perfect platform for you to learn Digital Skils";
    let meta_image = `${process.env.NEXT_PUBLIC_DOMAIN}/assets/images/courses.png`;

   
    return (
        <>
            <Head>
                <title>Courses offered by mindrisers consortium</title>
                <meta
                    name="keywords"
                    content="mindrisers nepal, courses, it training center, kathmandu"
                />
                {/* facebook og tags */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content={
                        "Mindrisers Courses | IT related courses in Kathmandu, Nepal"
                    }
                />
                <meta property="og:description" content={meta_description} />
                <meta property="og:image" content={meta_image} />

                {/* twitter og tags */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="Mindrisers" />
                <meta name="twitter:creator" content="@mindrisers" />
                <meta
                    property="twitter:title"
                    content={
                        "Mindrisers Courses | IT related courses in Kathmandu, Nepal"
                    }
                />
                <meta
                    property="twitter:description"
                    content={meta_description}
                />
                <meta name="twitter:image" content={meta_image} />
            </Head>

            <BannerWrapper>
                <div className="lg:pt-[30px]] container grid items-center gap-[20px] text-center  lg:grid-cols-[60%,40%] lg:text-left xl:gap-[40px]">
                    <div>
                        <h1 className="header-xl title-space">
                            Learn Top IT Skills
                        </h1>

                        {/* <p className="title-lg mb-[30px] flex items-center justify-center  text-primary md:gap-[11px]  lg:justify-start">
                            <span>{`<h2>`}</span>
                            <span className="xl:header-lg text-expanded-sm uppercase font-semibold !text-secondary  ">
                                {" "}
                                <TypeWriter contents={typeWriters} />
                            </span>
                            <span>{`</h2>`}</span>
                        </p> */}
                        <p className="title-lg borde mb-[30px] flex max-w-full items-center justify-center gap-[5px] text-primary transition-all duration-[6s] !ease-in lg:justify-start md:gap-[11px] ">
                            <span>{`<h2>`}</span>
                            <TypeWriter contents={typeWriters} />
                            <span>{`</h2>`}</span>
                        </p>


                        <p className=" mb-5 flex items-center justify-center gap-[10px] lg:justify-start">
                            <span className="header-xl">with</span>
                            <span className="header text-secondary ">
                                <Swoosh>Mindrisers</Swoosh>
                            </span>
                        </p>
                        <p className="text-[20px] text-primary">
                            We provide variety of market demand IT skill courses
                            at Mindrisers. Explore courses and start your IT
                            journey with us.
                        </p>
                    </div>
                    <Image
                        alt=""
                        height={600}
                        width={600}
                        className="hidden h-auto w-full lg:inline-block"
                        src="/assets/images/courses/banner-image.svg"
                    />
                </div>
            </BannerWrapper>
            <section className="section-wrapper-m">
                <div className="text-center">
                    <h2 className="sub-header-lg title-space">
                        Explore <Swoosh type="secondary">Skill Courses</Swoosh>
                    </h2>
                    <p className="text-[20px] text-primary">
                        Explore our courses
                    </p>
                </div>
                <div className="title-space-6xl-reverse  !2xl:title-space-5xl-reverse container">
                    <CoursesList courses={courses} />
                </div>
            </section>
        </>
    );
};

export default Courses;
