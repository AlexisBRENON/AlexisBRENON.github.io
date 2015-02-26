---
layout: post
title: "Docker - Try technos cleanly"
tags: docker jekyll
categories: computer development
---

<p class="english-post">

I like to try many technologies to build any project. Academic courses (in France at least) focus on classic languages like C and Java and keep silent many frameworks. That's how I discovered [Twitter Bootstrap](http://getbootstrap.com/) during the second year of my postgrade (it's quite late as I built my first website in middle school). So now, everytime I discover a new language, a new framework, or whatever, I try to keep it under wraps for the next time. But with new technos come new binaries, new files, etc. which pollute your base system.

For example, to build this new site, I decided to use [Foundation](http://foundation.zurb.com/) instead of Bootstrap that I already know, and [Jekyll](http://jekyllrb.com/) provided by Github Pages instead of a plain old XHTML format. With these both tools come many dependancies. I installed Foundation through Sass, which require nodejs, bower, grunt, compass and co. But all these dependancies will probably never be used anymore for other project. Currently, I'm using ArchLinux which philosophy is "A simple, lightweight distribution", and beneath this there is a very customizable system where you know about every package installed on your system. The number of dependancies installed each time I want to try a new techno lead me to don't know exactly what is on my system.

## The virtual environments

During a Python development session, I discovered [Virtualenv](https://virtualenv.pypa.io/en/latest/) which create an isolated Python environment. Launching virtualenv will let you install any dependancies in a _local_ directory and so when you've done with your project, delete its folder and any useless dependancy is deleted from your system. That's a clean way to test some python packages.
 
[Ruby](https://www.ruby-lang.org/fr/) has quite the same thing, called [RVM](https://rvm.io/) that I never tried. But what about others like Node or future coming technologies ?

## Which says **virtual** environment says **virtual** machine

The first thing that I thought of is virtual machine. Create a new VM for each project in which you install all necessary dependancies. When you're done, delete it. This seems to be a good solution, but VM are so heavy ! This mean that each time you start a project you have to install your system, configure it to have the right IDE/editors or to share the right folder with your host system. All these constraint can be walkthroughed custumizing one VM image and starting from this image each time. But you cannot go through the boot time and the overhead of the VM.

## Docker to the rescue !

[Docker](https://www.docker.com/) was initially built to easily deploy any application on any platform. Docker uses images which contains everything needed by your application to run smoothly. So, everytime you use an image with docker, which lead to run a container, all dependancies of you app is available is this container, with the right version and the right configuration, without colliding dependancies of other containers.
A container is quiet the same as a VM but uses a new kernel feature, LXC, to not add the whole overhead of a full VM.
Moreover, it's very easy to share a local directory with a container or to access network ports of a container.
Now, let's go for an example.

</p>
