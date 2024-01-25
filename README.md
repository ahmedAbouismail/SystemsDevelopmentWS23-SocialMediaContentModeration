# Welcome To NoHateNet

## Start Application Locally

## 1. Start Docker-Desktop
   To get the Docker daemon running.

## Clone Repository
   ```
   git clone https://gitlab.rz.htw-berlin.de/peikert/systemsdevelopmentws23-socialmediacontentmoderation.git
   ```
   ```
   cd systemsdevelopmentws23-socialmediacontentmoderation/
   ```

## Tips for Using Vim (Windows and macOS)
   - To quit Vim:
     1. Press `Esc` to ensure you're in Normal mode.
     2. Type `:q` and press `Enter`.
   - To quit and discard changes (force quit):
     1. Press `Esc` to ensure you're in Normal mode.
     2. Type `:q!` and press `Enter`.
   - To save changes and quit:
     1. Press `Esc` to ensure you're in Normal mode.
     2. Type `:wq` and press `Enter`.

## Create .env File
   Copy the provided `.env.example` file and rename it to `.env`. Fill in the necessary environment variables with your own database and MinIO credentials.

   **Example .env File:**
   ```dotenv
   # Database
   POSTGRES_DB=your_database_name
   POSTGRES_USER=your_database_user
   POSTGRES_PASSWORD=your_database_password
   POSTGRES_HOST=your_database_host
   POSTGRES_NAME=your_database_name
   POSTGRES_PORT=5432

   # MinIO
   MINIO_ROOT_USER=your_minio_user
   MINIO_ROOT_PASSWORD=your_minio_password
   ```

## Switch Directory to Backend
   ```
   cd backend/
   ```

## Create Another .env File
   Copy the provided `.env.example` file and rename it to `.env`. Fill in the necessary environment variables with your own database and MinIO credentials.

   **Example .env File:**
   ```dotenv
   # Postgres DB
   POSTGRES_DB=your_database_name
   POSTGRES_USER=your_database_user
   POSTGRES_PASSWORD=your_database_password
   POSTGRES_HOST=your_database_host
   POSTGRES_NAME=your_database_name
   POSTGRES_PORT=5432

   # Django Settings
   SECRET_KEY=your_secret_key
   DEBUG=True
   ALLOWED_HOSTS=.localhost,127.0.0.1,0.0.0.0,[::1]

   # Django DB URL
   DB_ENGINE=django.db.backends.postgresql
   DB_NAME=your_database_name
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_HOST=your_database_host

   # MinIO
   MINIO_ROOT_USER=your_minio_user
   MINIO_ROOT_PASSWORD=your_minio_password
   ```

## Start Docker Compose
   ```
   docker-compose up
   ```
