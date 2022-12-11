import Head from 'next/head'
import Loader from '../Loader'
import TrainingBanner from './TrainingBanner'
import RelatedComponents from './TrainingComponents/RelatedComponents'
import SuccessStories from './TrainingComponents/SuccessComponents/SuccessStories'
import TrainingContainer from './TrainingContainer'
import { Meta } from './TrainingMeta'
import TrainingSubHeader from './TrainingSubHeader'

const Training = (props) => {
    return (
        <>
            <Head>
                <title>{props?.course?.data?.course[0]?.title}</title>
                {/* {Meta[props?.slug]?.map((meta) => {
                    return <meta name={meta?.name} property={meta?.property} content={meta?.content} detail={meta?.detail} />
                })} */}
            </Head>
            <div>
                {
                    props?.course ?
                        <>
                            <TrainingBanner course={props?.course} />
                            <TrainingSubHeader />
                            <TrainingContainer course={props?.course} />
                            <SuccessStories course={props?.course} />
                            <RelatedComponents course={props?.course} />
                        </>
                        :
                        <Loader />
                }
            </div>
        </>
    )
}

export default Training