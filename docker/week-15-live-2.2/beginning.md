First do git clone https://github.com/100xdevs-cohort-2/week-15-live-2.2.git

We are trying to understand networks
First build the image using 
            docker build -t image_tag .
note: you can have any name for the image(instead of image_tag)

Then create a network using 
        docker network create my_custom_network

Start mongo on the same network 
docker run -d -v volume_database:/data/db --name mongoharkiratclass --network my_custom_network -p 27017:27017 mongo

--name is for name of container

NOTE:
In db.ts check the database url, it should have name of mongo container in the url. Do docker build -t image_tag . again as we have changed url


Now start the backend process with the network attached to it
docker run -d -p 3000:3000 --name backend --network my_custom_network image_tag


Check the logs to ensure the db connection is successful

docker logs <container_id>
Try to visit an endpoint and ensure you are able to talk to the database
If you want, you can remove the port mapping for mongo since you don’t necessarily need it exposed on your machine

Types of networks
1.Bridge: The default network driver for containers. When you run a container without specifying a network, it's attached to a bridge network. It provides a private internal network on the host machine, and containers on the same bridge network can communicate with each other.
2.Host: Removes network isolation between the container and the Docker host, and uses the host's networking directly. This is useful for services that need to handle lots of traffic or need to expose many ports.

