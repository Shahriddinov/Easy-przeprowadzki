import React from 'react';
import "./faq.scss";
import { BiSupport } from "react-icons/bi";
import Accordion from "../Accordion/Accordion";
import {useTranslation} from "react-i18next";

const Faq = () => {
    const {t} = useTranslation();
    return (
        <div className="faq">
            <div className="container">
                <div className="row">
                    <div className="faq_col-2">
                        <div className="headTitle">F.A.Q</div>
                        <div className="bigTitle">
                            {t("faq")}
                        </div>

                        <div className="faq_col-2_chatOur">


                        </div>
                    </div>
                    <div className="faq_col-10">
                        <Accordion/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;