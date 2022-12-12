import "../styles/animations.css";
import "../styles/index.css";
import "../styles/training.css";
// import 'tw-elements';

import Link from "next/link";
import Footer from "../components/FooterComponents/Footer";
import Header from "../components/HeaderComponents/Header";
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      (await import('tw-elements')).default;
    };
    use();
  }, []);

  return <>
    <Header />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,300" rel="stylesheet" type="text/css"></link>
    <Component {...pageProps} />
    <Footer />

    <Link href="#navbar" id='scroll-to-top' scroll={false}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z" />
      </svg>
    </Link>
  </>
}

export default MyApp
