"use client";
import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { chevronBottom } from "@/app/Base/SVG";
import Link from "next/link";
import ShareArticle from "./ShareArticle";
export default function CatalogItem(props: {
  title: any;
  listText: any;
  id: number;
  image: string;
  index: number;
  itemData: any;
}) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    if (wrapper.current.contains(e.target)) e.preventDefault();
  };
  const wrapper = useRef<any>(null);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      exit={{ opacity: 0 }}
      className={"catalogItem " + (isActive ? "active" : "")}
    >
      <div className="catalogItem__inner">
        <Link
          href={"/article/" + props.itemData.id + "/" + props.id}
          onClick={onClick}
          className="catalogItem__image"
        >
          <img src={props.image} alt="" />
          <div className="catalogItem__number">
            <b> {props.index + 1} </b>
          </div>
          <ShareArticle
            imageUrl={props.image}
            name={props?.title}
            wrapper={wrapper}
            id={props.itemData.id}
            articleId={props.id}
          />
          <div className="catalogItem__rating">
            {props.index + 1}/{props.itemData.list.length}
          </div>
        </Link>
        <div className="catalogItem__content">
          <div className="catalogItem__head ">
            <h6 className="sm">
              Lorem Ipsum has been the industry's standard dummy text ever since
            </h6>
            <div
              className={"catalogItem__head-btn " + (isActive ? "active" : "")}
              onClick={() => setIsActive(!isActive)}
            >
              {chevronBottom}
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isActive ? (
          <motion.ul
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            exit={{ opacity: 0, y: -15 }}
            className={"catalogItem__body " + (isActive ? "active" : "")}
          >
            {props.listText.map((item: string, index: number) => {
              return <li key={index}>{item}</li>;
            })}
          </motion.ul>
        ) : (
          ""
        )}
      </AnimatePresence>
    </motion.div>
  );
}
