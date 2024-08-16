# Project Summary: To Do Task List Application

## Project Overview:

- **Frontend:** ReactJS (with Microfrontend Architecture)
- **Backend:** Node.js (with Microservices Architecture)
- **Database:** SQL Server
- **Session Management:** Redis
- **Load Balancer:** NGINX
- **Deployment:** Docker (for easy environment management and deployment)

## Steps Completed So Far

### 1. Project Setup

**Microservices Setup:**

- [x] **Task Service:** Manages tasks (CRUD operations)
- [x] **User Service:** Manages user registration, login, and profiles
- [x] **Notification Service:** Manages task-related notifications

**Microfrontend Setup:**

- [x] **Task Management Microfrontend:** Handles task creation and management
- [x] **Task Overview Microfrontend:** Displays a dashboard of tasks
- [x] **User Profile Microfrontend:** Manages user settings and preferences

### 2. Database Configuration

- [x] **Sequelize ORM:** Configured Sequelize for each service to interact with SQL Server.
- [x] **Migrations:**
  - [x] Created and ran migrations for:
    - [x] **Tasks:** Created Tasks table.
    - [x] **Users:** Created Users table.
    - [x] **Notifications:** Created Notifications table with a foreign key constraint linking to the Tasks table.
- [x] **Seeders:**
  - [x] Created seeders to populate initial data for:
    - [x] **Tasks:** Added initial tasks.
    - [x] **Users:** Added initial users with hashed passwords.
    - [x] **Notifications:** Added initial notifications linked to tasks.

## Next Steps

### 3. Session Management

- [ ] **Redis Integration:** Configure Redis as the session store for user authentication.
  - [ ] **Session Storage:** Store user sessions, including JWT tokens, in Redis for fast, in-memory access.
  - [ ] **Session Expiration:** Implement automatic session expiration in Redis to handle inactive sessions.
  - [ ] **Scalability:** Configure Redis to support horizontal scaling, allowing session data to be shared across multiple application instances.

### 4. Load Balancing with NGINX

- [ ] **NGINX Setup:** Configure NGINX as a load balancer to distribute incoming traffic across multiple instances of the microservices.
  - [ ] **Load Balancer Configuration:** Set up NGINX to balance the load between multiple Node.js service instances.
  - [ ] **Sticky Sessions:** Enable sticky sessions to ensure that user requests are consistently routed to the same backend service when necessary.

### 5. API Development

- **Task Service:**

  - [ ] Develop endpoints for managing tasks, including creation, updating, deletion, and retrieval.
  - [ ] Implement task categorization and prioritization features.

- **User Service:**

  - [ ] Develop endpoints for user registration, login, and profile management.
  - [ ] Integrate session management with Redis to handle user sessions.

- **Notification Service:**
  - [ ] Develop endpoints to send notifications based on task events, such as approaching deadlines or task completion.
  - [ ] Integrate with external notification services (e.g., email, SMS).

### 6. Testing and Monitoring

- [ ] **Unit Testing:** Begin writing unit tests for the API endpoints to ensure functionality.
- [ ] **Integration Testing:** Test the integration between microservices, the database, Redis, and NGINX.
- [ ] **End-to-End Testing:** Use tools like Cypress or Postman to perform comprehensive end-to-end testing of the application.

### 7. CI/CD Pipeline Setup

- [ ] **Automated Builds:** Set up a CI/CD pipeline to automate the build process using Jenkins, GitHub Actions, or GitLab CI.
- [ ] **Automated Testing:** Integrate automated testing into the CI/CD pipeline to maintain code quality.
- [ ] **Deployment:** Automate the deployment process to a staging or production environment using Docker.

### 8. Advanced Monitoring & Logging

- [ ] **Centralized Logging:** Implement centralized logging for all microservices using tools like Winston, ELK Stack, or Logstash.
- [ ] **Application Monitoring:** Set up monitoring tools like Prometheus and Grafana to track the performance and health of the Node.js microservices, Redis, and NGINX.

### 9. Final Deployment and Documentation

- [ ] **Containerization:** Ensure all services are containerized using Docker and are ready for deployment.
- [ ] **Deployment:** Deploy the application to a cloud platform like AWS, Azure, or Google Cloud.
- [ ] **Documentation:** Document all APIs, services, and integration points. Include instructions for setting up Redis, NGINX, and Docker.

## Note: excluded the camunda for time being.
