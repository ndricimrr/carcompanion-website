#!/usr/bin/env bash

echo "Current directory =${PWD}"

# Start Database
echo -e "\e[1;42m Database Setup Started \e[0m"

# go into the backend folder
echo -e "\e[1;42m Going into 'backend' folder \e[0m"
cd ../backend 
echo "Current directory =${PWD}"

# Create data folder to save data
echo -e "\e[1;42m Creating 'data' folder to save data to \e[0m"
mkdir data
mkdir mongodlogs

# Rung mongod command to start the database server
echo -e "\e[1;42m Running 'mongod --dbpath data' to start database server \e[0m"
mongod --fork  --logpath ./mongodlogs --dbpath ./data
echo -e "\e[1;42m Database server is running in the background \e[0m"

# sleep a little to wait for DB setup
echo -e "\e[1;42m Sleeping for 8 seconds to wait for db full initialization  \e[0m"
sleep 8

# Create all database schemes and import data to begin with
echo -e "\e[1;42m Create all database schemes and import data to begin with \e[0m"
mongorestore dump/

# Set environment variables
echo -e "\e[1;42m Set necessary environment variables \e[0m"
export PORT=3000
export MONGODB_URI="mongodb://localhost:27017/carcompaniondb"
export JWT_SECRET="very secret secret"

# Run Development
echo -e "\e[1;42m Starting Database Server \e[0m"
npm run devstart