#!/bin/bash
cd bin
docker-compose -f ./docker-compose.yaml up -d
until [ "`/usr/bin/docker inspect -f {{.State.Running}} flying-squid`"=="true" ]; do
    sleep 0.1;
done;
echo "Server started, start training ..."
node ./randomTest.js localhost 25565 yolo
docker-compose logs -f -t > train.log
docker-compose -f ./docker-compose.yaml down
