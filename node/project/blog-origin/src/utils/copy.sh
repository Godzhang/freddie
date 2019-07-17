#!/bin/sh
cd /d/freddie/node/project/blog-origin/logs
cp access.log $(date +%Y-%m-%d).access.log
echo "" > access.log