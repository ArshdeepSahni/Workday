import React from "react";
import "./JobModal.css";

const JobModal = ({ job, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h1>Job Description</h1>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h3>About the Company:</h3>
        <p>{job.jobDetailsFromCompany}</p>
        <div className="job-details">
          <p>
            <strong>Location:</strong> {job.location}
          </p>
          <p>
            <strong>Role:</strong> {job.jobRole}
          </p>
          <p>
            <strong>Salary Range:</strong> ₹{job.minJdSalary} -{" "}
            {job.maxJdSalary} LPA
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobModal;
