import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Partners from '../components/home/Partners'
import Testimonials from '../components/home/Testimonials'
import Swoosh from '../components/common/Swoosh'
import BannerWrapper from '../components/common/BannerWrapper'
import CoursesList from '../components/common/CoursesList'
import Opportunity from '../components/common/Opportunity'
import Faqs from '../components/common/Faqs'
import classNames from 'classnames'
import VideoPlayer from '../components/common/VideoPlayer'
import Stats from '../components/common/Stats'
import TypeWriter from '../components/common/TypeWriter'
import HomeContact from '../components/HomePageComponents/HomeContact'
import { makeFullApiUrl, makeFullUrl } from '../utils/makeFullUrl'
import { useState } from 'react'
import Offer from '../components/Offer'
import { OfferPage } from '../constants/offers'

export let typeWriters = [
    'IT skills and expertise',
    'Javascript',
    'Django',
    'Figma',
    'Flutter',
    'Devops'
]

export default function Home(props) {
    // const [showVideo, setshowVideo] = useState(false)
    const [videoOpen, setVideoOpen] = useState(false)

    let meta_title =
        'Best IT Training Institute in kathmandu, Nepal | Mindrisers Institute of Technology'
    let meta_description =
        'Are you searching for a Practical IT Training Center in Kathmandu Nepal then Mindrisers Institute of Technology is the perfect platform for you to learn Digital Skills'

    let tags = [
        {
            title: 'javascript',
            icon: '/assets/images/home/banner/fa6-brands_square-js.svg'
        },
        {
            title: 'django',
            icon: '/assets/images/home/banner/skill-icons_django.svg'
        },
        {
            title: 'figma',
            icon: '/assets/images/home/banner/solar_figma-bold-duotone.svg'
        },
        {
            title: 'flutter',
            icon: '/assets/images/home/banner/material-symbols_flutter.svg'
        },
        {
            title: 'photshop',
            icon: '/assets/images/home/banner/iconoir_adobe-photoshop-solid.svg'
        },
        {
            title: 'database',
            icon: '/assets/images/home/banner/icon-park-solid_data.svg'
        },
        {
            title: 'digital marketing',
            icon: '/assets/images/home/banner/nimbus_marketing.svg'
        }
    ]

    let growWithUsers = [
        { src: '/assets/images/home/banner/alija.webp' },
        { src: '/assets/images/home/banner/deepa.webp' },
        { src: '/assets/images/home/banner/nikita.webp' }
    ]

    // let courses = [
    //     {
    //         title: "MERN stack training in nepal",
    //         image: "https://mindrisers.com.np/_next/image?url=https%3A%2F%2Fmindrisers.com.np%2F%2Fstatic%2FImages%2Fcourses%2FMern_wiWtVlC.webp&w=640&q=75",
    //         duration: "3 months",
    //         slug: "mern",
    //     },
    // ];
    // courses = [
    //     ...courses,
    //     ...courses,
    //     ...courses,
    //     ...courses,
    //     ...courses,
    //     ...courses,
    //     ...courses,
    //     ...courses,
    // ];

    let faqs = [
        {
            title: 'courses',
            number: 10,
            content:
                'From cutting-edge programming languages to content writing expertise to desiging website, our diverse range of courses equips you with the skills employers crave.'
        },
        {
            title: 'Placement',
            number: 4000,
            content:
                "We don't just teach, we guide you towards your dream career. 4,000+ successful placements speak for themselves, proving our dedication to your employability."
        },
        {
            title: 'years experience',
            number: 7,
            content:
                'Backed by 7+ years of refining our curriculum and teaching methods, we offer industry-aligned courses that cater to the ever-evolving demands of the IT sector.'
        },
        {
            title: 'students',
            number: 10000,
            content:
                'Over 10,000 graduates stand as a testament to our commitment to excellence. Join a thriving alumni network and connect with future colleagues.'
        }
    ]

    faqs[0].number = props.courses.length

    return (
        <>
            <Head>
                <link rel="canonical" href={makeFullUrl('')} />
                <title>
                    Best IT Training Institute in kathmandu, Nepal | Mindrisers
                    Institute of Technology
                </title>
                <meta
                    name="title"
                    content={
                        'Best IT Training Institute in kathmandu, Nepal | Mindrisers Institute of Technology'
                    }
                />
                <meta name="description" content={meta_description} />
                <meta
                    name="keywords"
                    content="best computer institute in kathmandu,it courses in nepal, Computer Training Institute in kathmandu Nepal, Professional IT Training institute in Nepal, computer learning center , computer training center in nepal, computer courses in nepal ,computer institute in nepal, python programming, python course in nepal, python training in nepal, learn python in nepal, python training in kathmandu, python, learn python, python language, python coding, python certification, python basics, flutter framework training, flutter framework training in nepal, graphic design in nepal, graphic design course in nepal, graphic design training in nepal, graphic design course fee in nepal, graphic designer course in nepal, graphic design course in kathmandu, graphic design company in nepal, graphic designing course price in nepal, cost of graphic design course in nepal, graphic designer nepal, graphic design in kathmandu, mern stack course in Nepal, mern stack training in Nepal, mern stack training in Kathmandu, mern stack training centre in Kathmandu, digital marketing course in Nepal, digital marketing training in Nepal, digital marketing course in Kathmandu, digital marketing training in Kathmandu, learn digital marketing, digital marketing, online marketing, digital marketing agency, marketing agency, digital marketing courses, digital marketing company, digital marketing services, google digital marketing, web design course in Nepal, web design training in Kathmandu, web designing course price in Nepal, web designing course in Kathmandu, web page designing course in Nepal, cost of web designing course in Nepal, web designing in Nepal"
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

            {/* <Popup/> */}
            {/* <div className="container my-7">
                <TypeWriter contents={["one olne", "two"]} />
            </div> */}
            <BannerWrapper
                size="big"
                extendedClassName="!py-0 zz-0 !items-start "
            >
                <div
                    className="h-full w-full bg-no-repeat  "
                    style={
                        {
                            // backgroundImage: `url("/assets/images/home/banner/curve-stroke.svg")`,
                        }
                    }
                >
                    <div className="container relative z-[999]  pt-[50px] text-center md:pt-[100px] md:text-left ">
                        <p className="header-xl text-expanded-sm mb-[30px] uppercase lg:mb-[40px]">
                            Learn
                        </p>
                        <ul className="title-space inline-flex flex-wrap justify-center gap-[20px] rounded-[12px] bg-primary px-[20px] py-[10px] md:gap-[37px]">
                            {tags.map((el) => {
                                return (
                                    <>
                                        <li key={el.title} className="">
                                            <Link
                                                target="_blank"
                                                href={`/courses?tag=${el.title}`}
                                                aria-label={`view ${el.title} courses`}     
                                            >
                                                <Image
                                                    alt=""
                                                    src={el.icon}
                                                    width={50}
                                                    height={50}
                                                    className="h-[21px] w-[21px]"
                                                />
                                            </Link>
                                        </li>
                                    </>
                                )
                            })}
                        </ul>

                        {/* <p className="max-w-[30px]] w-min overflow-hidden whitespace-nowrap border  transition-all duration-[10s] hover:w-[999px]">
                            Lorem ipsum dolor, sit amet conore. Quos cumqtam
                            doloremque.
                        </p> */}

                        <p className="title-lg borde mb-[30px] flex max-w-full items-center justify-center gap-[5px] text-primary transition-all duration-[6s] !ease-in md:justify-start md:gap-[11px] ">
                            <span>{`<h2>`}</span>
                            <TypeWriter contents={typeWriters} />
                            <span>{`</h2>`}</span>
                        </p>

                        {/* <p className="border title-lg mb-[30px] inline-flex transition-all duration-[6s] items-center justify-center gap-[5px] text-primary md:justify-start md:gap-[11px] ">
                            <span>{`<h2>`}</span>
                            <span className="md:header-lg text-expanded-sm block  font-semibold !text-secondary  ">
                                <TypeWriter contents={typeWriters} />
                            </span>
                            <span>{`</h2>`}</span>
                        </p> */}
                        <div className="title-3xl flex flex-wrap  items-center justify-center gap-[20px] text-primary md:justify-start ">
                            <span>and grow with</span>
                            {/* tailwind cannot generate dynamic classnames values after build */}
                            <ul className="hidden ">
                                <li className="-left-[20px] -ml-[20px]"></li>
                                <li className="-left-[40px] -ml-[40px]"></li>
                            </ul>
                            <div className="relative left-4 flex justify-center gap-[20px]">
                                <ul className="flex-gro inline-flex justify-center md:flex-grow-0 md:justify-start">
                                    {growWithUsers.map((el, index) => {
                                        return (
                                            <li
                                                className={`flex-center overflow-hidden rounded-full   -ml-[${
                                                    20 * 1
                                                }px] relative z-[${
                                                    index + 1
                                                }px] `}
                                            >
                                                <Image
                                                    alt=""
                                                    src={el.src}
                                                    height={50}
                                                    width={50}
                                                    className="h-[50px] rounded-full  border-4 border-green-600 "
                                                />
                                            </li>
                                        )
                                    })}
                                </ul>
                                <p>
                                    <span
                                        className={`md::-left-[40px] title-2xl relative font-bold text-secondary `}
                                    >
                                        <Swoosh>Mindrisers</Swoosh>
                                    </span>
                                </p>
                            </div>
                        </div>
                        <p className="mt-[30px] max-w-[983px] text-primary">
                            Mindrisers, Nepal's sole IT training institute,
                            provides paid internships post-course. Our diverse
                            courses, led by expert instructors, span
                            programming, design, and marketing to ensure your
                            success.
                        </p>
                        <div className="mt-[3.2rem] md:mt-[7.5rem]">
                            {/* <Stats wrapperClass="bg-green-100 grid grid-cols-2 md:grid-cols-4 gap-lg max-w-[772px]  rounded-xl p-5" /> */}
                            <Stats
                                coursesCount={props.courses.length}
                                wrapperClass="bg-green-100 grid grid-cols-2 md:flex md:justify-between md:grid-cols-4 gap-lg max-w-[772px] xl:max-w-[900px] mmx-auto rounded-xl p-5"
                            />
                        </div>
                    </div>
                </div>
            </BannerWrapper>

            <div className=" section-wrapper container grid grid-cols-1 items-center gap-[40px] lg:grid-cols-[45%,55%] lg:gap-0 ">
                <div
                    className={classNames('lg:pr-[40px]', 'order-2 lg:order-1')}
                >
                    <Image
                        loading="lazy"
                        className="w-full"
                        src={'/assets/images/home/internship-job.webp'}
                        alt=""
                        width={500}
                        height={500}
                    />
                </div>

                <article
                    className={classNames(
                        'text-primary',
                        'order-1 lg:order-2',
                        'text-center lg:text-left'
                    )}
                >
                    <div
                        className={classNames(
                            'title-space border-l-4 border-primary px-[20px] py-[10px] '
                        )}
                    >
                        <p className="text-xl">
                            Job Ready & Niche Specific Courses to boost your
                            skills
                        </p>
                    </div>

                    <div className="">
                        <h1 className="header-lg title-space-lg text-expanded ">
                            <Swoosh hideInMob type="secondary">
                                100% Intern
                            </Swoosh>
                            ship/Job Placement
                        </h1>
                        <p className="mb-[40px]">
                            Mindrisers have partnered with leading companies to
                            provide internships and full-time job opportunities
                            to our Graduates
                        </p>
                        <Link className="btn" href={'/contact-us'}>
                            Contact us
                        </Link>
                    </div>
                </article>
            </div>

            {/* vercel test */}

            <section className=" section-wrapper-m-sm lg:section-wrapper-m pl-1 md:container">
                {/* <div className="flex justify-between"> */}
                <h2 className="header title-space-5xl text-center">
                    Popular <Swoosh type="secondary">Courses</Swoosh>{' '}
                </h2>
                {/* </div> */}
                {/* Headless component */}
                <CoursesList courses={props.courses} />
            </section>
            {/* About us */}
            <div className="section-wrapper-m section-wrapper-p-half container   ">
                <div className="grid  items-center gap-[40px] rounded-[24px]  bg-primary-light px-[10px] py-[40px]  md:px-[20px] lg:px-[30px] xl:grid-cols-[45%,55%] xl:gap-0 xl:p-[40px]">
                    <article className=" text-center xl:pr-[40px] xl:text-left">
                        <div>
                            <h2 className="header-lg title-space-lg text-expanded">
                                <Swoosh type="secondary">About us</Swoosh>
                            </h2>
                            <p className="title-space-lg text-justify text-primary lg:text-left ">
                                Mindrisers is a parent company of{' '}
                                <Link
                                    target="_blank"
                                    className="is-link underline"
                                    href="https://mindriserstech.com"
                                >
                                    mindriserstech.com
                                </Link>
                                ,{' '}
                                <Link
                                    target="_blank"
                                    className="is-link underline"
                                    href="https://tummytruck.com.np/"
                                >
                                    tummytruck
                                </Link>
                                ,{' '}
                                <Link
                                    target="_blank"
                                    className="is-link underline"
                                    href="https://digitalpalika.org/"
                                >
                                    digitalpalika
                                </Link>
                                , and the training institute. We are the only
                                company in Nepal where we guarantee paid
                                internship and job placement after the course is
                                completed in our software development and
                                digital marketing company. What we believe is
                                practical knowledge can be delivered only if the
                                institution continuously does research and
                                development in the same place.
                            </p>
                            <button
                                className="btn"
                                onClick={() => {
                                    setVideoOpen(true)
                                }}
                            >
                                Learn More
                            </button>
                        </div>
                        <div className="relative mt-[40px] h-[292px] overflow-hidden rounded-[24px] bg-green-400 p-[10px]">
                            {/* <Image src={"https://picsum.photos/200/300"} width={500} height={500} className='' alt="" /> */}
                            <div className="h-full">
                                <VideoPlayer
                                    videoOpen={videoOpen}
                                    setVideoOpen={setVideoOpen}
                                    className="h-full max-h-full w-full max-w-full overflow-hidden rounded-[24px] object-cover"
                                />
                            </div>
                            <p className="absolute right-[28px] top-[38px] font-semibold text-white  md:text-xl lg:text-2xl">
                                Best IT Institute in Nepal
                                <br /> for learning IT skills
                            </p>
                            {/* <button className='absolute top-0 bottom-0 right-0 left-0 mx-auto'>
                <MdOutlinePlayCircle className='text-white text-5xl' />
              </button> */}
                        </div>
                    </article>
                    <article className="">
                        <Faqs
                            faqs={faqs.map((el) => {
                                return {
                                    title: (
                                        <h3 className="flex items-center gap-[10px]">
                                            <span className="header">
                                                {el.number} +
                                            </span>
                                            <span className="title">
                                                {el.title}
                                            </span>
                                        </h3>
                                    ),
                                    content: el.content
                                }
                            })}
                            faqTitleStyle="bg-white capitalize  p-5   flex justify-between items-center transition-all duration-[.3s] rounded-[12px] cursor-pointer"
                            faqTitleOpenedStyle="rounded-bl-[0px] rounded-br-[0px]"
                            faqContentStyle=" border-t-0  p-5 bg-white rounded-bl-xl rounded-br-xl"
                            opendedIcon={
                                <>
                                    <span className="text-3xl text-primary">
                                        -
                                    </span>
                                </>
                            }
                            closedIcon={
                                <>
                                    <span className="text-3xl text-primary">
                                        +
                                    </span>
                                </>
                            }
                        />
                    </article>
                </div>
            </div>

            <div className=" section-wrapper-m section-wrapper-p-half container">
                <div className=" section-p  relative grid gap-[40px] overflow-hidden rounded-3xl   bg-orange-100 xl:grid-cols-[45%,55%]  xl:gap-0  ">
                    <article className="text-center text-secondary xl:pr-[40px] xl:text-left">
                        <h2 className="header-lg  text-expanded title-space-lg">
                            Request a <Swoosh type="secondary">Callback</Swoosh>
                        </h2>
                        <p>
                            Would you like to speak to one of our adviser over
                            the phone? Just submit your details and will be in
                            touch shortly. You can also email us if you would
                            prefer.
                        </p>
                        <div className="dots mb:bottom-[20px] absolute -left-[66px] bottom-[50px] ">
                            <div className="flex">
                                <div className="h-[340px] w-[340px] rounded-full bg-green-100"></div>
                                <div className="h-[40px] w-[40px] rounded-full bg-green-100"></div>
                            </div>
                        </div>
                    </article>
                    <div className="relative z-10 rounded-xl bg-white p-[40px]">
                        <HomeContact />
                    </div>
                </div>
            </div>
            <section className=" section-wrappe container">
                <div className="text-center text-primary">
                    <p className="mb-[10px] uppercase ">be the part of</p>
                    <h2 className="header text-expanded">
                        Mindrisers{' '}
                        <Swoosh type="secondary" hideInMob>
                            Success Network
                        </Swoosh>
                    </h2>
                    <Link href={'/success-gallery'} className="inline-block" aria-label="visit success-gallery page" >
                        <Image
                            alt=""
                            src={'/assets/images/home/success-stories.webp'}
                            className="mx-auto mt-[40px]"
                            width={700}
                            height={700}
                        />
                    </Link>
                </div>
            </section>

            <div className="">
                <Partners partners={props.partners} />
            </div>
            <Testimonials testimonials={props.testimonials} />
            <div className=" container my-[100px]">
                <Opportunity />
            </div>
            <Offer matchingUrl={`/home`} offerType="Home"  />
        </>
    )
}

