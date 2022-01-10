#!/usr/bin/env sh
set -e

cd docs/.vuepress/dist

git init
git add .
git commit -m 'deploy'

git remote add origin https://github.com/cc-lgtm/cc-lgtm.github.io.git
git push -f git@github.com:cc-lgtm/cc-lgtm.github.io.git master

cd -
