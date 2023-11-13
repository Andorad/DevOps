Pour tester l'accès à l'API, il faut dans un premier temps avoir node et npm d'installé, pour cela, écrire les commandes suivantes :
- npm init -y
- npm install typescript --save-dev
- npm install @types/node --save-dev

Pour lancer le serveur local, il faut se rendre sur un terminal et utiliser la commande 'cd' pour se rendre dans le dossier.
Puis, dans l'ordre, écrire les commandes :
- npx tsc
- node build/index.js

Ensuite, se rendre sur un navigateur et entrer l'url suivante :
- localhost:3000/ping