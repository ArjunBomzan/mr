import AboutUsBanner from "./AboutUsBanner"
import HomeAboutUs from "../HomePageComponents/HomeAboutUs"
import Mission from "../HomePageComponents/Mission"
import OurCulture from './OurCulture'
// import OurTeam from './OurTeam'
import ApplyNow from './ApplyNow'
import dynamic from 'next/dynamic'

const AboutUs = (props) => {
    const PartnersNoSsr = dynamic(
        () => import('./Partners'),
        { ssr: false }
    )
    return (
        <main>
            <AboutUsBanner />
            <HomeAboutUs />
            <Mission />
            <OurCulture />
            {/* <OurTeam {...props} /> */}
            {/* <PartnersNoSsr /> */}
            <ApplyNow />
        </main>
    )
}

export default AboutUs