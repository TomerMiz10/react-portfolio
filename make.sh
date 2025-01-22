#!/bin/bash

chmod +x "$0"

# Define functions for installing dependencies, starting, stopping, and reloading the Docker containers, and viewing logs
function install() {
    npm install
}

function start() {
    install
    npm run dev
}

function update() {
    npm update
}

function pullOrigin() {
    git pull origin master
}

function build {
    docker-compose build
}

function force-build {
    docker-compose up -d --force-recreate --renew-anon-volumes
}

function up() {
    build
    docker-compose run --rm --entrypoint "npm install" react-portfolio

    docker-compose up -d
}

function down() {
    docker-compose down
}

function reload() {
    down
    up
}
function logs() {
    docker-compose logs -f
}

# Check the first argument to the script
case $1 in
    install)
        install
        ;;
    start)
        start
        ;;
    update)
        update
        ;;
    pullOrigin)
        pullOrigin
        ;;
    up)
        up
        ;;
    down)
        down
        ;;
    reload)
        reload
        ;;
    logs)
        logs
        ;;
    build)
        build
        ;;
    force-build)
        force-build
        ;;
    *)
        echo "Usage: ./make.sh {install|up|down|reload|logs}"
        exit 1
esac
