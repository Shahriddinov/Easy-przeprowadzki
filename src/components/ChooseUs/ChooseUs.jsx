import React from 'react';
import "./chooseUs.scss";
import chooseImg from "../../assets/images/choose.jpg";
import {IoChatboxEllipsesOutline} from "react-icons/io5";
import { GrShield } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { MdOutlineEngineering } from "react-icons/md";


const ChooseUs = () => {
    return (
        <div className="chooseUs">
            <div className="container">
                <div className="row">
                    <div className="chooseUs_col-6">
                        <div className="headTitle">
                            Why Choose us
                        </div>
                        <div className="bigTitle">We’ll take care of your stuff like it was our own</div>
                        <p>Curae lobortis orci aliquam consectetuer mollis. Habitant faucibus scelerisque etiam accumsan
                            euismod penatibus vestibulum diam.
                        </p>
                        <div className="row">
                            <div className="chooseUs_col-6_helps">
                                <div className="">
                                    <IoChatboxEllipsesOutline className="chooseUs_col-6_helps_chatIcon"/>
                                </div>
                                <div className="">
                                    <div className="chooseUs_col-6_helps_HTitle">Free for Consultation</div>
                                    <p> Sem vitae consectetur tristique ac mus praesent netus. </p>
                                </div>

                            </div>
                            <div className="chooseUs_col-6_helps">
                                <div className="">
                                    <MdOutlineEngineering className="chooseUs_col-6_helps_chatIcon"/>
                                </div>
                                <div className="">
                                    <div className="chooseUs_col-6_helps_HTitle">Professional Mover</div>
                                    <p> Sem vitae consectetur tristique ac mus praesent netus. </p>
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="chooseUs_col-6_helps">
                                <div className="">
                                    <GrShield className="chooseUs_col-6_helps_chatIcon"/>
                                </div>
                                <div className="">
                                    <div className="chooseUs_col-6_helps_HTitle">Protection Services</div>
                                    <p> Sem vitae consectetur tristique ac mus praesent netus. </p>
                                </div>

                            </div>
                            <div className="chooseUs_col-6_helps">
                                <div className="">
                                    <BiSupport  className="chooseUs_col-6_helps_chatIcon"/>
                                </div>
                                <div className="">
                                    <div className="chooseUs_col-6_helps_HTitle">Ready 24/7 Support</div>
                                    <p> Sem vitae consectetur tristique ac mus praesent netus. </p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="chooseUs_col-4">
                        <div className="chooseUs_col-4_contentChoose">
                            <div className="chooseUs_col-4_contentChoose_counter">
                                <div className="chooseUs_col-4_contentChoose_counter_numberWrapper">
                                    12+
                                </div>
                                <div className="chooseUs_col-4_contentChoose_counter_Ctitle">
                                    Storage Center <br/> Locations
                                </div>
                            </div>
                        </div>
                        <img className="chooseUs_col-4_chooseImg" src={chooseImg} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;