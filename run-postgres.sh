# script for running docker postgres database container
docker run -d -p 5432:5432\
 -e POSTGRES_USER=yusuke\
 -e POSTGRES_PASSWORD=1234\
 postgres:latest
