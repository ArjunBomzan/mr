import Head from 'next/head'
import AboutUs from '../components/AboutUsComponents/AboutUs'
import Header from '../components/HeaderComponents/Header'

export default function Home() {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <Header />
            <AboutUs />
        </>
    )
}
