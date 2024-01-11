import React from "react";
import { instagramIcon } from "./SVG";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="auto__container">
        <div className="footer__inner">
          <div className="footer__inner-main">
            <div className="footer__inner-logo">
              <img src="/images/footer-logo.png" alt="" />
            </div>
            <p className="ex">Follow the founder and send ideas and feedback</p>
            <Link href="" className="inst">
              <div className="inst__icon">{instagramIcon}</div>
              <b> Instagram </b>
            </Link>
          </div>

          <div className="footer__inner-copy">
            <p>Copyright 2023 . All Right Reserved A Real Glam</p>
            <div className="footer__inner-links">
              <Link href=""> Terms of Service </Link>
              <hr />
              <Link href=""> Privacy Policy </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
