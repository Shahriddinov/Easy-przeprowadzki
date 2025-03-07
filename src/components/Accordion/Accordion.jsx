import React, { useState } from "react";
import "./style.scss";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import {useTranslation} from "react-i18next";



const Accordion = () => {
    const {t} = useTranslation();
    // Default holatda birinchi accordion (index 0) ochiq bo‘lishi uchun state qiymatini 0 qilib qo‘yamiz
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const items = [
        {
            id: 1,
            title: t("whyChoose"),
            description:
                t("chooseDes"),
        },
        {
            id: 2,
            title:t("howWe"),
            description:
                t("howDes"),
        },
        {
            id: 3,
            title: t("whatPay"),
            description:
                t("payDes"),
        },
        {
            id: 4,
            title: t("other"),
            description:
                t("otherDes"),
        },
        {
            id: 5,
            title: t("aboutCon"),
            description:
                t("aboutConDes"),
        },
    ];

    return (
        <div className="accordion">
            {items.map((item, index) => (
                <div key={index} className={`accordion-item ${openIndex === index ? "open" : ""}`}>
                    <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                        <h3>{item.title}</h3>
                        {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                    {openIndex === index && <p className="accordion-content">{item.description}</p>}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
