import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const BackButton = ({ destination = "/" }) => {
  return (
    <div>
      <Link
        to={destination}
        className="flex w-full justify-center items-center py-3 px-6 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-50"
      >
        <BiArrowBack className=" w-8 h-8" />
      </Link>
    </div>
  );
};

export default BackButton;
