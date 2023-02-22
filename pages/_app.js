import "../styles/accordion.scss";
import "../styles/animations.css";
import "../styles/index.css";
import "../styles/training.css";
// import 'tw-elements';
import dynamic from 'next/dynamic'
const Footer = dynamic(
  () => import('../components/FooterComponents/Footer'),
  { ssr: false }
)


// import { useEffect } from "react";
// import Footer from "../components/FooterComponents/Footer";
// import Head from 'next/head'
import Script from "next/script"

function MyApp({ Component, pageProps }) {

  // useEffect(() => {
  //   const use = async () => {
  //     (await import('tw-elements')).default;
  //   };
  //   use();
  // }, []);

  return <>

    {/* <!-- Messenger Chat Plugin Code --> */}
    <div id="fb-root"></div>

    {/* <!-- Your Chat Plugin code --> */}
    <div id="fb-customer-chat" className="fb-customerchat">
    </div>

    <Script id="one" strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=UA-235343232-1" defer></Script>

    <Script
      id="three"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
         window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'UA-235343232-1');
        `
      }}
      defer />

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
        `
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
        `
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
        `
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
        `
      }}
      defer
    />

    <Component {...pageProps} />
    <Footer />

    <span id="scroll-to-top" className="bg-green-500" onClick={() => {
      window.scroll(0, 0)
    }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z" />
      </svg>
    </span>
  </>
}

export default MyApp
