import React from 'react';
import "./price.scss";
import PageHero from "../../components/PageHero";
import Package from "../../components/Package/Package";
import {useTranslation} from "react-i18next";
const Price = () => {
    const {t } = useTranslation();
    const title = `${t("price")}`;
    const description= `${t("prDes")}`

    return (
        <div>
            <PageHero title={title} description={description}/>
            <Package/>
        </div>
    );
};

export default Price;