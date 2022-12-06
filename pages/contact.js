import Head from "next/head";
import Header from "../components/HeaderComponents/Header";
import ContactUs from '../components/ContactUsComponents/ContactUs'

export default function contact() {
    return (
        <div>
            <Head>
                <title>Contact</title>
            </Head>
            <main>
                <ContactUs />
            </main>
        </div>
    )
}