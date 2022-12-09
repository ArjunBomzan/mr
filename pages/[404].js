import Head from "next/head"
import NotFound from "../components/NotFound"
export default function notFound() {
    return (
        <>
            <Head>
                <title>Page not found</title>
            </Head>
            <NotFound />
        </>
    )
}