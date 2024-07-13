import Head from 'next/head'
import dynamic from 'next/dynamic'
import Loader from '../Loader'
import TrainingBanner from './TrainingBanner'
import RelatedComponents from './TrainingComponents/RelatedComponents'
import TrainingContainer from './TrainingContainer'
import TrainingSubHeader from './TrainingSubHeader'
import { useRouter } from 'next/router'

const Training = (props) => {
    const HomeSuccessStories = dynamic(
        () => import("../../components/HomePageComponents/HomeSuccessStories"),
        { ssr: false }
    )
    const router = useRouter()

    let meta_description = props?.course?.data?.meta?.find(meta => meta.name == "description")?.content || "";

    let meta_image = props?.course?.data?.course[0]?.banner
    if (meta_image) {
        meta_image = `${process.env.NEXT_PUBLIC_DB_DOMAIN}${meta_image}`
    }

    let current_url = `${process.env.NEXT_PUBLIC_DOMAIN}${router.asPath}`

    return (
        <>
            <Head>
                <title>{props?.course?.data?.course[0]?.title}</title>
                <meta name="title" content={props?.course?.data?.course[0]?.title} />

                {
                    props?.course?.data?.meta?.map((meta) => {
                        return <meta key={meta?.id} name={meta?.name} content={meta?.content} detail={meta?.detail} property={meta?.property}
                        />
                    })
                }

                {/* facebook og tags */}
                <meta property="og:url" content={current_url} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={props?.course?.data?.course[0]?.title} />
                <meta property="og:description" content={meta_description} />
                <meta property="og:image" content={meta_image} />

                {/* twitter og tags */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@mindrisers" />
                <meta name="twitter:creator" content="@mindrisers" />
                <meta property="twitter:title" content={props?.course?.data?.course[0]?.title} />
                <meta property="twitter:description" content={meta_description} />
                <meta name="twitter:image" content={meta_image} />
            </Head>
            <div>
                {
                    props?.course ?
                        <>
                            <TrainingBanner course={props?.course} />
                            <TrainingSubHeader />
                            <div className='lg:px-44 md:px-20 px-6 sm:px-16'>
                                <TrainingContainer course={props?.course} course_list={props?.course_list} course_id={props?.course_id} />
                                <HomeSuccessStories in_training_page={true} successStoreis={props?.success_stories} />
                                <RelatedComponents course={props?.course} />
                            </div>
                        </>
                        :
                        <Loader />
                }
            </div>
        </>
    )
}

export default Training