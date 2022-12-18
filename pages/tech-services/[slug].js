import Head from "next/head";
import Blog from "../../components/BlogsComponents/Blog";

export default function blog() {
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