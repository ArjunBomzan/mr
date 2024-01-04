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
import { FaSearch } from "react-icons/fa";

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
    const [allCourses, setAllCourses] = useState(courses_all);
    const [courses, setcourses] = useState(courses_all);
    const [searchTerm, setSearchTerm] = useState("");
    const [tag, setTag] = useState("");
    const [showSpinner, setShowSpinner] = useState(false);
    const [changedOnce, setChangedOnce] = useState(false);

    const router = useRouter();

    const fetchCourses = async () => {
        setShowSpinner(true);

        try {
            let data = [];
            const res = await fetch(
                makeFullApiUrl(
                    `/course/?tag=` +
                        (router.query.tag || "") +
                        `&search=${router.query.q || ""}`,
                ),
            );
            data = await res.json();

            setcourses(data);
        } catch (err) {
            console.log(err);
        }
        setShowSpinner(false);
    };
    useEffect(() => {
        if (router.query.tag) {
            setTag(`${router.query.tag || ""}`);
        }
        if (router.query.q) {
            setSearchTerm(`${router.query.q || ""}`);
        }
        console.log("router-query", router.query);
    }, [router.isReady]);

    useEffect(() => {
        if (changedOnce) {
            fetchCourses();
        }
        setChangedOnce(true);
    }, [router.query.tag, router.query.q]);
    // }, [tag, searchTerm]);

    let meta_description =
        "Are you searching for a Practical IT Training Center in Kathmandu Nepal then Mindrisers is the perfect platform for you to learn Digital Skils";
    let meta_image = `${process.env.NEXT_PUBLIC_DOMAIN}/assets/images/courses.png`;

    let recommendedCourses = allCourses.filter((el) => {
        if (courses.find((existing) => existing.id == el.id)) {
            return false;
        }
        return true;
    });

    // if(courses.length == 0){
    //     recommendedCourses =
    // }

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
                        <p className="title-lg borde mb-[30px] flex max-w-full items-center justify-center gap-[5px] text-primary transition-all duration-[6s] !ease-in md:gap-[11px] lg:justify-start ">
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
            {/* searchTerm{searchTerm}
            tag{tag} */}
            <div className=" section-wrapper-m container flex flex-col lg:flex-row gap-[24px] justify-between">
                <ul className="flex flex-wrap justify-center gap-[12px] lg:justify-start   ">
                    {[
                        "digital marketing",
                        "flutter",
                        "python",
                        "frontend",
                        "database",
                    ].map((el) => {
                        return (
                            <li
                                onClick={() => {
                                    router.replace({
                                        query: {
                                            tag: el,
                                        },
                                    });
                                    setTag(el);
                                }}
                                className="cursor-pointer rounded-xl bg-green-50 p-[10px] text-[14px] capitalize leading-[145%] text-primary"
                            >
                                {el}
                            </li>
                        );
                    })}
                </ul>
                <form
                    className="flex items-center gap-2 "
                    onSubmit={(e) => {
                        e.preventDefault();
                        router.replace({
                            query: {
                                q: (e.target as HTMLFormElement).searchTerm
                                    .value, //Property 'searchTerm' does not exist on type 'EventTarget
                            },
                        });
                        setSearchTerm(
                            (e.target as HTMLFormElement).searchTerm.value,
                        );
                    }}
                >
                    <input
                        name="searchTerm"
                        type="text"
                        className=" lg:min-w-52 form-control border border-border px-4 py-2 focus:border-primary focus:text-primary focus:outline-none"
                    />
                    <button className="btn-simple">
                        <FaSearch />
                    </button>
                </form>
            </div>
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
            {recommendedCourses.length != 0 && (
                <section className="section-wrapper-m">
                    <div className="text-center">
                        <h2 className="sub-header-lg title-space">
                            Recommended For{" "}
                            <Swoosh type="secondary">You</Swoosh>
                        </h2>
                    </div>
                    <div className="title-space-6xl-reverse  !2xl:title-space-5xl-reverse container">
                        <CoursesList courses={recommendedCourses} />
                    </div>
                </section>
            )}
            {showSpinner && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black  bg-opacity-60">
                    <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-white"></div>
                </div>
            )}
        </>
    );
};

export default Courses;
