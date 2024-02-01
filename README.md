# Dashboard App - Full Stack App

## Overview

This repository contains the code for a dashboard app with a frontend built using React and a backend server built with Node.js and Express. The app visualizes the relationship between profit percentage and time using an interactive graph.

### Frontend (React):

#### Setup Instructions:

```bash
# Clone the repository
git clone https://github.com/mohdwarish483/FullstackDashboardApp

# Navigate to the frontend folder
cd dashboard

# Install dependencies
npm install

# Run the server
npm start


Visit http://localhost:3000 in your browser.

Deployed Frontend:
The frontend is deployed on netlify.
 Access it here ->  https://dashboarduibywarish.netlify.app/


## Backend (Node.js/Express):

# Navigate to the backend folder
cd dashboard-backend

# Install dependencies
npm install

# Run the server
node index.js


The server will run on http://localhost:5000.

#Deployed Backend:
The backend is deployed on render.
Access it here ->  https://dashboard-backend-2-jl4f.onrender.com/

### How it Works:

## Frontend:
The frontend is built using React.
The main graph component, "GrowthCard," fetches data from the backend using an Axios GET request.
The fetched data, representing the relationship between profit percentage and time, is visualized on an AreaChart using Recharts.
Downsampling is applied on the backend to reduce the dataset size for better performance.

## Backend:
The backend is built using Node.js and Express.
The server exposes an API endpoint (/api/graph-data) that retrieves data from a CSV file (dataset.csv).
A downsampling algorithm is implemented to reduce the dataset size while preserving essential trends and patterns.
CORS headers are configured to allow requests from the frontend.
Notes:
The frontend and backend are deployed separately for scalability and ease of maintenance.
The downsampling algorithm helps in optimizing the graph's performance, especially with large datasets.
if you have any feedback and query please reach out to me 

### author -> Mohd Warish
khanwarish483@gmail.com

