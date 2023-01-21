import React from "react";

function SettingsParameters({
  value,
  labelText,
  placeholderValue,
  onChangeEvent,
  onClickEvent,
}) {
  return (
    <li className=" my-3 md:m-6  border shadow-md rounded-lg   bg-main-blue text-white">
      {" "}
      <div className="w-full flex justify-end items-center relative">
        <label
          htmlFor={labelText}
          name={labelText}
          className="px-3  font-semibold w-32 border-r-gray "
        >
          {" "}
          {labelText}{" "}
        </label>
        <input
          name={labelText}
          value={value}
          placeholder={placeholderValue}
          className=" border-gray-400 bg-gray-100 p-4 w-full h-10 text-gray-500 shadow-inner"
          onChange={onChangeEvent}
          onClick={onClickEvent}
          required
          id={labelText}
        />
      </div>
    </li>
  );
}

export default SettingsParameters;
