#!/usr/bin/env bash
echo "Current directory FRONTEND 1=${PWD}"
sleep 15
cd ../frontend
echo "Current directory FRONTEND 2=${PWD}"

npm run start

# echo "Current directory FRONTEND 2=${PWD}"
#     read -p "222Press 'Enter' to close instructions..." input
#     case $input in
#         * ) exit;;
#     esac