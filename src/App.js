import React from "react";
import JobListings from "./JobDisplay";
import JobFilters from "./compoents/JobFilters";

const App = () => {
  return (
    <div className="page">
      <JobFilters />
      <div style={{ marginTop: "20px" }}>
        <JobListings />
      </div>
    </div>
  );
};

export default App;
