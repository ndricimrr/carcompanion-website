#!/usr/bin/env bash

# Start Database
echo -e "\e[1;42m Database Setup : PART 1 \e[0m"

# go into the backend folder
echo -e "\e[1;42m Going into 'backend' folder \e[0m"
cd ../backend 

# Create data folder to save data
echo -e "\e[1;42m Creating 'data' folder to save data to \e[0m"
mkdir data

# Rung mongod command to start the database server
echo -e "\e[1;42m Running 'mongod --dbpath data' to start database server \e[0m"
mongod --dbpath ./data
echo -e "\e[1;42m Database server is running in the background \e[0m"
