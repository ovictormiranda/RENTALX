Comandos DOCKER

docker ps                 <> Visualizar os containers que estão de pé(rodando)
docker ps -a              <> Lista todos os containers, para inicializados quanto parados.
docker rm id              <> Remover container do docker (apenas se ele estiver stopado)
docker start id           <> Inicia container
docker stop id            <> Parar container
docker logs nome          <> Visualizar logs da aplicação
docker logs nome -f       <> Monitorar logs da aplicação em tempo real
comando ctrl c            <> Sair do monitoramento de logs



Comandos DOCKER COMPOSE

docker-compose up -d            <> Inicializar container em background
docker-compose stop             <> Parar container
docker-compose down             <> Remover tudo o que estiver criado no seriço docker compose
docker exec -it nome/bin/bash   <> Acessar container
comando ctrl d                  <> Sair do container acessado
docker logs nome                <> Visualizar logs da aplicação

