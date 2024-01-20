import React, { useState, useEffect } from "react";
import "./App.css";

import NavBar from "./NavBar";
import TicketColumn from "./TicketColumn";
import getLogoByKey from "./assets/logo";

function App() {
  const grpOptions = ["status", "user", "priority"];
  const [grouping, setGrouping] = useState(grpOptions[0]);
  const orderOptions = ["priority", "title"];
  const [ordering, setOrdering] = useState(orderOptions[0]);

  const [ticketsData, setTicketData] = useState([]);
  const [userData, setUserData] = useState([]);

  const [dataToShow, setDataToShow] = useState({});
  const [groupingData, setGroupingData] = useState({});

  const [checkedStorage, setCheckedStorage] = useState(false);

  const fetchData = async () => {
    await fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setTicketData(data.tickets);
        groupByPriority(data.tickets);
        setUserData(data.users);
      });
  };

  const groupByPriority = (data) => {
    const output = {};
    data.forEach((item) => {
      const priority = item.priority;
      if (Object.keys(output).includes(priority.toString())) {
        output[priority].push(item);
      } else {
        output[priority] = [item];
      }
    });
    Object.keys(output).forEach((key) => {
      output[key].sort((a, b) => (a.title < b.title ? -1 : 1));
    });
    setDataToShow(output);
  };

  const groupByStatus = (data) => {
    const output = {};
    data.forEach((item) => {
      const status = item.status;
      if (Object.keys(output).includes(status.toString())) {
        output[status].push(item);
      } else {
        output[status] = [item];
      }
    });
    Object.keys(output).forEach((key) => {
      if (ordering === "title") {
        output[key].sort((a, b) => (a.title < b.title ? -1 : 1));
      } else {
        output[key].sort((a, b) => (a.priority > b.priority ? -1 : 1));
      }
    });
    setDataToShow(output);
  };

  const groupByUser = (data) => {
    const output = {};
    data.forEach((item) => {
      const userId = item.userId;
      if (Object.keys(output).includes(userId.toString())) {
        output[userId].push(item);
      } else {
        output[userId] = [item];
      }
    });
    Object.keys(output).forEach((key) => {
      if (ordering === "title") {
        output[key].sort((a, b) => (a.title < b.title ? -1 : 1));
      } else {
        output[key].sort((a, b) => (a.priority > b.priority ? -1 : 1));
      }
    });
    setDataToShow(output);
  };

  useEffect(() => {
    fetchData();
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
      groupByStatus(ticketsData);
    } else if (grouping === "user") {
      groupByUser(ticketsData);
    } else {
      groupByPriority(ticketsData);
    }
    setGroupingData(grouping);
    console.log(dataToShow);
  }, [ticketsData, grouping, ordering]);

  return (
    <div className="App">
      <NavBar
        grouping={grouping}
        grpOptions={grpOptions}
        orderOptions={orderOptions}
        ordering={ordering}
        setGrouping={setGrouping}
        setOrdering={setOrdering}
      />
      <div className="TicketContainer">
        {Object.keys(dataToShow).map((key) => {
          const logo = getLogoByKey(key);
          return (
            <TicketColumn
              data={dataToShow[key]}
              groupingData={groupingData}
              heading={key}
              logo={logo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
