import Head from "next/head";
import Blog from "../../components/BlogsComponents/Blog";
import Header from '../../components/HeaderComponents/Header'

export default function blog() {
    console.log("slug rerener")
    return (
        <div>
            <Head>
                <title>Tech Services</title>
            </Head>
            <main>
                <Blog />
            </main>
        </div>
    )
}