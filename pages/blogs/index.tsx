import Head from "next/head";
import BannerWrapper from "../../components/common/BannerWrapper";
import Image from "next/image";
import Swoosh from "../../components/common/Swoosh";

import React, { useEffect, useState } from "react";
import Pagination from "rc-pagination";
import { useRouter } from "next/router";
import { makeFullApiUrl, makeFullUrl } from "../../utils/makeFullUrl";
import formatDate from "../../utils/formatDate";
import Link from "next/link";

const perPage = 16;

const PrevIcon = () => {
    return <span>{`<`}</span>;
};
const NextIcon = () => {
    return <span>{`>`}</span>;
};

export function BlogCard({
    thumbnail,
    title,
    blurb,
    url,
    imgAlt,
    index,
    slug,
    created_at,
    views
}) {
    const router = useRouter();
    const type = router.pathname.split("/")[1];
    return (
        <li
            className=" hover:shadow-medium   group  transition-all hover:-translate-y-1 hover:translate-x-1 rounded-bl-xl rounded-br-xl rounded-tl-xl rounded-tr-xl"
            title={title}
        >
            <Link href={"/blogs/" + slug} className="flex h-full flex-col">
                <Image
                    
                    src={makeFullUrl(thumbnail)}
                    alt=""
                    width={500}
                    height={500}
                    className="h-[176px] w-full rounded-tl-xl rounded-tr-xl "
                />
                <div className="relative flex-grow rounded-bl-xl rounded-br-xl border border-t-0 border-border p-5 pb-14 transition-all duration-1000  ">
                    <h2 className="title font-semibold leading-[145%]">
                        {title}
                    </h2>
                    <div>
                        <div className="hidde absolute bottom-5 left-0 right-0 flex w-full justify-between px-5 text-[14px]">
                            {/* <span>Coding</span>
                            <span>.</span> */}
                            <span>{formatDate(created_at)}</span>
                            <span>.</span>
                            <span>{views} Views</span>
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    );
}

