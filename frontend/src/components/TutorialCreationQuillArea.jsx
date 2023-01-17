import React from "react";
import ReactQuill from "react-quill";
import quillConfig from "../config/quillConfig";

function TutorialCreationQuillArea({ value, onChangeValue, style }) {
  return (
    <article className=" relative w-full z-40" style={{ height: "15vh" }}>
      <ReactQuill
        htmlFor="short-description"
        className="absolute z-40"
        theme="snow"
        value={value}
        onChange={onChangeValue}
        modules={quillConfig.modules}
        formats={quillConfig.formats}
        style={style}
      />
      <input
        value={value}
        onChange={onChangeValue}
        required
        className="absolute top-0 z-[-10] text-transparent  p-6 h-full w-full"
      />
    </article>
  );
}

export default TutorialCreationQuillArea;
