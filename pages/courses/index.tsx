import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import BannerWrapper from '../../components/common/BannerWrapper'
import Image from 'next/image'
import Swoosh from '../../components/common/Swoosh'
import CoursesList from '../../components/common/CoursesList'
import { makeFullApiUrl, makeFullUrl } from '../../utils/makeFullUrl'
import TypeWriter from '../../components/common/TypeWriter'
import { typeWriters } from '..'
import { FaCross, FaSearch } from 'react-icons/fa'
import { IoCloseOutline } from 'react-icons/io5'
import classNames from 'classnames'

export async function getStaticProps() {
    // export async function getServerSideProps({query}) {
    let data = []
    try {
        const res = await fetch(`https://mindrisers.com.np/blog/api/v1/course/`)

        data = await res.json()
    } catch (err) {}

    return {
        props: { courses_all: data },

        revalidate: 60 * 1
    }
}

const Courses = ({ courses_all }) => {
    const [allCourses, setAllCourses] = useState(courses_all)
    const [courses, setcourses] = useState(courses_all)
    const [searchTerm, setSearchTerm] = useState('')
    const [tempSearchTerm, setTempSearchTerm] = useState('')
    const [tag, setTag] = useState('')
    const [showSpinner, setShowSpinner] = useState(false)
    const [changedOnce, setChangedOnce] = useState(false)

    const router = useRouter()

    const fetchCourses = async () => {
        setShowSpinner(true)

        try {
            let data = []
            const res = await fetch(
                makeFullApiUrl(
                    `/course/?tag=${tag || ''}&search=${searchTerm || ''}`
                )
            )

            data = await res.json()

            setcourses(data)
        } catch (err) {
            console.log(err)
        }
        setShowSpinner(false)
    }

    useEffect(() => {
        if (router.query.tag) {
            setTag(`${router.query.tag || ''}`)
        }
        if (router.query.q) {
            setSearchTerm(`${router.query.q || ''}`)
            setTempSearchTerm(`${router.query.q || ''}`)
        }
        console.log('router-query', router.query)
    }, [router.isReady])

    useEffect(() => {
        if (changedOnce) {
            fetchCourses()
        }
        setChangedOnce(true)
        // }, [router.query.tag, router.query.q]);
    }, [tag, searchTerm])

    let meta_description =
        'Are you searching for a Practical IT Training Center in Kathmandu Nepal then Mindrisers is the perfect platform for you to learn Digital Skils'
    let meta_image = `${process.env.NEXT_PUBLIC_DOMAIN}/assets/images/courses.png`

    let recommendedCourses = allCourses.filter((el) => {
        if (courses.find((existing) => existing.id == el.id)) {
            return false
        }
        return true
    })

    // if(courses.length == 0){
    //     recommendedCourses =
    // }

    let tags = [
        'digital marketing',
        'flutter',
        'python',
        'frontend',
        'database'
    ]

    // tags = tags.filter((el) => {
    //     return el.toLowerCase() != router.query.tag;
    // });
    if (router.query.tag && `${router.query.tag}`.trim()) {
        // tags.unshift(`${router.query.tag}`);
        tags.unshift(`clear tag filter`)
    }

    function clearFilter(except?: string) {
        switch (except) {
            case 'tag':
                setSearchTerm('')
                setTempSearchTerm('')
                break
            case 'q':
                setTag('')
                break

            default:
                setTag('')
                setSearchTerm('')
                setTempSearchTerm('')
                break
        }
    }

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
                        'Mindrisers Courses | IT related courses in Kathmandu, Nepal'
                    }
                />
                <meta property="og:description" content={meta_description} />
                <meta property="og:image" content={meta_image} />
                <link
                    rel="canonical"
                    href={makeFullUrl("/courses")}
                    
                />
                {/* twitter og tags */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="Mindrisers" />
                <meta name="twitter:creator" content="@mindrisers" />
                <meta
                    property="twitter:title"
                    content={
                        'Mindrisers Courses | IT related courses in Kathmandu, Nepal'
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
                        <p className="title-lg borde mb-5 flex max-w-full items-center justify-center gap-[5px] text-primary transition-all duration-[6s] !ease-in md:gap-[11px] lg:justify-start ">
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
            <div className=" section-wrapper-m container flex flex-col items-center justify-between gap-[24px] lg:flex-row">
                <ul className="flex flex-wrap justify-center gap-[12px] lg:justify-start   ">
                    {tags.map((el) => {
                        return (
                            <li
                                onClick={() => {
                                    console.log('hello world')
                                    if (
                                        el.toLowerCase() == 'clear tag filter'
                                    ) {
                                        router.replace({
                                            query: {
                                                tag: ''
                                            }
                                        })
                                        clearFilter()
                                        return
                                    }
                                    router.replace({
                                        query: {
                                            tag: el
                                        }
                                    })
                                    clearFilter('tag')
                                    setTag(el)
                                }}
                                className={classNames(
                                    'hover:shadow-small relative cursor-pointer rounded-xl bg-green-50 p-[10px] text-[14px] capitalize leading-[145%] text-primary hover:bg-gray-100',
                                    {
                                        'bg-red-400 text-white hover:!bg-red-500':
                                            el.toLowerCase() ===
                                            'clear tag filter'
                                    },
                                    {
                                        'cursor-text !bg-green-200 hover:!bg-green-200':
                                            el.toLowerCase() ===
                                            router.query.tag
                                    }
                                )}
                            >
                                {el}
                                {/* {el.toLocaleLowerCase() == router.query.tag && (
                                    <IoCloseOutline
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            console.log("hello tag");
                                            setTag("");
                                            router.replace({
                                                query: {
                                                    tag: "",
                                                },
                                            });
                                        }}
                                        className="clickable absolute right-0 top-0 -translate-y-[50%] translate-x-[50%] rounded-full border text-xl font-bold hover:border-red-500 hover:bg-red-500 hover:text-white"
                                    />
                                )} */}
                            </li>
                        )
                    })}
                </ul>
                <form
                    className="flex items-center gap-2 "
                    onSubmit={(e) => {
                        e.preventDefault()
                        router.replace({
                            query: {
                                q: (e.target as HTMLFormElement).searchTerm
                                    .value //Property 'searchTerm' does not exist on type 'EventTarget
                            }
                        })
                        clearFilter('q')
                        setSearchTerm(
                            (e.target as HTMLFormElement).searchTerm.value
                        )
                    }}
                >
                    <div className="relative inline-block ">
                        <input
                            value={tempSearchTerm}
                            onChange={(e) => {
                                // setSearchTerm(e.target.value);
                                setTempSearchTerm(e.target.value)
                            }}
                            name="searchTerm"
                            type="text"
                            className=" form-control border border-border px-4 py-2 focus:border-primary focus:text-primary focus:outline-none lg:w-64"
                        />
                        {tempSearchTerm.length > 0 && (
                            <IoCloseOutline
                                onClick={() => {
                                    clearFilter()
                                    router.replace({
                                        query: {
                                            q: ''
                                        }
                                    })
                                }}
                                className="clickable absolute right-2 top-[50%] -translate-y-[50%] text-2xl font-bold"
                            />
                        )}
                    </div>

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
                            Recommended{' '}
                            <Swoosh type="secondary">For You</Swoosh>
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
    )
}

export default Courses
