import Header from "../../components/HeaderComponents/Header";
import Training from "../../components/TrainingComponents/Training";

// export async function getStaticPaths() {
//     const res = await fetch(`${process.env.DOMAIN_V1}course/?category=1`)
//     const courses = await res.json()
//     const paths = courses?.map((course) => ({
//         params: { slug: course.slug },
//     }))
//     return { paths, fallback: blocking }
// }

// This also gets called at build time
export async function getServerSideProps({ params }) {
    const res = await fetch(`${process.env.DOMAIN_V1}coursecombine/${params.slug}/`)
    const course = await res.json()

    const data = await fetch(`${process.env.DOMAIN_V1}course/`)
    const course_list = await data.json()
    return { props: { course, course_list, course_id: params.slug } }
}



export default function course(props) {
    return (
        <div>
            <Header />
            <main>
                <Training course={props?.course} course_list={props?.course_list} course_id={props?.course_id} />
            </main>
        </div>
    )
}