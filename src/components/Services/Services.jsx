import React, {useEffect} from 'react';
import "./services.scss";
import {FaMapLocationDot} from "react-icons/fa6";
import { IoMdArrowDropright } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
const Services = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animatsiya davomiyligi (ms)
            offset: 100, // Elementdan yuqori chekkasiga masofa
            easing: "ease-in-out", // Animatsiya effekti
            delay: 50, // Animatsiya kechikishi (ms)
            once: true, // Animatsiya faqat bir marta ishlashi uchun
        });
    }, []);
    return (
        <div className="services">
            <div className="container">
                <div className="headTitle d-flex">Our Services</div>
                <div className=" d-flex bigTitle">
                    Moving Services For Every Need
                </div>
                <p className="d-flex services_sp">Gravida elit class natoque nisi etiam consectetuer eget dui
                    consectetur. Molestie sit imperdiet
                    congue euismod senectus eleifend sociosqu turpis.</p>

                <div className="services_cards">
                    <div className="row">
                        <div className="services_cards_col-3" data-aos="fade-right">
                            <div style={{position: "relative", zIndex: "2"}}>
                                <div className="services_cards_col-3_iconBox">
                                    <FaMapLocationDot/>
                                </div>
                                <div className="servicesTitle d-flex">
                                    Local Moving
                                </div>
                                <p className="d-flex services_cards_col-3_infoS">Nisl elit hac convallis est vestibulum
                                    cras erat. Vehicula bibendum condimentum felis
                                    ligula habitant tempor.

                                </p>
                                <div className="d-flex">
                                    <a href="#" className="href">
                                        Learn More
                                        <IoMdArrowDropright/>

                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="services_cards_col-3" data-aos="fade-up">
                            <div style={{position: "relative", zIndex: "2"}}>
                                <div className="services_cards_col-3_iconBox">
                                    <FaMapLocationDot/>
                                </div>
                                <div className="servicesTitle d-flex">
                                    Local Moving
                                </div>
                                <p className="d-flex services_cards_col-3_infoS">Nisl elit hac convallis est vestibulum
                                    cras erat. Vehicula bibendum condimentum felis
                                    ligula habitant tempor.

                                </p>
                                <div className="d-flex">
                                    <a href="#" className="href">
                                        Learn More
                                        <IoMdArrowDropright/>

                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="services_cards_col-3" data-aos="fade-left">
                            <div style={{position: "relative", zIndex: "2"}}>
                                <div className="services_cards_col-3_iconBox">
                                    <FaMapLocationDot/>
                                </div>
                                <div className="servicesTitle d-flex">
                                    Local Moving
                                </div>
                                <p className="d-flex services_cards_col-3_infoS">Nisl elit hac convallis est vestibulum
                                    cras erat. Vehicula bibendum condimentum felis
                                    ligula habitant tempor.

                                </p>
                                <div className="d-flex">
                                    <a href="#" className="href">
                                        Learn More
                                        <IoMdArrowDropright/>

                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{marginTop: "50px"}}>
                        <div className="services_cards_col-3" data-aos="fade-right">
                            <div style={{position: "relative", zIndex: "2"}}>
                                <div className="services_cards_col-3_iconBox">
                                    <FaMapLocationDot/>
                                </div>
                                <div className="servicesTitle d-flex">
                                    Local Moving
                                </div>
                                <p className="d-flex services_cards_col-3_infoS">Nisl elit hac convallis est vestibulum
                                    cras erat. Vehicula bibendum condimentum felis
                                    ligula habitant tempor.

                                </p>
                                <div className="d-flex">
                                    <a href="#" className="href">
                                        Learn More
                                        <IoMdArrowDropright/>

                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="services_cards_col-3" data-aos="fade-up">
                            <div style={{position: "relative", zIndex: "2"}}>
                                <div className="services_cards_col-3_iconBox">
                                    <FaMapLocationDot/>
                                </div>
                                <div className="servicesTitle d-flex">
                                    Local Moving
                                </div>
                                <p className="d-flex services_cards_col-3_infoS">Nisl elit hac convallis est vestibulum
                                    cras erat. Vehicula bibendum condimentum felis
                                    ligula habitant tempor.

                                </p>
                                <div className="d-flex">
                                    <a href="#" className="href">
                                        Learn More
                                        <IoMdArrowDropright/>

                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="services_cards_col-3" data-aos="fade-left">
                            <div style={{position: "relative", zIndex: "2"}}>
                                <div className="services_cards_col-3_iconBox">
                                    <FaMapLocationDot/>
                                </div>
                                <div className="servicesTitle d-flex">
                                    Local Moving
                                </div>
                                <p className="d-flex services_cards_col-3_infoS">Nisl elit hac convallis est vestibulum
                                    cras erat. Vehicula bibendum condimentum felis
                                    ligula habitant tempor.

                                </p>
                                <div className="d-flex">
                                    <a href="#" className="href">
                                        Learn More
                                        <IoMdArrowDropright/>

                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;