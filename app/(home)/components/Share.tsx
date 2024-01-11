"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  copyIcon,
  facebookIcon,
  mailIcon,
  pinterestIcon,
  shareIcon,
  twitterIcon,
} from "@/app/Base/SVG";
import Link from "next/link";
import {
  EmailShareButton,
  FacebookShareButton,
  PinterestShareButton,
  TwitterShareButton,
} from "react-share";

export default function Share({
  imageUrl,
  wrapper,
  id,
  name,
}: {
  wrapper: any;
  id: any;
  name: string;
  imageUrl: any;
}) {
  const [active, setActive] = useState(false);
  const [currentUrl, setCurrentUrl] = useState<string>("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  useEffect(() => {
    const windowClick = (e: MouseEvent) => {
      if (!wrapper.current.contains(e.target)) setActive(false);
    };

    if (active) window.addEventListener("click", windowClick);
    else window.removeEventListener("click", windowClick);

    return () => window.removeEventListener("click", windowClick);
  }, [active]);
  return (
    <div className="share" ref={wrapper}>
      <div
        className={"createItem__head-btn " + (active ? "active" : "")}
        onClick={() => {
          setActive(!active);
        }}
      >
        {shareIcon}
      </div>
      <AnimatePresence>
        {active === true && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0 }}
            className="share__menu"
          >
            <FacebookShareButton
              title={name}
              url={`https://caryarealglam.vercel.app/catalog/${id}`}
            >
              <span>{facebookIcon} </span> facebook
            </FacebookShareButton>
            <PinterestShareButton
              url={`https://caryarealglam.vercel.app/catalog/${id}`}
              media={`https://caryarealglam.vercel.app${imageUrl}`}
            >
              <span>{pinterestIcon} </span> Pinterest
            </PinterestShareButton>
            <TwitterShareButton
              title={name}
              url={`https://caryarealglam.vercel.app/catalog/${id}`}
            >
              <span>{twitterIcon}</span>
              twitter
            </TwitterShareButton>
            <EmailShareButton
              url={`https://caryarealglam.vercel.app/catalog/${id}`}
              subject={name}
            >
              <span>{mailIcon}</span>
              email
            </EmailShareButton>
            <button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText(
                  `https://caryarealglam.vercel.app/catalog/${id}`
                );
                setActive(false);
              }}
            >
              <span>{copyIcon}</span>
              copy link
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
