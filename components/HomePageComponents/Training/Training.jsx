import { publicRequest } from '../../../requestMethods'
import TrainingBanner from './TrainingBanner'
import RelatedComponents from './TrainingComponents/RelatedComponents'
import SuccessStories from './TrainingComponents/SuccessComponents/SuccessStories'
import TrainingContainer from './TrainingContainer'
import TrainingSubHeader from './TrainingSubHeader'
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import Loader from '../../../Loader'

const Training = () => {
    const [course, setCourse] = useState();
    let location = useLocation();
    const pathname = location.pathname.split("/")[2]
    useEffect(() => {
        publicRequest.get(`coursecombine/${pathname}/`)
            .then(res => {
                // console.log(res.data.data)
                setCourse(res.data)
            })
            .catch(err => console.log(err))
    }, [pathname]);

    return (
        <>
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
        </>
    )
}

export default Training