// import axios from 'axios'
import Head from 'next/head'
import Header from '../components/HeaderComponents/Header'
import Partners from '../components/PlacementPartners/Partners'

export default function Home({ partners }) {

    let meta_title = "Placement Partners | Internships | Mindrisers Nepal"
    let meta_description = ""

    return (
        <>
            <Head>
                <title>Placement Partners for mindrisers trainees</title>
                <meta name="keywords"
                    content="best computer institute in kathmandu,it courses in nepal, Computer Training Institute in kathmandu Nepal, Professional IT Training institute in Nepal, computer learning center , computer training center in nepal, computer courses in nepal ,computer institute in nepal, python programming, python course in nepal, python training in nepal, learn python in nepal, python training in kathmandu, python, learn python, python language, python coding, python certification, python basics, flutter framework training, flutter framework training in nepal, graphic design in nepal, graphic design course in nepal, graphic design training in nepal, graphic design course fee in nepal, graphic designer course in nepal, graphic design course in kathmandu, graphic design company in nepal, graphic designing course price in nepal, cost of graphic design course in nepal, graphic designer nepal, graphic design in kathmandu, mern stack course in Nepal, mern stack training in Nepal, mern stack training in Kathmandu, mern stack training centre in Kathmandu, digital marketing course in Nepal, digital marketing training in Nepal, digital marketing course in Kathmandu, digital marketing training in Kathmandu, learn digital marketing, digital marketing, online marketing, digital marketing agency, marketing agency, digital marketing courses, digital marketing company, digital marketing services, google digital marketing, web design course in Nepal, web design training in Kathmandu, web designing course price in Nepal, web designing course in Kathmandu, web page designing course in Nepal, cost of web designing course in Nepal, web designing in Nepal, Placement Parner ,Intership" />
                {/* facebook og tags */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={meta_title} />
                <meta property="og:description" content={meta_description} />
                {/* <meta property="og:image" content={meta_image} /> */}

                {/* twitter og tags */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="Mindrisers" /><meta name="twitter:creator" content="@mindrisers" />
                <meta property="twitter:title" content={meta_title} />
                <meta property="twitter:description" content={meta_description} />
                {/* <meta name="twitter:image" content={meta_image} /> */}
            </Head>
            <Header />
            <Partners courses={partners} />
        </>
    )
}

// export async function getStaticProps({ params }) {
//     const res = await fetch(`${process.env.DOMAIN_V1}coursecombine/${params.slug}/`)

//     if (!res.ok) {
//         return {
//             notFound: true,
//         };
//     }

//     const course = await res.json()

//     const data = await fetch(`${process.env.DOMAIN_V1}course/`)
//     const course_list = await data.json()
//     return {
//         props: { course, course_list, course_id: params.slug },
//         revalidate: 60 * 60  // this may cause server unndecessary loads, since the data merely gets changed. but it is definately better than SSR ?  SSR doesnot trigger the html and store it  while ISR does -> ISR > SSR cause SSR will also create load on server since, every time, the server needs to create html and send as response while ISR will simply cache it and set it. 
//     }
// }


export async function getStaticProps() {
    let data = []
    try {
        const res = await fetch(`${process.env.DOMAIN_V1}placementpartner/`)
        data = await res.json()
    }
    catch (err) {

    }

    return {
        props: { partners: data },
        // revalidate: 60 * 60 * 24 * 1  // 3 day
        revalidate: 60 * 5  // this may cause server unndecessary loads, since the data merely gets changed. but it is definately better than SSR ?  SSR doesnot trigger the html and store it  while ISR does -> ISR > SSR cause SSR will also create load on server since, every time, the server needs to create html and send as response while ISR will simply cache it and set it. 

    }
}
