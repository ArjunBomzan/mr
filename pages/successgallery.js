import Head from "next/head"
import SuccessGalleries from "../components/SuccessGalleryComponents/SuccessGalleries"

const services = () => {

    return (
        <>
            <Head>
                <title>Success Gallery</title>
            </Head>
            <div>
                <main>
                    <SuccessGalleries />
                </main>
            </div>
        </>
    )
}

export default services
