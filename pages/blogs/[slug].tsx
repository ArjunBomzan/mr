import Head from 'next/head'
import { useRouter } from 'next/router'
import BannerWrapper from '../../components/common/BannerWrapper'
import Image from 'next/image'
import { BlogCard } from './index'
import { FaFacebook } from 'react-icons/fa6'
import { clearStyle } from '../../utils/clearStyle'
import { makeFullApiUrl, makeFullUrl } from '../../utils/makeFullUrl'
import Link from 'next/link'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'
import Opportunity from '../../components/common/Opportunity'
import formatDate from '../../utils/formatDate'

export default function BlogSlug(props) {
    const router = useRouter()

    let meta_description = props?.blog?.data?.blog?.short_desc || ''
    let meta_image = `${process.env.NEXT_PUBLIC_DB_DOMAIN}${props?.blog?.data?.blog?.banner}`
    let current_url = `${process.env.NEXT_PUBLIC_DOMAIN}${router.asPath}`
    console.log(current_url)

    let blog = props.blog.data.blog

    console.log(blog)

    return (
        <div>
            <Head>
                <meta
                    name="keywords"
                    content={`mindrisers nepal, blogs, it training center, kathmandu,${props?.blog?.data?.blog?.page_title}`}
                />
                <title>{props?.blog?.data?.blog?.page_title}</title>
                {/* facebook og tags */}
                <meta property="og:url" content={current_url} />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content={`${props?.blog?.data?.blog?.page_title}`}
                />
                <meta property="og:description" content={meta_description} />
                <meta property="og:image" content={meta_image} />

                {/* twitter og tags */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="Mindrisers" />
                <meta name="twitter:creator" content="@mindrisers" />
                <meta
                    property="twitter:title"
                    content={`${props?.blog?.data?.blog?.page_title}`}
                />
                <meta
                    property="twitter:description"
                    content={meta_description}
                />
                <meta name="twitter:image" content={meta_image} />

                {props?.blog?.data?.metatagblog?.map((meta) => {
                    return (
                        <meta
                            key={meta?.id}
                            name={meta?.name}
                            content={meta?.content}
                            property={meta?.property}
                        />
                    )
                })}
            </Head>
            <BannerWrapper size="small">
                <div className="container ">
                    <h1 className=" header-md title-space text-center  leading-[145%]">
                        {blog.title}
                    </h1>
                    <div
                        className="editor-content title mx-auto !line-clamp-4 max-w-[1000px] !text-center  leading-[145%] md:text-[20px]"
                        dangerouslySetInnerHTML={{
                            __html: clearStyle(blog.short_desc)
                        }}
                    ></div>
                </div>
            </BannerWrapper>
            <div className="section-wrapper-m  ">
                <div className=" title-space-3xl container hidden">
                    <ul className="flex flex-wrap justify-center gap-[12px]  ">
                        {['all', 'digital marketing', 'flutter', 'python'].map(
                            (el) => {
                                return (
                                    <li className="rounded-xl bg-green-50 p-[10px] text-[14px] capitalize leading-[145%] text-primary">
                                        {el}
                                    </li>
                                )
                            }
                        )}
                    </ul>
                </div>

                <section className="title-space-5xl lg:px-[40px]] container  relative ">
                    <Image
                        src={makeFullUrl(blog.banner)}
                        height={1000}
                        width={1000}
                        alt=""
                        className=" max-h-[507px] w-full rounded-3xl object-contain"
                    />
                </section>
                <section className="container">
                    <div className="flex flex-col gap-[35px] xl:flex-row xl:items-start ">
                        <div className="flex flex-row items-center justify-center gap-5 xl:flex-col">
                            <Link
                                href={`https://www.facebook.com/sharer/sharer.php?u=${current_url}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="flex-center h-[44px] w-[44px] rounded-[9px] border border-border">
                                    <FaFacebook className="text-2xl" />
                                </div>
                            </Link>
                            <Link
                                href={`https://twitter.com/intent/tweet?url=${current_url}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="flex-center h-[44px] w-[44px] rounded-[9px] border border-border">
                                    <FaTwitter className="text-2xl" />
                                </div>
                            </Link>
                            <Link
                                href={`https://www.linkedin.com/shareArticle?mini=true&url=${current_url}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="flex-center h-[44px] w-[44px] rounded-[9px] border border-border">
                                    <FaLinkedin className="text-2xl" />
                                </div>
                            </Link>
                            <div className="flex items-center gap-[5px] lg:gap-[10px] xl:flex-col ">
                                <p className=" title font-semibold leading-[145%]">
                                    {blog.views}
                                </p>
                                <p className="text-[14px] leading-[145%]">
                                    views
                                </p>
                            </div>
                        </div>
                        <div className="flex-grow pb-[40px]">
                            <div className="flex items-center justify-between pb-3  text-base text-primary md:text-lg   ">
                                <p>{blog.auth_name} - Author </p>
                                <p className="text-sm text-body">
                                    {formatDate(blog.created_at)}
                                </p>
                            </div>
                            <div className="text-[18px] leading-[145%]">
                                <div
                                    className="editor-content "
                                    dangerouslySetInnerHTML={{
                                        __html: clearStyle(blog.description)
                                    }}
                                ></div>
                            </div>
                            <div>
                                <div className=" mt-[20px] hidden">
                                    <ul className="flex flex-wrap gap-[12px]  ">
                                        {[
                                            'all',
                                            'digital marketing',
                                            'flutter',
                                            'python'
                                        ].map((el) => {
                                            return (
                                                <li className="rounded-xl bg-green-50 p-[10px] text-[14px] capitalize leading-[145%] text-primary">
                                                    {el}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="min-w-[314px]">
                            <h2 className="sub-header-lg title-space-lg text-body">
                                Recent
                            </h2>
                            <div>
                                <ul>
                                    {props.recentBlogs.map((blog, index) => {
                                        return (
                                            <li className="title mb-10 flex items-start gap-[10px] hover:text-primary">
                                                <span className="flex-center min-h-[40px] min-w-[40px] rounded-xl bg-gray-100 font-bold">
                                                    0{index + 1}
                                                </span>
                                                <Link
                                                    href={`/blogs/${blog.slug}`}
                                                    className=" leading-[145%]"
                                                >
                                                    {blog.title}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </section>

                <section className="section-wrapper-m-sm container">
                    <div className="mb-5 flex justify-between">
                        <p className="sub-header-lg">Recent Post</p>
                        <Link href={'/blogs'} className="is-link">
                            View All
                        </Link>
                    </div>
                    <ul className="gap-base-half grid grid-cols-1 gap-x-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {props.recentBlogs?.map((blog) => {
                            return (
                                <BlogCard
                                    index={true}
                                    title={blog.title}
                                    blurb={blog.short_desc}
                                    thumbnail={blog.img ? blog.img : blog.image}
                                    url={blog.slug}
                                    imgAlt={blog.title}
                                    key={blog.slug}
                                    slug={blog.slug}
                                    created_at={blog.created_at}
                                    views={blog.views}
                                />
                            )
                        })}
                    </ul>
                </section>
                <section className="container">
                    <Opportunity />
                </section>
            </div>
        </div>

        /* TODO: get in touch missing */
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
    const res = await fetch(makeFullApiUrl(`/singleblogslug/${params.slug}/`))

    if (!res.ok) {
        return {
            notFound: true
        }
    }

    const blog = await res.json()
    console.log('blog', blog)

    let page = 1
    let searchTerm = ''

    let blogs = []
    try {
        const blogsres = await fetch(
            makeFullApiUrl(
                `/singleblog/?size=4&search=${searchTerm}&page=${page}`
            )
        )

        const data = await blogsres.json()
        blogs = data?.navigation?.data || []
    } catch (err) {}

    return {
        props: { blog, recentBlogs: blogs },
        revalidate: 60 * 1
    }
}
