
# This is a script that kills processes of PORT 3000 & 8000 & 27017    
# It very often happens that the users will kill the project from commandline
# and the ports might not be freed by the corresponding processes yet
# EADDR already in use is then avoided 

echo -e "\e[1;91m\n\nSearching and killing processes that may be blocking PORTs :3000 :27017 :8000 \e[0m"
echo -e "\e[1;91mThis avoids 'EADDR already in use' annoying error\e[0m"


PROCESS_TO_KILL=$(netstat -ano|findstr "PID :3000 :27017 :8000") 
IFS=$'\n' read -rd '' -a y <<<"$PROCESS_TO_KILL"
for var in "${y[@]}"
do
    IN=$(echo ${var// /#} | sed 's/#\{1,\}/@/g')
    IFS='@' read -ra ADDR <<< "$IN"
    if [ "${ADDR[-1]}" != "PID" ]; then
        echo "Killing process with PID = ${ADDR[-1]}"
        taskkill -pid ${ADDR[-1]} -f
    fi
done