import React from "react";
import { OptionContext } from "./select";
import "./style.css";
export const Option = props => {
  return (
    <OptionContext.Consumer>
      {cb => (
        <li className="option-list__item" onClick={() => cb(props)}>
          {props.title}
        </li>
      )}
    </OptionContext.Consumer>
  );
};
