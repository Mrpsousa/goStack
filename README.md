- docker ps
- get ID number
- docker start ID
- or: sudo docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgre

docker container ls -a

yarn typeorm migration:create -n CreateSomething
	edit the created migration
yarn typeorm migration:run
yarn typeorm migration:show
yarn typeorm migration:revert
