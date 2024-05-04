import React from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { setMinimumBasePayFilter } from "../redux/actions";

export const MinimumBasePayFilter = () => {
  const dispatch = useDispatch();

  const options = [
    { value: "0", label: "0L" },
    { value: "10", label: "10L" },
    { value: "20", label: "20L" },
    { value: "30", label: "30L" },
    { value: "40", label: "40L" },
    { value: "50", label: "50L" },
    { value: "60", label: "60L" },
    { value: "70", label: "70L" },
  ];

  const handleChange = (selectedOption) => {
    dispatch(
      setMinimumBasePayFilter(selectedOption ? selectedOption.value : "")
    );
  };

  return (
    <div className="filter">
      <Select
        id="minimum-base-pay"
        options={options}
        onChange={handleChange}
        placeholder="Select Base Pay"
        className="basic-single"
        classNamePrefix="select"
        isClearable
        isSearchable
      />
    </div>
  );
};
