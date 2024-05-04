import React, { useCallback, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCompanyNameFilter } from "../redux/actions";
import "./JobFilter.css";

export const CompanyNameFilter = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const debouncedDispatch = useCallback(() => {
    dispatch(setCompanyNameFilter(inputValue));
  }, [dispatch, inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      debouncedDispatch();
    }, 1500);

    return () => clearTimeout(timer);
  }, [inputValue, debouncedDispatch]);

  return (
    <div className="company">
      <input
        type="text"
        id="company-name"
        placeholder="Search Company Name"
        onChange={handleInputChange}
        style={{
          width: "100%",
          padding: "10px",
          margin: "0px 0",
          boxSizing: "border-box",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
};
