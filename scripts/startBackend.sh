#!/usr/bin/env bash

unameOut="$(uname -s)"
case "${unameOut}" in
    Linux*)     machine=Linux;;
    Darwin*)    machine=Mac;;
    CYGWIN*)    machine=Windows;;
    MINGW*)     machine=Windows;;
    *)          machine="UNKNOWN:${unameOut}"
esac

echo "Machine = ${machine}"

if [ $machine == 'Mac' ] || [ $machine == 'Linux' ]; then
    bash ./startBackendMacLinux.sh
elif [ $machine == 'Windows' ]; then
    echo -e "\e[1;91m You seem to be on a Windows machine!! \e[0m"
    echo -e "\e[1;91m You will need to go through 2 steps!! \e[0m"
    echo -e "\e[1;92m Step 1: Open two terminals  \e[0m"
    echo -e "\e[1;92m Step 2: In one of the terminals run: \e[0m \e[30m\e[107m npm run start-backend  \e[0m"
    echo -e "\e[1;92m Step 3: After Step 2 is finished\n\t in the other terminal run: \e[0m \e[30m \e[107m npm run finish-backend  \e[0m"
    echo -e "\e[1;92m Step 4: Now you can safely start the frontend  \e[0m"
    while true; do
    read -p "Press 'Enter' to close instructions..." input
    case $input in
        * ) exit;;
    esac
done
    # bash ./startDatabaseMacLinux.sh
fi