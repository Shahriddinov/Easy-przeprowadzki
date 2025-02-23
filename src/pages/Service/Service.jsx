import React from 'react';
import "./service.scss";
import PageHero from "../../components/PageHero";
import Services from "../../components/Services/Services";
import Needs from "../../components/Feedback/Needs/Needs";
import Faq from "../../components/Faq";
const Service = () => {
    const title="Services";
    const description = "Our services include packing, loading, unloading, and unpacking—no matter where you’re headed!";
    return (
        <>
            <PageHero title={title} description={description} />
            <Services />
            <Needs/>
            <Faq/>
        </>
    );
};

export default Service;