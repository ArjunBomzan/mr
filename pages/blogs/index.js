import Head from "next/head";
import Blogs from "../../components/BlogsComponents/Blogs";
import Header from "../../components/HeaderComponents/Header";

export const getServerSideProps = async ({query}) => {
    let page = parseInt(query.page) || 1
    let searchTerm = query.q || ""

    const res = await fetch(`${process.env.DOMAIN_V1}singleblog/?size=9&search=${searchTerm}&page=${page}`)
    const data = await res.json()


    return {
        props: {
            blogs: data?.navigation?.data || [],
            total_data: data?.navigation?.total_data || 0,
            current_page: data?.navigation?.current_page || 1,
        },
        // revalidate: 60 * 60 * 24   // 1 day
        // revalidate: 60 * 1  // this may cause server unndecessary loads, since the data merely gets changed. but it is definately better than SSR ?  SSR doesnot trigger the html and store it  while ISR does -> ISR > SSR cause SSR will also create load on server since, every time, the server needs to create html and send as response while ISR will simply cache it and set it. 
    }
}

export default function blogs({ blogs, total_data, current_page }) {

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
                <Blogs blogs={blogs} current_page={current_page} total_data={total_data} />
            </main>
        </div>
    )
}