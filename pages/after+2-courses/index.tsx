import Head from 'next/head';
import BannerWrapper from '../../components/common/BannerWrapper';
import Image from 'next/image';
import Swoosh from '../../components/common/Swoosh';
import CoursesList from '../../components/common/CoursesList';


export async function getStaticProps() {
    let data = []
    try {
        const res = await fetch(`https://mindrisers.com.np/blog/api/v1/course/?category=7`)
        data = await res.json()
    }
    catch (err) {
    }

    return {
        props: { courses: data },
        revalidate: 60 * 1 
    }
}


const courses = ({ courses }) => {
    let meta_title = "After +2 courses | mindrisers Nepal"
    let meta_description =
        "Are you searching for a Practical IT Training Center in Kathmandu Nepal then Mindrisers Institute of Technology is the perfect platform for you to learn Digital Skills";

    return (
        <>
            <Head>
                <title>Courses for +2 graduates</title>
                <meta name="keywords"
                    content="mindrisers nepal, career choice in it" />
                {/* facebook og tags */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={meta_title} />
                <meta property="og:description" content={meta_description} />
                {/* <meta property="og:image" content={meta_image} /> */}

                {/* twitter og tags */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="Mindrisers" /><meta name="twitter:creator" content="@mindrisers" />
                <meta property="twitter:title" content={meta_title} />
                <meta property="twitter:description" content={meta_description} />
                {/* <meta name="twitter:image" content={meta_image} /> */}
            </Head>
            <BannerWrapper>
                <div className='grid lg:grid-cols-[55%,45%] lg:gap-[40px] container  items-center text-center lg:text-left'>
                    <div>
                        <h1>
                        <span className='block header-md font-normal title-space capitalize text-secondary'>before bachelor starts</span>
                        <span className='block header-xl capitalize title-space'>become industry ready</span>
                        </h1>
                        <p className='header-xl'>with <span className='header text-secondary title-space-xl'><Swoosh>Mindrisers</Swoosh></span></p>
                        <p className='title text-primary'>We provide variety of market demand IT skill courses at Mindrisers. Explore courses and start your IT journey with us.</p>
                    </div>
                    <Image alt="" height={600} width={600} className='hidden lg:block w-auto w-full h-auto' src="/assets/images/courses/banner-image.svg" />
                </div>
            </BannerWrapper>
            <section className='section-wrapper-m'>
                <div className='text-center'>
                    <h2 className='sub-header-lg title-space'>Explore <Swoosh type='secondary'>Skill Courses</Swoosh></h2>
                    <p className='title text-primary'>Explore our courses</p>
                </div>
                <div className='container section-wrapper-m-sm'>
                    <CoursesList courses={courses} />
                </div>
            </section>

        </>
    )
}

export default courses