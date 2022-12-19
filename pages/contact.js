import Head from "next/head";
import ContactUs from '../components/ContactUsComponents/ContactUs';
import Header from "../components/HeaderComponents/Header";

export default function contact() {
    return (
        <div>
            <Head>
                <title>Contact</title>
            </Head>
            <Header />
            <main>
                <ContactUs />
            </main>
        </div>
    )
}