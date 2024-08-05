#!/bin/bash

if [ $# -eq 0 ]; then
  echo "No commit message provided. Usage: ./push.sh <commit message>"
  exit 1
fi

commit_message="$*"

git add .
git commit -m "$commit_message"
git push
