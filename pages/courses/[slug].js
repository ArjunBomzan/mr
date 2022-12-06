import Head from "next/head";
import Header from "../../components/HeaderComponents/Header";
import Training from "../../components/TrainingComponents/Training";

export default function course() {
    return (
        <div>
            <Head>
                <title>Course Details</title>
            </Head>
            <main>
                <Training />
            </main>
        </div>
    )
}