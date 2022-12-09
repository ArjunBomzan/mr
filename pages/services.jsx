import Head from "next/head"
import Header from "../components/HeaderComponents/Header"
import Services from "../components/ServicesComponents/Services"

const services = () => {

  return (
    <>
      <Head>
        <title>Services</title>
      </Head>
      <div>
        <main>
          <Services />
        </main>
      </div>
    </>
  )
}

export default services
