import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang='en' className="scroll-smooth" style={{ scrollBehavior: 'smooth' }}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body id='body'>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}