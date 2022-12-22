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
    return (
        <>
            <Head>
                <title>After +2 Courses</title>
            </Head>
            <Header />
            <Trainings courses={courses} />
        </>
    )
}

export default courses