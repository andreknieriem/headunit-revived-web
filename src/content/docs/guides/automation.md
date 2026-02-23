---
title: Automation (Intents)
description: Trigger connections via Android Intents.
---

For power users, Headunit Revived supports triggering a wireless connection attempt using an Android Intent. This is ideal for automation tools like **Tasker**, **MacroDroid**, or via **ADB**.

## URI Schemes

### Connect to IP
`headunit://connect?ip=<PHONE_IP>`

### Disconnect Session (New in v1.14.3)
`headunit://disconnect`

## Examples

### ADB Command (Connect)
```bash
adb shell am start -a android.intent.action.VIEW -d "headunit://connect?ip=192.168.1.25"
```

### ADB Command (Disconnect)
```bash
adb shell am start -a android.intent.action.VIEW -d "headunit://disconnect"
```

### Automation Apps
Use the "Open Link" or "Send Intent" action in your preferred automation app with the URI scheme above. Ensure you replace `<PHONE_IP>` with the actual static IP of your phone.
