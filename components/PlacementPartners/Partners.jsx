import Loader from '../Loader'
import PartnerCard from './PartnerCard'

const Partners = (props) => {
    return (
        <>
            {
                props?.courses ?
                    <section className={`bg-white flex flex-col py-10 px-8 sm:px-12 md:px-14 lg:px-18 gap-4`}>
                        <div className='w-full '>
                            <h1 className='text-2xl  md:text-3xl text-center mt-10 mb-5 md:mt-16 md:mb-8'>Job Placement Partners</h1>
                            <p className='text-justify'>
                                Our placement partner page features companies and organizations that have recruited our graduates for internships and full-time careers. We take pleasure in educating our students for successful careers in the tech company as an IT training institute. We are able to give our students with important industry experience and the ability to put their talents to the test in a real-world scenario by working with leading firms and organizations. Our placement partners range from startups to huge enterprises, and they are all dedicated to assisting our students in achieving success in their respective industries. We are thankful to have such a strong network of placement partners, and we look forward to growing and expanding our connections in the future.
                            </p>
                        </div>
                        <div
                            className='grid grid-cols-3 gap-3 sm:gap-4 md:gap-5 sm:grid-cols-4 xl:grid-cols-5 mt-6'
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


