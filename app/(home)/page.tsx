"use client";
import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Create from "./components/Create";
import { EventsList } from "../Base/Modul";
import Head from "next/head";

export default function Home() {
  const [form, setForm] = useState<any>({
    folders: EventsList,
  });
  const updateForm = (data: any) => {
    setForm((form: any) => ({ ...form, ...data }));
  };
  const [currentUrl, setCurrentUrl] = useState<string>("");
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);
  return (
    <>

      <Hero />
      <Create form={form} updateForm={updateForm} />
    </>
  );
}
