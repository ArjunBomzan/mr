import Link from 'next/link';
import uuid from 'react-uuid';
import TrainingOverview from './TrainingComponents/TrainingOverview';
import TrainingSyllabus from './TrainingComponents/TrainingSyllabus';
import TrainingInquiry from './TrainingInquiry';

const TrainingContainer = (props) => {
    // const [date, setDate] = useState([]);
    console.log(props?.course?.data?.time)
    const date = props?.course?.data?.time
    // setDate(props?.course?.data?.time)
    return (
        <div >
            <div
                className='flex gap-5 mt-20 p-6 lg:px-44 md:px-20 sm:px-2 overflow-auto'
                style={{ borderBottom: "0.5px solid rgb(163 163 163)" }}
            >
                <Link href="#course_overview" className='training-indicator'>
                    Course Overview
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z" />
                    </svg>
                </Link>
                <Link href="#course_syllabus" className='training-indicator'>
                    Course Syllabus
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z" />
                    </svg>
                </Link>
                <Link href="#success_stories" className='training-indicator'>
                    Success Stories
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z" />
                    </svg>
                </Link>
            </div>
            <div className='flex gap-6 justify-center flex-wrap sm:flex-nowrap lg:px-44 md:px-20 sm:px-4 px-4'>
                <div className='w-[60%] mt-10 text-justify flex-grow' >
                    <TrainingOverview course={props.course} />
                    <TrainingSyllabus course={props.course} />
                </div>
                <div className='flex-grow'>
                    {
                        date && (
                            <div className='bg-green-500 flex flex-wrap w-full p-5 justify-between text-white '>
                                {
                                    date?.map((item) => {
                                        return <div className='flex w-full justify-between' key={uuid()}>
                                            <div className='whitespace-nowrap'>{item?.start_date}</div>
                                            <div className='whitespace-nowrap'>{item?.start_time}</div>
                                        </div>
                                    })
                                }
                            </div>
                        )
                    }
                    <TrainingInquiry course={props.course} />
                </div>
            </div>
        </div >
    )
}

export default TrainingContainer