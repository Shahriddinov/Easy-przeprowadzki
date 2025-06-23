import React from 'react';
import Hero from "../../components/Hero/Hero";
import WeAre from "../../components/WeAre";
import Services from "../../components/Services/Services";
import ChooseUs from "../../components/ChooseUs/ChooseUs";
import Feedback from "../../components/Feedback/Feedback";
import Package from "../../components/Package/Package";
import MoveNeeds from "../../components/MoveNeeds/MoveNeeds";

const Home = () => {

    return (
        <div style={{overflow:"hidden"}}>
            <Hero/>
             <Services/>
              <ChooseUs/>
            <WeAre/>
            <MoveNeeds/>
           
            <Package/>
           
            <Feedback/>
        </div>
    );
};

export default Home;