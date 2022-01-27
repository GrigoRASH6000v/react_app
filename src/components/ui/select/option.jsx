import React from "react";
import { OptionContext } from "./select";

export const Option = props => {
  return (
    <OptionContext.Consumer>
      {cb => <li onClick={() => cb(props)}>{props.title}</li>}
    </OptionContext.Consumer>
  );
};
