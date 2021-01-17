#!/usr/bin/env bash

LRED='\033[1;31m'
LGREEN='\033[1;32m'
LCYAN='\033[1;36m'
NC='\033[0m'

printf "${LCYAN}Checking git status...${NC}"
if output=$(git status --porcelain) && [ -n "$output" ]; then
  printf " ${LRED}error${NC}\n"
  printf "\n${LRED}[ERROR] You should run yarn and yarn sort before committing.${NC}\n"
  exit 1
else
  printf " ${LGREEN}OK${NC}\n"
fi