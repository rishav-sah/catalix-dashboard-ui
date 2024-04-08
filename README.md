# Project Title

## Overview
This project showcases an interactive dashboard that presents various metrics related to web page performance, user engagement, and system efficiency. Developed with React.js and styled with Tailwind CSS, this project provides a prototype of a modern analytics dashboard.

## Tools & Technologies
- **UI**: React.js
- **CSS**: Tailwind CSS
- **Icons**: FontAwesome
- **Charts**: Recharts

## Components
- `<Header />`: Top navigation bar.
- `<Sidebar />`: Navigation sidebar.
- `<DashboardMain />`: Main content area for displaying metrics and charts.

The layout container is `App.jsx`, which serves as a dummy UI project container.

## Data Sourcing
The application uses dummy API endpoints to simulate data fetching due to CORS policy constraints. In a production environment, these endpoints would be replaced with actual API services.

- Metrics Data: [Metrics Data API](./src/utils/metricDataJson.json)
- Performance Metric Data: [Performance Metric Data API](./src/utils/performanceMetrics.json)
- Pageview Data: [Pageview Data API](./src/utils/pageViewsData.json)

**Note**: 
- Links are placeholders and need to be replaced with actual API endpoints.
- A responsive approach has been followed as much as possible, with some mobile-first features potentially to be implemented. The sidebar and additional features such as filters and search are currently placeholders, pending further clarification of requirements.
- The colors and hex values used within the HTML elements have been picked directly from the design mock-ups. For a larger scale application, it is recommended to plan a cohesive color scheme with primary, secondary, and additional colors.
- The code for client-side routing such as `react-router-dom` has not been written for now, since we're just building the dashboard but the paths are defined.
- For Client-Side Routing, the paths have been defined but the code for `react-router-dom` has not been written for now, since we're just mimicking the dashboard UI for now.
- For Curve Line Charts in the application, `recharts` library has been used with the constant dummy data. In real scenario, we may consider dynamic values.
