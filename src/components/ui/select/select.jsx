import React from "react";
import { useState } from "react";
import "./style.css";
const OptionContext = React.createContext();
const Select = props => {
  const cb = value => {
    setValue(value);
    props.handler(value);
  };
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);
  return (
    <div className="select {visible ? 'select--show' : ''}">
      <button onClick={() => setVisible(!visible)} className="select__toggle">
        {value ? value.title : "Выберите из списка"}
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
