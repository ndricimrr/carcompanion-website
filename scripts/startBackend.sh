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
    bash ./killProcessPorts.sh  
    echo -e "\e[1;92m Starting backend in MacOS \e[0m"
    bash ./startBackendMacLinux.sh
elif [ $machine == 'Windows' ]; then
    bash ./killProcessPorts.sh  
    echo -e "\e[1;92m Starting backend in Windows\e[0m"
    cd ..
    npm run backendWindows
fi