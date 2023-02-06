import React from "react";
import ReactQuill from "react-quill";
import quillConfig from "../config/quillConfig";

function TutorialCreationQuillArea({
  value,
  onChangeValue,
  style,
  placeholder,
  lenghtmax,
  lenghtmin,
}) {
  return (
    <article className=" relative w-full z-40" style={{ height: "15vh" }}>
      <ReactQuill
        htmlFor="short-description"
        className="absolute z-40"
        theme="snow"
        maxLength={lenghtmax}
        minLength={lenghtmin}
        value={value}
        onChange={onChangeValue}
        modules={quillConfig.modules}
        formats={quillConfig.formats}
        placeholder={placeholder}
        style={style}
      />
      <input
        value={value}
        onChange={onChangeValue}
        minLength={lenghtmin}
        maxLength={lenghtmax}
        required
        className="absolute top-0 z-[-10] text-transparent  p-6 h-full w-full"
      />
    </article>
  );
}

export default TutorialCreationQuillArea;
