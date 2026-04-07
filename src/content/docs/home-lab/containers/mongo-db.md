---
title: Mongo DB
description: A NoSQL database
---

A NoSQL database

- Github: [linuxserver.io](https://github.com/linuxserver/docker-sabnzbd/pkgs/container/sabnzbd)
- Docker hub: [Docker Official Image](https://hub.docker.com/_/mongo/)
- Project page: https://www.mongodb.com/
- Support Forum: https://forums.unraid.net/topic/54895-support-jasonbean-mongodb/

## Intall Notes:

- The image is "official" but you will see the name `jason-bean` in docs for it
- A specific version was used as mongoDB hates major updates. Currently configured to use `mongo:8.0-rc`
- Need to outline what services are backed by this container and how many instances that we may have. We currently havea it set up for:
  - [Unifi network application](unifi-network-application.md) - TODO add detail in connections
