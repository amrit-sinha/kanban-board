import React from "react";
import "./TicketColumn.css";
import Ticket from "./Ticket";
import LogoByKey from "./logo";
import plus from "./assets/plus.png";
import dots from "./assets/dots.png";

const TicketColumn = ({
  data,
  heading,
  groupingData,
  userData,
  logo,
  isOnline,
}) => {
  const priorityList = {
    0: "No Priority",
    1: "Low",
    2: "Medium",
    3: "High",
    4: "Urgent",
  };
  return (
    <div className="ticketCol">
      <div className="heading">
        <div className="headingInner">
          <div>
            {groupingData !== "priority" ? (
              <div className="line">
                <LogoByKey logoName={logo} isOnline={isOnline} />
                <div>{heading}</div>
              </div>
            ) : (
              <>
                <LogoByKey logoName={heading} />
                {priorityList[heading]}
              </>
            )}
          </div>
          <div>{data.length}</div>
        </div>
        <div className="headingInner">
          <img src={plus} alt="plus icon" className="logo" />
          <img src={dots} alt="dot icon" className="logo" />
        </div>
      </div>
      {data !== undefined &&
        data !== null &&
        data.map((item) => {
          const user = userData.find((usr) => usr.id === item.userId);
          return (
            <Ticket
              data={item}
              groupingData={groupingData}
              isOnline={user.available}
            />
          );
        })}
    </div>
  );
};

export default TicketColumn;
