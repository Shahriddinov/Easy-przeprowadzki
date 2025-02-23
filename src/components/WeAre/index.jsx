import React, {useEffect} from 'react';
import "./style.scss";
import weImg1 from "../../assets/images/we1.jpg";
import weImg2 from "../../assets/images/we2.jpg";
import weImg3 from "../../assets/images/we3.jpg";
import {IoCheckbox} from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
const WeAre = () => {
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
        <div className="weAre">
            <div className="container">
                <div className="row">
                    <div className="weAre_col-6">
                        <div className="row">
                            <div className="weAre_col-6_imgBig" data-aos="fade-up">
                                <img className="imgs" width="100%" src={weImg1} alt="we are"/>
                            </div>
                            <div className="weAre_col-6_imgBig">
                                <img data-aos="fade-right" className="we2" src={weImg2} alt=""/>
                                <img data-aos="fade-left" className="we2" src={weImg3} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="weAre_col-6">
                        <h2 className="headTitle" data-aos="fade-left">Who we are</h2>
                        <h3 className="bigTitle" >We promise not to leave any scratches on your nice
                            furniture</h3>
                        <div className="weAre_col-6_elementor">
                            <p className="weAre_col-6_elementor_littileText" data-aos="fade-up">Maximus posuere aenean gravida class
                                sollicitudin. Penatibus sollicitudin ligula morbi
                                primis libero dis eget.</p>
                        </div>
                        <p className="weAre_col-6_ps" data-aos="fade-down">Rutrum tristique dis porttitor faucibus neque. Ante cubilia eget
                            sagittis aenean donec
                            molestie. Maximus lacinia libero laoreet neque porttitor sociosqu cubilia. Mauris ex luctus
                            vehicula lacinia facilisi accumsan.</p>

                        <ul className="weAre_col-6_elItem" data-aos="fade-left">
                            <li className="weAre_col-6_elItem_iconList">
                                <IoCheckbox className="weAre_col-6_elItem_iconList_check"/>
                                <span>Dedicated and Professional Mover</span>
                            </li>
                        </ul>
                        <ul className="weAre_col-6_elItem" data-aos="fade-left">
                            <li className="weAre_col-6_elItem_iconList">
                                <IoCheckbox className="weAre_col-6_elItem_iconList_check"/>
                                <span>One of 10 Best Moving Service Companies</span>
                            </li>
                        </ul>
                        <ul className="weAre_col-6_elItem" data-aos="fade-left">
                            <li className="weAre_col-6_elItem_iconList">
                                <IoCheckbox className="weAre_col-6_elItem_iconList_check"/>
                                <span>Bringing solutions to moving problems</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeAre;