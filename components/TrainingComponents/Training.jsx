import Head from 'next/head'
import dynamic from 'next/dynamic'
import Loader from '../Loader'
import TrainingBanner from './TrainingBanner'
import RelatedComponents from './TrainingComponents/RelatedComponents'
import TrainingContainer from './TrainingContainer'
import TrainingSubHeader from './TrainingSubHeader'

const Training = (props) => {
    const HomeSuccessStories = dynamic(
        () => import("../../components/HomePageComponents/HomeSuccessStories"),
        { ssr: false }
    )

    return (
        <>
            <Head>
                <title>{props?.course?.data?.course[0]?.page_title}</title>
                {
                    props?.course?.data?.meta?.map((meta) => {
                        return <meta key={meta?.id} name={meta?.name} content={meta?.content} detail={meta?.detail} property={meta?.property}
                        />
                    })
                }
            </Head>
            <div>
                {
                    props?.course ?
                        <>
                            <TrainingBanner course={props?.course} />
                            <TrainingSubHeader />
                            <div className='lg:px-44 md:px-20 px-6 sm:px-16'>
                                <TrainingContainer course={props?.course} course_list={props?.course_list} course_id={props?.course_id} />
                                <HomeSuccessStories in_training_page={true} />
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