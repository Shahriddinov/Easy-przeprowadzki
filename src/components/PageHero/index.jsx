import React, {useEffect} from 'react';
import "./style.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import hero1 from "../../assets/images/about.jpg";
import {AiFillCaretRight} from "react-icons/ai";
import {useLocation} from "react-router";


const PageHero = ({title, description}) => {
    const location = useLocation();

    // Sahifaga qarab fon rasmni o‘zgartirish
    const getBackgroundImage = () => {
        switch (location.pathname) {
            case "/about":
                return require("../../assets/images/about.jpg");
            case "/contact":
                return require("../../assets/images/contact.jpg");
            case "/services":
                return require("../../assets/images/services.jpg");
            case "/price":
                return require("../../assets/images/default.jpg");
            default:
                return require("../../assets/images/default.jpg");
        }
    };
    useEffect(() => {
        AOS.init({
            duration: 1500, // Animatsiya davomiyligi (ms)
            offset: 100, // Elementdan yuqori chekkasiga masofa
            easing: "ease-in-out", // Animatsiya effekti
            delay: 80, // Animatsiya kechikishi (ms)
            once: true, // Animatsiya faqat bir marta ishlashi uchun
        });
    }, []);
    return (
        <div className="pageHero">
            <div className="pageHero_desc"
                 style={{
                     width: "100%",
                     height: "100vh",
                     backgroundImage: `url(${getBackgroundImage()})`,
                     backgroundPosition: "50% 15%",
                     backgroundRepeat: "no-repeat",
                     backgroundSize: "cover",
                     transition: "background-image 0.5s ease-in-out", // Smooth transition
                 }}
            >
                <div className="container">
                    <div className="pageHero_desc_pageUrl">
                        <span>Home</span>
                        <AiFillCaretRight className="pageHero_desc_pageUrl_fills"/>
                        {title}
                    </div>
                    <h1 className="pageTitle" data-aos="fade-up">{title}</h1>
                    <p className="pageInfo" data-aos="fade-down">{description}</p>

                </div>
            </div>


        </div>
    );
};

export default PageHero;