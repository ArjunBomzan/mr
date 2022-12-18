import Loader from '../Loader'
import PartnerCard from './PartnerCard'

const Partners = (props) => {
    return (
        <>
            {
                props?.courses ?
                    <section className={`bg-white flex flex-col py-10 px-8 sm:px-12 md:px-14 lg:px-18 gap-4`}>
                        <h2 className='w-full '>
                            <p className='text-2xl font-bold md:text-3xl text-center mb-2'>Job Placement Partner</p>
                            <span className='text-md md:text-xl lg:text-2xl text-justify'>Since jobrisers is the sister compalny of mindrisers here are some of the companies where direct placement through jobrisers is done.</span>
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
