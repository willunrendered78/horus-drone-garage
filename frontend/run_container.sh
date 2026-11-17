#!/bin/bash

docker build -t horus-img .

docker run --rm \
  -p 5173:5173 \
  -v "$(pwd)":/app \
  -v /app/node_modules \
  --name horus-container \
  horus-img
