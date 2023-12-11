#!/bin/bash

# Start MinIO server in the background
minio server --console-address ":9001" /data &

# Wait for the MinIO server to start
MAX_ATTEMPTS=60
COUNT=0

echo "Waiting for MinIO to start..."

while ! head -n 1 </dev/tcp/localhost/9000; do
  sleep 1
  COUNT=$((COUNT+1))
  if [ $COUNT -ge $MAX_ATTEMPTS ]; then
    echo "Error: MinIO did not start in time"
    exit 1
  fi
done

echo "MinIO started"

# Configure MinIO Client (mc)
mc alias set myminio http://localhost:9000 ${MINIO_ROOT_USER} ${MINIO_ROOT_PASSWORD}

# Create the bucket
mc mb myminio/images

# Keep the container running
wait
