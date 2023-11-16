THIS_FILE := $(lastword $(MAKEFILE_LIST))
.PHONY: up ps logs start stop stats
up: # build + start
	docker compose up -d $(c)
ps:
	docker compose ps
logs: # make logs c=db
	docker compose logs --tail=100 -f $(c)
start:
	docker compose start $(c)
stop:
	docker compose stop $(c)
stats:
	docker stats ${c}