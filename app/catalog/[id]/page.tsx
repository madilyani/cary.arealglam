"use client";
import React, { useEffect, useRef, useState } from "react";
import { EventsList } from "../../Base/Modul";
import CatalogItem from "../components/CatalogItem";
import Share from "../components/Share";
export default function Catalog({ params }: { params: { id: string } }) {
  const [itemData, setItemData] = useState<any>(null);
  useEffect(() => {
    if (params.id) {
      setItemData(EventsList.filter((item: any) => item.id === params.id)[0]);
    }
  }, [params.id]);

  return (
    <>
      <section className="catalog">
        <div className="auto__container">
          <div className="catalog__inner">
            <div className="title">
              <h1>{itemData?.name}</h1>
              <Share
                imageUrl={itemData?.list[0]?.image}
                id={itemData?.id}
                name={itemData?.name}
              />
            </div>
            <div className="catalog__inner-row">
              {itemData?.list.map((item: any, index: number) => {
                return (
                  <CatalogItem
                    index={index}
                    {...item}
                    key={index}
                    itemData={itemData}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
