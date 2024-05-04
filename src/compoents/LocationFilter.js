import React, { useCallback, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLocationFilter } from "../redux/actions";
import "./JobFilter.css";

export const LocationFilter = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const debouncedDispatch = useCallback(() => {
    dispatch(setLocationFilter(inputValue));
  }, [dispatch, inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      debouncedDispatch();
    }, 1500);

    return () => clearTimeout(timer);
  }, [inputValue, debouncedDispatch]);

  return (
    <div className="location">
      <input
        type="text"
        id="company-name"
        placeholder="Search Location"
        onChange={handleInputChange}
        style={{
          width: "100%",
          padding: "10px",
          margin: "5px 0",
          boxSizing: "border-box",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
};
