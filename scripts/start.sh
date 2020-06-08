#!/usr/bin/env bash

echo -e "\e[1;92m\n\n INSTRUCTIONS: \e[0m\n"

echo -e "\e[1;91m\n\n Step 0: Install Prerequisites: Control/Command + Click this link:\n https://github.com/ndricimrr/carcompanion-website#readme \e[0m\n"

echo -e "\e[1;93m Note: All following steps are done from \e[0m \e[30m\e[107m this root folder  \e[0m  \e[0m\n"

echo -e "\e[1;92m Step 1: Install lerna - Run: \e[0m \e[30m\e[107m npm install lerna --global  \e[0m  \e[0m\n"

echo -e "\e[1;92m Step 2: Install Packages - Run: \e[0m \e[30m\e[107m npm run bootstrap  \e[0m \n This will take some time... \e[0m\n"

echo -e "\e[1;92m Step 3: Setup Database : \e[0m \e[30m\e[107m npm run backend  \e[0m  \e[0m\n"

echo -e "\e[1;92m Step 4: Start Frontend - Run: \e[0m \e[30m\e[107m npm run frontend  \e[0m  \e[0m\n"


while true; do
    read -p "Press 'Enter' to close instructions..." input
    case $input in
        * ) exit;;
    esac
done