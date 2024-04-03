import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { IoIosCloseCircle } from 'react-icons/io'
import moment from 'moment'

export default function Offer({ matchingUrl }: { matchingUrl: string }) {
    const [isActive, setIsActive] = useState(false)
    const router = useRouter()
    const route = router.route //  eg:

    let offers: Offer[] = [
        {
            id: 1,
            name: 'Offer 1',
            url: '/offer1',
            active: true,
            desktop_image: '/advWeb.png',
            mobile_image: '/advMobile.png',
            start_date: '2024-04-01',
            end_date: '2024-04-30',
            page: 'home',
            course: null
        },
        {
            id: 2,
            name: 'Offer 2',
            url: '/offer2',
            active: false,
            desktop_image: '/advWeb2.png',
            mobile_image: '/advMobile2.png',
            start_date: '2024-04-15',
            end_date: '2024-05-15',
            page: 'home',
            course: null
        },
        {
            id: 3,
            name: 'Offer 3',
            url: '/offer3',
            active: true,
            desktop_image: '/advWeb3.png',
            mobile_image: '/advMobile3.png',
            start_date: '2024-04-10',
            end_date: '2024-05-10',
            page: 'courseDetail',
            course: {
                id: 123,
                slug: 'mern-stack-development-training-in-nepal'
            }
        }
    ]

    let disabledOffers = []
    try {
        disabledOffers =
            JSON.parse(localStorage.getItem('disabledOffers') ? localStorage.getItem('disabledOffers') : null) || []
    } catch (err) {}

    const currentDate = moment()

    offers = offers.filter((el) => {
        if (el.active && currentDate.isBetween(el.start_date, el.end_date)) {
            return true
        }
    })

    let selectedOffer = offers.find((el) => {
        let target = `/${el.page}${el.course?.slug ? `/${el.course?.slug}` : ''}`
        if (target == matchingUrl) {
            return true
        }
    })

    if (!selectedOffer) {
        return null
    }

    const handleClose = () => {
        setIsActive(false)
    }

    // useEffect(() => {
    //     handleClose()
    // }, [route])

    useEffect(() => {
        setTimeout(() => {
            if (isActive) {
                setIsActive(false)
            }
        }, 13 * 1000)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            if (!disabledOffers.includes(selectedOffer.id)) {
                setIsActive(true)
            }
        }, 3 * 1000)
    }, [])

    function goToOfferPage() {
        disabledOffers.push(selectedOffer.id)
        localStorage.setItem('disabledOffers', JSON.stringify(disabledOffers))
        router.push(selectedOffer.url)
    }

    useEffect(() => {
        let body = document?.getElementById('body')
        if (isActive) { // when popup is active
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

    return (
        <>
            <div>
                <div className="">
                    <section
                        id="welcome-modal"
                        className={` ${
                            selectedOffer && isActive ? 'fixed ' : 'hidden'
                        } inset-0 z-[9000001] flex h-screen w-full items-center justify-center bg-[rgba(0,0,0,0.45)] transition-all`}
                        onClick={() => {}}
                    >
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
                                className="absolute -right-2 -top-2 inline-block cursor-pointer"
                            >
                                <IoIosCloseCircle className="text-2xl text-red-500 lg:text-3xl" />
                            </span>
                            <div onClick={goToOfferPage} className="inline-block">
                                <img className="hidden lg:inline-block" src={selectedOffer.desktop_image} />
                                <img className="lg:hidden" src={selectedOffer.mobile_image} />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
