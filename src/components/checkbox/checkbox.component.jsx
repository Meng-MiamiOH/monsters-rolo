import React from "react";
import "./checkbox.styles.css";

const Checkbox = ({ className, values, onChangeHandler }) => {
  return (
    <div className={className}>
      {values.map((value) => {
        return (
          <label htmlFor="checkbox" key={value}>
            <a>{value}</a>
            <input
              type="checkbox"
              id={value}
              name={value}
              value={value}
              onChange={onChangeHandler}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Checkbox;
