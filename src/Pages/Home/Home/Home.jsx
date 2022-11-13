import React from 'react';
import HomeDoctors from '../../HomeDoctors/HomeDoctors';
import GetAppointment from '../GetAppointment/GetAppointment';
import HappyClientCounter from '../HappyClientCounter/HappyClientCounter';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeCard from '../HomeCard/HomeCard';
import NewsLater from '../NewsLater/NewsLater';
import Services from '../Services/Services';
import VisionWorld from '../VisionWorld/VisionWorld';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <HomeCard />
            <Services />
            <VisionWorld />
            <HappyClientCounter />
            <GetAppointment />
            <HomeDoctors />
            <NewsLater />
        </div>
    );
};

export default Home;