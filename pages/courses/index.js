import axios from 'axios';
import Head from 'next/head';
import React from 'react';
import Trainings from "../../components/TrainingComponents/Trainings";

export const getStaticProps = async () => {
    const res = await axios.get(`${process.env.DOMAIN_V1}course/?category=1`)
    const data = await res.data
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