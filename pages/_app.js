import "../styles/accordion.scss";
import "../styles/animations.css";
import "../styles/index.css";
import "../styles/training.css";
// import 'tw-elements';

import { useEffect } from "react";
import Footer from "../components/FooterComponents/Footer";
import Head from 'next/head'
import Script from "next/script"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      (await import('tw-elements')).default;
    };
    use();
  }, []);

  return <>

    <Head>

      <meta name="description"
        content="Are you searching for a Practical IT Training Center in Kathmandu Nepal then MindRisers is the perfect platform for you to learn Digital Skils" />

      <meta name="title" content="IT Training Institute in Kathmandu, Nepal | IT Training | MindRisers" />


      <meta name="keywords"
        content="best computer institute in kathmandu,it courses in nepal, Computer Training Institute in kathmandu Nepal, Professional IT Training institute in Nepal, computer learning center , computer training center in nepal, computer courses in nepal ,computer institute in nepal, python programming, python course in nepal, python training in nepal, learn python in nepal, python training in kathmandu, python, learn python, python language, python coding, python certification, python basics, flutter framework training, flutter framework training in nepal, graphic design in nepal, graphic design course in nepal, graphic design training in nepal, graphic design course fee in nepal, graphic designer course in nepal, graphic design course in kathmandu, graphic design company in nepal, graphic designing course price in nepal, cost of graphic design course in nepal, graphic designer nepal, graphic design in kathmandu, mern stack course in Nepal, mern stack training in Nepal, mern stack training in Kathmandu, mern stack training centre in Kathmandu, digital marketing course in Nepal, digital marketing training in Nepal, digital marketing course in Kathmandu, digital marketing training in Kathmandu, learn digital marketing, digital marketing, online marketing, digital marketing agency, marketing agency, digital marketing courses, digital marketing company, digital marketing services, google digital marketing, web design course in Nepal, web design training in Kathmandu, web designing course price in Nepal, web designing course in Kathmandu, web page designing course in Nepal, cost of web designing course in Nepal, web designing in Nepal" />



      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mindrisers.pages.dev/" />
      <meta property="og:title" content="IT Training Institute in Kathmandu, Nepal | IT Training | MindRisers" />
      <meta property="og:description"
        content="Are you searching for a Practical IT Training Center in Kathmandu Nepal then MindRisers is the perfect platform for you to learn Digital Skils" />
      <meta property="og:image" content="/mindrisers.png" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://mindrisers.pages.dev/" />
      <meta property="twitter:title" content="MindRisers Nepal" />
      <meta property="twitter:description" content="Official website of MindRisers Nepal" />
      <meta property="twitter:image" content="/mindrisers.png" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,300" rel="stylesheet" type="text/css"></link>
    </Head>
    <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=UA-235343232-1"></Script>

    <Script
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
        console.log("with gogle an")
        `
      }}
    />
    <Script
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
         window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'UA-235343232-1');
        `
      }}
    />

    <Script
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
        `
      }}
    />
    <Script
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
        `
      }}
    />

    <Script
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
                var chatbox = document.getElementById('fb-customer-chat');
                chatbox.setAttribute("page_id", "102190078089641");
                chatbox.setAttribute("attribution", "biz_inbox");
        `
      }}
    />

    <Script
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
                window.fbAsyncInit = function () {
                FB.init({
                  xfbml: true,
                  version: 'v15.0'
                });
              };

              (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
                fjs.parentNode.insertBefore(js, fjs);
              }(document, 'script', 'facebook-jssdk'));
        `
      }}
    />



    {/* <!-- Messenger Chat Plugin Code --> */}
    <div id="fb-root"></div>

    {/* <!-- Your Chat Plugin code --> */}
    <div id="fb-customer-chat" class="fb-customerchat">
    </div>

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
