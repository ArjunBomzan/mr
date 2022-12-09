import Head from "next/head";
import Blogs from "../../components/BlogsComponents/Blogs";
import Header from "../../components/HeaderComponents/Header";

export default function blogs() {
    return (
        <div>
            <Head>
                <title>Blogs</title>
            </Head>
            <main>
                <Blogs />
            </main>
        </div>
    )
}