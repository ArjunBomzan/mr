import Head from 'next/head';
import React from 'react';
import Trainings from "../../components/TrainingComponents/Trainings";

export const getStaticProps = async () => {
    const res = await fetch(`${process.env.DOMAIN_V1}course/`)
    const data = await res.json()
    console.log(data)
    return {
        props: { courses: data }
    }
}

const courses = ({ courses }) => {
    console.log("this is the page", courses)
    return (
        <>
            <Head>
                <title>Courses</title>
            </Head>
            <Trainings courses={courses} />
        </>
    )
}

export default courses