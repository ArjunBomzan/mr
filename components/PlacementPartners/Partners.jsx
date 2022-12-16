import { useRouter } from 'next/router'
import uuid from 'react-uuid'
import Loader from '../Loader'
import TrainingCard from '../TrainingComponents/TrainingCard'
import PartnerCard from './PartnerCard'


const Partners = (props) => {
    const router = useRouter()
    const pathname = router.pathname.split('/')[1]
    return (
        <>
            {
                props?.courses ?
                    <section className={`bg-white flex flex-col pb-20 pt-8 sm:pb-24 px-5 sm:px-14 md:px-18 lg:px-32 xl:px-44`}>
                        <h2 className='w-full  text-2xl font-bold text-center md:text-3xl lg:text-4xl xl:text-5xl'>
                            <span>Job Placement Partner</span>
                        </h2>
                        <div
                            className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 mt-6'
                        >
                            {
                                props?.courses?.map((course) => {
                                    return <PartnerCard course={course} key={uuid()} />
                                })
                            }
                        </div>
                    </section>
                    :
                    <Loader />
            }
        </>
    )
}

export default Partners
