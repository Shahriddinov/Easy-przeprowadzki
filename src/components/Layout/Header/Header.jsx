import React, { useEffect } from "react";
import { FaPhoneAlt, FaMapMarkedAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../../../assets/images/image.svg";
import { Link } from "react-router";
import Language from "../../Language/language";
import { useTranslation } from "react-i18next";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
function Header(props) {
  const { t } = useTranslation();
  const [sheet, setSheet] = React.useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1500, // Animatsiya davomiyligi (ms)
      offset: 100, // Elementdan yuqori chekkasiga masofa
      easing: "ease-in-out", // Animatsiya effekti
      delay: 100, // Animatsiya kechikishi (ms)
      once: true, // Animatsiya faqat bir marta ishlashi uchun
    });
  }, []);

  return (
    <div className="header">
      <div className="header_head" data-aos="fade-down">
        <div className="header_head_linkContact">
          <div className="header_head_linkContact_col-10">
            <div className="header_head_linkContact_col-10_widget">
              <ul className="header_head_linkContact_col-10_widget_item">
                <a
                  href="tel:+48509931555"
                  className="header_head_linkContact_col-10_widget_item_list"
                >
                  <FaPhoneAlt className="header_head_linkContact_col-10_widget_item_list_icons" />
                  <span className="header_head_linkContact_col-10_widget_item_list_text">
                   +48509931555
                  </span>
                </a>
                <li className="header_head_linkContact_col-10_widget_item_list">
                  <IoLocation className="header_head_linkContact_col-10_widget_item_list_icons" />
                  <span className="header_head_linkContact_col-10_widget_item_list_text">
                    Komitetu Obrony Robotników 39C
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="header_head_linkContact_col-2">
            <a
                target="_blank"
              href="https://maps.app.goo.gl/b4ouG7LLCKw9q4jn7"
              className="header_head_linkContact_col-2_locationButton"
            >
              <span className="header_head_linkContact_col-2_locationButton_lIcon">
                <FaMapMarkedAlt />
                <span>{t("find")}</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="header_navbar">
        <div className="container">
          <div className="header_navbar_nav">
            <div className="header_navbar_nav_list-2">
              <img
                width="100%"
                className="header_navbar_nav_list-2_logos"
                src={logo}
                alt=""
              />
            </div>
            <div className="header_navbar_nav_list-10">
              <button
                onClick={() => setSheet(true)}
                className={`header_navbar_nav_list-10_hamburger`}
              >
                <AiOutlineMenu width={24} height={24} />
              </button>
              <ul
                className={`header_navbar_nav_list-10_menu ${
                  sheet && "active-menu"
                }`}
              >
                <li className="header_navbar_nav_list-10_menu_items hamburger-header">
                  <div className="header_navbar_nav_list-10_menu_items_header">
                    <img
                      width="100%"
                      className="header_navbar_nav_list-2_logos"
                      src={logo}
                      alt=""
                    />
                  </div>
									<button
                    onClick={() => setSheet(false)}
                    className="header_navbar_nav_list-10_menu_items_close"
                  >
                    <AiOutlineClose />
                  </button>
                </li>
                <li className="header_navbar_nav_list-10_menu_items">
  <Link to="/" onClick={() => setSheet(false)}>{t("main")}</Link>
</li>
<li className="header_navbar_nav_list-10_menu_items">
  <Link to="/about" onClick={() => setSheet(false)}>{t("about")}</Link>
</li>
<li className="header_navbar_nav_list-10_menu_items">
  <Link to="/services" onClick={() => setSheet(false)}>{t("services")}</Link>
</li>
<li className="header_navbar_nav_list-10_menu_items">
  <Link to="/price" onClick={() => setSheet(false)}>{t("price")}</Link>
</li>
<li className="header_navbar_nav_list-10_menu_items">
  <Link to="/contact" onClick={() => setSheet(false)}>{t("contact")}</Link>
</li>

                <li className="header_navbar_nav_list-10_menu_items ">
                  <Language />
                  
                </li>
              </ul>
              <div
                onClick={() => setSheet(false)}
                className={`header_navbar_nav_list-10_overlay ${
                  sheet && "active-overlay"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
