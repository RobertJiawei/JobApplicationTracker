import React from "react";
import { useState } from "react";
import {
  BiTable,
  BiCalendar,
  BiSolidBarChartAlt2,
  BiSearch,
} from "react-icons/bi";

const items = [
  "company",
  "dateApplied",
  "position",
  "interviewStage",
  "nextInterviewDate",
];

const TableOption = ({ onInputChange, onSelect }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  return (
    <div className="flex border-b py-1 px-2 pt-8">
      <div className=" basis-5/6 flex flex-wrap flex-col md:flex-row lg:basis-7/8">
        <div className="flex flex-row items-center px-4 hover:bg-slate-100">
          <BiTable />
          <span className=" pl-0.5 text-gray-800 text-left  hover:text-black">
            Job Tracker
          </span>
        </div>
        <div className="flex flex-row items-center px-4 hover:bg-slate-100">
          <BiCalendar />
          <span className=" pl-0.5 text-gray-800 text-left  hover:text-black">
            Interview Calendar
          </span>
        </div>
        <div className="flex flex-row items-center px-4 hover:bg-slate-100">
          <BiSolidBarChartAlt2 />
          <span className=" pl-0.5 text-gray-800 text-left  hover:text-black">
            Stages
          </span>
        </div>
      </div>
      <div className=" basis-1/6 flex md:flex-row lg:basis-1/8 justify-between">
        <div className="flex flex-row items-center justify-center">
          <span
            className=" px-1 text-gray-800 text-left hover:cursor-pointer hover:text-black hover:bg-slate-100 rounded-md"
            onClick={() => setSortOpen(!sortOpen)}
          >
            Sort
          </span>
          {sortOpen && !searchOpen && (
            <div className=" absolute z-10 mt-52 rounded-md shadow-lg bg-white">
              <ul className="py-1 text-sm text-gray-700">
                {items.map((item) => {
                  return (
                    <li
                      key={item}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        onSelect(item);
                        setSortOpen(false);
                      }}
                    >
                      {item
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, function (str) {
                          return str.toUpperCase();
                        })
                        .trim()}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
        <div className="flex  justify-center items-center">
          <BiSearch
            className=" hover:bg-slate-100 hover:cursor-pointer"
            onClick={() => setSearchOpen(!searchOpen)}
          />
          {searchOpen && (
            <input
              className=" ml-2 pl-2 bg-transparent "
              type="text"
              placeholder="Type to search..."
              onChange={(e) => onInputChange(e.target.value)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TableOption;
