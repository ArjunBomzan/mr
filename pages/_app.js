import "../styles/index.css";

import { Poppins } from "@next/font/google";
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["italic", "normal"],
});

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Popup from "../components/Popup"
import Integrations from "./Integrations";

function MyApp({ Component, pageProps }) {
    return (
        <>
            
            <Integrations/>
            <div className={`text-body ${poppins.className}`}>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </div>

            <Popup />

            <span
                id="scroll-to-top"
                className="hover:shadow-medium bg-primary"
                onClick={() => {
                    window.scroll(0, 0);
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z" />
                </svg>
            </span>
        </>
    );
}

export default MyApp;
