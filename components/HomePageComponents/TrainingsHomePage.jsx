import Link from 'next/link';
import uuid from 'react-uuid';
import TrainingCard from '../TrainingComponents/TrainingCard';

const TrainingsHomePage = (props) => {

    return (
        <div className='p-4 lg:py-20 lg:px-44 md:px-20 sm:p-16 relative'>
            <span className='w-5/6 text-xl font-bold sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl mb-6'>Popular Courses</span>
            <div
                className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 mt-6'
            >
                {
                    props?.courses?.slice(0, 12)?.map((course) => {
                        return <TrainingCard course={course} key={uuid()} />
                    })
                }
            </div>
            <div className='flex justify-center'>
                <Link href='courses' className='p-3 px-6 text-sm text-green-500 duration-500 border-2 border-green-500 rounded-md hover:bg-green-500 hover:text-white inline-block mt-12 '>
                    View All
                </Link>
            </div>
        </div>
    )
}

// export async function getServerSideProps() {
//     let data = []
//     try {
//         const res = await axios.get(`https://api.mindrisers.jobrisers.com/blog/api/v1/course/`)
//         data = await res.data
//     }
//     catch (err) {

//     }

//     return {
//         props: { courses: data }
//     }
// }



export default TrainingsHomePage