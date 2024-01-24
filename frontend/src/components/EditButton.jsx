import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const EditButton = ({ id }) => {
  return (
    <div className="inline-flex items-center">
      <Link to={`/applications/edit/${id}`}>
        <MdOutlineEdit />
      </Link>
    </div>
  );
};

export default EditButton;
