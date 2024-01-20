import React from "react";
import "./Ticket.css";
import getLogoByKey from "./assets/logo";

const Ticket = ({ data, groupingData }) => {
  const userLogo = getLogoByKey(data.userId);
  const statusLogo = getLogoByKey(data.status);
  const priorityLogo = getLogoByKey(data.priority);
  return (
    <div className="ticketBox">
      <div className="line1">
        <div className="IdContainer">{data.id}</div>
        {groupingData !== "user" && (
          <div className="logoContainer">
            <img
              src={userLogo}
              alt={`logo for ${data.userId}`}
              className="logo"
            />
            {false ? (
              <div className="statusDot online"></div>
            ) : (
              <div className="statusDot offline"></div>
            )}
          </div>
        )}
      </div>
      <div className="line2">
        {groupingData !== "status" && (
          <div>
            {data.status ? (
              <img
                src={statusLogo}
                alt={`logo for ${data.status}`}
                className="logo"
              />
            ) : (
              <div>{data.status}</div>
            )}
          </div>
        )}
        <div className="titleContainer">{data.title}</div>
      </div>
      <div className="line3">
        {groupingData !== "priority" && (
          <div>
            <img
              src={priorityLogo}
              alt={`logo for priority ${data.priority}`}
              className="logo"
            ></img>
          </div>
        )}
        {data.tag.map((tag) => {
          return <div className="boxContainer">{tag}</div>;
        })}
      </div>
    </div>
  );
};

export default Ticket;
