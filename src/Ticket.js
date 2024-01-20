import React from "react";
import "./Ticket.css";
import LogoByKey from "./logo";

const Ticket = ({ data, groupingData, isOnline }) => {
  return (
    <div className="ticketBox">
      <div className="line1">
        <div className="IdContainer">{data.id}</div>
        {groupingData !== "user" && (
          <LogoByKey logoName={data.userId} isOnline={isOnline} />
        )}
      </div>
      <div className="line2">
        {groupingData !== "status" && (
          <div>
            {data.status ? (
              <LogoByKey logoName={data.status} />
            ) : (
              <div>{data.status}</div>
            )}
          </div>
        )}
        <div className="titleContainer">{data.title}</div>
      </div>
      <div className="line3">
        {groupingData !== "priority" && (
          <div className="pr">
            <LogoByKey logoName={data.priority.toString()} />
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
