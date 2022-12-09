import Head from 'next/head';
import React from 'react';
import Trainings from "../../components/TrainingComponents/Trainings";
import { coursesApi } from '../api/apiCalls';
import { useState, useEffect } from "react";
const courses = () => {
    const [courses, setCourses] = useState();
    useEffect(() => {
        coursesApi({ setCourses })
    }, []);
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