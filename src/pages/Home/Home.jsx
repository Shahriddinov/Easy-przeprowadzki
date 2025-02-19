import React from 'react';
import Hero from "../../components/Hero/Hero";
import WeAre from "../../components/WeAre";
import Services from "../../components/Services/Services";
import ChooseUs from "../../components/ChooseUs/ChooseUs";
import Feedback from "../../components/Feedback/Feedback";
import Package from "../../components/Package/Package";

const Home = () => {
    return (
        <div>
            <Hero/>
            <WeAre/>
            <Services/>
            <Package/>
            <ChooseUs/>
            <Feedback/>
        </div>
    );
};

export default Home;