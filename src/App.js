import React, { useState, useEffect } from "react";
import "./App.css";

import NavBar from "./NavBar";
import TicketColumn from "./TicketColumn";
import data from "./data.json";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const grpOptions = ["status", "user", "priority"];
  const [grouping, setGrouping] = useState(grpOptions[0]);
  const orderOptions = ["priority", "title"];
  const [ordering, setOrdering] = useState(orderOptions[0]);

  const [ticketsData, setTicketData] = useState([]);
  const [userData, setUserData] = useState([]);
  const statusTypes = ["Backlog", "Todo", "In progress", "Done", "Canceled"];

  const [dataToShow, setDataToShow] = useState({});
  const [groupingData, setGroupingData] = useState({});

  const [checkedStorage, setCheckedStorage] = useState(false);

  const groupBy = (data, grp, order) => {
    const output = {};
    data.forEach((item) => {
      const group = item[grp];
      if (Object.keys(output).includes(group.toString())) {
        output[group].push(item);
      } else {
        output[group] = [item];
      }
    });
    const result = sortData(output, order);
    setDataToShow(result);
  };

  const sortData = (obj, order) => {
    const output = obj;
    Object.keys(output).forEach((key) => {
      if (order === "title") {
        output[key].sort((a, b) => (a.title < b.title ? -1 : 1));
      } else {
        output[key].sort((a, b) => (a.priority > b.priority ? -1 : 1));
      }
    });
    return obj;
  };

  useEffect(() => {
    setTicketData(data.tickets);
    setUserData(data.users);
    if (!checkedStorage) {
      const grp = localStorage.getItem("grouping");
      const ord = localStorage.getItem("ordering");
      if (grpOptions.includes(grp)) {
        setGrouping(grp);
      }
      if (orderOptions.includes(ord)) {
        setOrdering(ord);
      }
      setCheckedStorage(true);
    }
  }, []);

  useEffect(() => {
    if (checkedStorage) {
      localStorage.setItem("grouping", grouping);
      localStorage.setItem("ordering", ordering);
    }
  }, [grouping, ordering]);

  useEffect(() => {
    if (grouping === "status") {
      groupBy(ticketsData, "status", ordering);
    } else if (grouping === "user") {
      groupBy(ticketsData, "userId", ordering);
    } else {
      groupBy(ticketsData, "priority", "title");
    }
    setGroupingData(grouping);
    console.log(dataToShow);
  }, [ticketsData, grouping, ordering]);

  const getUserDetails = (userId) => {
    const user = userData.find((user) => user.id === userId);

    if (user) {
      return {
        name: user.name,
        available: user.available,
      };
    } else {
      return null; // User not found
    }
  };

  return (
    <div className="App">
      <NavBar
        grouping={grouping}
        grpOptions={grpOptions}
        orderOptions={orderOptions}
        ordering={ordering}
        setGrouping={setGrouping}
        setOrdering={setOrdering}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div onClick={() => setIsOpen(false)} className="TicketContainer">
        {Object.keys(dataToShow).map((key, idx) => {
          const userDetails = getUserDetails(key);
          let heading = key;
          if (userDetails) {
            heading = userDetails.name;
          }
          return (
            <TicketColumn
              data={dataToShow[key]}
              groupingData={groupingData}
              heading={heading}
              logo={key}
              key={idx}
              userData={userData}
              isOnline={userDetails?.available}
            />
          );
        })}
        {groupingData === "status" &&
          statusTypes.map((key, idx) => {
            if (!Object.keys(dataToShow).includes(key)) {
              return (
                <TicketColumn
                  data={[]}
                  groupingData={groupingData}
                  heading={key}
                  logo={key}
                  key={idx}
                  userData={userData}
                />
              );
            } else {
              return null;
            }
          })}
      </div>
    </div>
  );
}

export default App;
