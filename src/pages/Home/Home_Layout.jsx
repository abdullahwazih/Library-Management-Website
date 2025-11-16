import React from 'react'
import HeroSection from './components/Hero'
import FeaturesSection from './components/Features'
import BrowsePreview from './components/Books_Preview'
import CTASection from './components/CTA'

const Home_Layout = () => {
    return (
        <>
            <HeroSection></HeroSection>
            <FeaturesSection></FeaturesSection>
            <BrowsePreview></BrowsePreview>
            <CTASection></CTASection>
        </>
    )
}

export default Home_Layout