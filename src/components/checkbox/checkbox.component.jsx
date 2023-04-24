import React from "react";

const Checkbox = ({ className, values, onChangeHandler }) => {
  return (
    <div className={className}>
      {values.map((value) => {
        return (
          <label htmlFor="checkbox" key={value}>
            {value}
            <input type="checkbox" id={value} name={value} value={value} onChange={onChangeHandler} />
          </label>
        );
      })}
    </div>
  );
};

export default Checkbox;
