# TrafficVision AI

Smart Traffic Prediction and Congestion Management System

## Project Overview

TrafficVision AI is developed as part of the Infosys Internship Program. The project aims to monitor traffic conditions, predict congestion, and provide a user-friendly dashboard for traffic management using React, FastAPI, and AI technologies.

## Technologies Used
Frontend
- React.js
- Vite
- CSS
- React Router DOM

Backend
- Python
- FastAPI
- Swagger UI

Database
- PostgreSQL (In Progress)

Version Control
- Git
- GitHub

## Project Structure

TrafficVision-AI
- frontend
- backend
- database
- docker
- docs
- ml_model

## Week 1 and Week 2 Implementation

Completed project initialization.

Understood the project objectives and smart traffic workflow.

Set up the React frontend using Vite.

Designed and implemented the Login page.

Implemented Login validation.

Developed the Dashboard UI.

Implemented Logout functionality.

Configured React Router for navigation.

Initialized the FastAPI backend.

Created the Authentication REST API.

Tested APIs successfully using Swagger UI.

Organized the backend into routers, models, services, and database folders.

Accepted the GitHub collaboration invitation.

Created a personal branch (Veni-1303).

Uploaded the implementation to the mentor repository.

## Current Progress

Completed
- Project Initialization
- Frontend Setup
- Backend Setup
- User Authentication
- Dashboard UI
- API Testing
- GitHub Branch Setup

In Progress
- Traffic Monitoring API
- PostgreSQL Integration
- Dashboard API Integration
- Congestion Tracking Workflow
- Dataset Integration

Overall Progress: 50%

## Challenges Faced

Initially faced React routing issues that caused a blank page.

Resolved React component import and routing configuration issues.

Faced GitHub remote and branch configuration issues.

Learned the correct GitHub branching workflow and pushed code to the personal branch.

Encountered an issue while starting the FastAPI server because the uvicorn command was not available in PATH.

Resolved it by running:

python -m uvicorn app:app --reload

Faced dependency compatibility issues while working with another Python project due to Python version differences and understood the importance of using compatible package versions.

## Learning

React Components

React Router

FastAPI

REST API Development

Swagger API Testing

Git and GitHub Workflow

Branch Management

Backend Project Structure

Authentication API Development

Project Documentation

## Learning Resources

React Official Documentation
https://react.dev

FastAPI Official Documentation
https://fastapi.tiangolo.com

Git Documentation
https://git-scm.com/doc

GitHub Documentation
https://docs.github.com

Swagger Documentation
https://swagger.io

## Next Implementation

Implement Role-Based Authentication.

Develop Traffic Monitoring APIs.

Integrate PostgreSQL Database.

Connect React Frontend with FastAPI Backend.

Implement Congestion Tracking Workflow.

Research and integrate the Traffic Dataset.

Prepare the AI prediction module.

## Project Status

The frontend and backend environments are successfully configured.

The authentication module is working correctly and has been tested using Swagger UI.

The project is ready for the next phase, which includes backend integration, traffic monitoring, and database implementation.

Developed as part of the Infosys Internship Program.


# Week 3 Progress Update

## Module: Traffic Dataset Integration

### Work Completed

- Selected the Smart Mobility Traffic Dataset after comparing multiple traffic-related datasets.
- Performed Exploratory Data Analysis (EDA) on the dataset.
- Understood all dataset columns including Timestamp, Latitude, Longitude, Vehicle Count, Traffic Speed, Road Occupancy, Weather Condition, Traffic Light State, Parking Availability, and Traffic Condition.
- Added the dataset to the project folder.
- Integrated the dataset with the FastAPI backend using Pandas.
- Created the Traffic data model.
- Implemented the Traffic Service to read the dataset and calculate dashboard statistics.
- Developed Traffic APIs:
  - GET /traffic
  - GET /traffic/statistics
- Successfully tested the APIs using Swagger UI.
- Connected the React frontend with the FastAPI backend.
- Replaced static dashboard values with dynamic values retrieved from the dataset.

## Technologies Used

- React + Vite
- FastAPI
- Python
- Pandas
- Swagger UI

## Dataset

Name:
Smart Mobility Traffic Dataset

Purpose:
The dataset is used for traffic monitoring, dashboard visualization, congestion analysis, and future AI-based traffic prediction.

Important Columns

- Timestamp
- Latitude
- Longitude
- Vehicle_Count
- Traffic_Speed_kmh
- Road_Occupancy_%
- Traffic_Light_State
- Weather_Condition
- Accident_Report
- Parking_Availability
- Traffic_Condition

## Challenges Faced

- Selecting the most suitable dataset from multiple options.
- Understanding the dataset structure and column names.
- Configuring FastAPI to read the dataset correctly.
- Resolving backend startup issues.
- Connecting the React frontend with FastAPI APIs.

## Learning

- Exploratory Data Analysis (EDA)
- FastAPI Routing
- Service Layer Architecture
- REST API Development
- Dataset Integration using Pandas
- React API Integration using Fetch
- Swagger API Testing

## Next Implementation

- Traffic Records Page
- Search Functionality
- Filter Functionality
- Pagination
- PostgreSQL Integration
- Live Map Integration
- AI Traffic Prediction