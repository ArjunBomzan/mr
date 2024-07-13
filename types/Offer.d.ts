type OfferPage = 'home' | 'course' | 'courseDetail'

type OfferCourse = {
    id: number
    slug: string
}

type Offer = {
    id: number
    name: string
    url: string
    active: boolean
    desktop_image: string
    mobile_image: string
    start_date: string
    end_date: string
    page: OfferPage
    course: null | OfferCourse
}
