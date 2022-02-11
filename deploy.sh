#!/usr/bin/env sh

set -e

npm run build

cd dist
echo 'preview.algata.in' > CNAME

git init --initial-branch=main
git add -A
git commit -m 'deploy'

git push -f git@github.com:Algata-ga/algata.ga.new.git main:gh-pages

cd -
