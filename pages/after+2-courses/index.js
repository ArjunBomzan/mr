import Head from 'next/head';
import React from 'react';
import Header from '../../components/HeaderComponents/Header';
import Trainings from "../../components/TrainingComponents/Trainings";

export const getStaticProps = async () => {
    const res = await fetch(`${process.env.DOMAIN_V1}course/?category=2`)
    const data = await res.json()
    return {
        props: { courses: data }
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
                <meta name="twitter:site" content="@mindrisers" />
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