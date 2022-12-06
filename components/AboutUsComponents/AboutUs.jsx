import React from 'react'
import AboutUsBanner from "./AboutUsBanner"
import HomeAboutUs from "../HomePageComponents/HomeAboutUs"
import Mission from "../HomePageComponents/Mission"
import OurCulture from './OurCulture'
import OurTeam from './OurTeam'
import Partners from './Partners'
import ApplyNow from './ApplyNow'

const AboutUs = () => {
    return (
        <main>
            <AboutUsBanner />
            <HomeAboutUs />
            <Mission />
            <OurCulture />
            <OurTeam />
            <Partners />
            <ApplyNow />
        </main>
    )
}

export default AboutUs