import React from 'react';
import Hero from '../components/sections/Hero';
import Trust from '../components/sections/Trust';
import Process from '../components/sections/Process';
import Pillars from '../components/sections/Pillars';
import AIUseCases from '../components/sections/AIUseCases';
import IndustryImpact from '../components/sections/IndustryImpact';
import GlobalReach from '../components/sections/GlobalReach';
import Insights from '../components/sections/Insights';
import Testimonials from '../components/sections/Testimonials';
import TechStack from '../components/sections/TechStack';

const Home = () => {
    return (
        <>
            <Hero />
            <Trust />
            <Process />
            <Pillars />
            <AIUseCases />
            <IndustryImpact />
            <GlobalReach />
            <Insights />
            <Testimonials />
            <TechStack />
        </>
    );
};

export default Home;
