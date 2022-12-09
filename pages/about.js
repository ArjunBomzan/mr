import Head from 'next/head'
import AboutUs from '../components/AboutUsComponents/AboutUs'

export default function Home() {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <AboutUs />
        </>
    )
}
