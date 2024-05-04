import React from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { setExperienceFilter } from "../redux/actions";

export const ExperienceFilter = () => {
  const dispatch = useDispatch();

  const options = [
    { value: "1", label: "1 year" },
    { value: "2", label: "2 years" },
    { value: "3", label: "3 years" },
    { value: "4", label: "4 years" },
    { value: "5", label: "5 years" },
    { value: "6", label: "6 years" },
    { value: "7", label: "7 years" },
    { value: "8", label: "8 years" },
    { value: "9", label: "9 years" },
    { value: "10", label: "10 years" },
  ];

  const handleChange = (selectedOption) => {
    dispatch(setExperienceFilter(selectedOption ? selectedOption.value : ""));
  };

  return (
    <div className="filter">
      <Select
        id="experience"
        options={options}
        onChange={handleChange}
        placeholder="Select Experience"
        className="basic-single"
        classNamePrefix="select"
        isClearable
        isSearchable
      />
    </div>
  );
};
