"use client";
import { tooltipIcon } from "@/app/Base/SVG";
import Link from "next/link";
import React, { useRef } from "react";
import Share from "./Share";

export default function FolderItem(props: {
  name: string;
  id: number;
  itemData: any;
  list: any;
}) {
  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    if (wrapper.current.contains(e.target)) e.preventDefault();
  };
  const wrapper = useRef<any>(null);
  return (
    <>
      <Link
        href={"/catalog/" + props.id}
        className="createItem"
        onClick={onClick}
      >
        <div className="createItem__main">
          <div className="createItem__head">
            <div className="createItem__head-btn">{tooltipIcon}</div>
            <Share
              imageUrl={props.list[0].image}
              wrapper={wrapper}
              id={props.id}
              name={props.name}
            />
          </div>
          <div className="createItem__image">
            <img src="/images/folder.png" alt="" />
          </div>
          <div className="createItem__tag">
            <b> {props.name} </b>
          </div>
        </div>
      </Link>
    </>
  );
}
