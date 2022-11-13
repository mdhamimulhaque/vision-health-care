import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeCard from '../HomeCard/HomeCard';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <HomeCard />
            <Services />
        </div>
    );
};

export default Home;