import React from 'react';
import "./modeNeeds.scss";
import {FaCaretDown} from "react-icons/fa";

const MoveNeeds = () => {
    return (
        <div className="moveNeeds">

            <div className="moveNeeds_bgc">
                <FaCaretDown className="moveNeeds_bgc_downIcon"/>
                <div className="bigTitle moveNeeds_bgc_centerTitle">We will take care of all your moving needs
                    from A to Z!
                </div>
                <p className="moveNeeds_bgc_centerText">Magnis diam montes vehicula non habitant parturient sed. Nullam fermentum velit cursus tempor leo
                    litora augue nec. Laoreet est sem cursus libero semper sed nulla purus ut habitant potenti.</p>
                <div className="d-flex">
                    <a href="#" className="moveNeeds_bgc_centerSend">Get Started</a>
                </div>
            </div>

        </div>
    );
};

export default MoveNeeds;