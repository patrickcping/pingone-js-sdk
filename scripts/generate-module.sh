#!/usr/bin/env bash

if [ ! -d "../$3" ]; then
    echo "Module $3 not found. Run this file from the module directory itself. Skipping..."

else
    echo "Module $3 found.  Running generate.."

    # Generate from OpenAPI
    version=$(head -n 1 .version)

    if [[ -f "generate/pingone-$3.yml" ]]; then \
        echo "==> Running codegen-$3..."
        openapi-generator-cli version-manager set 7.4.0
        openapi-generator-cli generate -i generate/pingone-$3.yml -g javascript --additional-properties=usePromises=true,enumClassPrefix=true,apiNameSuffix=Api -o . --git-repo-id $2 --git-user-id $1 --http-user-agent \"pingtools PingOne-JS-SDK-$3/$version\"; \

        npm run prepare

    else \
        echo "pingone-$3.yml missing.  Skipping"; \
    fi
fi
