import React from 'react';
import "./contact.scss";
import PageHero from "../../components/PageHero";
import {PiTrolleySuitcaseBold} from "react-icons/pi";
import {AiFillCaretRight} from "react-icons/ai";
import {MdApartment} from "react-icons/md";
import {IoIosGlobe} from "react-icons/io";
import {useTranslation} from "react-i18next";

const ContactUs = () => {
    const {t} = useTranslation();
    const title = `${t("contactUs")}`;
    return (
        <>
            <PageHero title={title}/>
            <div className="contact">
                <div className="container">
                    <div className="row">
                        <div className="contact_col-55">
                            <div className="headTitle">Get In Touch</div>
                            <div className="bigTitle">We’d love to hear from you</div>
                            <div className="contact_col-55_information">
                                <div className="contact_col-55_information_callIcons">
                                    <div>
                                        <div className="contact_col-55_information_callIcons_boxIcon">
                                            <PiTrolleySuitcaseBold/></div>
                                    </div>
                                    <div className="contact_col-55_information_callIcons_callsText">
                                        <div>
                                            <h2 className="contact_col-55_information_callIcons_callsText_res">Residential</h2>
                                            <div className="d-fl">
                                                <p className="d-flex"><AiFillCaretRight style={{fontSize: "12px"}}/> +1
                                                    (555) 987 6541</p>
                                                <p className="d-flex"><AiFillCaretRight
                                                    style={{fontSize: "12px"}}/> hello@yourdomain.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact_col-55_information_gets">Get a qeato</div>
                            </div>
                            <div className="contact_col-55_information">
                                <div className="contact_col-55_information_callIcons">
                                    <div>
                                        <div className="contact_col-55_information_callIcons_boxIcon">
                                            <MdApartment/></div>
                                    </div>
                                    <div className="contact_col-55_information_callIcons_callsText">
                                        <div>
                                            <h2 className="contact_col-55_information_callIcons_callsText_res">Commercial</h2>
                                            <div className="d-fl">
                                                <p className="d-flex"><AiFillCaretRight style={{fontSize: "12px"}}/> +1
                                                    (555) 987 6541</p>
                                                <p className="d-flex"><AiFillCaretRight
                                                    style={{fontSize: "12px"}}/> hello@yourdomain.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact_col-55_information_gets">Get a qeato</div>
                            </div>
                            <div className="contact_col-55_information">
                                <div className="contact_col-55_information_callIcons">
                                    <div>
                                        <div className="contact_col-55_information_callIcons_boxIcon">
                                            <IoIosGlobe/></div>
                                    </div>
                                    <div className="contact_col-55_information_callIcons_callsText">
                                        <div>
                                            <h2 className="contact_col-55_information_callIcons_callsText_res">International</h2>
                                            <div className="d-fl">
                                                <p className="d-flex"><AiFillCaretRight style={{fontSize: "12px"}}/> +1
                                                    (555) 987 6541</p>
                                                <p className="d-flex"><AiFillCaretRight
                                                    style={{fontSize: "12px"}}/> hello@yourdomain.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact_col-55_information_gets">Get a qeato</div>
                            </div>
                        </div>
                        <div className="contact_col-45">
                            <div className="contact_col-45_sizeDefault">{t("send")}</div>
                            {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec*/}
                            {/*    ullamcorper mattis.</p>*/}
                            <form>
                                <div className="form-group">
                                    <div className="form-control">
                                        <label htmlFor="name" className="form-list">{t("name")}</label>
                                        <input name="name" id="name" type="text" placeholder={t("name")}
                                               className="form-input"/>
                                    </div>
                                    <div className="form-control">
                                        <label htmlFor="phone" className="form-list">{t("phone")}</label>
                                        <input name="phone" id="phone" type="number" placeholder={t("phone")}
                                               className="form-input"/>
                                    </div>

                                </div>
                                <div className="form-group">
                                    <div className="form-control">
                                        <label htmlFor="email" className="form-list">{t("email")}</label>
                                        <input name="email" id="email" type="email" placeholder={t("email")}
                                               className="form-input"/>
                                    </div>
                                    <div className="form-control">
                                        <label htmlFor="subject" className="form-list">{t("subject")} </label>
                                        <input name="subject" id="subject" type="text" placeholder={t("subject")}
                                               className="form-input"/>
                                    </div>

                                </div>
                                <div className="form-control" style={{width: '100%'}}>
                                    <label htmlFor="message" className="form-list">{t("message")}</label>
                                    <textarea name="message" id="message" placeholder={t("message")}
                                              className="form-textarea"/>
                                </div>
                                <button type="submit" className="sendForm">{t("sendM")}</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div style={{
                    height: "800px",
                }}>
                    <div className="contact_local">
                        <div className="container">
                            <h2 className="contact_local_our">{t("our")}</h2>
                            <div className="contact_local_places">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2214.005727061684!2d20.97491907617065!3d52.178766161438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4719333dc1783d07%3A0xf2c0a47167d23e13!2sKomitetu%20Obrony%20Robotnik%C3%B3w%2039C%2C%2002-148%20Warszawa%2C%20Poland!5e1!3m2!1sen!2s!4v1740336096848!5m2!1sen!2s"
                                    width="100%" height="600" style={{border:"0"}} allowFullScreen="" loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
        ;
};

export default ContactUs;