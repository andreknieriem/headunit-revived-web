---
title: Wireless Connection
description: Learn how to connect your phone wirelessly to Headunit Revived.
---

HeadUnit Revived allows you to connect your phone wirelessly via WiFi. In **Version 1.12.0**, we introduced a **Wireless Mode** selector to make connection management more robust and automatic.

## Prerequisites

*   **Phone:** Android 10 or higher with Android Auto installed.
*   **Head Unit (Tablet):** Android 4.1+ device with WiFi.
*   **Network:** Both devices must be on the same network (Hotspot or WiFi).

## Connection Modes

### 1. Helper Mode (Recommended)
This is the most reliable method. It uses a launcher utility on your phone to trigger the connection automatically.

*   **Wireless Helper (New):** [GitHub Repo](https://github.com/andreknieriem/wireless-helper) | [Play Store Beta](https://play.google.com/apps/testing/com.andrerinas.wirelesshelper)
*   **How to setup:**
    1. Set **Wireless Mode** to **Helper Mode** in Headunit Revived settings.
    2. Start the service in your helper app on the phone.
    3. The phone will find the headunit and launch Android Auto instantly.

### 2. Auto-Scan Mode
The headunit actively searches for phones running the native Android Auto "Headunit Server".

1. **Phone:** Start the **Headunit Server** in Android Auto Developer Settings.
2. **Head Unit:** Set **Wireless Mode** to **Auto-Scan Mode**.
3. Projection will start automatically once the network is detected.

### 3. Manual Mode
No background scanning. Useful if you want full control or if you are using specific network tools.

1. Set **Wireless Mode** to **Manual**.
2. Go to the WiFi dashboard in the app and manually click **Scan** or add an IP.

---

## Technical Setup: Native Headunit Server
If you are not using a helper app, you must manually start the server on your phone:

1. Open **Android Auto Settings**.
2. Tap **Version** 10 times to enable Developer Settings.
3. Click the three dots (top right) -> **Start Headunit Server**.

:::important
Native mode may fail on some **Phone Hotspots** (10.x.x.x networks). If you encounter timeouts, we highly recommend switching to **Helper Mode**.
:::