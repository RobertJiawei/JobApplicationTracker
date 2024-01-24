import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";

const ShowApplication = () => {
  const [application, setApplication] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5555/applications/${id}`)
      .then((res) => {
        setApplication(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 grid grid-cols-3 gap-2 px-6 ">
      <div className=" col-span-1 bg-white rounded-xl shadow-lg p-6 m-4 flex flex-col justify-between">
        <h2 className="text-3xl font-bold mb-4">{application.company}</h2>
        {Object.entries(application)
          .filter(([property]) => !["_id", "company", "__v"].includes(property))
          .map(([property, value]) => {
            return (
              <div key={property} className="grid grid-cols-3 gap-2 max-w-xl">
                <div className="col-span-1 items-start font-semibold capitalize">
                  {property.replace(/([a-z])([A-Z])/g, "$1 $2")}
                </div>
                <div className="col-span-2 break-words">{value}</div>
              </div>
            );
          })}
        <div className="mt-4">
          <BackButton />
        </div>
      </div>
      <iframe
        className=" col-span-2 bg-white rounded-xl shadow-lg p-6 m-4 w-full h-full "
        src={application["website"]}
      ></iframe>
    </div>
  );
};

export default ShowApplication;