export async function getStaticProps() {
    let data = []
    let gallery_data = []
    let successStoreis = []
    let partners = []
    let testimonials = []

    try {
        const res = await fetch(`https://mindrisers.com.np/blog/api/v1/course/`)
        data = await res.json()

        const gallery_res = await fetch(
            `https://mindrisers.com.np/blog/api/v1/gallery/`
        )
        gallery_data = await gallery_res.json()

        const successStoreis_res = await fetch(
            `https://mindrisers.com.np/blog/api/v1/successstoryhome/`
        )
        successStoreis = await successStoreis_res.json()

        const partners_res = await fetch(makeFullApiUrl(`/placementpartner/`))
        partners = await partners_res.json()
        const testimonials_res = await fetch(
            makeFullApiUrl(`/studenttestimonial/`)
        )
        testimonials = await testimonials_res.json()
    } catch (err) {}

    return {
        props: {
            courses: data,
            gallery_data: gallery_data,
            successStoreis,
            partners,
            testimonials
        },
        // revalidate: 60 * 60 * 24 * 1  // this may cause server unndecessary loads, since the data merely gets changed. but it is definately better than SSR ?  SSR doesnot trigger the html and store it  while ISR does -> ISR > SSR cause SSR will also create load on server since, every time, the server needs to create html and send as response while ISR will simply cache it and set it.
        revalidate: 60 * 1 // this may cause server unndecessary loads, since the data merely gets changed. but it is definately better than SSR ?  SSR doesnot trigger the html and store it  while ISR does -> ISR > SSR cause SSR will also create load on server since, every time, the server needs to create html and send as response while ISR will simply cache it and set it.
    }
}
