import React from "react";
import BackButton from "../components/BackButton";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import InputField from "../components/InputField";
import { useEffect } from "react";

const initWarning = {
  company: "",
  position: "",
};

const EditApplication = () => {
  const [warning, setWarning] = useState(initWarning);
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
        console.log(error);
      });
    console.log(application);
  }, []);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setApplication((prev) => ({
      ...prev,
      [name]: value,
    }));

    setWarning((prev) => ({
      ...prev,
      [name]: value ? "" : "This field is required!",
    }));
  };

  const editApplicationHandler = (e) => {
    e.preventDefault();

    const newWarnings = {};
    let formIsValid = true;

    ["company", "position"].forEach((field) => {
      if (!application[field]) {
        newWarnings[field] = "This field is required";
        formIsValid = false;
      }
    });

    setWarning(newWarnings);

    if (formIsValid) {
      axios
        .put(`http://localhost:5555/applications/${id}`, application)
        .then(() => navigate("/"))
        .catch((error) => console.error("Updating application error:", error));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <form
        className="bg-white rounded-xl shadow-lg p-8 w-full max-w-3xl"
        onSubmit={editApplicationHandler}
      >
        <div className="grid grid-cols-1 gap-y-6">
          {Object.entries(application)
            .filter(([property]) => !["_id", "__v"].includes(property))
            .map(([property, value]) => {
              return (
                <InputField
                  key={property}
                  property={property}
                  value={value}
                  warning={warning[property]}
                  inputChangeHandler={inputChangeHandler}
                />
              );
            })}
          <div className=" inline-grid grid-cols-3 gap-4">
            <div className="col-span-1 ">
              <BackButton />
            </div>
            <div className="col-span-2 flex ">
              <button
                type="submit"
                className="w-full justify-center h-[56px] py-3 px-6 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
              >
                Update Application
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditApplication;
