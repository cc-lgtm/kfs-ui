#!/usr/bin/env sh
set -e

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:cc-lgtm/cc-lgtm.github.io.git master

cd -
