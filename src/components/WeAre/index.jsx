import React, {useEffect} from 'react';
import "./style.scss";
import weImg1 from "../../assets/images/we1.jpg";
import weImg2 from "../../assets/images/we2.jpg";
import weImg3 from "../../assets/images/we3.jpg";
import {IoCheckbox} from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import {useDispatch, useSelector} from "react-redux";
import Spinner from "../Spinner";
import {getAbout} from "../../reduxToolkit/AboutSlice";
import {useTranslation} from "react-i18next";

const WeAre = () => {
    const {t} = useTranslation()
    const dispatch = useDispatch();
    const lan = useSelector((state) => state.language.language);
    const aboutData = useSelector((state) => state.aboutSlice.aboutData);
    const loading = useSelector((state) => state.aboutSlice.loading);

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animatsiya davomiyligi (ms)
            offset: 100, // Elementdan yuqori chekkasiga masofa
            easing: "ease-in-out", // Animatsiya effekti
            delay: 50, // Animatsiya kechikishi (ms)
            once: true, // Animatsiya faqat bir marta ishlashi uchun
        });
    }, []);
    useEffect(() => {
        dispatch(getAbout());
    }, [dispatch]);
    if (loading) {
        <Spinner/>
    }
    return (
        <div className="weAre">
            <div className="container">
                {aboutData.map((item, index) => (
                    <div className="row main__row" key={index}>
                        <div className="weAre_col-6">
                            <div className="row" key={index}>
                                <div className="weAre_col-6_imgBig" data-aos="fade-up">
                                    <img className="imgs" width="100%" src={item.image[0].image} alt="we are"/>
                                </div>
                                <div className="weAre_col-6_imgBig">
                                    <img data-aos="fade-right" className="we2" src={item.image[1].image} alt=""/>
                                    <img data-aos="fade-left" className="we2" src={item.image[2].image} alt=""/>
                                </div>
                            </div>

                        </div>
                        <div className="weAre_col-6">
                            <h2 className="headTitle" data-aos="fade-left">{t("who")}</h2>
                            <h3 className="bigTitle">{item[`title_${lan}`]}</h3>
                            <div className="weAre_col-6_elementor">
                                <p className="weAre_col-6_elementor_littileText"
                                   data-aos="fade-up">{item[`quote_${lan}`]}</p>
                            </div>
                            <p className="weAre_col-6_ps" data-aos="fade-down">{item[`content_${lan}`]}</p>
                            {item[`benifits_${lan}`].map((item, index) => (
                                <ul className="weAre_col-6_elItem" data-aos="fade-left" key={index}>
                                    <li className="weAre_col-6_elItem_iconList">
                                        <IoCheckbox className="weAre_col-6_elItem_iconList_check"/>
                                        <span>{item}</span>
                                    </li>
                                </ul>
                            ))}

                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default WeAre;