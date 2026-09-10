---
title: Automation (Intents)
description: Trigger connections via Android Intents.
---

For power users, Open Headunit supports triggering a wireless connection attempt using an Android Intent or App Shortcuts. This is ideal for automation tools like **Tasker**, **MacroDroid**, **Samsung Modes & Routines**, or via **ADB**.

## App Shortcuts (Easiest)
Starting with **v1.15.0**, Open Headunit supports **Static App Shortcuts**.
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

## Broadcast Intents (v3.4.0+ Recommended)

Starting with **v3.4.0**, Open Headunit provides a dedicated **Broadcast Receiver** (`AutomationReceiver`). Sending commands as a broadcast eliminates background activity start restrictions on Android 10+ and allows automation apps like **Tasker** and **MacroDroid** to operate without needing the "Display over other apps" permission.

- **Package:** `com.andrerinas.headunitrevived`
- **Receiver Class:** `com.andrerinas.openheadunit.automation.AutomationReceiver`
- **Action Prefix:** `com.andrerinas.openheadunit.` (legacy prefix `com.andrerinas.headunitrevived.` is also supported as an alias)

### Available Actions

| Action (`com.andrerinas.openheadunit.`) | Extras | Description |
| :--- | :--- | :--- |
| `ACTION_CONNECT` | `ip` (String, optional), `no_ui` (Boolean) | Connects to Android Auto. If `ip` is specified, opens session to head unit server on port 5277. Without `ip`, checks USB. |
| `ACTION_DISCONNECT` | | Safely ends the active projection session. |
| `ACTION_START_SELF_MODE` | `no_ui` (Boolean) | Starts Self-Mode (projects device onto itself). |
| `ACTION_STOP_SERVICE` | | Ends session and stops all background services. `ACTION_EXIT` is an accepted alias. |
| `ACTION_SET_NIGHT_MODE` | `state` (`day`, `night`, or `auto`) | Directly switches UI theme. |
| `ACTION_QUERY_STATE` | | Queries current projection state (returns JSON via ordered broadcast reply). |
| `ACTION_START_WIRELESS` | | Arms the configured wireless mode. |
| `ACTION_STOP_WIRELESS` | | Stops wireless listening mode. |
| `ACTION_START_WIRELESS_SCAN` | | Initiates a single wireless network discovery pass. |

> **Note:** Verbs that configure settings remotely require the **"Allow external configuration"** toggle to be enabled in Settings → Developer Diagnostics.

## URI Schemes & Activity Intents

For launcher shortcuts, simple Tasker tasks, or browser links, the standard activity deep-links remain fully supported:

### URI Schemes
- **Connect to IP:** `headunit://connect?ip=<PHONE_IP>`
- **Connect (Last Device):** `headunit://connect`
- **Disconnect:** `headunit://disconnect`
- **Exit App:** `headunit://exit`
- **Set Night Mode:** `headunit://nightmode?state=day|night|auto`

## Examples

### ADB Broadcast Command (Connect)
```bash
adb shell am broadcast \
  -n com.andrerinas.headunitrevived/com.andrerinas.openheadunit.automation.AutomationReceiver \
  -a com.andrerinas.openheadunit.ACTION_CONNECT \
  --es ip "192.168.1.25"
```

### ADB Broadcast Command (Query State)
```bash
adb shell am broadcast \
  -n com.andrerinas.headunitrevived/com.andrerinas.openheadunit.automation.AutomationReceiver \
  -a com.andrerinas.openheadunit.ACTION_QUERY_STATE
```

### ADB Deep Link (Activity)
```bash
# Force night mode
adb shell am start -a android.intent.action.VIEW -d "headunit://nightmode?state=night"

# Exit app
adb shell am start -a android.intent.action.VIEW -d "headunit://exit"
```
