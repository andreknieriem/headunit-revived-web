---
title: Automation (Intents)
description: Trigger connections via Android Intents.
---

For power users, Headunit Revived supports triggering a wireless connection attempt using an Android Intent. This is ideal for automation tools like **Tasker**, **MacroDroid**, or via **ADB**.

## URI Scheme
`headunit://connect?ip=<PHONE_IP>`

## Examples

### ADB Command
```bash
adb shell am start -a android.intent.action.VIEW -d "headunit://connect?ip=192.168.1.25"
```

### Automation Apps
Use the "Open Link" or "Send Intent" action in your preferred automation app with the URI scheme above. Ensure you replace `<PHONE_IP>` with the actual static IP of your phone.
