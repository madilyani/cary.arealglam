import { readFile } from "@/app/Base/FileReader";
import { DragEvent, useState } from "react";
export default function Upload({
  form,
  updateForm,
}: {
  form: any;
  updateForm: any;
}) {
  const [isOver, setIsOver] = useState(false);

  const inputChange = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    previewImage(e.target.files[0]);
  };
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOver(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOver(false);
  };
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOver(false);
    previewImage(e.dataTransfer.files[0]);
  };
  const onLoad = (resultImage: any, imageFile: any) => {
    updateForm({
      events: [
        ...form.events,
        {
          image: resultImage,
          imageFile,
        },
      ],
    });
  };
  const previewImage = (file: any) => {
    if (file) {
      readFile({
        file: file,
        onLoad: (result: any) => onLoad(result, file),
      });
    }
  };
  return (
    <div
      className={"upload " + (form.events.length > 0 ? "active" : "")}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={{
        backgroundColor: isOver ? "#9d22eb10" : "white",
      }}
    >
      {form.events.length > 0 ? (
        <div className="upload__row">
          <input type="file" multiple={false} onChange={inputChange} />
          <div className="upload__icon">
            <img src="/images/plus.svg" alt="" />
          </div>
          <h3>Upload More</h3>
        </div>
      ) : (
        <div className="upload__col">
          <input type="file" multiple={false} onChange={inputChange} />
          <div className="upload__icon">
            <img src="/images/plus.svg" alt="" />
          </div>
          <h3>Upload High Quality pictures</h3>
          <p className="big">i will choose the best outfits</p>
        </div>
      )}
    </div>
  );
}
