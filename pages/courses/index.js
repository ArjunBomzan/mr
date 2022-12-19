import axios from 'axios';
import Head from 'next/head';
import React from 'react';
import Header from '../../components/HeaderComponents/Header';
import Trainings from "../../components/TrainingComponents/Trainings";

export const getStaticProps = async () => {
    const res = await axios.get(`${process.env.DOMAIN_V1}course/?category=1`)
    const data = await res.data
    return {
        props: { courses: data }
    }
}

const courses = ({ courses }) => {
    return (
        <>
            <Head>
                <title>Courses</title>
            </Head>
            <Header />
            <Trainings courses={courses} />
        </>
    )
}

export default courses