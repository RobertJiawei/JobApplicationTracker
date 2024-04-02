import React from "react";
import BackButton from "../components/BackButton";
import ResetButton from "../components/ResetButton";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import { useEffect } from "react";

const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const initWarning = {
  company: "",
  position: "",
};

const initApplication = {
  company: "",
  appliedDate: getTodayDate(),
  position: "",
  location: "",
  salary: "",
  interviewStage: "",
  nextInterviewDate: "",
  website: "",
};

const AddApplication = () => {
  const [warning, setWarning] = useState(initWarning);
  const [application, setApplication] = useState(initApplication);
  const navigate = useNavigate();

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

  const resetHandler = () => {
    setWarning(initWarning);
    setApplication(initApplication);
  };

  const addApplicationHandler = (e) => {
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
        .post("https://jobapplication.wudevelop.com/applications", application)
        .then(() => navigate("/"))
        .catch((error) => console.error("Posting application error:", error));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <form
        className="bg-white rounded-xl shadow-lg p-8 w-full max-w-3xl"
        onSubmit={addApplicationHandler}
      >
        <div className="grid grid-cols-1 gap-y-6">
          {Object.entries(application).map(([property, value]) => {
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
          <div className=" inline-grid grid-cols-2 gap-4 md:grid-cols-3">
            <div className="col-span-2 inline-grid grid-cols-2 gap-1 md:col-span-1">
              <BackButton />
              <ResetButton onReset={resetHandler} />
            </div>
            <div className="col-span-2 flex ">
              <button
                type="submit"
                className="w-full justify-center h-[56px] py-3 px-6 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
              >
                Add Application
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddApplication;
