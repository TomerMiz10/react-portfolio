#!/bin/bash

echo "Generating PR description..."
# Set the path to the project root directory
PROJECT_DIR="../../"

# Get the current branch name
current_branch=$(git rev-parse --abbrev-ref HEAD)

# Generate the description from the commit messages
description=""

# Get the list of commits since the branch was created
commits=$(git log --format="%h %an %s" master..$current_branch)

while read -r commit; do
    commit_hash=$(echo $commit | awk '{print $1}')
    author=$(echo $commit | awk '{print $2}')
    commit_message=$(echo $commit | cut -d' ' -f3-)
    description="${description}- ${commit_message} (${commit_hash})\n"
done <<< "$commits"

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

# Replace placeholders in the template
template=$(<"${PROJECT_DIR}.github/pull_request_template.md")
template=${template//\{description\}/$description}
template=${template//\{code_owners\}/$code_owners}

# Save the generated description to a new file
echo -e "$template" > "${PROJECT_DIR}.github/PR_DESCRIPTION.md"

echo "PR description generated and saved to PR_DESCRIPTION.md"