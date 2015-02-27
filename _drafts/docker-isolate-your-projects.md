---
layout: post
title: "Docker - Try technos cleanly"
tags: docker jekyll foundation
categories: computer development english français
---

<p class="english-post">

## Technologies come in and come out

I like to try many technologies to build any project. Academic courses (in France at least) focus on classic languages like C and Java and keep silent many frameworks. That's how I discovered [Twitter Bootstrap](http://getbootstrap.com/) during the second year of my post-grade (it's quite late as I built my first website in middle school). So now, every time I discover a new language, a new framework, or whatever, I try to keep it under wraps for the next time. But with new tools come new binaries, new files, etc. which pollute your base system...

## Keep It Simple, Stupid

For example, to build this new site, I decided to use [Foundation](http://foundation.zurb.com/) instead of Bootstrap that I already know, and [Jekyll](http://jekyllrb.com/) provided by Github Pages instead of a plain old XHTML format. With these both tools come many dependencies. I installed Foundation through Sass, which require NodeJS, Bower, Grunt, Compass and co. But all these dependencies will probably never be used anymore for other projects. Currently, I'm using ArchLinux which philosophy is "A simple, lightweight distribution", and beneath this, there is a very customizable system where you know about every package installed on your system. The number of dependencies installed each time I want to try a new techno lead me to don't know exactly what is on my system.

## Divide and conquer

During a Python development session, I discovered [Virtualenv](https://virtualenv.pypa.io/en/latest/) which create an isolated Python environment. Launching Virtualenv will let you install any dependencies in a _local_ directory and so when you've done with your project, delete its folder and any useless dependency is deleted from your system. That's a clean way to test some python packages. [Ruby](https://www.ruby-lang.org/) has quite the same thing, called [RVM](https://rvm.io/) that I never tried. Such kind of utility is called... virtual environment as you can guess from Virtualenv. But what about other tools like Node or future ones coming ?

## Who says **virtual** environment says **virtual** machine

The first thing that I thought of is virtual machine. Create a new VM for each project, in which you install all necessary dependencies. When you're done, delete it. This seems to be a good solution, but VM are so heavy ! This mean that each time you start a project you have to install your system, configure it to have the right IDE/editors or to share the right folder with your host system. All these constraint can be got around customizing one VM image and starting from this image each time. But you cannot go through the boot time and the overhead of the VM.

## Docker to the rescue !

[Docker](https://www.docker.com/) was initially built to easily deploy any application on any platform. Docker uses images which contains everything needed by your application to run smoothly. So, everytime you use an image with docker, which lead to run a container, all dependencies of you app is available is this container, with the right version and the right configuration, without colliding dependencies of other containers. A container is quiet the same as a VM but uses a new kernel feature, LXC, to not add the whole overhead of a full VM. Moreover, it's very easy to share a local directory with a container or to access network ports of a container.
Now, let's go for an example.

</p>

<p class="french-post">

## Ça s'en va et ça reviens

J'aime tester de nouvelles technologies sur chacun de mes projets. L'apprentissage de la programmation par la voie scolaire se concentre principalement sur des langages comme C ou Java et passe sous silence l'offre plétaurique de frameworks disponibles pour faciliter la vie du développeur. Ceci explique en partie pourquoi je n'ai découvert [Twitter Bootstrap](http://getbootstrap.com/) qu'en deuxième année de master alors que mon premier site date du collège. Aujourd'hui, j'ai donc décidé de noter tous les langages, frameworks, ou autres dont j'entends parler et de les essayer quand l'occasion s'en présente. Mais qui dit nouveaux outils dis nouveaux binaires, nouveaux fichiers, etc. qui viennent polluer mon système...

## Keep It Simple, Stupid

Prennons un example. Pour ce site, j'ai décidé d'utilisé [Foundation](http://foundation.zurb.com/) à la place de Bootstrap que je connaissais déjà et [Jekyll](http://jekyllrb.com/) -- fourni par la plateforme GitHub Pages -- au lieu de tout coder en bon vieux XHTML. Avec ces outils vient une quantité impressionnante de dépandances ! J'ai voulu installer Foundation via Sass, ce qui nécessite l'installation de NodeJS, Bower, Grunt, Compass et j'en passe. Mais toutes ces dépendances, il y a de fortes chances que je ne m'en resservent jamais. Au quotidient, j'utilise ArchLinux dont la philosophie est KISS (Keep It Simple, Stupid !), et derrière cela, il y a une distribution configurable à l'extrême où je suis théoriquement sensé connaitre l'ensemble des paquets présents sur mon système. Autant dire que l'installation de dépendances à outrance n'est clairement pas ce que je recherche !

## Diviser pour regner

Durant une session de programmation Python, j'ai découvert [Virtualenv](https://Virtualenv.pypa.io) qui te permet de créer un environnement Python isolé. Un fois Virtualenv lancé, tous les packets installés via le gestionnaire de packets Python sont installés dans un dossier _local_ au projet. Ainsi, lorsque j'en ai fini avec le projet, je supprime son dossier, et toutes les dépandances disparaissent du système. C'est une façon propre d'essayer de nouveaux modules python. [Ruby](https://www.ruby-lang.org/fr/) propose à peu près la même chose sous le nom [RVM](https://rvm.io) que je n'ai jamais utilisé. Ce type d'utilitaires est appelé un environnement virtuel. Mais qu'en est-il pour les autres outils comme Node ou ceux qui n'existent pas encore ?

## Qui dit environnement **virtuel** dit machine **virtuellle**

La première idée que j'ai eu, ça a été de regarder du côté des machines virtuelles. Pour chaque projet, je pourrais créer une VM dans laquelle j'installerais toutes les dépendances. Une fois le projet "terminé", je supprime l'image et tout est propre ! Le problème c'est que les machines virtuelles, c'est lourd ! Il faut réinstaller un système complet, le configurer correctement, etc. à chaque projet. Une solution consiste à le faire une fois et à repartir toujours de la même image. Mais il y a deux choses qui ne peuvent pas se résoudre comme ça ; la surcharge du système dû à une VM et le temps de démarrage d'une VM.

## Docker à la rescousse !

[Docker](https://www.docker.com/) est un outil initialement développé pour simplifier le déploiement de n'importe quelle application sur n'importe quelle plate-forme. Docker utilise la notion d'image, qui contient l'application et toutes ses dépendances. En lançant une image -- on dit qu'on exécute un conteneur (container) -- toutes les dépendances nécessaires sont disponibles dans la bonne version et avec la bonne configuration sans entrer en collision avec les dépendances des autres conteneurs. Les conteneurs sont comme des VM mais utilisent une nouvelle fonctionnalité du noyau, les LXC, pour limiter leur emprunte sur le système. De plus, Docker est prévu pour qu'il soit facile de partager des fichiers ou d'avoir accès aux ports des applications d'un conteneur.
Maintenant passons à un exemple.

<p>


