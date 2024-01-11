import React, { useState } from "react";
import FolderItem from "./FolderItem";
export default function Create({
  form,
  updateForm,
}: {
  form: any;
  updateForm: any;
}) {
  const [title, setTitle] = useState("");
  return (
    <section className="create">
      <div className="auto__container">
        <div className="create__inner">
          <div className="create__inner-row">
            <div className="createItem">
              <div className="createItem__inner">
                <div className="createItem__inner-top">
                  <h4>Create your events</h4>
                  <div className="input">
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="School Party"
                    />
                  </div>
                  <button
                    type="button"
                    className="button primary"
                    disabled={title === ""}
                    onClick={() => {
                      updateForm({
                        folders: [
                          ...form.folders,
                          {
                            id: new Date().toISOString(),
                            name: title,
                            list: [],
                          },
                        ],
                      });
                      setTitle("");
                    }}
                  >
                    Create your folder
                  </button>
                </div>
                <div className="createItem__inner-foot">
                  <h5>Try :</h5>
                  <ul>
                    <li onClick={() => setTitle("Job Dinner")}>Job Dinner</li>
                    <li onClick={() => setTitle("Dating with Friend")}>
                      Dating with Friend
                    </li>
                    <li onClick={() => setTitle("Lunch with Friends")}>
                      Lunch with Friends
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {form.folders.map((item: any, index: number) => {
              return <FolderItem {...item} key={index} itemData={item}/>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
