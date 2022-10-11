#!/usr/bin/env sh

# abort on errors
set -e

# build

npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://goozyshi.github.io
# git push -f git@github.com:goozyshi/goozyshi.github.io.git main

# if you are deploying to https://goozyshi.github.io/vue2mi
git push -f https://github.com/goozyshi/vue2mi.git master:gh-pages
cd -