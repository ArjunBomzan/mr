import Head from "next/head";
import Blogs from "../../components/BlogsComponents/Blogs";
import Header from "../../components/HeaderComponents/Header";

export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.DOMAIN_V1}singleblog/`)
    const data = await res.json()
    return {
        props: { blogs: data }
    }
}

export default function blogs({ blogs }) {

    let meta_description = "Are you searching for a Practical IT Training Center in Kathmandu Nepal then MindRisers is the perfect platform for you to learn Digital Skils"
    let meta_image = `${process.env.NEXT_PUBLIC_DOMAIN}/assets/images/blogs.png`

    return (
        <div>
            <Head>
                <title>Blogs - Trends, Ideas and Tips </title>
                <meta name="keywords"
                    content="mindrisers nepal, blogs, it training center, kathmandu" />
                {/* facebook og tags */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content={"Blogs | MindRisers Nepal"} />
                <meta property="og:description" content={meta_description} />
                <meta property="og:image" content={meta_image} />

                {/* twitter og tags */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@mindrisers" />
                <meta property="twitter:title" content={"Blogs | MindRisers Nepal"} />
                <meta property="twitter:description" content={meta_description} />
                <meta name="twitter:image" content={meta_image} />
            </Head>
            <Header />
            <main>
                <Blogs blogs={blogs} />
            </main>
        </div>
    )
}