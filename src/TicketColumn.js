import React from "react";
import "./TicketColumn.css";
import Ticket from "./Ticket";

const TicketColumn = ({ data, heading, groupingData, logo }) => {
  const priorityList = ["No Priority", "Low", "Medium", "High", "Urgent"];
  return (
    <div className="ticketCol">
      <div className="heading">
        <div className="headingInner">
          <div>
            {groupingData !== "priority" ? (
              <>
                <img src={logo} alt="logo" className="logo" />
                {heading}
              </>
            ) : (
              <>
                <img src={logo} alt="logo" className="logo" />
                {priorityList[heading]}
              </>
            )}
          </div>
          <div>{data.length}</div>
        </div>
      </div>
      {data !== undefined &&
        data !== null &&
        data.map((item) => {
          return <Ticket data={item} groupingData={groupingData} />;
        })}
    </div>
  );
};

export default TicketColumn;
