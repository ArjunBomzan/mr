import axios from 'axios'
import Head from 'next/head'
import Header from '../components/HeaderComponents/Header'
import Partners from '../components/PlacementPartners/Partners'

export default function Home({ partners }) {
    return (
        <>
            <Head>
                <title>Placement Partners</title>
            </Head>
            <Header />
            <Partners courses={partners} />
        </>
    )
}

export async function getServerSideProps() {
    let data = []
    try {
        const res = await axios.get(`${process.env.DOMAIN_V1}placementpartner/`)
        data = await res.data
    }
    catch (err) {

    }

    return {
        props: { partners: data }
    }
}
