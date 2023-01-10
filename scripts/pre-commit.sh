#!/bin/sh

RED='\033[0;31m'
GREEN='\033[0;32m'
CYAN='\033[0;33m'
NC='\033[0m' # No Color

echo "Running pre-commit hook..."

echo -e "${CYAN}Running typescript validator...${NC}"
npx tsc

# $? stores exit value of the last command
if [ $? -ne 0 ]; then
 echo -e "${RED}Typescript validator failed! :(, please review, update and re-run git add files${NC}"
 exit 1
fi

echo -e "${GREEN}Typescript validator Done!${NC}"

echo -e "${CYAN}Running ESlint validation...${NC}"
npx eslint --fix --ext .ts,.tsx .

# $? stores exit value of the last command
if [ $? -ne 0 ]; then
 echo -e "${RED}ESlint failed! :(, please review, update and re-run git add files${NC}"
 exit 1
fi

echo -e "${GREEN}ESlint validation Done!${NC}"

echo -e "${CYAN}Building project...${NC}"

cp -u .env.local .env.production
yarn build

# $? stores exit value of the last command
if [ $? -ne 0 ]; then
 echo -e "${RED}Build process failed! :(, please review, update and re-run git add files${NC}"
 exit 1
fi

echo -e "${GREEN}Building Done!${NC}"