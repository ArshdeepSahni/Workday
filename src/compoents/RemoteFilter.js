import React from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { setRemoteFilter } from "../redux/actions";

export const RemoteFilter = () => {
  const dispatch = useDispatch();

  const options = [
    { value: "remote", label: "Remote" },
    { value: "inoffice", label: "In office" },
  ];

  const handleChange = (selectedOption) => {
    dispatch(setRemoteFilter(selectedOption ? selectedOption.value : ""));
  };

  return (
    <div className="filter">
      <Select
        id="experience"
        options={options}
        onChange={handleChange}
        placeholder="Remote"
        className="basic-single"
        classNamePrefix="select"
        isClearable
        isSearchable
      />
    </div>
  );
};
