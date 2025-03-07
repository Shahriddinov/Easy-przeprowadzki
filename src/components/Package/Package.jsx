import React, {useEffect} from 'react';
import "./package.scss";
import {FaCheck} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import Spinner from "../Spinner";
import {getPricing} from "../../reduxToolkit/PricingSlice";

const Package = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const lan = useSelector((state) => state.language.language);
    const loading = useSelector((state) => state.pricingSlice.loading);
    const priceData = useSelector((state) => state.pricingSlice.priceData);


    useEffect(() => {
        dispatch(getPricing());
    }, [dispatch]);
    if (loading) {
        <Spinner/>
    }

    console.log(priceData)
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
                        <h4 className="package_col-33_packing">{priceData[1]?.[`title_${lan}`]}</h4>


                        <div className="package_col-33_dollar">
                            <h2 className="package_col-33_dollar_IconD">zł</h2>
                            <h2 className="package_col-33_dollar_dprice"> {String(priceData[1]?.price).replace(/(\d{3})(?=\d)/, '$1-')}</h2>
                        </div>
                        <h2 className="package_col-33_month">{t("person")}</h2>

                        <ul>
                            {priceData[0]?.benefits?.map((item, index) => (
                                <li className="package_col-33_liCheck" key={index}>
                                    <FaCheck className="package_col-33_liCheck_fache"/>
                                    {item?.[`name_${lan}`]}
                                </li>
                            ))}


                        </ul>
                        <a href="tel:+48509931555" className="package_col-33_gets">
                            {t("discover")}
                        </a>
                    </div>
                    <div className="package_col-33" data-aos="fade-up">

                        <div className="package_col-33_popul">Popular</div>

                        <h4 className="package_col-33_packing">{priceData[0]?.[`title_${lan}`]}</h4>


                        <div className="package_col-33_dollar">
                            <h2 className="package_col-33_dollar_IconD dd">zł</h2>
                            <h2 className="package_col-33_dollar_dprice pp"> {String(priceData[0]?.price).replace(/(\d{3})(?=\d)/, '$1-')}</h2>
                        </div>
                        <h2 className="package_col-33_month dd">{t("person")}</h2>

                        <ul>
                            {priceData[0]?.benefits?.map((item, index) => (
                                <li className="package_col-33_liCheck" key={index}>
                                    <FaCheck className="package_col-33_liCheck_fache pp"/>
                                    {item?.[`name_${lan}`]}
                                </li>
                            ))}

                        </ul>
                        <a href="tel:+48509931555" className="package_col-33_gets bbb">
                            {t("discover")}
                        </a>
                    </div>
                    <div className="package_col-33" data-aos="fade-left">
                        <h4 className="package_col-33_packing">{priceData[2]?.[`title_${lan}`]}</h4>

                        <div className="package_col-33_dollar">
                            <h2 className="package_col-33_dollar_IconD">zł</h2>
                            <h2 className="package_col-33_dollar_dprice">
                                {String(priceData[2]?.price).replace(/(\d{3})(?=\d)/, '$1-')}
                            </h2>
                        </div>
                        <h2 className="package_col-33_month">{t("person")}</h2>

                        <ul>
                            {priceData[0]?.benefits?.map((item, index) => (
                                <li className="package_col-33_liCheck" key={index}>
                                    <FaCheck className="package_col-33_liCheck_fache"/>
                                    {item?.[`name_${lan}`]}
                                </li>
                            ))}
                        </ul>
                        <a href="tel:+48509931555" className="package_col-33_gets">
                            {t("discover")}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Package;