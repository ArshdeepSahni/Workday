import React from "react";
import JobListings from "./JobDisplay";
import JobFilters from "./compoents/JobFilters";

const App = () => {
  return (
    <div className="page">
      <JobFilters />
      <div
        style={{ marginLeft: "20px", paddingLeft: "20px", marginTop: "20px" }}
      >
        <JobListings />
      </div>
    </div>
  );
};

export default App;
