import Head from "next/head";
import Blog from "../../components/BlogsComponents/Blog";
import Header from "../../components/HeaderComponents/Header";

// export async function getStaticPaths() {
//     const res = await fetch(`${process.env.DOMAIN_V1}singleblog/`)
//     const blogs = await res.json()
//     const paths = blogs.map((blog) => ({
//         params: { slug: blog.slug },
//     }))
//     return { paths, fallback: false }
// }

// This also gets called at build time
export async function getServerSideProps({ params }) {
    const res = await fetch(`${process.env.DOMAIN_V1}singleblogslug/${params.slug}/`)
    const blog = await res.json()
    return { props: { blog } }
}

export default function BlogSlug(props) {
    
    let meta_description = props?.blog?.data?.blog[0]?.short_desc || "";
    let meta_image = `${process.env.NEXT_PUBLIC_DB_DOMAIN}${props?.blog?.data?.blog[0]?.banner}`

    return (
        <div>
            <Head>
            <meta name="keywords"
                    content={`mindrisers nepal, blogs, it training center, kathmandu,${props?.blog?.data?.blog?.[0]?.page_title}`} />
                <title>{props?.blog?.data?.blog?.[0]?.page_title}</title>
                {/* facebook og tags */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content={`${props?.blog?.data?.blog?.[0]?.page_title}`} />
                <meta property="og:description" content={meta_description} />
                <meta property="og:image" content={meta_image} />

                {/* twitter og tags */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@mindrisers" />
                <meta property="twitter:title" content={`${props?.blog?.data?.blog?.[0]?.page_title}`} />
                <meta property="twitter:description" content={meta_description} />
                <meta name="twitter:image" content={meta_image} />

                {
                    props?.blog?.data?.metatagblog?.map((meta) => {
                        return <meta key={meta?.id} name={meta?.name} content={meta?.content} detail={meta?.detail} property={meta?.property} />
                    })
                }

            </Head>
            <Header />
            <main>
                <Blog blog={props?.blog?.data?.blog?.[0]} />
            </main>
        </div>
    )
}