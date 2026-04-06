---
title: Home Lab Overview
description: "Overview and entry point for the home lab documentation, including Unraid, Docker containers, and maintenance playbooks."
---

# Home Lab Overview

Welcome! This section documents the setup, maintenance, and recovery procedures for our home lab. The goal is to ensure that, if needed, anyone (including my kids) can understand, maintain, and restore the core services running here.

## What is the Home Lab?

- **Unraid server**: The main host, running a variety of Docker containers and managing storage.
- **Docker containers**: Services like Immich (photo management), the Arr suite (Radarr, Sonarr, Lidarr, Readarr), and more.
- **Backups & Recovery**: Steps to restore data and services in case of hardware or software failure.

## Quick Start

1. **Access Unraid**: Log in to the Unraid web UI (see [Unraid page](./unraid.md) for details).
2. **Check Docker containers**: Use the Unraid UI to view, start, or stop containers. See [Containers](./containers/index.md).
3. **Restore from backup**: Follow the [Playbook](./playbook.md) for disaster recovery.

## Documentation Structure

- [Unraid Server](./unraid.md): Hardware, configuration, and management basics.
- [Containers](./containers/index.md): Overview of all running containers and their purposes.
  - [Immich](./containers/immich.md): Photo management setup and restore.
  - [Arr Suite](./containers/arr-suite.md): Media automation services.
- [Playbook](./playbook.md): Step-by-step recovery and maintenance guide.

## Where to Find Credentials

> **Note:** Credentials and sensitive information are not stored in this repository. See the family password manager for all logins and keys.

## Who to Contact

- [Your Name] (primary maintainer)
- [Trusted family/friend contact]

---

_This documentation will grow as the home lab evolves. Please keep it up to date after any major changes!_
