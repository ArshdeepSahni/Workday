import React, { useEffect, useState, useRef } from "react";
import JobCard from "./JobCard";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";

const JobListings = () => {
  const [jobs, setJobs] = useState([]);
  const [allJobs, setAllJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const observer = useRef(null);
  const lastElementRef = useRef();

  const filters = useSelector((state) => ({
    roleFilter: state.roleFilter,
    experienceFilter: state.experienceFilter,
    companyNameFilter: state.companyNameFilter,
    minimumBasePayFilter: state.minimumBasePayFilter,
  }));

  useEffect(() => {
    setLoading(true);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({ limit: 50, offset: offset });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        const newData = data.jdList.map((job) => ({
          ...job,
          minExp: job.minExp ? parseInt(job.minExp, 10) : 2,
        }));
        setAllJobs((prev) => [...prev, ...newData]);
        setJobs((prev) => [...prev, ...newData]);
        setHasMore(data.jdList.length === 100);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      });
  }, [offset, filters]);

  useEffect(() => {
    const filteredJobs = allJobs.filter((job) => {
      const roleMatches =
        filters.roleFilter.length > 0
          ? filters.roleFilter.includes(job.jobRole)
          : true;
      const experienceMatches = filters.experienceFilter
        ? job.minExp >= parseInt(filters.experienceFilter, 10)
        : true;
      const companyMatches = filters.companyNameFilter
        ? job.companyName
            .toLowerCase()
            .includes(filters.companyNameFilter.toLowerCase())
        : true;
      const basePayMatches = filters.minimumBasePayFilter
        ? job.minJdSalary >= parseInt(filters.minimumBasePayFilter, 10)
        : true;
      return (
        roleMatches && experienceMatches && companyMatches && basePayMatches
      );
    });
    setJobs(filteredJobs);
  }, [filters, allJobs]);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          setOffset((prev) => prev + 100);
        }
      },
      { threshold: 0.1 }
    );

    if (lastElementRef.current) {
      observer.current.observe(lastElementRef.current);
    }

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [loading, hasMore, lastElementRef]);

  return (
    <Grid container spacing={2}>
      {jobs.map((job, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          key={index}
          ref={index === jobs.length - 1 ? lastElementRef : null}
        >
          <JobCard job={job} />
        </Grid>
      ))}
      {loading && (
        <Grid item xs={12} style={{ textAlign: "center" }}>
          Loading more jobs...
        </Grid>
      )}
    </Grid>
  );
};

export default JobListings;
