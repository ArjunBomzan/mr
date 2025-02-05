import BannerWrapper from '../../components/common/BannerWrapper'
import Image from 'next/image'
import Swoosh from '../../components/common/Swoosh'
import Faqs from '../../components/common/Faqs'

import { useWindowSize } from '../../components/home/Testimonials'
import { useEffect, useState } from 'react'
import { makeFullApiUrl, makeFullUrl } from '../../utils/makeFullUrl'
import { clearStyle } from '../../utils/clearStyle'
import TrainingInquiry from '../../components/TrainingComponents/TrainingInquiry'
import Link from 'next/link'
import classNames from 'classnames'
import Head from 'next/head'
import { useRouter } from 'next/router'
import CourseSuccessStories from './CourseSuccessStories'
import Offer from '../../components/Offer'
import { OfferPage } from '../../constants/offers'
// import { Autoplay, FreeMode, Navigation, Pagination } from "swiper";

// import DownArrow from "/assets/images/courses/iconmonstr-arrow-down-thin-48-_1_.webp"
// import UpArrow from "/assets/images/courses/iconmonstr-arrow-up-thin-48-_1_.webp"

type courseType = {
    meta: any
    title: string
    banner: string
    image: string
    description: string
    short_desc: string
    duration: string
    career: string
    tag: {}[]
    syllabus: {}[]
    slug: string
}

