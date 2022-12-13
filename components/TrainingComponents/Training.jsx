import Head from 'next/head'
import Loader from '../Loader'
import TrainingBanner from './TrainingBanner'
import RelatedComponents from './TrainingComponents/RelatedComponents'
import SuccessStories from './TrainingComponents/SuccessComponents/SuccessStories'
import TrainingContainer from './TrainingContainer'
import TrainingSubHeader from './TrainingSubHeader'

const Training = (props) => {
    console.log(props?.course?.data?.course?.page_title)
    return (
        <>
            <Head>
                <title>{props?.course?.data?.course?.page_title}</title>
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