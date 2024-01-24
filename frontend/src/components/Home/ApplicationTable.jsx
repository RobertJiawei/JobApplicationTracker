import { Link } from "react-router-dom";
import InfoButton from "../InfoButton";
import DeleteButton from "../DeleteButton";
import EditButton from "../EditButton";

const Applicationtd = ({ applications }) => {
  if (applications) {
    return (
      <div className=" relative flex-wrap overflow-auto w-full px-4">
        <table className=" w-full">
          <thead>
            <tr>
              <th className="th">Company</th>
              <th className="th">Date Applied</th>
              <th className="th">Position/Role</th>
              <th className="th">Location</th>
              <th className="th">Salary</th>
              <th className="th">Interview Stage</th>
              <th className="th">Next Interview Date</th>
              <th className="th">Website</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => {
              return (
                <tr
                  key={index}
                  className={
                    application.interviewStage.toLowerCase() === "rejected" &&
                    "bg-red-600"
                  }
                >
                  <td className="tdFirst grid grid-cols-3 gap-4">
                    <div className="col-span-2 inline-flex items-center justify-between">
                      {application.company}
                    </div>
                    <div className=" col-span-1 inline-flex items-center justify-between">
                      <InfoButton id={application._id} />
                      <EditButton id={application._id} />
                      <DeleteButton id={application._id} />
                    </div>
                  </td>
                  <td className="td">{application.appliedDate}</td>
                  <td className="td">
                    <span className=" border rounded-xl p-2 bg-green-100">
                      {application.position}
                    </span>
                  </td>
                  <td className="td">{application.location}</td>
                  <td className="td">{application.salary}</td>
                  <td className="td">
                    <span className="border rounded-3xl p-2 bg-orange-300">
                      {application.interviewStage}
                    </span>
                  </td>
                  <td className="td">{application.nextInterviewDate}</td>
                  <td className="tdLast">{application.website}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  } else {
    return <div>no application</div>;
  }
};

export default Applicationtd;
