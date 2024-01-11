"use client";
import React, { useEffect, useState } from "react";
import { EventsList } from "@/app/Base/Modul";
import ShareArticle from "./ShareArticle";

export default function Article({ params }: { params: any }) {
  const [article, setArticle] = useState<any>(null);
  const [itemData, setItemData] = useState<any>(null);
  useEffect(() => {
    if (params.id) {
      setItemData(EventsList.filter((item: any) => item.id === params.id)[0]);
      setArticle(
        EventsList.filter((item: any) => item.id === params.id)[0].list.filter(
          (item) => item.id === params.articleId
        )[0]
      );
    }
  }, [params.id]);
  return (
    <>
      <section className="article">
        <div className="auto__container">
          <div className="article__inner">
            <div className="title">
              <h1>{itemData?.name}</h1>
              <ShareArticle
                imageUrl={article?.image}
                name={article?.title}
                id={itemData?.id}
                articleId={article?.id}
              />
            </div>
            <div className="articleItem">
              <div className="articleItem__image">
                <img src={article?.image} alt="" />
                <div className="articleItem__rating">
                  {itemData?.list
                    .map((item: any) => item.id)
                    .indexOf(article.id) + 1}
                  /{itemData?.list.length}
                </div>
              </div>
              <div className="articleItem__content">
                <h2>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since
                </h2>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin facilisis nisi nibh, eget varius magna fringilla id.
                    Donec malesuada ornare metus ac viverra. Donec sagittis,
                    enim at convallis auctor, diam eros ornare diam, quis
                    tincidunt odio nisl eget tellus.
                  </li>
                  <li>Sed iaculis lorem nec massa suscipit, at turpis</li>
                  <li>
                    Donec non mauris a urna molestie dapibus ac nec purus. Cras
                    eu sollicitudin quam. Maecenas fermentum tristique tempor.
                    Nulla facilisi. Maecenas sollicitudin lectus metus, dapibus
                    porta ligula congue nec. Vestibulum eu dapibus felis. Aenean
                    et ipsum in enim mattis vehicula. Nam quis scelerisque
                    augue.
                  </li>
                  <li>
                    Sed viverra sollicitudin lectus. Donec id urna a tortor
                    gravida laoreet vel vel sapien. Pellentesque eget velit
                    sollicitudin, suscipit est a, porta tortor. Curabitur quis
                    velit pellentesque, placerat tellus id, efficitur enim. Nam
                    bibendum risus et dolor tempus, vitae fringilla mi accumsan.
                  </li>
                  <li>
                    Quisque vehicula malesuada auctor. Ut pulvinar odio lectus,
                    eget consequat arcu dignissim quis. Aenean dignissim.
                  </li>
                  <li>
                    ulla aliquam, eros id aliquam eleifend, dui nunc
                    sollicitudin mi, non vestibulum dui ipsum et leo. Vestibulum
                    ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia curae; Mauris semper pulvinar risus in
                    hendrerit. Nulla facilisi. Cras pellentesque lacus eget enim
                    porttitor, vel blandit urna pellentesque. Sed sit amet
                    convallis tortor. Vivamus iaculis congue lorem in tincidunt.
                    Interdum et malesuada fames ac ante ipsum primis in
                    faucibus.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
