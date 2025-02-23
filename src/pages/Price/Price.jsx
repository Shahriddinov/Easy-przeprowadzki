import React from 'react';
import "./price.scss";
import PageHero from "../../components/PageHero";
import Package from "../../components/Package/Package";
const Price = () => {
    const title = "Pricing";
    const description= "Gravida elit class natoque nisi etiam consectetuer eget dui consectetur. Molestie sit imperdiet congue euismod senectus eleifend sociosqu turpis.\n"

    return (
        <div>
            <PageHero title={title} description={description}/>
            <Package/>
        </div>
    );
};

export default Price;