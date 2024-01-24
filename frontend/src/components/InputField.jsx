import React from "react";

const InputField = ({ property, value, warning, inputChangeHandler }) => {
  return (
    <div>
      <label htmlFor={property} className="text-gray-700 font-semibold">
        {property.replace(/([a-z])([A-Z])/g, "$1 $2")}
      </label>
      <input
        name={property}
        type={
          property === "appliedDate" || property === "nextInterviewDate"
            ? "date"
            : "text"
        }
        value={value}
        placeholder={`Enter ${property.replace(/([a-z])([A-Z])/g, "$1 $2")}`}
        className={
          "mt-1 block w-full rounded-md shadow-sm pl-1 border-gray-300"
        }
        onChange={inputChangeHandler}
      />
      {(property === "company" || property === "position") && warning && (
        <p className=" italic text-red-500">{warning}</p>
      )}
    </div>
  );
};

export default InputField;
