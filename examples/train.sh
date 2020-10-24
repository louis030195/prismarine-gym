#!/bin/bash
set -e

# Yet it's just basic 1 server 1 agent.

# Usage "train.sh" will launch vanilla else use "train.sh true" for flying-squid

which_server="itzg/minecraft-server"
if [ "$1" = true ] ; then
    echo "Selecting flying-squid server"
    which_server="prismarinejs/flying-squid"
fi

cd examples
# Well that's not really server generic ...
docker run --rm --name mc-server -e EULA=TRUE -e ONLINE_MODE=FALSE -e VERSION=1.16.1 \
    -d -p 25565:25565 -v data:/data $which_server || (true && echo "Server already running, ignoring")
# docker-compose -f ./$which_server.yaml up -d
until [ "`/usr/bin/docker inspect -f {{.State.Running}} mc-server`"=="true" ]; do
    sleep 0.1;
done;
until docker logs mc-server | grep "RCON running"; do # TODO: will block on this loop for flying-squid
    sleep 0.1;
done;
echo "Server started, start training ..."
node ./$1.js 127.0.0.1 25565 singularity
docker logs mc-server > train.log
#docker kill mc-server
#docker-compose -f ./$which_server.yaml down
