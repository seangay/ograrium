---
title: CA Mover Tuning Plugin
description: A simple plugin to fine-tune the operation of the mover script
---

This plugin was installed after I tried to copy a large amount of data across onto the array. That is when I learned that Unraid does nothing to actually manage the free space on your cache.

In my case I quickly filled up the 1TB cache which the system didn't really like. Then the mover crashed and was reporting that it was continuously running, despite it actually doing nothing.

```
plugin: installing: ca.mover.tuning.plg
Executing hook script: pre_plugin_checks
plugin: downloading: ca.mover.tuning.plg ... done

Executing hook script: pre_plugin_checks


7.0.1
plugin: downloading: ca.mover.tuning-2025.03.30-x86_64-1.txz ... done


+==============================================================================
| Installing new package /boot/config/plugins/ca.mover.tuning/ca.mover.tuning-2025.03.30-x86_64-1.txz
+==============================================================================

Verifying package ca.mover.tuning-2025.03.30-x86_64-1.txz.
Installing package ca.mover.tuning-2025.03.30-x86_64-1.txz:
PACKAGE DESCRIPTION:
Package ca.mover.tuning-2025.03.30-x86_64-1.txz installed.

Backing up current /usr/local/sbin/mover binary
Installing tuned mover script
Cleaning lock and stop files
Fixing permissions
Creating file /boot/config/plugins/ca.mover.tuning/ca.mover.tuning.cfg with default configuration.

----------------------------------------------------
ca.mover.tuning has been installed.
Copyright 2018, Andrew Zawadzki
Version: 2025.03.30
----------------------------------------------------

plugin: ca.mover.tuning.plg installed
Executing hook script: post_plugin_checks
```
