"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Upload from "./Upload";
import Share from "@/app/Base/Share";

export default function Hero() {
  const [form, setForm] = useState({
    events: [],
  });
  const updateForm = (data: any) => {
    setForm((form) => ({ ...form, ...data }));
  };
  return (
    <section className="hero">
      <div className="auto__container">
        <div className="hero__inner">
          <div className="hero__inner-title">
            <h1>
              I choose the best style and the hottest photo based on psychology
              and science.
            </h1>
            <Share />
          </div>
          <Upload form={form} updateForm={updateForm} />
          <div className="hero__inner-row">
            {form.events.map((item: any, index: number) => {
              return (
                <HeroItem {...item} key={index} index={index} form={form} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
const HeroItem = (props: { image: string; index: number; form: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      exit={{ opacity: 0 }}
      className="heroItem"
    >
      <div className="heroItem__image">
        <div className="heroItem__number">
          <b>{props.index + 1}</b>
        </div>
        <img src={props.image} alt="" />
        <div className="heroItem__info">
          <div className="heroItem__info-num">
            {props.index + 1}/{props.form.events.length}
          </div>
          <div className="heroItem__info-buy">Buy / Yes</div>
        </div>
      </div>
      <div className="heroItem__content">
        <h6>
          Lorem Ipsum has been the industry's standard dummy text ever since
        </h6>
        <ul>
          <li>
            Sed iaculis lorem nec massa suscipit, at viverra turpis lacinia.
          </li>
          <li>Sed iaculis lorem nec massa suscipit, at turpis</li>
          <li>
            Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget
            consequat arcu dignissim quis. Aenean dignissim.
          </li>
        </ul>
      </div>
    </motion.div>
  );
};
