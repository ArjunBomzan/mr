import Head from "next/head"
import Header from "../components/HeaderComponents/Header"
import SuccessGalleries from "../components/SuccessGalleryComponents/SuccessGalleries"

const services = () => {

    return (
        <>
            <Head>
                <title>Success Gallery</title>
            </Head>
            <Header />
            <div>
                <main>
                    <SuccessGalleries />
                </main>
            </div>
        </>
    )
}

export default services
