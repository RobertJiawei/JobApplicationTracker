import React from "react";
import { BiBookAdd } from "react-icons/bi";
import { Link } from "react-router-dom";

const AddButton = ({ destination = "/applications/create" }) => {
  return (
    <div>
      <Link
        to={destination}
        className="flex flex-wrap flex-col justify-center items-center rounded-3xl h-16 font-bold hover:bg-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 md:flex-row"
      >
        <BiBookAdd />
        <span className="pl-1 font-bold">Add New Application</span>
      </Link>
    </div>
  );
};

export default AddButton;
