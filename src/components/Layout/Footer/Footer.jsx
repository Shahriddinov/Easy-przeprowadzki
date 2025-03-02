import React from 'react';
import {IoIosArrowForward} from "react-icons/io";
import footerImg from "../../../assets/images/Footer.png";
import one from "../../../assets/images/1.png";
import {BiSupport} from "react-icons/bi";
import {AiFillCaretRight} from "react-icons/ai";
import {useTranslation} from "react-i18next";

function Footer(props) {
    const {t} = useTranslation();

    return (
        <div className="footer">
            <div className="footer_havePlan">
                <div className="container">
                    <div className="footer_havePlan_hbox">
                        <div className="row">
                            <div className="footer_havePlan_hbox_col-8">

                                <div className="bigTitle">{t("have")}</div>
                                <p>{t("plan")}</p>
                                <button className="footer_havePlan_hbox_col-8_urlSend">Get a Quote <IoIosArrowForward
                                    style={{width: "13px", height: "13px"}}/></button>
                            </div>
                            <div className="footer_havePlan_hbox_col-5">
                                <img className="footer_havePlan_hbox_col-5_fImg" src={footerImg} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_Fcard">
                <div className="container">
                    <div className=" padd">
                        <div className="footer_Fcard_cols-4">
                            <div className="footer_Fcard_cols-4_log">
                                <img width="100%" src={one} alt=""/>
                            </div>
                            <p style={{color: "#FFFFFF", marginBottom: "15px"}}>Ut at quisque sodales aenean integer
                                odio tristique condimentum sollicitudin. Class
                                ornare quisque tincidunt efficitur augue conubia gravida.
                            </p>
                            <div className="footer_Fcard_cols-4_calls">
                                <div className="footer_Fcard_cols-4_calls_callIcon">
                                    <BiSupport className="footer_Fcard_cols-4_calls_callIcon_bi"/>
                                </div>
                                <div className="footer_Fcard_cols-4_calls_callText">
                                    <span className="footer_Fcard_cols-4_calls_callText_ct">Call Center 24/7</span>
                                    <a href="tel:+998901234567"
                                       className="footer_Fcard_cols-4_calls_callText_bt">+90-123-45-67</a>
                                </div>
                            </div>
                        </div>
                        <div className="footer_Fcard_cols-2">
                            <h2 className="footer_Fcard_cols-2_fserves">Servives</h2>
                            <a href="#" className="footer_Fcard_cols-2_servesLink">
                                <div className="footer_Fcard_cols-2_servesLink_iconRight">
                                    <AiFillCaretRight className="airight"/>
                                </div>
                                Local Moving
                            </a>
                            <a href="#" className="footer_Fcard_cols-2_servesLink">
                                <div className="footer_Fcard_cols-2_servesLink_iconRight">
                                    <AiFillCaretRight className="airight"/>
                                </div>
                                Long Distance Moving
                            </a>
                            <a href="#" className="footer_Fcard_cols-2_servesLink">
                                <div className="footer_Fcard_cols-2_servesLink_iconRight">
                                    <AiFillCaretRight className="airight"/>
                                </div>
                                Storage Services
                            </a>
                            <a href="#" className="footer_Fcard_cols-2_servesLink">
                                <div className="footer_Fcard_cols-2_servesLink_iconRight">
                                    <AiFillCaretRight className="airight"/>
                                </div>
                                Office Moving
                            </a>
                            <a href="#" className="footer_Fcard_cols-2_servesLink">
                                <div className="footer_Fcard_cols-2_servesLink_iconRight">
                                    <AiFillCaretRight className="airight"/>
                                </div>
                                Overseas Moving
                            </a>
                        </div>
                        <div className="footer_Fcard_cols-2">
                            <h2 className="footer_Fcard_cols-2_fserves">About</h2>

                            <a href="#" className="footer_Fcard_cols-2_servesLink">
                                <div className="footer_Fcard_cols-2_servesLink_iconRight">
                                    <AiFillCaretRight className="airight"/>
                                </div>
                                Contact Us
                            </a>
                            <a href="#" className="footer_Fcard_cols-2_servesLink">
                                <div className="footer_Fcard_cols-2_servesLink_iconRight">
                                    <AiFillCaretRight className="airight"/>
                                </div>
                                FAQs
                            </a>
                            <a href="#" className="footer_Fcard_cols-2_servesLink">
                                <div className="footer_Fcard_cols-2_servesLink_iconRight">
                                    <AiFillCaretRight className="airight"/>
                                </div>
                                Press
                            </a>
                            <a href="#" className="footer_Fcard_cols-2_servesLink">
                                <div className="footer_Fcard_cols-2_servesLink_iconRight">
                                    <AiFillCaretRight className="airight"/>
                                </div>
                                Out Blog
                            </a>
                            <a href="#" className="footer_Fcard_cols-2_servesLink">
                                <div className="footer_Fcard_cols-2_servesLink_iconRight">
                                    <AiFillCaretRight className="airight"/>
                                </div>
                                Careers
                            </a>
                        </div>
                        <div className="footer_Fcard_cols-2">
                            <h2 className="footer_Fcard_cols-2_fserves">Get In Touch</h2>
                            <a href="#" className="footer_Fcard_cols-2_servesLink">
                                <div className="footer_Fcard_cols-2_servesLink_iconRight">

                                </div>
                                789 Oak St, Smalltown United State 23456
                            </a>
                            <a href="tel:+998901234567" className="footer_Fcard_cols-2_servesLink">
                                <div className="footer_Fcard_cols-2_servesLink_iconRight"></div>
                                +998-90-123-45-67
                            </a>
                            <a href="mailto:hello@yourdomain.com" className="footer_Fcard_cols-2_servesLink">
                                <div className="footer_Fcard_cols-2_servesLink_iconRight"></div>
                                hello@yourdomain.com
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="footer_Fcard_bLine"/>
                <div className="container">
                    <div className="row">
                        <div className="footer_Fcard_bcol-6">
                            <a href="#" className="footer_Fcard_bcol-6_police">Privacy Policy</a>
                            <a href="#" className="footer_Fcard_bcol-6_police">Terms and Conditions</a>
                        </div>
                        <div className="footer_Fcard_bcol-6">
                            <div className="end">
                                <a href="#" className="footer_Fcard_bcol-6_police">Copyright © 2024 EazeMove by
                                    TBWBThemes</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;