import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { coursesCombinesApi } from '../../pages/api/apiCalls'
import Loader from '../Loader'
import TrainingBanner from './TrainingBanner'
import RelatedComponents from './TrainingComponents/RelatedComponents'
import SuccessStories from './TrainingComponents/SuccessComponents/SuccessStories'
import TrainingContainer from './TrainingContainer'
import { Meta } from './TrainingMeta'
import TrainingSubHeader from './TrainingSubHeader'

const Training = () => {
    const router = useRouter()
    const { slug } = router.query
    const [course, setCourse] = useState();
    const [meta, setMeta] = useState();
    // console.log(course?.data?.course[0]?.meta_tag)
    useEffect(() => {
        setCourse()
        router.isReady && coursesCombinesApi({ setCourse, slug })
    }, [slug, router.isReady]);
    console.log(Meta[slug])
    return (
        <>
            <Head>
                <title>{course?.data?.course[0]?.title}</title>
                {Meta[slug]?.map((meta) => {
                    return <meta name={meta?.name} property={meta?.property} content={meta?.content} detail={meta?.detail} />
                })}
            </Head>
            <div>
                {
                    course ?
                        <>
                            <TrainingBanner course={course} />
                            <TrainingSubHeader />
                            <TrainingContainer course={course} />
                            <SuccessStories course={course} />
                            <RelatedComponents course={course} />
                        </>
                        :
                        <Loader />
                }
            </div>
        </>
    )
}

export default Training