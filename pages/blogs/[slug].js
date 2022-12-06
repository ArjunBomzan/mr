import Head from "next/head";
import Blog from "../../components/BlogsComponents/Blog";
import Header from '../../components/HeaderComponents/Header'

export default function blog() {
    console.log("blog rerener")
    return (
        <div>
            <Head>
                <title>Slug BLogs</title>
            </Head>
            <main>
                <Blog />
            </main>
        </div>
    )
}