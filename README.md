# Candidate Application Platform

## Overview
This project is a candidate application platform that allows users to view job listings, filter jobs based on various criteria, and implement infinite scroll for a seamless browsing experience.

|Job Listings|Job Details Modal|
|---|---|
|<img width="833" alt="Screenshot 2024-05-05 at 1 27 54 AM" src="https://github.com/ArshdeepSahni/Workday/assets/56549294/22770c66-0e9d-48e7-b010-bef629eb63f6">|<img width="832" alt="Screenshot 2024-05-05 at 1 28 10 AM" src="https://github.com/ArshdeepSahni/Workday/assets/56549294/5d452f11-530d-47eb-a5d3-87a9fdc54eb4">|

## Technology Stack
- ReactJs
- Redux
- CSS
- Material UI

## Features
- View job listings with job title, company name, location, description, experience required, and apply button/link.
- Filter jobs based on minimum experience, company name, location, remote/on-site, tech stack, role, and minimum base pay.
- Implement infinite scroll for loading additional job listings automatically.
- Responsive design for different screen sizes.

## Usage
1. Clone the repository.
2. Install dependencies: `npm install`.
3. create `.env` file
4. Start the development server: `npm start`.
5. Access the application in your browser.

## API
- Use the provided API by creating `.env` file in the root of the project to fetch job listings and total count of jobs.
```env
REACT_APP_API_URL=https://api.weekday.technology/adhoc/getSampleJdJSON
```
