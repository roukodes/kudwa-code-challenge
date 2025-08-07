# Full Stack Engineer Application Project

### 📌 Task Instructions

You have been provided two JSON API data sources representing financial data.

Your task is divided into two primary components:

### 🛠️ Backend Integration (Node.js & Express)

- **Framework:**
  - Implement your backend using Node.js and Express.
- **Data Integration & Schema Design:**
  - Create a unified database schema to store data from both provided JSON API sources.
  - Design and implement an ETL (Extract, Transform, Load) process to integrate and store data into the unified schema.
- **Migration Process:**
  - Include migration scripts for your schema setup and updates.
- **API Development:**
  - Develop simple API endpoints allowing the frontend to trigger data integration.

### 🎨 Frontend Display

- **Preferred Framework (optional):** React and Material UI
- **Screen 1: Structured Data Table**
  - Build a straightforward frontend table to display the integrated profit-and-loss report.
  - Include nested, expandable fields to demonstrate basic interactive functionality.
- **Screen 2 (Optional): Dashboard Visualization**
  - Optionally, build a simple dashboard highlighting key insights from the data. This step is entirely optional and considered a bonus.

### ⚙️ Frontend Controls

- Provide a clear button for users to trigger or refresh backend data integration.
- Provide simple feedback to indicate integration progress.

### 🧰 Bonus / Nice-to-Have Features

These additions are not mandatory, but they will make your application stand out:

- **📝 Swagger / OpenAPI Documentation**
  Implement Swagger or OpenAPI to document your backend API endpoints. This helps demonstrate clarity and professionalism in API design.
- **🐳 Docker Implementation**
  Use Docker to containerize the backend and/or frontend services. Provide a `docker-compose.yml` file if multiple services are used.
- **🧪 Unit Testing**
  Write unit tests covering key backend API endpoints. Bonus points for using a testing framework like Jest or Mocha.
- **🚦 API Error Handling & Response Standardization**
  Implement basic error handling for common failure scenarios and return standardized API response formats (e.g., consistent success/error structure).
