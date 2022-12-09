import Head from "next/head";
import Training from "../../components/TrainingComponents/Training";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { coursesCombinesApi } from '../../pages/api/apiCalls'

export default function course() {
    const router = useRouter()
    const [course, setCourse] = useState();
    const { slug } = router.query
    useEffect(() => {
        setCourse()
        router.isReady && coursesCombinesApi({ setCourse, slug })
    }, [slug, router.isReady]);
    
    return (
        <div>
            <Head>
                <title>Course Details</title>
            </Head>
            <main>
                <Training course={course} slug={slug} />
            </main>
        </div>
    )
}