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
                        <p>Phasellus laoreet sodales enim sollicitudin leo tortor nisi luctus dapibus volutpat
                            malesuada. Consequat velit rhoncus platea per felis.</p>
                        <div className="faq_col-2_chatOur">
                            <h4 className="faq_col-2_chatOur_live">Chat Live With Our Expert Movers</h4>
                            <p className="faq_col-2_chatOur_chatDes">Pede potenti ullamcorper morbi maecenas interdum
                                cras massa.</p>
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