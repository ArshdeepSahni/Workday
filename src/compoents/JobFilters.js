import React from "react";
import "./JobFilter.css";
import { RoleFilter } from "./RoleFilter";
import { ExperienceFilter } from "./ExperienceFilter";
import { MinimumBasePayFilter } from "./MinimumBasePayFilter";
import { CompanyNameFilter } from "./CompanyFilter";

const JobFilters = () => {
  return (
    <form className="job-filters" onSubmit={(e) => e.preventDefault()}>
      <RoleFilter />
      <ExperienceFilter />
      <MinimumBasePayFilter />
      <CompanyNameFilter />
    </form>
  );
};

export default JobFilters;
