## Getting Started

Follow these steps to get the project up and running on your local machine using Docker Compose.

### Prerequisites

- **Git:** Make sure Git is installed on your system.
- **Node.js & npm:** While we use Docker for consistency, having Node.js and npm installed locally (at least Node.js 20.x or higher) is useful for local development and running `npm` commands directly in the `frontend` or `trip-planner-backend` directories if needed.
- **Docker Desktop:** Ensure Docker Desktop is installed and running on your machine. This includes Docker Engine and Docker Compose.

### Local Development Setup (Docker Compose)

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/ducqluong/trip-collab.git](https://github.com/ducqluong/trip-collab.git) # Replace with your actual repo URL if different
    cd trip-collab
    ```

2.  **Build and start the Docker containers:**
    Navigate to the root directory of the project (where `docker-compose.yml` is located) and run:

    ```bash
    docker compose up --build
    ```

    This command will:

    - Build the Docker images for your Next.js frontend and Node.js backend.
    - Download the PostgreSQL Docker image.
    - Start all three services (PostgreSQL, Backend, Frontend).
    - Initialize the PostgreSQL database schema based on `trip-planner-backend/database/schema.sql` when the `db` service starts for the first time.

    The initial build might take some time as it downloads base images and installs all Node.js dependencies. Subsequent builds will be faster due to Docker's caching.

### Accessing Services

Once all services are up and running, you can access them via your web browser or API client:

- **Frontend (Next.js App):** `http://localhost:3000`
- **Backend (Node.js API):** `http://localhost:5001`
- **PostgreSQL Database:** Accessible from your backend service via the internal Docker network. If you need to connect from your host machine (e.g., using a GUI tool like DBeaver or pgAdmin), use `localhost:5432` with user `user`, password `password`, and database `trip_planner_db`.

To stop the services, press `Ctrl+C` in your terminal. To stop and remove the containers, networks, and volumes (including database data), run:

```bash
docker compose down -v
```
