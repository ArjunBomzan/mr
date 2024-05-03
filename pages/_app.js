// import "../styles/accordion.scss";
// import "../styles/animations.css";
import "../styles/index.css";
// import "../styles/training.css";

import Checked from "../assets/Admission/checked.webp";
import Cross from "../assets/Admission/cross.webp";
import Image from "next/image";

import { Poppins } from "@next/font/google";
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["italic", "normal"],
});

import { useEffect } from "react";
// import Head from 'next/head'
import Script from "next/script";
import Link from "next/link";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Popup from "../components/Popup"
import PopupWelcome from "../components/PopupWelcome"

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        // const use = async () => {
        //     (await import("tw-elements")).default;
        // };
        // use();
    }, []);

    return (
        <>
            {/* <!-- Messenger Chat Plugin Code --> */}
            <div id="fb-root"></div>

            {/* <!-- Your Chat Plugin code --> */}
            <div id="fb-customer-chat" className="fb-customerchat"></div>

            <Script
                id="one"
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=G-4QD3EXCE1V"
                defer
            ></Script>

            <Script
                id="three"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
         window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-4QD3EXCE1V');
        `,
                }}
                defer
            />

            <Script
                id="four"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
         (function (w, d, s, l, i) {
          w[l] = w[l] || []; w[l].push({
            'gtm.start':
          new Date().getTime(), event: 'gtm.js'
          }); var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
          'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-MSWM9SX');
        `,
                }}
                defer
            />
            <Script
                id="six"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                 !function (f, b, e, v, n, t, s) {
                if (f.fbq) return; n = f.fbq = function () {
                  n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                };
                if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
                n.queue = []; t = b.createElement(e); t.async = !0;
                t.src = v; s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s)
              }(window, document, 'script',
                'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '625661268931680');
              fbq('track', 'PageView');
        `,
                }}
                defer
            />

            <Script
                id="seven"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                var chatbox = document.getElementById('fb-customer-chat');
                chatbox.setAttribute("page_id", "102190078089641");
                chatbox.setAttribute("attribution", "biz_inbox");
        `,
                }}
                defer
            />

            <Script
                id="eight"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                window.fbAsyncInit = function () {
                FB.init({
                  xfbml: true,
                  version: 'v15.0'
                });
              };

              (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
                fjs.parentNode.insertBefore(js, fjs);
              }(document, 'script', 'facebook-jssdk'));
        `,
                }}
                defer
            />
            <Script
                id="nine"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                                !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '880375300291940');
                  fbq('track', 'PageView');
                  `,
                }}
                defer
            />
            <div
                dangerouslySetInnerHTML={{
                    __html: `
                    <noscript><img height="1" width="1" style="display:none"
                    src="https://www.facebook.com/tr?id=880375300291940&ev=PageView&noscript=1"
                    /></noscript>
             `,
                }}
            />

            <div className={`text-body ${poppins.className}`}>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </div>

            {/* Admission modal */}
            <Popup />
            {/* <PopupWelcome /> */}

            {/* <div
                className="admission-modal"
                style={{
                    width: "100%",
                    height: "100vh",
                    backgroundColor: "rgba(0,0,0,0.6)",
                    overflow: "hidden",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div
                    id="admission-modal-box"
                    className="md:w-3/4 lg:w-1/2"
                    style={{
                        borderRadius: "15px",
                        // width: "50%",
                        marginRight: "auto",
                        marginLeft: "auto",
                        background: "white",
                        padding: "20px",
                        textAlign: "center",
                        position: "relative",
                    }}
                >
                    <Image
                        src={Checked}
                        alt="check-icon"
                        height={80}
                        width={80}
                        style={{
                            display: "inline",
                            marginTop: "1.8em",
                        }}
                    />
                    <Image
                        src={Cross}
                        alt="cross-icon"
                        id="cross-icon"
                        height={32}
                        width={32}
                        style={{
                            display: "inline",
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            cursor: "pointer",
                        }}
                    />
                    <p
                        style={{
                            padding: " 0.8em 1em 0",
                            color: "inherit",
                            fontSize: " 1.875em",
                            fontWeight: " 600",
                            textAlign: " center",
                            textTransform: " none",
                            wordWrap: " break-word",
                        }}
                    >
                        Thank You
                    </p>
                    <p
                        style={{
                            padding: " 0.8em 1em",
                            color: "inherit",
                            fontSize: " 1.125em",
                            fontWeight: " 600",
                            textAlign: " center",
                            textTransform: " none",
                            wordWrap: " break-word",
                        }}
                    >
                        We will get back to you soon.
                    </p>
                    <Link
                        href="/courses"
                        type="button"
                        className="text-md h-10 rounded-lg bg-primary px-5  text-white"
                        style={{
                            margin: "0.3125em",
                            padding: "0.625em 1.1em",
                            transition: "box-shadow .1s",
                            boxShadow: "0 0 0 3px rgb(0 0 0 / 0%)",
                            fontWeight: "500",
                            color: "white",
                        }}
                    >
                        {" "}
                        View Courses !{" "}
                    </Link>
                    <hr className=" mb-2 mt-2" />
                    <Link
                        href="/"
                        className="my-5 text-green-500 underline"
                        style={{
                            textUnderlinePosition: "under",
                        }}
                    >
                        Home
                    </Link>
                </div>
            </div> */}
            {/* <Script
                id="nine"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
        document.getElementById("admission-modal").addEventListener("click",()=>{
          document.getElementById("admission-modal").classList.remove("active")
        })
        document.getElementById("cross-icon").addEventListener("click",()=>{
          document.getElementById("admission-modal").classList.remove("active")
        })
        document.getElementById("admission-modal-box").addEventListener("click",(event)=>{
          event.stopPropagation();
        })
        `,
                }}
                defer
            /> */}

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
