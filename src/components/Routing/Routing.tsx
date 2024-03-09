import React, { useEffect, useRef, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Menu from "./Menu/Menu";
import Footer from "./Footer/Footer";
import HomePage from "../homePage/HomePage";
import "./Routing.scss";

const BackToTopIcon = require("../../assets/back-to-top.png");

export default function Routing() {
  const ref = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [isMobile] = useState(
    window.matchMedia("only screen and (max-width:750px)").matches
  );
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobile) {
        setShowButton(window.scrollY > 800);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const scrollToProjects = () => {
    setTimeout(() => {
      // Scroll to the reference component
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  const scrollToContact = () => {
    setTimeout(() => {
      // Scroll to the reference component
      if (contactRef.current) {
        contactRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="routingContainer">
      <HashRouter>
        <div>
          <Menu
            scrollToProjects={scrollToProjects}
            scrollToContact={scrollToContact}
          />
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  workClick={scrollToProjects}
                  projectRef={ref}
                  contactClick={scrollToContact}
                  contactRef={contactRef}
                />
              }
            />
            <Route path="/about" element={<HomePage />} />
          </Routes>
          <button
            className="scroll-to-top-button"
            onClick={scrollToTop}
            style={{ display: showButton ? "block" : "none" }}
          >
            <img src={BackToTopIcon} alt="scroll to top" />
          </button>
          <Footer />
        </div>
      </HashRouter>
    </div>
  );
}
