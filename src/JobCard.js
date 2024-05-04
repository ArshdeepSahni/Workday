import React, { useState } from "react";
import "./JobCard.css";

export default function JobCard({ job }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let minSalary = job.minJdSalary;
  let maxSalary = job.maxJdSalary;

  if (minSalary == null && maxSalary != null) {
    minSalary = maxSalary - 5;
  } else if (maxSalary == null && minSalary != null) {
    maxSalary = minSalary + 5;
  } else if (minSalary == null && maxSalary == null) {
    minSalary = 15;
    maxSalary = 20;
  }

  return (
    <div className="card">
      <div className="card-content">
        <div className="badge">
          <p>⏳ Posted 6 days ago</p>
        </div>
        <div className="header">
          <div className="logo">
            <img
              src="https://source.unsplash.com/random/?company,logo"
              alt="logo"
            />
          </div>
          <div className="job-info">
            <span className="title">Company</span>
            <span className="job-title">{job.jobRole}</span>
            <span className="job-location">{job.location}</span>
          </div>
        </div>
        <p className="salary">
          Estimated Salary: ₹{minSalary} - {maxSalary} LPA ✅
        </p>
        <h3>About Company</h3>
        <div className="about-company">
          <h4>About us:</h4>
          <p>{job.jobDetailsFromCompany}</p>
          {!expanded && <div className="gradient"></div>}
          <button onClick={handleExpandClick} className="view-job">
            {!expanded ? "View Job" : "Hide job"}
          </button>
        </div>
        <div className="info-container">
          <div className="title">Minimum Experience</div>
          <div className="value">{job.minExp ? job.minExp : 2} year</div>
        </div>
        <div>
          <button className="easy-apply">⚡ Easy Apply</button>
          <button className="ask-referral">
            <div className="referral-avatar-section">
              <div className="referral-avatar">
                <img
                  src="https://source.unsplash.com/random/?face,man"
                  alt="avatar"
                />
                <div className="green-ping-dot"></div>
              </div>
              <div className="referral-avatar">
                <img
                  src="https://source.unsplash.com/random/?face,woman"
                  alt="avatar"
                />
                <div className="green-ping-dot"></div>
              </div>
            </div>
            <p>Unlock referral asks</p>
          </button>
        </div>
      </div>
    </div>
  );
}
