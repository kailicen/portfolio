#!/bin/sh

echo "Switching to branch master"
git checkout main

echo "Building app"
npm run build

echo "Deploying files to server"
scp -r build/* kailicen@172.105.254.159:/var/www/kailicen.com/

echo "Deployment complete"
