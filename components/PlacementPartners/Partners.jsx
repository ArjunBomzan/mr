import Loader from '../Loader'
import PartnerCard from './PartnerCard'

const Partners = (props) => {
    return (
        <>
            {
                props?.courses ?
                    <section className={`bg-white flex flex-col py-10 px-8 sm:px-12 md:px-14 lg:px-18 `}>
                        <h2 className='w-full  text-2xl font-bold text-center md:text-3xl lg:text-4xl xl:text-5xl'>
                            <span>Job Placement Partner</span>
                        </h2>
                        <div
                            className='grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-5 mt-6'
                        >
                            {
                                props?.courses?.map((course) => {
                                    return <PartnerCard course={course} key={course.id} />
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
