import Head from "next/head";
import Blog from "../../components/BlogsComponents/Blog";
import Header from "../../components/HeaderComponents/Header";

export default function blog() {
    return (
        <div>
            <Head>
                <title>Tech Services</title>
            </Head>
            <Header />
            <main>
                <Blog />
            </main>
        </div>
    )
}