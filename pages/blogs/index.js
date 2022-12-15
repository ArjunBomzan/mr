import Head from "next/head";
import Blogs from "../../components/BlogsComponents/Blogs";
import Header from "../../components/HeaderComponents/Header";

export const getStaticProps = async () => {
    const res = await fetch(`${process.env.DOMAIN_V1}singleblog/`)
    const data = await res.json()
    return {
        props: { blogs: data }
    }
}

export default function blogs({ blogs }) {
    return (
        <div>
            <Head>
                <title>Blogs</title>
            </Head>
            <main>
                <Blogs blogs={blogs} />
            </main>
        </div>
    )
}