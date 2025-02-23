import React, {useEffect} from 'react';
import "./modeNeeds.scss";
import {FaCaretDown} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
const MoveNeeds = () => {
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
        <div className="moveNeeds">

            <div className="moveNeeds_bgc">
                <FaCaretDown className="moveNeeds_bgc_downIcon"/>
                <div className="bigTitle moveNeeds_bgc_centerTitle" data-aos="fade-down">We will take care of all your moving needs
                    from A to Z!
                </div>
                <p className="moveNeeds_bgc_centerText" data-aos="fade-up">Magnis diam montes vehicula non habitant parturient sed. Nullam fermentum velit cursus tempor leo
                    litora augue nec. Laoreet est sem cursus libero semper sed nulla purus ut habitant potenti.</p>
                <div className="d-flex">
                    <a href="#" className="moveNeeds_bgc_centerSend" data-aos="flip-left">Get Started</a>
                </div>
            </div>

        </div>
    );
};

export default MoveNeeds;