#!/bin/bash
cd /home/kavia/workspace/code-generation/anime-discover-and-review-platform-173356-173365/anime_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

