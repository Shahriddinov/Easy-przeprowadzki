import React, { useState } from "react";
import "./style.scss";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const items = [
    {
        id: 1,
        title: "1. Why choose us for your projects?",
        description:
            "Tempus aliquet etiam et rutrum accumsan dignissim proin. Netus vivamus pulvinar enim non dis sapien phasellus fringilla commodo tristique. Congue primis augue consequat natoque mus dolor diam vulputate.",
    },
    {
        id: 2,
        title: "2. How we provide services for you?",
        description:
            "Tempus aliquet etiam et rutrum accumsan dignissim proin. Netus vivamus pulvinar enim non dis sapien phasellus fringilla commodo tristique. Congue primis augue consequat natoque mus dolor diam vulputate.",
    },
    {
        id: 3,
        title: "3. What payment methods are available?",
        description:
            "Tempus aliquet etiam et rutrum accumsan dignissim proin. Netus vivamus pulvinar enim non dis sapien phasellus fringilla commodo tristique. Congue primis augue consequat natoque mus dolor diam vulputate.",
    },
    {
        id: 4,
        title: "4. How we are affordable than others?",
        description:
            "Tempus aliquet etiam et rutrum accumsan dignissim proin. Netus vivamus pulvinar enim non dis sapien phasellus fringilla commodo tristique. Congue primis augue consequat natoque mus dolor diam vulputate.",
    },
    {
        id: 5,
        title: "5. About content creation, can I participate in the idea?",
        description:
            "Tempus aliquet etiam et rutrum accumsan dignissim proin. Netus vivamus pulvinar enim non dis sapien phasellus fringilla commodo tristique. Congue primis augue consequat natoque mus dolor diam vulputate.",
    },
];

const Accordion = () => {
    // Default holatda birinchi accordion (index 0) ochiq bo‘lishi uchun state qiymatini 0 qilib qo‘yamiz
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

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
