import Header from "../../components/HeaderComponents/Header";
import Training from "../../components/TrainingComponents/Training";

export async function getStaticPaths() {
    const res = await fetch(`${process.env.DOMAIN_V1}course/`)
    const courses = await res.json()
    const paths = courses?.map((course) => ({
        params: { slug: course.slug },
    }))
    return { paths, fallback: "blocking" }
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params }) {
    const res = await fetch(`${process.env.DOMAIN_V1}coursecombine/${params.slug}/`)

    if (!res.ok) {
        return {
            notFound: true,
        };
    }

    const course = await res.json()

    const data = await fetch(`${process.env.DOMAIN_V1}course/`)
    const course_list = await data.json()


    const success_storie_res = await fetch(`${process.env.DOMAIN_V1}successstoryhome/`)
    const success_stories = await success_storie_res.json()




    return {
        props: { course, course_list, course_id: params.slug, success_stories },
        revalidate: 60 * 60 * 24 * 1  // this may cause server unndecessary loads, since the data merely gets changed. but it is definately better than SSR ?  SSR doesnot trigger the html and store it  while ISR does -> ISR > SSR cause SSR will also create load on server since, every time, the server needs to create html and send as response while ISR will simply cache it and set it. 
        // revalidate: 60 * 1  // this may cause server unndecessary loads, since the data merely gets changed. but it is definately better than SSR ?  SSR doesnot trigger the html and store it  while ISR does -> ISR > SSR cause SSR will also create load on server since, every time, the server needs to create html and send as response while ISR will simply cache it and set it. 

    }
}

// This also gets called at build time


// export async function getServerSideProps({ params }) {
//     const res = await fetch(`${process.env.DOMAIN_V1}coursecombine/${params.slug}/`)
//     const course = await res.json()

//     const data = await fetch(`${process.env.DOMAIN_V1}course/`)
//     const course_list = await data.json()
//     return { props: { course, course_list, course_id: params.slug } }
// }

// This also gets called at build time


// export async function getServerSideProps({ params }) {
//     const res = await fetch(`${process.env.DOMAIN_V1}coursecombine/${params.slug}/`)
//     const course = await res.json()

//     const data = await fetch(`${process.env.DOMAIN_V1}course/`)
//     const course_list = await data.json()
//     return { props: { course, course_list, course_id: params.slug } }
// }

export default function course(props) {
    return (
        <div>
            <Header />
            <main>
                <Training {...props} />
            </main>
        </div>
    )
}