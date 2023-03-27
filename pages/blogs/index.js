import Head from "next/head";
import Blogs from "../../components/BlogsComponents/Blogs";
import Header from "../../components/HeaderComponents/Header";

export const getStaticProps = async () => {
    const res = await fetch(`${process.env.DOMAIN_V1}singleblog/`)
    const data = await res.json()
    return {
        props: { blogs: data },
        // revalidate: 60 * 60 * 24 * 1  // 3 day
        revalidate: 60 * 1  // this may cause server unndecessary loads, since the data merely gets changed. but it is definately better than SSR ?  SSR doesnot trigger the html and store it  while ISR does -> ISR > SSR cause SSR will also create load on server since, every time, the server needs to create html and send as response while ISR will simply cache it and set it. 

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
                <meta property="og:type" content="website" />
                <meta property="og:title" content={"Blogs | MindRisers Nepal"} />
                <meta property="og:description" content={meta_description} />
                <meta property="og:image" content={meta_image} />

                {/* twitter og tags */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="Mindrisers" /><meta name="twitter:creator" content="@mindrisers" />
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