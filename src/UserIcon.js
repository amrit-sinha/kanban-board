import React from "react";

const dotStyle = {
  height: "15px",
  width: "15px",
  backgroundColor: "#00FF00",
  borderRadius: "50%",
  display: "inline-block",
};

const UserIcon = ({ user }) => {
  return (
    <div>
      {/* Display the user's name and image */}
      <p>{user.name}</p>
      <img src={user.image} alt={user.name} />
      {/* If the user is online, render a span element with the dotStyle class */}
      {user.online && <span style={dotStyle}></span>}
    </div>
  );
};

export default UserIcon;