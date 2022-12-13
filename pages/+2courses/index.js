import Head from 'next/head';
import React from 'react';
import Trainings from "../../components/TrainingComponents/Trainings";

export const getStaticProps = async () => {
    const res = await fetch(`${process.env.DOMAIN_V1}course/`)
    const data = await res.json()
    return {
        props: { courses: data }
    }
}

const courses = ({ courses }) => {
    return (
        <>
            <Head>
                <title>+2 Courses</title>
            </Head>
            <Trainings courses={courses} />
        </>
    )
}

export default courses