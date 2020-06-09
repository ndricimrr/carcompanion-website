#!/usr/bin/env bash
echo "Current directory FRONTEND 1=${PWD}"
sleep 15
cd ../frontend
echo "Starting the FRONTEND: =${PWD}"

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
    npm run startMac
elif [ $machine == 'Windows' ]; then
    npm run start
fi
sleep 15