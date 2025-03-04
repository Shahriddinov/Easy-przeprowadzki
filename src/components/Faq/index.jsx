import React from 'react';
import "./faq.scss";
import { BiSupport } from "react-icons/bi";
import Accordion from "../Accordion/Accordion";

const Faq = () => {
    return (
        <div className="faq">
            <div className="container">
                <div className="row">
                    <div className="faq_col-2">
                        <div className="headTitle">F.A.Q</div>
                        <div className="bigTitle">
                            Frequently Asked Questions
                        </div>

                        <div className="faq_col-2_chatOur">
                            <h4 className="faq_col-2_chatOur_live">Chat Live With Our Expert Movers</h4>

                            <button className="faq_col-2_chatOur_onlineChat"><BiSupport/>Chat Us</button>

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