export default function blogs({
    blogs: data,
    total_data: td,
    current_page: cp,
}) {
    const [blogs, setBlogs] = useState(data);
    const [total_data, setTotalData] = useState(td);
    const [current_page, setCurrentPage] = useState(cp);
    const [searchTerm, setSearchTerm] = useState("");
    const [showSpinner, setShowSpinner] = useState(false);
    const [changedOnce, setChangedOnce] = useState(false);

    const router = useRouter();

    const fetchData = async () => {
        setShowSpinner(true);
        try {
            const res = await fetch(
                makeFullApiUrl(
                    `/singleblog/?size=${perPage}&search=${searchTerm}&page=${current_page}&client-side`,
                ),
            );
            const data = await res.json();
            setBlogs(data?.navigation?.data || []);
            setTotalData(data?.navigation?.total_data || 0);
        } catch (err) {}
        setShowSpinner(false);
    };

    useEffect(() => {
        if (router.query.page) {
            setCurrentPage(parseInt(`${router.query.page}`));
        }
        if (router.query.q) {
            setSearchTerm(`${router.query.q || ""}`);
        }
    }, [router.isReady]);

    useEffect(() => {
        // if ( (router.query.page || router.query.q)) {
        if (changedOnce) {
            fetchData();
        }
        setChangedOnce(true);
        // }
    }, [current_page]);

    let meta_description =
        "Are you searching for a Practical IT Training Center in Kathmandu Nepal then Mindrisers is the perfect platform for you to learn Digital Skils";
    let meta_image = `${process.env.NEXT_PUBLIC_DOMAIN}/assets/images/blogs.png`;

    let blogsContainerClass =
        "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-x-base-half gap-y-base ";

    const middleIndex = Math.ceil(blogs.length / 2);
    const firstHalf = blogs.slice(0, middleIndex);
    const secondHalf = blogs.slice(middleIndex);

    return (
        <div>
            <Head>
                <title>Blogs - Trends, Ideas and Tips </title>
                <meta
                    name="keywords"
                    content="mindrisers nepal, blogs, it training center, kathmandu"
                />
                {/* facebook og tags */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content={"Blogs | Mindrisers Nepal"}
                />
                <meta property="og:description" content={meta_description} />
                <meta property="og:image" content={meta_image} />

                {/* twitter og tags */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="Mindrisers" />
                <meta name="twitter:creator" content="@mindrisers" />
                <meta
                    property="twitter:title"
                    content={"Blogs | Mindrisers Nepal"}
                />
                <meta
                    property="twitter:description"
                    content={meta_description}
                />
                <meta name="twitter:image" content={meta_image} />
            </Head>

            <BannerWrapper size="small">
                <div className="container  ">
                    <div className="text-center">
                        <h1 className="header-xl title-space leading-[145%]">
                            Blogs
                        </h1>
                        <p className="title font-semibold text-primary">
                            Our Latest updates and hand-picked resources
                        </p>
                    </div>
                </div>
            </BannerWrapper>

            <div className="section-wrapper-m ">
                <div className="section-space container">
                    <ul className="flex flex-wrap justify-center gap-[12px] lg:justify-start  ">
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

                <section className="container">
                    <ul className={blogsContainerClass}>
                        {firstHalf?.map((blog) => {
                            return (
                                <BlogCard
                                    index={true}
                                    title={blog.title}
                                    blurb={blog.short_desc}
                                    thumbnail={blog.img ? blog.img : blog.image}
                                    // md={
                                    //     "We help you get placed in top companies."
                                    // }
                                    url={blog.slug}
                                    imgAlt={blog.title}
                                    key={blog.slug}
                                    slug={blog.slug}
                                    created_at={blog.created_at}
                                    views={blog.views}
                                />
                            );
                        })}
                    </ul>
                </section>

                <div className="container">
                    <section className="section-wrapper-m-xxs rounded-3xl bg-green-50 p-[20px] md:p-[30px]  lg:p-[40px]">
                        {" "}
                        <div className="flex flex-col items-center justify-between gap-[20px] md:flex-row md:gap-0">
                            <div>
                                <p className="header-md mb-5">
                                    Getting{" "}
                                    <Swoosh type="secondary">
                                        interested ?
                                    </Swoosh>
                                </p>
                                <p className="max-w-[465px] capitalize text-primary lg:max-w-[570px]">
                                    Surf tons of courses provided by us which
                                    helps you learn market-fit skills and land a
                                    great job.
                                </p>
                            </div>
                            <Link href={"/courses"}>
                                <button className="btn" type="button">
                                    View Courses
                                </button>
                            </Link>
                        </div>
                    </section>
                </div>

                <section className="container">
                    <ul className={blogsContainerClass}>
                        {secondHalf?.map((blog) => {
                            return (
                                <BlogCard
                                    index={true}
                                    title={blog.title}
                                    blurb={blog.short_desc}
                                    thumbnail={blog.img ? blog.img : blog.image}
                                    // md={
                                    //     "We help you get placed in top companies."
                                    // }
                                    url={blog.slug}
                                    imgAlt={blog.title}
                                    key={blog.slug}
                                    slug={blog.slug}
                                    created_at={blog.created_at}
                                    views={blog.views}
                                />
                            );
                        })}
                    </ul>
                </section>

                {blogs.length > 0 && (
                    <>
                        <div className="paginate-wrapper   section-wrapper-m text-center  ">
                            <Pagination
                                pageSize={perPage}
                                current={current_page}
                                showTotal={(total, range) =>
                                    `${range[0]} - ${range[1]} of ${total} items`
                                }
                                total={total_data}
                                onChange={(e) => {
                                    console.log("pagei n pagin", e);
                                    // if (router.isReady) {
                                    // let query = router.query;
                                    // query.page = e.toString();
                                    router.replace({
                                        query: {
                                            page: e,
                                        },
                                    });
                                    // router.push(`/blogs?page=${e}`);
                                    setCurrentPage(() => e);
                                    // }
                                }}
                                // prevIcon={() => {
                                //     return "<";
                                // }}
                                prevIcon={PrevIcon}
                                nextIcon={NextIcon}
                                // nextIcon={() => {
                                //     return ">";
                                // }}
                                className=" "
                            />
                        </div>

                        {/* <section className="container mt-10 flex flex-col items-center justify-center gap-5 md:flex-row md:justify-between  md:gap-0">
                            <p>Showing 10 out of 100</p>
                            <div className="flex gap-[10px] ">
                                <span className="rounded-full border border-white-600 p-[10px]">
                                    01
                                </span>
                                <span className="rounded-full border border-white-600 p-[10px]">
                                    02
                                </span>
                                <span className="rounded-full border border-white-600 p-[10px]">
                                    03
                                </span>
                            </div>
                        </section> */}
                    </>
                )}

                <section className="container mt-10 flex hidden flex-col items-center justify-center gap-5 md:flex-row md:justify-between  md:gap-0">
                    <p>Showing 10 out of 100</p>
                    <div className="flex gap-[10px] ">
                        <span className="rounded-full border border-white-600 p-[10px]">
                            01
                        </span>
                        <span className="rounded-full border border-white-600 p-[10px]">
                            02
                        </span>
                        <span className="rounded-full border border-white-600 p-[10px]">
                            03
                        </span>
                    </div>
                </section>
            </div>

            {showSpinner && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black  bg-opacity-60">
                    <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-white"></div>
                </div>
            )}
        </div>
    );
}

export const getStaticProps = async ({ query }) => {
    const res = await fetch(
        makeFullApiUrl(`/singleblog/?size=${perPage}&search=${""}&page=${1}`),
    );
    const data = await res.json();

    return {
        props: {
            blogs: data?.navigation?.data || [],
            total_data: data?.navigation?.total_data || 0,
            current_page: data?.navigation?.current_page || 1,
        },
        revalidate: 60 * 1,
    };
};
