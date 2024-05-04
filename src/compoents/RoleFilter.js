import React from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { setRoleFilter } from "../redux/actions";

export const RoleFilter = ({ onFilterChange }) => {
  const dispatch = useDispatch();
  const options = [
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "fullstack", label: "Fullstack" },
    { value: "python", label: "Python" },
    { value: "ios", label: "iOS" },
    { value: "android", label: "Android" },
  ];

  const handleChange = (selectedOptions) => {
    const values = selectedOptions
      ? selectedOptions.map((option) => option.value)
      : [];
    dispatch(setRoleFilter(values));
    if (onFilterChange) {
      onFilterChange(values);
    }
  };

  return (
    <div className="filter">
      <Select
        id="role"
        isMulti
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleChange}
        placeholder="Select Role(s)"
      />
    </div>
  );
};
