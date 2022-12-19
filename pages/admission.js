import Head from "next/head"
import Admission from "../components/AdmissionComponents/Admission"
import Header from "../components/HeaderComponents/Header"

export default function admission() {
    return (<>
        <Head>
            <title>Admission</title>
        </Head>
        <Header />
        <Admission />
    </>
    )
}