import Head from 'next/head';
import React from 'react';
import Trainings from "../../components/TrainingComponents/Trainings";

const courses = () => {
    return (
        <>
            <Head>
                <title>Courses</title>
            </Head>
            <Trainings />
        </>
    )
}

export default courses