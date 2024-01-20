import usr1 from "./assets/usr-1.png";
import usr2 from "./assets/usr-2.png";
import usr3 from "./assets/usr-3.png";
import usr4 from "./assets/usr-4.png";
import usr5 from "./assets/usr-5.png";
import pr0 from "./assets/pr-0.png";
import pr1 from "./assets/pr-1.png";
import pr2 from "./assets/pr-2.png";
import pr3 from "./assets/pr-3.png";
import pr4 from "./assets/pr-4.png";
import status1 from "./assets/inProgress.png";
import status2 from "./assets/todo.png";
import status3 from "./assets/backlog.png";
import status4 from "./assets/done.png";
import status5 from "./assets/canceled.png";
import settings from "./assets/settings.png";

import "./logo.css";

const LogoByKey = ({ logoName, isOnline }) => {
  if (logoName.includes("usr")) {
    const userLogos = {
      "usr-1": usr1,
      "usr-2": usr2,
      "usr-3": usr3,
      "usr-4": usr4,
      "usr-5": usr5,
    };
    const userLogo = userLogos[logoName];

    return (
      <div style={{ position: "relative" }}>
        <img className="user" src={userLogo} alt={`Logo for ${logoName}`} />
        <div className={isOnline ? "online" : "offline"}></div>
      </div>
    );
  } else {
    switch (logoName) {
      case "0":
        return <img className="logo" src={pr0} alt={`Logo for ${logoName}`} />;
      case "1":
        return <img className="logo" src={pr1} alt={`Logo for ${logoName}`} />;
      case "2":
        return <img className="logo" src={pr2} alt={`Logo for ${logoName}`} />;
      case "3":
        return <img className="logo" src={pr3} alt={`Logo for ${logoName}`} />;
      case "4":
        return <img className="logo" src={pr4} alt={`Logo for ${logoName}`} />;
      case "In progress":
        return (
          <img className="logo" src={status1} alt={`Logo for ${logoName}`} />
        );
      case "Todo":
        return (
          <img className="logo" src={status2} alt={`Logo for ${logoName}`} />
        );
      case "Backlog":
        return (
          <img className="logo" src={status3} alt={`Logo for ${logoName}`} />
        );
      case "Done":
        return (
          <img className="logo" src={status4} alt={`Logo for ${logoName}`} />
        );
      case "Canceled":
        return (
          <img className="logo" src={status5} alt={`Logo for ${logoName}`} />
        );
      case "settings":
        return (
          <img className="logo" src={settings} alt={`Logo for ${logoName}`} />
        );
      default:
        return null;
    }
  }
};

export default LogoByKey;
