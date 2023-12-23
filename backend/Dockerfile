# Use an official Python runtime as a parent image
FROM python:3.11.4

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory in the container
WORKDIR /usr/src/hassmelder/backend

RUN apt-get update && apt-get install -y --no-install-recommends \
    postgresql-client \
    && rm -rf /var/lib/apt/lists/*

# Install dependencies
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy the wait-for-db script
COPY wait-for-db.sh /usr/src/hassmelder/backend

# Make the script executable
RUN chmod +x /usr/src/hassmelder/backend/wait-for-db.sh

# Copy the current directory contents into the container at /usr/src/app
COPY . .
