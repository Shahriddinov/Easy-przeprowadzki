import React from 'react';
import "./feedback.scss";
import "swiper/css";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import {Autoplay, Navigation} from "swiper/modules";
import {FaStar} from "react-icons/fa";
import {IoIosArrowForward} from "react-icons/io";
import Needs from "./Needs/Needs";
import {useTranslation} from "react-i18next";

const Feedback = () => {
    const {t} = useTranslation();
    return (
        <div className="feedback">
            <div className="container">
                <div className="headTitle d-flex">{t("feedback")}</div>
                <div className="bigTitle d-flex" >{t("what")}</div>
                {/*<p className="feedback_fdes">Per aenean auctor pellentesque a quam quis habitant mus semper nostra*/}
                {/*    ultrices. Per odio finibus rhoncus sit cubilia duis leo maximus ad.</p>*/}
                <div>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        autoplay={{
                            delay: 3000, // Delay between slides (ms)
                            disableOnInteraction: false, // Keep autoplay active after user interaction
                        }}
                        breakpoints={{
                            // When window width is >= 640px
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            // When window width is >= 768px
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            // When window width is >= 1024px
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                            // When window width is >= 1440px
                            1440: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            }
                        }}
                        loop={true} // Infinite loop
                        className="hero_carousel"
                    >
                        <SwiperSlide className="feedback_slider">
                            <div className="feedback_slider_star d-flex">
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>
                            <p className="feedback_slider_Fdes">
                                Molestie odio inceptos adipiscing dui dictum. Sodales aptent hac tristique integer
                                nullam in vestibulum. Hac feugiat placerat laoreet fames pharetra pede imperdiet sodales
                                in.
                            </p>
                            <div className="feedback_slider_namesF">Anita D. Costin</div>
                        </SwiperSlide>
                        <SwiperSlide className="feedback_slider">
                            <div className="feedback_slider_star d-flex">
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>
                            <p className="feedback_slider_Fdes">
                                Molestie odio inceptos adipiscing dui dictum. Sodales aptent hac tristique integer
                                nullam in vestibulum. Hac feugiat placerat laoreet fames pharetra pede imperdiet sodales
                                in.
                            </p>
                            <div className="feedback_slider_namesF">Anita D. Costin</div>
                        </SwiperSlide>
                        <SwiperSlide className="feedback_slider">
                            <div className="feedback_slider_star d-flex">
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>
                            <p className="feedback_slider_Fdes">
                                Molestie odio inceptos adipiscing dui dictum. Sodales aptent hac tristique integer
                                nullam in vestibulum. Hac feugiat placerat laoreet fames pharetra pede imperdiet sodales
                                in.
                            </p>
                            <div className="feedback_slider_namesF">Anita D. Costin</div>
                        </SwiperSlide>
                        <SwiperSlide className="feedback_slider">
                            <div className="feedback_slider_star d-flex">
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>
                            <p className="feedback_slider_Fdes">
                                Molestie odio inceptos adipiscing dui dictum. Sodales aptent hac tristique integer
                                nullam in vestibulum. Hac feugiat placerat laoreet fames pharetra pede imperdiet sodales
                                in.
                            </p>
                            <div className="feedback_slider_namesF">Anita D. Costin</div>
                        </SwiperSlide>
                        <SwiperSlide className="feedback_slider">
                            <div className="feedback_slider_star d-flex">
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>
                            <p className="feedback_slider_Fdes">
                                Molestie odio inceptos adipiscing dui dictum. Sodales aptent hac tristique integer
                                nullam in vestibulum. Hac feugiat placerat laoreet fames pharetra pede imperdiet sodales
                                in.
                            </p>
                            <div className="feedback_slider_namesF">Anita D. Costin</div>
                        </SwiperSlide>
                        <SwiperSlide className="feedback_slider">
                            <div className="feedback_slider_star d-flex">
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>
                            <p className="feedback_slider_Fdes">
                                Molestie odio inceptos adipiscing dui dictum. Sodales aptent hac tristique integer
                                nullam in vestibulum. Hac feugiat placerat laoreet fames pharetra pede imperdiet sodales
                                in.
                            </p>
                            <div className="feedback_slider_namesF">Anita D. Costin</div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
           <Needs/>
        </div>
    );
};

export default Feedback;