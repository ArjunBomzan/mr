import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { coursesCombinesApi } from '../../pages/api/apiCalls'
import Loader from '../Loader'
import TrainingBanner from './TrainingBanner'
import RelatedComponents from './TrainingComponents/RelatedComponents'
import SuccessStories from './TrainingComponents/SuccessComponents/SuccessStories'
import TrainingContainer from './TrainingContainer'
import TrainingSubHeader from './TrainingSubHeader'

const Training = () => {
    const router = useRouter()
    const { slug } = router.query
    const [course, setCourse] = useState();

    useEffect(() => {
        setCourse()
        router.isReady && coursesCombinesApi({ setCourse, slug })
    }, [slug, router.isReady]);

    return (
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
    )
}

export default Training