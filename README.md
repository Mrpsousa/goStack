# Installs

## Nodejs
    - install nodejs
    - install yarn
    - run "yarn" in root folder
## Docker
    - install docker
    - run: sudo docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

## Check Docker
    - If docker is not running
    - docker ps
    - get ID number
    - docker start ID

## Migrations
    - yarn typeorm migration:run

## Run application 
    - yarn dev:server 