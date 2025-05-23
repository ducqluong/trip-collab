# Trip Collab

A collaborative trip planning application that helps users plan and organize their trips together. Built with Next.js, Node.js, and PostgreSQL.

## Features

- Collaborative trip planning
- Real-time updates
- User authentication
- Trip itinerary management
- Shared expenses tracking

## Tech Stack

- **Frontend:** Next.js, React, TypeScript
- **Backend:** Node.js, Express, TypeScript
- **Database:** PostgreSQL
- **Containerization:** Docker & Docker Compose

## Prerequisites

- **Git:** Make sure Git is installed on your system
- **Node.js & npm:** Node.js 20.x or higher (useful for local development)
- **Docker Desktop:** Required for running the application in containers

## Getting Started

### Local Development Setup (Docker Compose)

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ducqluong/trip-collab.git
   cd trip-collab
   ```

2. **Build and start the Docker containers:**

   ```bash
   docker compose up --build
   ```

   This command will:

   - Build Docker images for Next.js frontend and Node.js backend
   - Download and configure PostgreSQL
   - Initialize the database schema
   - Start all services

   The initial build might take a few minutes. Subsequent builds will be faster due to Docker's caching.

### Accessing Services

Once running, you can access the services at:

- **Frontend:** [http://localhost:3000](http://localhost:3000)
- **Backend API:** [http://localhost:5001](http://localhost:5001)
- **PostgreSQL Database:**
  - Host: localhost
  - Port: 5432
  - Database: trip_planner_db
  - Username: admin
  - Password: password
  - psql: psql -h localhost -p 5432 -U admin -d trip_planner_db

### Development Workflow

- The frontend and backend code are mounted as volumes, so changes will be reflected immediately
- Frontend hot-reloading is enabled
- Backend will automatically restart when changes are detected

### Stopping the Services

To stop all services:

```bash
docker compose down
```

To stop and remove all data (including database):

```bash
docker compose down -v
```

## Project Structure

```
trip-collab/
├── frontend/          # Next.js frontend application
├── backend/           # Node.js backend API
├── docker-compose.yml # Docker services configuration
└── README.md         # Project documentation
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
