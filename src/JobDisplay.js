import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';
import { Grid } from '@mui/material';

const JobListings = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "limit": 100,
      "offset": 0
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    };

    fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
      .then(response => response.json()) 
      .then(data => {
        console.log("heyy", data.jdList);
        setJobs(data.jdList);
      })
      .catch(error => {
        console.error('Error fetching jobs:', error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Grid container spacing={2}>
    {jobs.map((job, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <JobCard job={job} />
      </Grid>
    ))}
  </Grid>
  );
};

export default JobListings;
