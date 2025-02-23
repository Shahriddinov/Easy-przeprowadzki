import React, {useEffect} from 'react';
import { FaPhoneAlt, FaMapMarkedAlt  } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../../../assets/images/1.png";
import {Link} from "react-router";
function Header(props) {
    useEffect(() => {
        AOS.init({
            duration: 1500, // Animatsiya davomiyligi (ms)
            offset: 100, // Elementdan yuqori chekkasiga masofa
            easing: "ease-in-out", // Animatsiya effekti
            delay: 100, // Animatsiya kechikishi (ms)
            once: true, // Animatsiya faqat bir marta ishlashi uchun
        });
    }, []);
    return (
        <div className="header">
            <div className="header_head" data-aos="fade-down">
                <div className="header_head_linkContact">
                    <div className="header_head_linkContact_col-10">
                        <div className="header_head_linkContact_col-10_widget">
                            <ul className="header_head_linkContact_col-10_widget_item">
                                <li className="header_head_linkContact_col-10_widget_item_list">
                                    <FaPhoneAlt className="header_head_linkContact_col-10_widget_item_list_icons" />
                                    <span className="header_head_linkContact_col-10_widget_item_list_text">+998 90 123 45 67</span>
                                </li>
                                <li className="header_head_linkContact_col-10_widget_item_list">
                                    <IoLocation className="header_head_linkContact_col-10_widget_item_list_icons"/>
                                    <span className="header_head_linkContact_col-10_widget_item_list_text">789 Oak St, Smalltown, TX 23456, US</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="header_head_linkContact_col-2">
                        <a href="#" className="header_head_linkContact_col-2_locationButton">
                            <span className="header_head_linkContact_col-2_locationButton_lIcon">
                                <FaMapMarkedAlt />
                                <span>Find Coverage</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="header_navbar">
                <div className="container">
                    <div className="header_navbar_nav">
                        <div className="header_navbar_nav_list-2">
                            <img width="100%" className="header_navbar_nav_list-2_logos"  src={logo} alt=""/>
                        </div>
                        <div className="header_navbar_nav_list-10">
                            <ul className="header_navbar_nav_list-10_menu">
                                <li className="header_navbar_nav_list-10_menu_items">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="header_navbar_nav_list-10_menu_items">
                                    <Link to="/about">About</Link>
                                </li>
                                <li className="header_navbar_nav_list-10_menu_items">
                                    <Link to="/services">Services</Link>
                                </li>
                                <li className="header_navbar_nav_list-10_menu_items">
                                    <Link to="/price">Price</Link>
                                </li>
                                <li className="header_navbar_nav_list-10_menu_items">
                                    <Link to="contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;