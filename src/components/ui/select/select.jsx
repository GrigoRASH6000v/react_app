import React from "react";
import { useState } from "react";
import "./style.css";
const OptionContext = React.createContext();
const Select = props => {
  const cb = value => {
    props.handler(value);
    setVisible(false);
  };
  const [visible, setVisible] = useState(false);
  return (
    <div className={`select ${visible ? "select--show" : ""}`}>
      <button onClick={() => setVisible(!visible)} className="select__toggle">
        {props.value
          ? props.value.title
          : props.placeholder
          ? props.placeholder
          : "Выберите из списка"}
      </button>

      {visible ? (
        <div id="dropdown" className="select__dropdown">
          <ul className="select__list">
            <OptionContext.Provider value={cb}>
              {props.children}
            </OptionContext.Provider>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export { Select, OptionContext };
