import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Image from 'next/image'

/**
 * Post Admission modal
 */

export default function Popup() {
    const router = useRouter()
    const route = router.route //  eg:
    const [renderElements, setrenderElements] = useState(false)
    const [isActive, setisActive] = useState(false)
    const [temp, settemp] = useState(true)

    const handleClose = () => {
        settemp((state) => !state)
        setisActive(false)
    }

    useEffect(() => {
        handleClose()
    }, [route])

    useEffect(() => {
        setTimeout(() => {
            setrenderElements(true)
        }, 2000)
    }, [])

    let className = `${isActive ? 'active' : ''}  ${
        temp ? 'temp' : ''
    } bottom-0 left-0 right-0 py-[20px] top-0 z-[100000000000] hidden h-screen overflow-hidden  w-full cursor-pointer items-center justify-center  bg-[rgba(0,0,0,0.8)] `

    /* used in _app for all... we do not need this in inital load. disabled to optimize page speed  */
    if (!renderElements) {
        return null
    }

    return (
        <section
            id="admission-modal"
            className={className}
            onClick={() => {
                handleClose()
            }}
        >
            <div
                className="relative  max-h-[657px] max-w-[90%] cursor-auto overflow-hidden rounded-[24px] bg-[#edfff5] py-[20px] md:py-[40px]"
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                <div className="mb-[40px]] relative z-20 flex justify-end pr-8">
                    <Image
                        alt=""
                        className="absolutee right-8 top-8 h-[42px] w-[42px] cursor-pointer"
                        src="/assets/images/popup/basil_cross-solid.webp"
                        onClick={() => {
                            handleClose()
                        }}
                        width={100}
                        height={100}
                    />
                </div>
                <Image
                    alt=""
                    className="absolute -top-24 right-0 z-10"
                    src="/assets/images/popup/Ellipse_15.webp"
                    width={150}
                    height={150}
                />
                <Image
                    alt=""
                    className="absolute right-0 top-2 z-10"
                    src="/assets/images/popup/Ellipse_15.webp"
                    width={150}
                    height={150}
                />
                <Image
                    alt=""
                    className="absolute right-0 top-32 z-10"
                    src="/assets/images/popup/Ellipse_15.webp"
                    width={150}
                    height={150}
                />
                <Image
                    alt=""
                    className="absolute bottom-20 right-0 z-10"
                    src="/assets/images/popup/Ellipse_15.webp"
                    width={150}
                    height={150}
                />
                <Image
                    alt=""
                    className="absolute -bottom-14 right-0 z-10"
                    src="/assets/images/popup/Ellipse_15.webp"
                    width={150}
                    height={150}
                />
                <div className="relative z-20 flex flex-col gap-[20px]">
                    <Image
                        alt=""
                        className="max-h-[150px] w-full max-w-[500px] self-center object-contain md:max-h-[200px] lg:max-h-[250px]"
                        src="/assets/images/popup/vector.webp"
                        height={400}
                        width={400}
                    />
                    <div>
                        <div>
                            <p className="text-center text-[16px] font-normal font-semibold leading-normal text-[#018343]">
                                Your Success awaits!
                            </p>

                            <h2 className="mt-[10px] text-center text-[36px] font-normal font-semibold leading-normal text-[#433F40]">
                                Thank you !
                            </h2>
                        </div>
                        <div className="mt-[20px]">
                            <p className="max-w-[550px] px-3 text-center text-[20px] font-normal leading-7 text-[#686163]">
                                Your form have been submitted successfully. We'll reach out to you soon
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-[20px] self-center px-3 ">
                        {/* <button className="flex items-center gap-[20px] rounded-[30px] bg-[#018343] px-[16px] py-[10px] text-[16px] font-normal leading-6 text-white"> */}
                        <Link href="/" className="btn">
                            Explore Mindrisers
                        </Link>
                        {/* <button className="flex items-center gap-[20px] rounded-[30px] border-2 border-[#018343] bg-white px-[16px] py-[10px] text-[16px] font-normal leading-6 text-[#018343]"> */}
                        <Link href="/courses" className="btn-outline">
                            Explore Courses
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
