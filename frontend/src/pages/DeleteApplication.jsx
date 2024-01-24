import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DeleteApplication = () => {
  const [application, setApplication] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5555/applications/${id}`)
      .then((res) => {
        setApplication(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  });

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5555/applications/${id}`)
      .then((res) => {
        console.log(res.message);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className=" h-screen bg-gray-100 flex justify-center">
      <form
        className="bg-white rounded-xl shadow-lg p-8 w-full max-w-3xl h-1/2 mt-16 grid grid-flow-row"
        onSubmit={submitHandler}
      >
        <div>
          <h1 className=" text-3xl my-2 flex justify-center">
            Delete Application
          </h1>
        </div>
        {Object.entries(application)
          .filter(([property]) =>
            ["company", "appliedDate", "position"].includes(property)
          )
          .map(([property, value]) => {
            return (
              <div className="grid grid-cols-4 gap-4">
                <div className=" col-start-2 flex justify-end">
                  {property
                    .replace(/([a-z])([A-Z])/g, "$1 $2")
                    .toLowerCase()
                    .replace(/^./, (str) => str.toUpperCase())}
                  :
                </div>
                <div>{value}</div>
              </div>
            );
          })}
        <button
          type="submit"
          className=" text-white font-bold text-2xl rounded-3xl bg-red-500 hover:bg-red-600"
        >
          Delete this application
        </button>
      </form>
    </div>
  );
};

export default DeleteApplication;
