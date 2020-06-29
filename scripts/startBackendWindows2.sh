#!/usr/bin/env bash
sleep 10
echo -e "\e[1;42m Database Setup : PART 2 \e[0m"

# go into the backend folder
echo -e "\e[1;42m Going into 'backend' folder \e[0m"
cd ../backend 

# Create all database schemes and import data to begin with
echo -e "\e[1;42m Create all database schemes and import data to begin with \e[0m"
mkdir dump
mongorestore dump/

# Set environment variables
echo -e "\e[1;42m Set necessary environment variables \e[0m"
export PORT=3000
export MONGODB_URI="mongodb://localhost:27017/carcompaniondb"
export JWT_SECRET="very secret secret"

# Run Development
echo -e "\e[1;42m Starting Database Server \e[0m"
npm run devstart