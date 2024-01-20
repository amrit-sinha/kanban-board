import "./NavBar.css";
import LogoByKey from "./logo";
import down from "./assets/down.png";

const NavBar = ({
  grouping,
  setGrouping,
  ordering,
  setOrdering,
  grpOptions,
  orderOptions,
  isOpen,
  setIsOpen,
}) => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="displayBtn" onClick={() => setIsOpen(!isOpen)}>
          <LogoByKey logoName={"settings"} />
          <div>Display</div>
          <img src={down} alt="plus icon" className="logo" />
        </div>
        {isOpen && (
          <div className="sortModal">
            <div className="filterRow">
              <div>Grouping</div>
              <select
                className="dropdown"
                onChange={(e) => setGrouping(e.target.value)}
                defaultValue={grouping}
              >
                {grpOptions.map((option, idx) => (
                  <option key={idx}>{option}</option>
                ))}
              </select>
            </div>
            <div className="filterRow">
              <div>Ordering</div>
              <select
                className="dropdown"
                onChange={(e) => setOrdering(e.target.value)}
                defaultValue={ordering}
              >
                {orderOptions.map((option, idx) => (
                  <option key={idx}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
