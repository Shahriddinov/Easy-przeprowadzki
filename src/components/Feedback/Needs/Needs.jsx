import React from 'react';
import "../feedback.scss";
import {useTranslation} from "react-i18next";
const Needs = () => {
    const {t} = useTranslation();

    return (
        <div className="feedback_why">
            <div className="container">
                <div className="feedback_why_Wbox">
                    <div className="bigTitle colo">
                        {t("need")}
                    </div>
                    <p className="colo">{t("needDes")}</p>
                    <a href="/price" className="discover">{t("discover")}</a>

                </div>
            </div>
        </div>
    );
};

export default Needs;