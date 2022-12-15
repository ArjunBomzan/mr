import Head from "next/head";
import Blog from "../../components/BlogsComponents/Blog";
import Header from '../../components/HeaderComponents/Header'

export async function getStaticPaths() {
    const res = await fetch(`${process.env.DOMAIN_V1}singleblog/`)
    const blogs = await res.json()
    const paths = blogs.map((blog) => ({
        params: { slug: blog.slug },
    }))
    return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    const res = await fetch(`${process.env.DOMAIN_V1}singleblogslug/${params.slug}/`)
    const blog = await res.json()
    console.log(blog)
    return { props: { blog } }
}

export default function BlogSlug(props) {
    return (
        <div>
            <Head>
                <title>BLogs</title>
            </Head>
            <main>
                <Blog blog={props?.blog?.data?.blog?.[0]} />
            </main>
        </div>
    )
}