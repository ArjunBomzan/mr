import Head from "next/head";
import Blogs from '../../components/BlogsComponents/Blogs';


export default function tech_services() {
    return (
        <div>
            <Head>
                <title>Tech Services</title>
            </Head>
            <main>
                <Blogs />
            </main>
        </div>
    )
}