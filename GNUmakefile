OWNER=patrickcping
REPO=pingone-js-sdk
VERSION=0.0.1

generate: generate-core generate-modules

generate-core:
	@./scripts/generate.sh $(VERSION)

generate-modules:
	@./scripts/generate-all.sh $(OWNER) $(REPO)

.PHONY: generate generate-core generate-modules