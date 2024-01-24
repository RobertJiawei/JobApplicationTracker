import React from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const DeleteButton = ({ id }) => {
  return (
    <div className="inline-flex items-center">
      <Link to={`/applications/delete/${id}`}>
        <MdDelete />
      </Link>
    </div>
  );
};

export default DeleteButton;
