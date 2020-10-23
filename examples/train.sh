#!/bin/bash
set -e

# Usage "train.sh" will launch vanilla else use "train.sh true" for flying-squid

which_server="vanilla"
if [ "$1" = true ] ; then
    echo "Selecting flying-squid server"
    which_server="flying_squid"
fi

cd examples
docker-compose -f ./$which_server.yaml up -d
until [ "`/usr/bin/docker inspect -f {{.State.Running}} $which_server`"=="true" ]; do
    sleep 0.1;
done;
until docker logs $which_server | grep "RCON running"; do
    sleep 0.1;
done;
echo "Server started, start training ..."
node ./randomTest.js 127.0.0.1 25565 yolo
docker logs $which_server > train.log
#docker-compose -f ./$which_server.yaml down
