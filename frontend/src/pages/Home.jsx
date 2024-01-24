import { useState, useEffect } from "react";
import axios from "axios";
import ApplicationTable from "../components/Home/ApplicationTable";
import TableOption from "../components/Home/TableOption";
import AddButton from "../components/AddButton";

const Home = () => {
  const [applications, setApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [select, setSelect] = useState();

  const inputChangeHandler = (value) => {
    setSearchTerm(value);
  };

  const selectChangeHandler = (value) => {
    setSelect(value);
    console.log("selectChangeHandler");
  };

  useEffect(() => {
    if (searchTerm) {
      axios
        .get(`http://localhost:5555/applications/search?term=${searchTerm}`)
        .then((res) => {
          setApplications(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (select) {
      axios
        .get(`http://localhost:5555/applications/sort?sortBy=${select}`)
        .then((res) => {
          setApplications(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get("http://localhost:5555/applications")
        .then((res) => {
          setApplications(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [searchTerm, select]);

  return (
    <>
      <AddButton />
      <TableOption
        onInputChange={inputChangeHandler}
        onSelect={selectChangeHandler}
      />
      <ApplicationTable applications={applications} />
    </>
  );
};

export default Home;
