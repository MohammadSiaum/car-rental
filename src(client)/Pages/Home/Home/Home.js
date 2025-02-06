import React from 'react';
import Team from '../Team/Team';
import Testimonial from '../Testominal/Testimonial';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Features from '../Features/Features';
import Cards from '../Cards/Cards';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cards></Cards>
            <Testimonial></Testimonial>
            <Team></Team>
            <Features></Features>
        </div>
    );
};

export default Home;