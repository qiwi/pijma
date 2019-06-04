#!/bin/bash

NPM_UPGRADE="npm-upgrade"

eval $NPM_UPGRADE

for f in packages/*; do
  if [ -d "$f" ]; then
     cd $f
     eval $NPM_UPGRADE
     echo "npm-upgrade for "$f
     cd ../..
  fi
done
