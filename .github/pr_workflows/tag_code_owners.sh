#!/bin/bash

echo "Tagging code owners..."
# Set the path to the project root directory
PROJECT_DIR="../../"

# Get the current branch name
current_branch=$(git rev-parse --abbrev-ref HEAD)

# Generate the list of touched files
touched_files=$(git diff --name-only master..$current_branch)

# Get the code owners from the CODEOWNERS file
code_owners=""

while read -r file; do
    owners=$(grep -E "^\*\s|$file" "${PROJECT_DIR}.github/CODEOWNERS" | awk '{for (i=2; i<=NF; i++) print $i}')
    for owner in $owners; do
        if [[ $owner == @* ]] && [[ ! $code_owners =~ $owner ]]; then
            code_owners="${code_owners}${owner} "
        fi
    done
done <<< "$touched_files"

# Remove any trailing space
code_owners=$(echo $code_owners | sed 's/ $//')

echo "Code owners: $code_owners"