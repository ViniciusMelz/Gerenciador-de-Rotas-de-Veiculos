Projeto criado durante o curso de imersão Full Cycle, usando NextJS, NestJS, Golang, Kafka e MongoDB para armazenamento dos dados.

Para subir o projeto de o comando abaixo para subir os containers:
docker compose up -d

Caso de algum erro, de os comandos abaixo:
docker compose down
docker compose up -d

Após isso, em um novo console de os comandos abaixo para inicializar o golang:
docker compose exec -it simulator sh
go run cmd/simulator/main.go

Para inicializar o HTTP do NestJS, basta digitar os comandos abaixo em um novo console:
docker compose exec -u root nest bash
npm run start:dev

Também será necessario iniciar o consumer do NestJS, então em um novo console de os 2 comandos abaixo:
docker compose exec -u root nest bash
npm run start:dev -- --entryFile=cmd/kafka.cmd 

Por fim, se deve inciar o NextJS, para isso, em um novo console, de os comandos abaixo:
docker compose exec -u root next bash
npm run dev


USO DO APP:
Para criar uma nova rota acesse o link abaixo:
http://localhost:3001/new-route

Para começar uma rota acesse o seguinte link:
http://localhost:3001/driver

Por fim, para visualizar as rotas que foram iniciadas acesse o link abaixo:
http://localhost:3001/admin
