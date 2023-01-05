import Head from 'next/head'
import AboutUs from '../components/AboutUsComponents/AboutUs'
import Header from '../components/HeaderComponents/Header'
import axios from "axios"

export default function Home(props) {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <Header />
            <AboutUs members={props.members} />
        </>
    )
}

export async function getServerSideProps() {
    let data = []
    try {
        const res = await axios.get(`${process.env.DB_DOMAIN_V1}teammember/`)
        data = await res.data
    }
    catch (err) {
    }

    return {
        props: { members: data }
    }
}

