import React from 'react';
import PageHero from "../../components/PageHero";
import WeAre from "../../components/WeAre";
import MoveNeeds from "../../components/MoveNeeds/MoveNeeds";
import "./aboutUs.scss";

const AboutUs = () => {
    const title = "About Us";
    const description = "When you call us, you can rest assured that we’ll take care of every detail of your move";
    return (
        <>
            <PageHero title={title} description={description} />
            <WeAre/>
            <MoveNeeds/>
            <div className="aboutUs">
                <div className="container">
                    <div className="row">
                        <div className="aboutUs_coll-6">
                            <div className="headTitle">What We Offer</div>
                            <div className="bigTitle">Explore Our Moving and Storage Services</div>
                            <p>Aptent dictumst fringilla duis tristique ultricies maximus porttitor. Libero posuere
                                finibus class aliquam congue. Consequat elementum habitasse tempor mi nunc finibus a
                                quisque senectus.</p>
                            <p style={{marginTop: "15px"}}>Finibus maecenas mattis quisque in fringilla dignissim luctus
                                auctor. Nulla commodo odio
                                eros tortor lacinia enim ridiculus nibh iaculis est netus.</p>
                            <button className="aboutUs_coll-6_descove">Discover More</button>
                        </div>
                        <div className="aboutUs_coll-6">
                            <div className="aboutUs_coll-6_widgetContainer">
                                <div className="aboutUs_coll-6_widgetContainer_sectionTitle">Moving Service for Home
                                </div>
                                <p>Laoreet tortor diam ullamcorper aliquam ad imperdiet. Purus tempor taciti maximus
                                    sollicitudin tempus mollis letius.

                                </p>
                            </div>
                            <div className="aboutUs_coll-6_widgetContainer">
                                <div className="aboutUs_coll-6_widgetContainer_sectionTitle">Moving Service for Company
                                </div>
                                <p>Laoreet tortor diam ullamcorper aliquam ad imperdiet. Purus tempor taciti maximus
                                    sollicitudin tempus mollis letius.

                                </p>
                            </div>
                            <div className="aboutUs_coll-6_widgetContainer">
                                <div className="aboutUs_coll-6_widgetContainer_sectionTitle">Long Distance Moving Services
                                </div>
                                <p>Laoreet tortor diam ullamcorper aliquam ad imperdiet. Purus tempor taciti maximus
                                    sollicitudin tempus mollis letius.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;