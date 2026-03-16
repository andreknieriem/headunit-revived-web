---
title: Automation (Intents)
description: Trigger connections via Android Intents.
---

For power users, Headunit Revived supports triggering a wireless connection attempt using an Android Intent or App Shortcuts. This is ideal for automation tools like **Tasker**, **MacroDroid**, **Samsung Modes & Routines**, or via **ADB**.

## App Shortcuts (Easiest)
Starting with **v1.15.0**, Headunit Revived supports **Static App Shortcuts**.
- **Connect:** Automatically connects to the last known device.
- **Disconnect:** Safely ends the current session.
- **Exit App:** Ends the session, stops background services, and closes the app completely (v2.0.1+).
- **Mode: Day / Night / Auto:** Directly controls the display theme.

These shortcuts are natively detected by **Samsung Modes & Routines** and can be added as widgets to your home screen.

## URI Schemes

### Connect to IP
`headunit://connect?ip=<PHONE_IP>`

### Disconnect Session
`headunit://disconnect`

### Exit App
`headunit://exit`

### Set Night Mode
`headunit://nightmode?state=<VALUE>`
- **Values:** `day`, `night`, `auto` (restores automatic calculation)

## Intent Actions
If your automation app prefers standard Intent Actions over URIs, you can use:

- **Connect:** `com.andrerinas.headunitrevived.ACTION_CONNECT`
- **Disconnect:** `com.andrerinas.headunitrevived.ACTION_DISCONNECT`
- **Exit App:** `com.andrerinas.headunitrevived.ACTION_STOP_SERVICE`
- **Night Mode:** `com.andrerinas.headunitrevived.ACTION_SET_NIGHT_MODE`
    - Requires a String extra named `state` with value `day`, `night`, or `auto`.

**Note:** These are Activity-based intents targetting the `AutomationActivity`.

## Examples

### ADB Command (Connect)
```bash
adb shell am start -a android.intent.action.VIEW -d "headunit://connect?ip=192.168.1.25"
```

### ADB Command (Night Mode)
```bash
# Force night mode
adb shell am start -a android.intent.action.VIEW -d "headunit://nightmode?state=night"
```,old_string:

### Automation Apps
Use the "Open Link" or "Send Intent" action in your preferred automation app with the URI scheme above. Ensure you replace `<PHONE_IP>` with the actual static IP of your phone.
