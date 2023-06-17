import React from "react";
import { useState } from "react";

const InputForm = (props) => {
  const initialData = {
    "current-savings": 0,
    "yearly-contribution": 0,
    duration: 0,
    "expected-return": 0,
  };
  const [inputData, setInputData] = useState(initialData);

  const changeHandler = (target, value) => {
    setInputData((prev) => {
      return { ...prev, [target]: value };
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();

    props.submitHandler(inputData);
  };

  const resetHandler = () => {
    setInputData(initialData);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={(e) => {
              changeHandler("current-savings", e.target.value);
            }}
            value={inputData["current-savings"]}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={(e) => {
              changeHandler("yearly-contribution", e.target.value);
            }}
            value={inputData["yearly-contribution"]}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={(e) => {
              changeHandler("expected-return", e.target.value);
            }}
            value={inputData["expected-return"]}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={(e) => {
              changeHandler("duration", e.target.value);
            }}
            value={inputData["duration"]}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InputForm;
