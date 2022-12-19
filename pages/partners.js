import axios from 'axios'
import Head from 'next/head'
import Header from '../components/HeaderComponents/Header'
import Partners from '../components/PlacementPartners/Partners'

export const getStaticProps = async () => {
    const res = await axios.get(`${process.env.DOMAIN_V1}placementpartner`)
    const data = await res.data
    return {
        props: { partners: data }
    }
}
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
