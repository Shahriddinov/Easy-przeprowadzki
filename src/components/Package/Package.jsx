import React, {useEffect} from 'react';
import "./package.scss";
import {FaCheck} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import {useTranslation} from "react-i18next";
const Package = () => {
    const {t} = useTranslation();
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
        <div className="package">
            <div className="container">
                <div className="headTitle d-flex">{t("ourPackage")}</div>
                <div className="bigTitle d-flex">{t("pacAlways")}</div>
                <p className="package_descip ">{t("pacDes")}</p>

                <div className="row">
                    <div className="package_col-33" data-aos="fade-right">
                        <h4 className="package_col-33_packing">Packing Services</h4>
                        <p className="package_col-33_infoss">Sodales nam venenatis potenti lorem litora at scelerisque
                            ullamcorper.</p>

                        <div className="package_col-33_dollar">
                            <h2 className="package_col-33_dollar_IconD">$</h2>
                            <h2 className="package_col-33_dollar_dprice"> 49</h2>
                        </div>
                        <h2 className="package_col-33_month">Monthly</h2>

                        <ul>
                            <li className="package_col-33_liCheck">
                                <FaCheck className="package_col-33_liCheck_fache"/>
                                Tempor sed libero fusce ultricies
                            </li>
                            <li className="package_col-33_liCheck">
                                <FaCheck className="package_col-33_liCheck_fache"/>
                                Massa nibh malesuada urna
                            </li>
                            <li className="package_col-33_liCheck">
                                <FaCheck className="package_col-33_liCheck_fache"/>
                                Natoque ipsum sodales adipiscing
                            </li>
                            <li className="package_col-33_liCheck">
                                <FaCheck className="package_col-33_liCheck_fache"/>
                                Lorem congue primis odio
                            </li>
                            <li className="package_col-33_liCheck">
                                <FaCheck className="package_col-33_liCheck_fache"/>
                                Vitae suspendisse ullamcorper
                            </li>
                        </ul>
                        <a href="#" className="package_col-33_gets">
                            Get Started
                        </a>
                    </div>
                    <div className="package_col-33" data-aos="fade-up">

                            <div className="package_col-33_popul">Popular</div>

                        <h4 className="package_col-33_packing">Full Moving Services</h4>
                        <p className="package_col-33_infoss">Sodales nam venenatis potenti lorem litora at scelerisque
                            ullamcorper.</p>

                        <div className="package_col-33_dollar">
                            <h2 className="package_col-33_dollar_IconD dd">$</h2>
                            <h2 className="package_col-33_dollar_dprice pp"> 69</h2>
                        </div>
                        <h2 className="package_col-33_month dd">Monthly</h2>

                        <ul>
                            <li className="package_col-33_liCheck">
                                <FaCheck className="package_col-33_liCheck_fache pp"/>
                                Tempor sed libero fusce ultricies
                            </li>
                            <li className="package_col-33_liCheck">
                                <FaCheck className="package_col-33_liCheck_fache pp"/>
                                Massa nibh malesuada urna
                            </li>
                            <li className="package_col-33_liCheck">
                                <FaCheck className="package_col-33_liCheck_fache pp"/>
                                Natoque ipsum sodales adipiscing
                            </li>
                            <li className="package_col-33_liCheck">
                                <FaCheck className="package_col-33_liCheck_fache pp"/>
                                Lorem congue primis odio
                            </li>
                            <li className="package_col-33_liCheck">
                                <FaCheck className="package_col-33_liCheck_fache pp"/>
                                Vitae suspendisse ullamcorper
                            </li>
                        </ul>
                        <a href="#" className="package_col-33_gets bbb">
                            Get Started
                        </a>
                    </div>
                    <div className="package_col-33" data-aos="fade-left">
                        <h4 className="package_col-33_packing">Full Moving Services</h4>
                        <p className="package_col-33_infoss">Sodales nam venenatis potenti lorem litora at scelerisque
                            ullamcorper.</p>

                        <div className="package_col-33_dollar">
                            <h2 className="package_col-33_dollar_IconD">$</h2>
                            <h2 className="package_col-33_dollar_dprice"> 149</h2>
                        </div>
                        <h2 className="package_col-33_month">Monthly</h2>

                        <ul>
                            <li className="package_col-33_liCheck">
                                <FaCheck className="package_col-33_liCheck_fache"/>
                                Tempor sed libero fusce ultricies
                            </li>
                            <li className="package_col-33_liCheck">
                                <FaCheck className="package_col-33_liCheck_fache"/>
                                Massa nibh malesuada urna
                            </li>
                            <li className="package_col-33_liCheck">
                                <FaCheck className="package_col-33_liCheck_fache"/>
                                Natoque ipsum sodales adipiscing
                            </li>
                            <li className="package_col-33_liCheck">
                                <FaCheck className="package_col-33_liCheck_fache"/>
                                Lorem congue primis odio
                            </li>
                            <li className="package_col-33_liCheck">
                                <FaCheck className="package_col-33_liCheck_fache"/>
                                Vitae suspendisse ullamcorper
                            </li>
                        </ul>
                        <a href="#" className="package_col-33_gets">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Package;