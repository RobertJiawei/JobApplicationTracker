import React from "react";
import { BiRevision } from "react-icons/bi";

const ResetButton = ({ onReset }) => {
  return (
    <div>
      <button
        type="button"
        onClick={onReset}
        className="flex w-full justify-center items-center py-3 px-6 bg-red-500 text-white font-bold rounded-lg shadow-md hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50"
      >
        <BiRevision className=" w-8 h-8" />
      </button>
    </div>
  );
};

export default ResetButton;
