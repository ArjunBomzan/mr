import Head from 'next/head'
import { makeFullUrl } from '../utils/makeFullUrl'

export default function Home(props) {
    let meta_title = 'About us | mindrisers Nepal'
    let meta_description = ''
    return (
        <>
            <Head>
                <link
                    rel="canonical"
                    href={makeFullUrl('/about-us')}
                    
                />
                <title>About Us</title>
                <meta
                    name="keywords"
                    content="mindrisers nepal, About mindrisers, it institute nepal, kathmandu"
                />
                {/* facebook og tags */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={meta_title} />
                <meta property="og:description" content={meta_description} />
                {/* <meta property="og:image" content={meta_image} /> */}

                {/* twitter og tags */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="Mindrisers" />
                <meta name="twitter:creator" content="@mindrisers" />
                <meta property="twitter:title" content={meta_title} />
                <meta
                    property="twitter:description"
                    content={meta_description}
                />
                {/* <meta name="twitter:image" content={meta_image} /> */}
            </Head>
            <main>About us</main>
        </>
    )
}
