import Head from "next/head";
import Blogs from '../../components/BlogsComponents/Blogs';
import Header from "../../components/HeaderComponents/Header";


export default function tech_services() {
    return (
        <div>
            <Head>
                <title>Tech Services</title>
            </Head>
            <Header />
            <main>
                <Blogs />
            </main>
        </div>
    )
}