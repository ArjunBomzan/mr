import Head from "next/head";
import Header from "../../components/HeaderComponents/Header";
import Training from "../../components/TrainingComponents/Training";

export async function getStaticPaths() {
    const res = await fetch(`${process.env.DOMAIN_V1}course/?category=2`)
    const courses = await res.json()
    const paths = courses.map((course) => ({
        params: { slug: course.slug },
    }))
    return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    const res = await fetch(`${process.env.DOMAIN_V1}coursecombine/${params.slug}/`)
    const course = await res.json()
    return { props: { course } }
}



export default function course(props) {
    return (
        <div>
            <Head>
                <title>Course Details</title>
            </Head>
            <Header />
            <main>
                <Training course={props?.course} />
            </main>
        </div>
    )
}