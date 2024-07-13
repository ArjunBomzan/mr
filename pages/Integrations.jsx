import React, { useEffect, useState } from 'react'
import Script from 'next/script'

export default function Integrations() {
    const [renderElements, setRenderElement] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setRenderElement(true)
        }, 2000)
    }, [])

    if (!renderElements) {
        return null
    }

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
            `
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
                    `
                }}
                defer
            />
            <div
                dangerouslySetInnerHTML={{
                    __html: `
                    <noscript><img height="1" width="1" style="display:none" alt="fb-chat-plugin image"
                    src="https://www.facebook.com/tr?id=880375300291940&ev=PageView&noscript=1"
                    /></noscript>
            `
                }}
            />
        </>
    )
}
