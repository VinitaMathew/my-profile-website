import React from "react";
import "./Footer.scss";
import { useInView } from "react-intersection-observer";

const Logo = require("../../../assets/logo.png");

export default function Footer() {
  const [ref, inView] = useInView({
    threshold: 0.01,
    triggerOnce: true,
  });
  return (
    <div className="footer-container">
      <div
        ref={ref}
        className={
          inView
            ? "slide-up footer-content-wrapper"
            : "hidden footer-content-wrapper"
        }
      >
        <img src={Logo} alt="" className="logo" />
        <div className="details">
          <div>
            Designed by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/nishad-s-1384b5189/"
            >
              Nishad
            </a>{" "}
            | Developed by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/vinita-mathew-6b3255187/"
            >
              Vinita
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