export default function course(props) {
    let course: courseType = props.course
    const router = useRouter()
    const size = useWindowSize({ useEffect, useState })

    const [limitOverView, setlimitOverView] = useState(true)

    let specs = [
        { title: 'Training Level', ans: 'Beginner to Expert' },
        { title: 'Format', ans: 'Physical/Online Class' },
        { title: 'Duration', ans: course.duration },
        { title: 'Career Prospect', ans: course.career }
    ]

    let faqs = course.syllabus.map((el: any) => {
        return {
            title: <h3>{el.heading}</h3>,
            content: (
                <div
                    className="editor-content"
                    dangerouslySetInnerHTML={{
                        __html: clearStyle(el.description)
                    }}
                ></div>
            )
        }
    })

    let meta_description = course.meta?.find((meta) => meta.name == 'description')?.content || ''

    let meta_image = course.image
    if (meta_image) {
        meta_image = `${process.env.NEXT_PUBLIC_DB_DOMAIN}${meta_image}`
    }
    let current_url = `${process.env.NEXT_PUBLIC_DOMAIN}${router.asPath}`

    return (
        <div>
            <Head>
                <title>{course.title}</title>
                <meta name="title" content={props?.course?.data?.course[0]?.title} />

                {course.meta?.map((meta) => {
                    return <meta key={meta?.id} name={meta?.name} content={meta?.content} property={meta?.property} />
                })}

                {/* facebook og tags */}
                <meta property="og:url" content={current_url} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={props?.course?.data?.course[0]?.title} />
                <meta property="og:description" content={meta_description} />
                <meta property="og:image" content={meta_image} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                {/* twitter og tags */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@mindrisers" />
                <meta name="twitter:creator" content="@mindrisers" />
                <meta property="twitter:title" content={props?.course?.data?.course[0]?.title} />
                <meta property="twitter:description" content={meta_description} />
                <meta name="twitter:image" content={meta_image} />
            </Head>
            <BannerWrapper extendedClassName="after:!h-[50px]]">
                <div className="container relative z-10 grid items-center gap-[30px] lg:grid-cols-[60fr,40fr]">
                    <div>
                        <h1 className="header-md title-space  text-center leading-[145%] lg:text-left">
                            {course.title}
                        </h1>
                        <div
                            className="editor-content  text-primary md:text-[20px]"
                            dangerouslySetInnerHTML={{
                                __html: clearStyle(course.short_desc)
                            }}
                        ></div>
                        <div className="title-space-3xl-reverse">
                            <ul
                                className=" w-maxx relative grid gap-x-[40px] gap-y-[20px]  text-primary md:grid-cols-2
                            md:after:absolute
                            md:after:left-0
                            md:after:right-0
                            md:after:top-[50%]
                            md:after:mx-auto
                            md:after:h-[80%]
                            md:after:w-[1px]
                            md:after:-translate-y-[50%]
                            md:after:border-l
                            md:after:border-primary
                            md:after:bg-primary
                            md:after:content-['']
                           
                            "
                            >
                                {specs.map((el) => {
                                    return (
                                        <li className="  ">
                                            <p className="grid grid-cols-2">
                                                <span className="capitalize">{el.title}</span>
                                                <span className="pl-1 font-semibold capitalize">{el.ans}</span>
                                            </p>
                                        </li>
                                    )
                                })}
                            </ul>

                            <div className="title-space-3xl-reverse gap-base-half flex justify-center lg:justify-start">
                                <Link href={'/online-admission'} className="btn-simple">
                                    Get Admission
                                </Link>
                                <a href="#quick-enquiry" className="btn-simple-outline">
                                    Send Enquiry
                                </a>
                            </div>
                        </div>
                    </div>
                    <Image
                        alt=""
                        width={500}
                        height={500}
                        className=" hidden rounded-[12px] border-4 border-primary lg:block"
                        src={makeFullUrl(course.image)}
                    />
                </div>
            </BannerWrapper>

            <main className="container">
                <section className="section-wrapper-m">
                    <div className="gap-base-half grid lg:grid-cols-[70%,30%]">
                        <div>
                            <section>
                                <div className="gap-base-half flex border-b border-border">
                                    <span className="inline-block border-b-[3px] border-primary  p-[10px] text-center font-medium text-primary">
                                        Course Overview
                                    </span>
                                    <a href="#syllabus" className="inline-block p-[10px] text-center">
                                        Syllabus
                                    </a>
                                </div>
                            </section>
                            <section className="title-space-3xl-reverse title-space-xl">
                                <h2 className="sub-header-lg">Course Overview</h2>

                                <div className={`overview__wrapper relative ${limitOverView ? 'limited' : ''}`}>
                                    <div
                                        className={classNames('editor-content  ')}
                                        dangerouslySetInnerHTML={{
                                            __html: clearStyle(course.description)
                                        }}
                                    ></div>
                                    <div className="fader absolute"></div>
                                </div>
                            </section>

                            <div
                                className="m-8 text-center font-bold"
                                id="overview__min_max"
                                style={{
                                    cursor: 'pointer',
                                    textTransform: 'uppercase'
                                }}
                                onClick={() => {
                                    setlimitOverView(!limitOverView)
                                }}
                            >
                                {limitOverView ? (
                                    <>
                                        <span>
                                            {' '}
                                            <Image
                                                alt="arrow-down-icon"
                                                src={'/assets/images/courses/iconmonstr-arrow-down-thin-48-_1_.webp'}
                                                height={16}
                                                width={16}
                                                className="inline"
                                            />{' '}
                                        </span>{' '}
                                        <p className="inline">Read More</p>
                                    </>
                                ) : (
                                    <>
                                        <span>
                                            {' '}
                                            <Image
                                                alt="arrow-up-icon"
                                                src={'/assets/images/courses/iconmonstr-arrow-up-thin-48-_1_.webp'}
                                                height={16}
                                                width={16}
                                                className="inline"
                                            />{' '}
                                        </span>{' '}
                                        <p className="inline">Read Less</p>
                                    </>
                                )}
                            </div>

                            <section className="">
                                <article className="title-space-3xl-reverse  title-space-xl">
                                    <h2 className="sub-header-lg" id="syllabus">
                                        Syllabus
                                    </h2>
                                </article>
                            </section>
                            <section>
                                <Faqs faqs={faqs} /> {/* make it headless */}
                            </section>
                        </div>
                        <TrainingInquiry course_list={props.courses_list} />
                    </div>
                </section>
                <ul className="flex flex-wrap justify-center gap-[12px]   ">
                    {course.tag.map((el: any) => {
                        return (
                            <li
                                key={el.id}
                                className={classNames(
                                    'hover:shadow-small relative cursor-pointer rounded-xl bg-green-50 p-[10px] text-[14px] capitalize leading-[145%] text-primary hover:bg-gray-100'
                                )}
                            >
                                <Link href={`/courses?tag=${el.name}`}>{el.name}</Link>
                            </li>
                        )
                    })}
                </ul>
                <section className="section-wrapper-m">
                    <div className="title-space flex justify-between text-primary">
                        <p>Success Stories</p>
                        <p>
                            <Link href="/success-gallery">View success stories</Link>
                        </p>
                    </div>
                    <h2 className="sub-header-lg max-w-[633px]">
                        See how <Swoosh type="secondary">Mindrisers</Swoosh> is helping learners get expertise and
                        pursue their future.
                    </h2>
                    <CourseSuccessStories success_stories={props.success_stories} />
                    <Offer
                        matchingUrl={`/${OfferPage.CourseDetail}/${course.slug}`}
                        offerType={OfferPage.CourseDetail}
                    />
                </section>
            </main>
        </div>
    )
}

export async function getStaticPaths() {
    // const res = await fetch(makeFullApiUrl("/course"))
    // const courses = await res.json()
    // const paths = courses?.map((course) => ({
    //     params: { slug: course.slug },
    // }))
    let paths = []
    return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }) {
    const res = await fetch(makeFullApiUrl(`/coursecombine/${params.slug}/`))

    const courses_list_res = await fetch(makeFullApiUrl('/course/'))
    const courses_list = await courses_list_res.json()

    const success_storie_res = await fetch(`${makeFullApiUrl('/successstoryhome/')}`)
    const success_stories = await success_storie_res.json()

    if (!res.ok) {
        return {
            notFound: true
        }
    }

    const course = await res.json()

    if (!(course?.data?.course?.length > 0)) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            course: {
                ...course.data.course[0],
                success_story: course.data.success_story,
                syllabus: course.data.syllabus,
                time: course.data.time,
                meta: course.data.meta,
                tag: course.data.tag
            },
            success_stories: success_stories,
            courses_list
        },
        revalidate: 60 * 1
    }
}
