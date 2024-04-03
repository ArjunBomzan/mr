import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { IoIosCloseCircle, IoMdCloseCircle } from 'react-icons/io'
import moment from 'moment'
import { publicRequest } from '../pages/api/apiCalls'
import { makeFullUrl } from '../utils/makeFullUrl'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Offer({ matchingUrl }: { matchingUrl: string }) {
    const [isActive, setIsActive] = useState(false)
    const [offers, setOffers] = useState<Offer[]>([])
    const [selectedOffer, setSelectedOffer] = useState(undefined)

    const router = useRouter()
    const route = router.route //  eg:

    let disabledOffers = []
    try {
        disabledOffers =
            JSON.parse(localStorage.getItem('disabledOffers') ? localStorage.getItem('disabledOffers') : null) || []
    } catch (err) {}

    useEffect(() => {
        publicRequest.get('offers/').then((res) => {
            setOffers(res.data)
        })
    }, [])

    useEffect(() => {
        const currentDate = moment()

        let activeOffers = offers.filter((el) => {
            if (el.active && currentDate.isBetween(el.start_date, el.end_date)) {
                return true
            }
        })

        let selectedOffer = activeOffers.find((el) => {
            let target = `/${el.page}${el.course?.slug ? `/${el.course?.slug}` : ''}`.toLowerCase()
            if (target == matchingUrl.toLowerCase()) {
                return true
            }
        })

        setSelectedOffer(selectedOffer)
    }, [JSON.stringify(offers)])

    const handleClose = () => {
        setIsActive(false)
    }

    // useEffect(() => {
    //     handleClose()
    // }, [route])

    useEffect(() => {
        let timer = null
        if (selectedOffer) {
            timer = setTimeout(() => {
                // if (!disabledOffers.includes(selectedOffer?.id)) {
                setIsActive(true)

                // }
            }, 10 * 1000)
        }
        return () => {
            clearTimeout(timer)
        }
    }, [JSON.stringify(selectedOffer)])

    useEffect(() => {
        let offTimer = setTimeout(() => {
            if (isActive) {
                setIsActive(false)
            }
        }, 10 * 1000)
        return () => {
            clearTimeout(offTimer)
        }
    }, [isActive])

    function goToOfferPage() {
        disabledOffers.push(selectedOffer.id)
        localStorage.setItem('disabledOffers', JSON.stringify(disabledOffers))
        window.open(selectedOffer.url, '_blank')
        setIsActive(false)
    }

    useEffect(() => {
        let body = document?.getElementById('body')
        if (isActive) {
            // when popup is active
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

    if (!selectedOffer) {
        return null
    }

    return (
        <>
            <div>
                <div className="">
                    <section
                        id="welcome-modal"
                        className={` ${
                            selectedOffer && isActive ? 'fixed ' : 'hidden'
                        } bg-[rgba(0,0,0,0.60)]] items-centerr inset-0 z-[9000001] flex h-screen w-full justify-center bg-white pt-24 transition-all`}
                        onClick={() => {
                            handleClose()
                        }}
                    >
                        <div className="flex flex-col items-center gap-8">
                            <Link href={'/'} className="inline-flex items-center">
                                <Image
                                    alt="company-logo"
                                    src={'/mindrisers.webp'}
                                    height={200}
                                    width={200}
                                    className="aspect-square h-[3.5rem] w-[3.5rem]"
                                />
                                <p className={`${inter.className} title-xl ml-[7px] xl:hidden 2xl:block`}>mindrisers</p>
                            </Link>

                            <div
                                className="relative"
                                onClick={(e) => {
                                    e.stopPropagation()
                                }}
                            >
                                <span
                                    onClick={() => {
                                        handleClose()
                                    }}
                                    className="absolute right-0 top-0 flex h-[36px] w-[36px] -translate-y-1/2 translate-x-1/2 cursor-pointer items-center justify-center rounded-full bg-red-500 font-bold text-white "
                                >
                                    X{/* <IoMdCloseCircle className="text-3xl text-red-500 lg:text-4xl " /> */}
                                </span>
                                <div onClick={goToOfferPage} className="inline-block cursor-pointer">
                                    <img
                                        className="hidden lg:inline-block"
                                        src={makeFullUrl(selectedOffer.desktop_image)}
                                    />
                                    <img className="lg:hidden" src={makeFullUrl(selectedOffer.mobile_image)} />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
