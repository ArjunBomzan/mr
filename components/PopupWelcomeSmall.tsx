import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Swoosh from './common/Swoosh'

const inter = Inter({ subsets: ['latin'] })

/**
 * Post Admission modal
 */
export default function PopupWelcomeSmall({ isActive, setIsActive }) {
    // const router = useRouter()
    // const route = router.route //  eg:
    // const [isActive, setisActive] = useState(true)
    // const [temp, settemp] = useState(true)

    const handleClose = () => {
        // settemp((state) => !state)
        setIsActive(false)
    }


    

    return (
        <section
            id="welcome-modal"
            className={` ${
                isActive ? 'fixed lg:hidden' : 'hidden'
            } inset-0 z-[9000001] flex h-screen w-full items-center justify-center bg-[rgba(0,0,0,0.45)] transition-all`}
            onClick={() => {
                handleClose()
            }}
        >
            <div
                className="relative"
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                <Image
                    alt=""
                    className="absolute right-6 top-6 h-[32px] w-[32px] cursor-pointer md:h-[36px] md:w-[36px] "
                    src="/assets/images/popup/basil_cross-solid.webp"
                    onClick={() => {
                        handleClose()
                    }}
                    width={100}
                    height={100}
                />
                <div className="absolute left-[20px] right-[20px] top-[52%] text-center text-white">
                    <p
                        className={`${inter.className} mb-[5px] text-[9px] md:mb-[10px] md:text-[12px]`}
                    >
                        Interested in
                    </p>
                    <div
                        className={` mb-[10px] text-[16px] font-semibold md:mb-[20px] md:text-[20px] `}
                    >
                        <p>Transforming Your Career with</p>
                        <p className="">
                            {/* {' '}
                            <Swoosh type="secondary">IT courses ?</Swoosh>{' '} */}
                            <span className="relative z-20">
                                {'IT courses ?'}
                                <span
                                    className={`swoosh-h-secondary !h-[10px] `}
                                ></span>
                            </span>
                        </p>
                    </div>
                    <p
                        className={`mb-[20px] max-w-[390px] text-[12px] md:text-[16px] ${inter.className}`}
                    >
                        Get ready to take your career to the next level !
                        Mindrisers can help you achieve your goals with our
                        industry-aligned IT training programs.
                    </p>
                    <Link
                        href={'/contact-us'}
                        className="btn inline-block text-[12px] md:text-[16px]"
                    >
                        contact us
                    </Link>
                </div>
                <img
                    className="md:w-[450px]"
                    src="/assets/images/popupWelcomeSmall.svg"
                />
            </div>
        </section>
    )
}
