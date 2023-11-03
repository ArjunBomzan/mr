import Head from 'next/head';
import Header from '../../components/HeaderComponents/Header';
import Trainings from "../../components/TrainingComponents/Trainings";


export async function getStaticProps() {
    let data = []
    try {
        const res = await fetch(`https://mindrisers.com.np/blog/api/v1/course/?category=7`)
        data = await res.json()
    }
    catch (err) {
    }

    return {
        props: { courses: data },
        // revalidate: 60 * 60 * 24  // this may cause server unndecessary loads, since the data merely gets changed. but it is definately better than SSR ?  SSR doesnot trigger the html and store it  while ISR does -> ISR > SSR cause SSR will also create load on server since, every time, the server needs to create html and send as response while ISR will simply cache it and set it. 
        revalidate: 60 * 1  // this may cause server unndecessary loads, since the data merely gets changed. but it is definately better than SSR ?  SSR doesnot trigger the html and store it  while ISR does -> ISR > SSR cause SSR will also create load on server since, every time, the server needs to create html and send as response while ISR will simply cache it and set it. 


    }
}


const courses = ({ courses }) => {
    let meta_title = "After +2 courses | mindrisers Nepal"
    let meta_description = ""
    return (
        <>
            <Head>
                <title>Courses for +2 graduates</title>
                <meta name="keywords"
                    content="mindrisers nepal, career choice in it" />
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
            <Trainings courses={courses} />

        </>
    )
}

export default courses