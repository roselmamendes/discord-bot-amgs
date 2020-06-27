# Executar localmente

Você precisa de Docker.

Construa a imagem: `docker build -t amgs .` 

Subir servidor: `docker run --rm -p 3000:3000 -v "$PWD":/usr/src/app -w /usr/src/app -it amgs`