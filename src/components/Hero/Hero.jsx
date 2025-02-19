import React, {useEffect} from 'react';
import "./hero.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import { IoIosArrowForward } from "react-icons/io";

import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import hero1 from "../../assets/images/Hero 1.jpg"
import hero2 from "../../assets/images/hero2.jpg"
import hero3 from "../../assets/images/hero 3.jpg"
import hero4 from "../../assets/images/hero4.jpg"
import {Navigation, Autoplay} from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animatsiya davomiyligi (ms)
            offset: 100, // Elementdan yuqori chekkasiga masofa
            easing: "ease-in-out", // Animatsiya effekti
            delay: 80, // Animatsiya kechikishi (ms)
            once: true, // Animatsiya faqat bir marta ishlashi uchun
        });
    }, []);
    return (
        <div className="hero">
            <div className="hero_desc">
                <h1 className="hero_desc_title" data-aos="fade-up">We take the stress out of moving</h1>
                <p className="hero_desc_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                    luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <button className="hero_desc_sends">Discover More <IoIosArrowForward style={{width:"13px", height:"13px"}} /></button>
            </div>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 3000, // Delay between slides (ms)
                    disableOnInteraction: false, // Keep autoplay active after user interaction
                }}
                loop={true} // Infinite loop
                className="hero_carousel"
            >
                <SwiperSlide>
                    <div className="hero_carousel_wrapper">
                        <img className="hero_carousel_wrapper_picture" src={hero1} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero_carousel_wrapper">
                        <img className="hero_carousel_wrapper_picture" src={hero2} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero_carousel_wrapper">
                        <img className="hero_carousel_wrapper_picture" src={hero3} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero_carousel_wrapper">
                        <img className="hero_carousel_wrapper_picture" src={hero4} alt=""/>
                    </div>
                </SwiperSlide>
            </Swiper>
            {/*Hero*/}

        </div>
    );
};

export default Hero;