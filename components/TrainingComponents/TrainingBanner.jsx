import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useWindowSize } from "../ScreenSize";
import Image from "next/image"


const TrainingBanner = (props) => {
    const size = useWindowSize({ useEffect, useState });
    const course = props?.course?.data?.course[0]
    return (
        <div className="overflow-hidden">
            <div
                className=' bg-center bg-cover bg-no-repeat text-md training-banner relative '
                style={{
                    // backgroundImage: `url("https://api.mindrisers.jobrisers.com${size?.width < 600 ? course?.mobile_banner : course?.banner}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: "rgba(0,0,0,0.75)",
                    backgroundBlendMode: "darken",
                    backgroundRepeat: "no-repeat",
                    position: "relative"

                }}
            >
                <Image width={1500} height={1500} src={`https://api.mindrisers.jobrisers.com${size?.width < 600 ? course?.mobile_banner : course?.banner}`}
                    style={{
                        position: "fixed",
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        zIndex: "-1",
                        filter: "brightness(30%)"
                    }} />
                <div className="text-white text-right flex flex-col items-end gap-8 lg:p-16 sm:p-12 p-6">
                    <span className=''><Link href="/">Home</Link> / {course?.title}</span>
                    <h1 className=' text-3xl '>{course?.title}</h1>
                    {
                        course?.banner_desc && <p className=''>{course?.banner_desc}</p>
                    }
                    <div className="flex text-right flex-col">
                        <span className=''>Duration: {course?.duration}</span>
                        <span className=''>Career: {course?.career}</span>
                    </div>
                    <div className='flex gap-8 justify-end'>
                        <Link className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 border border-green-600 rounded fill-white flex gap-2 items-center text-sm" href="#quick_inquiry" scroll={false}>
                            Send Enquiry
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-3'>
                                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                            </svg>
                        </Link>
                        <Link href="/online-admission" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 border border-green-600 rounded fill-white flex gap-2 items-center  text-sm">
                            Get Admission
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-3'>
                                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default TrainingBanner