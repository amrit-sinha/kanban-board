import usr1 from "./usr-1.png";
import usr2 from "./usr-2.png";
import usr3 from "./usr-3.png";
import usr4 from "./usr-4.png";
import usr5 from "./usr-5.png";
import pr0 from "./pr-0.png";
import pr1 from "./pr-1.png";
import pr2 from "./pr-2.png";
import pr3 from "./pr-3.png";
import pr4 from "./pr-4.png";
import status1 from "./inProgress.png";
import status2 from "./todo.png";
import status3 from "./backlog.png";
import status4 from "./done.png";
import status5 from "./canceled.png";
import settings from "./settings.png";

const getLogoByKey = (key) => {
  switch (key) {
    case "usr-1":
      return usr1;
    case "usr-2":
      return usr2;
    case "usr-3":
      return usr3;
    case "usr-4":
      return usr4;
    case "usr-5":
      return usr5;
    case 0:
      return pr0;
    case 1:
      return pr1;
    case 2:
      return pr2;
    case 3:
      return pr3;
    case 4:
      return pr4;
    case "In progress":
      return status1;
    case "Todo":
      return status2;
    case "Backlog":
      return status3;
    case "Done":
      return status4;
    case "Canceled":
      return status5;
    case "settings":
      return settings;
    default:
      return null;
  }
};

export default getLogoByKey;
