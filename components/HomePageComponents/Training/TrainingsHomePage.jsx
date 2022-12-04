import { useEffect, useState } from "react";
import Link from 'next/link';
import uuid from 'react-uuid';
import TrainingCard from './TrainingCard';
import coursesApi from "../../../pages/api/coursesApi";

const TrainingsHomePage = (props) => {
    const [courses, setCourses] = useState();
    useEffect(() => {
        coursesApi({ setCourses })
    }, []);
    return (
        <div className='px-4 py-20 lg:px-44 md:px-20 sm:px-16 relative'>
            <span className='w-5/6 text-xl font-bold sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl mb-6'>Popular Courses</span>
            <div
                className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 mt-6'
            >
                {
                    courses?.map((course) => {
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

export default TrainingsHomePage