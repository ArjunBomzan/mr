import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Swoosh from './common/Swoosh'
import PopupWelcomeSmall from './PopupWelcomeSmall'

const inter = Inter({ subsets: ['latin'] })

/**
 * new visitor Welcome modal
 */
export default function PopupWelcome() {
    const [isActive, setIsActive] = useState(false)
    const router = useRouter()
    const route = router.route //  eg:

    const handleClose = () => {
        setIsActive(false)
    }

    useEffect(() => {
        let body = document?.getElementById('body')
        if (isActive) {
            if (body) {
                body.style.overflow = 'hidden'
            }
        } else {
            if (body) {
                body.style.overflow = 'auto'
            }
        }
        return () => {
            if (body) {
                body.style.overflow = 'auto'
            }
        }
    }, [isActive])

    useEffect(() => {
        setTimeout(() => {
            if (route !== '/contact-us') {
                let querySubmitted = localStorage.getItem('enquirySubmitted')
                if (querySubmitted != 'true') {
                    setIsActive(true)
                }
            }
        }, 60 * 1000)
    }, [])

    useEffect(() => {
        handleClose()
    }, [route])

    return (
        <div>
            <div className="hidden lg:block">
                <section
                    id="welcome-modal"
                    className={` ${
                        isActive ? 'fixed ' : 'hidden'
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
                            className="absolute right-8 top-8 h-[42px] w-[42px] cursor-pointer xl:right-10 xl:top-10"
                            src="/assets/images/popup/basil_cross-solid.webp"
                            onClick={() => {
                                handleClose()
                            }}
                            width={100}
                            height={100}
                        />
                        <div className="absolute left-[40px] top-[50px] text-white xl:top-[122px]">
                            <p
                                className={`${inter.className} mb-[10px] text-[20px]`}
                            >
                                Interested in
                            </p>
                            <div
                                className={` mb-[20px] text-[28px] font-semibold xl:text-[36px]`}
                            >
                                <p>Transforming Your Career with</p>
                                <p className="">
                                    {' '}
                                    <Swoosh type="secondary">
                                        IT courses ?
                                    </Swoosh>{' '}
                                </p>
                            </div>
                            <p
                                className={`mb-[20px] max-w-[390px] text-[20px] xl:max-w-[550px] ${inter.className}`}
                            >
                                Get ready to take your career to the next level
                                ! Mindrisers can help you achieve your goals
                                with our industry-aligned IT training programs.
                            </p>
                            <Link
                                href={'/contact-us'}
                                className="btn inline-block"
                            >
                                contact us
                            </Link>
                        </div>
                        <img
                            className="lg:w-[960px] xl:w-auto"
                            src="/assets/images/popupWelcome.svg"
                        />
                    </div>
                </section>
            </div>
            <div className="lg:hidden">
                <PopupWelcomeSmall
                    isActive={isActive}
                    setIsActive={setIsActive}
                />
            </div>
        </div>
    )
}
