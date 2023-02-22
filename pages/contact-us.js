import Head from "next/head";
import ContactUs from '../components/ContactUsComponents/ContactUs';
import Header from "../components/HeaderComponents/Header";

export default function contact() {
    let meta_description = ""
    return (
        <div>
            <Head>
                <title>Contact</title>
                <meta name="keywords"
                    content="mindrisers nepal, courses,contact, it training center, kathmandu" />
                {/* facebook og tags */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={"MindRisers Contact | IT related courses in Kathmandu, Nepal"} />
                <meta property="og:description" content={meta_description} />
                {/* <meta property="og:image" content={meta_image} /> */}

                {/* twitter og tags */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="Mindrisers" /><meta name="twitter:creator" content="@mindrisers" />
                <meta property="twitter:title" content={"MindRisers contact | IT related courses in Kathmandu, Nepal"} />
                <meta property="twitter:description" content={meta_description} />
                {/* <meta name="twitter:image" content={meta_image} /> */}
            </Head>
            <Header />
            <main>
                <ContactUs />
            </main>
        </div>
    )
}