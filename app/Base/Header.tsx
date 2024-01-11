"use client";
import React, { useEffect, useRef, useState } from "react";
import { chevronBottom, userIcon } from "./SVG";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [active, setActive] = useState(false);
  const wrapper = useRef<any>(null);
  useEffect(() => {
    const windowClick = (e: MouseEvent) => {
      if (!wrapper.current.contains(e.target)) setActive(false);
    };

    if (active) window.addEventListener("click", windowClick);
    else window.removeEventListener("click", windowClick);

    return () => window.removeEventListener("click", windowClick);
  }, [active]);
  return (
    <header className="header" ref={wrapper}>
      <div className="auto__container">
        <div className="header__inner">
          <Link href="/" className="header__inner-logo">
            <img src="/images/logo.png" alt="" />
          </Link>
          <div className="user">
            <div
              className="user__btn"
              onClick={() => {
                setActive(!active);
              }}
            >
              <div className="user__btn-icon">{userIcon}</div>
              <b> John Deo </b>
              <div className="user__btn-arrow">{chevronBottom}</div>
            </div>
            <AnimatePresence>
              {active && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  exit={{ opacity: 0 }}
                  className="user__menu"
                >
                  <Link href=""> Follow on Instagram </Link>
                  <hr />
                  <Link href=""> Log out </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}
