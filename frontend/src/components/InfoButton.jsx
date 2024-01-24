import React from "react";
import { BiInfoCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const InfoButton = ({ id }) => {
  return (
    <div className="inline-flex items-center">
      <Link to={`/applications/details/${id}`}>
        <BiInfoCircle />
      </Link>
    </div>
  );
};

export default InfoButton;
