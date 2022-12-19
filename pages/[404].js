import Head from "next/head"
import Header from "../components/HeaderComponents/Header"
import NotFound from "../components/NotFound"
export default function notFound() {
    return (
        <>
            <Head>
                <title>Page not found</title>
            </Head>
            <Header />
            <NotFound />
        </>
    )
}