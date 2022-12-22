import "../styles/accordion.scss";
import "../styles/animations.css";
import "../styles/index.css";
import "../styles/training.css";
// import 'tw-elements';

import { useEffect } from "react";
import Footer from "../components/FooterComponents/Footer";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      (await import('tw-elements')).default;
    };
    use();
  }, []);

  return <>

    {/* <Head> */}
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,300" rel="stylesheet" type="text/css"></link>
    {/* </Head> */}
    <Component {...pageProps} />
    <Footer />

    <span id="scroll-to-top" onClick={() => {
      window.scroll(0, 0)
    }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z" />
      </svg>
    </span>
  </>
}

export default MyApp
