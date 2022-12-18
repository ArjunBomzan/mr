import Head from "next/head";
import Blog from "../../components/BlogsComponents/Blog";

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
    return { props: { blog } }
}

export default function BlogSlug(props) {
    return (
        <div>
            <Head>
                <title>{props?.blog?.data?.blog?.[0]?.page_title}</title>
                {
                    props?.blog?.data?.metatagblog?.map((meta) => {
                        return <meta key={meta?.id} name={meta?.name} content={meta?.content} detail={meta?.detail} property={meta?.property} />
                    })
                }
            </Head>
            <main>
                <Blog blog={props?.blog?.data?.blog?.[0]} />
            </main>
        </div>
    )
}