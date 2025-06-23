import React, { useEffect, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { LuPhoneCall } from "react-icons/lu";
import { motion } from "framer-motion";
import "./cookieBanner.scss"; // SCSS ulash

const Layout = () => {
  const { pathname } = useLocation();
  const [cookies, setCookie] = useCookies(["myCookieConsent"]);
  const [showBanner, setShowBanner] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    if (pathname === "/" && !cookies.myCookieConsent) {
      setShowBanner(true);
    }
  }, [pathname, cookies]);

  const acceptCookies = () => {
    setCookie("myCookieConsent", true, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 kun
    });
    setShowBanner(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={pathname === "/" ? "page-wrapper1" : "page-wrapper2"}>
      <Header />
      <div className="page-content">
        <Outlet />
      </div>
      {showTopBtn && (
        <motion.a
          className="scrollToHome"
          href="tel:+48509931555"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
          >
            <LuPhoneCall color="white" />
          </motion.div>
        </motion.a>
      )}
      <Footer />

      {showBanner && (
        <div className="cookie-banner-animated">
          <span>
            Ushbu sayt foydalanuvchi tajribasini yaxshilash uchun cookie’lardan
            foydalaniladi.
          </span>
          <button className="cookie-button" onClick={acceptCookies}>
            Roziman
          </button>
        </div>
      )}
    </div>
  );
};

export default Layout;
