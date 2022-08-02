---
layout: post
title:  "Windows Service stuck in status \"Starting\""
description: How to kill a Windows Service which is stuck in status \"Starting\"
date:   2018-02-19 22:30:00 +0200
---

If you develop in the .Net Ecosystem and have create a Windows Service, you might have come around this issue: One services doesn't work like it should. You want to restart it, but you discover, that it is stuck in either the state "Starting" or "Stopping". Unfortunately, all options are greyed out and you can neither start nor stop the service via the GUI.

So how can we resolve this issue and get the service back up and running? Fortunately, there is a solution which has been found long ago (see further links) and is not that hard to execute. All you need to do is find the process id (PID) of the offending service and kill it via the command line.

Find out the PID of the service. Just make sure to use the actual service name and not the display name!

```bash
> sc queryex <SERVICE_NAME>
```

This will output some information about the service, including the process id.

```
C:\Users\Thomas>sc queryex Foo.Services.Bar

SERVICE_NAME: Foo.Services.Bar
        TYPE               : 10  WIN32_OWN_PROCESS
        STATE              : 2 0 START_PENDING
                                (NOT_STOPPABLE, NOT_PAUSABLE, IGNORES_SHUTDOWN)
        WIN32_EXIT_CODE    : 0  (0x0)
        SERVICE_EXIT_CODE  : 0  (0x0)
        CHECKPOINT         : 0x0
        WAIT_HINT          : 0x0
        PID                : 3976
        FLAGS              :
```

Kill the service. Make sure you have sufficient privileges to kill the service.

```bash
> taskkill /f /pid 3976
SUCESS: The process with PID 3976 has been terminated.
```

This will kill the service completely and you should be able to restart it again.

Read up on this topic:
* [How to recover from Windows service that is stuck in starting or stopped state](https://www.schneider-electric.com/en/faqs/FA239679/)
* How to kill a windows service stuck on stopping or starting (support.minisoft.com/index.php/how-to-kill-a-windows-service-stuck-on-stopping-or-starting/ **Not Available anymore**)