import React from 'react';
import "./feedback.scss";
import "swiper/css";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import {Autoplay, Navigation} from "swiper/modules";
import {FaStar} from "react-icons/fa";
import {IoIosArrowForward} from "react-icons/io";

const Feedback = () => {
    return (
        <div className="feedback">
            <div className="container">
                <div className="headTitle d-flex">Feedback</div>
                <div className="bigTitle d-flex">What Our Customer are Saying</div>
                <p className="feedback_fdes">Per aenean auctor pellentesque a quam quis habitant mus semper nostra
                    ultrices. Per odio finibus rhoncus sit cubilia duis leo maximus ad.</p>
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
                            // When window width is >= 320px
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            // When window width is >= 480px
                            480: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            },
                            // When window width is >= 640px
                            640: {
                                slidesPerView: 4,
                                spaceBetween: 20
                            },
                            // When window width is >= 768px
                            768: {
                                slidesPerView: 4,
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
            <div className="feedback_why">
                <div className="container">
                    <div className="feedback_why_Wbox">
                        <div className="bigTitle colo">
                            We will take care of all your moving needs from A to Z!
                        </div>
                        <p className="colo">Magnis diam montes vehicula non habitant parturient sed. Nullam fermentum
                            velit cursus tempor leo litora augue nec. Laoreet est sem cursus libero semper sed nulla
                            purus ut habitant potenti.</p>
                        <button className="discover">Discover More </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;