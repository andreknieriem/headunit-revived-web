---
title: Wireless Connection
description: Learn how to connect your phone wirelessly to Open Headunit.
---

Open Headunit allows you to connect your phone wirelessly via WiFi. In addition to standard network connections, the app now supports **Wi-Fi Direct (P2P)** for a seamless experience without needing a shared hotspot.

## Prerequisites

*   **Phone:** Android 10 or higher with Android Auto installed.
*   **Head Unit (Tablet):** Android 4.1+ device with WiFi.
*   **Network Options:**
    *   **Wi-Fi Direct (P2P):** (v2.0.0+) Best for stability. No hotspot required.
    *   **Shared WiFi:** Both devices connected to the same external router or mobile hotspot.

:::caution[Android Auto 17.4+ Compatibility Notice]
Starting with **Android Auto 17.4**, Google has restricted third-party background wireless triggers, breaking automated launch via **Wireless Helper** and third-party launchers, as well as classic **Self-Mode**.

For devices running Android Auto 17.4 or newer:
- **Self-Mode:** The **only remaining solution** is starting the native **Headunit Server** from Android Auto Developer Settings.
- **Wireless Connection:** Use a **USB Wireless Dongle**, **Native Mode**, or the **Headunit Server**.
- **Wireless Helper:** Continues to work reliably on devices running Android Auto **17.3 or older**.
:::

## Connection Modes

### 1. USB Wireless Dongle (Most Reliable)
A dedicated hardware USB Wireless Android Auto Dongle plugged into your headunit / tablet provides hardware-level plug-and-play without relying on Android Auto startup workarounds.

### 2. Native Mode (Wi-Fi Direct & Headunit Hotspot)
Open Headunit implements the native Android Auto wireless handshake protocol directly.
* Supports **Wi-Fi Direct (P2P)** for direct peer-to-peer connection without an external network.
* Supports **Headunit Hotspot** mode where the headunit acts as the AP.
* Configure in Open Headunit Settings under **Android Auto Mode** -> **Native Mode**.

### 3. Headunit Server (Developer Mode - Required for Self-Mode on AA 17.4+)
Uses the built-in Android Auto developer server running on the phone (or on the headunit itself for Self-Mode).

**How to setup:**
1. **Enable Developer Mode:** Open Android Auto Settings on your phone -> tap **Version** 10 times.
2. **Start Server:** Tap the three-dot menu in the top right corner and select **Start headunit server**.
3. **Connect:** In Open Headunit, tap the **WiFi** dashboard button (or select Self-Mode).

### 4. Wireless Helper (for Android Auto up to v17.3)
Our companion app triggers projection automatically when entering your vehicle.
* **Compatibility:** Android Auto **v17.3 and below**.
* **Download:** [Wireless Helper on Google Play](https://play.google.com/store/apps/details?id=com.andrerinas.wirelesshelper)
* **Setup:** Set Open Headunit to **Helper Mode**, connect both devices to the same network or Wi-Fi Direct group, and start the service in Wireless Helper.

---

## Technical Setup: Native Headunit Server
To use the **Headunit Server**, enable the native developer server on your phone:

1. Open **Android Auto Settings**.
2. Tap **Version** 10 times to enable Developer Settings.
3. Click the three dots (top right) -> **Start Headunit Server**.

## Troubleshooting

*   **H.265 Artifacts:** Ensure you are running **v2.1.0** or newer. We've implemented 4MB video buffers and VPS/SPS/PPS parsing to fix artifacts on high-bitrate hardware.
*   **Connection Drops:** Use **5GHz WiFi** if possible to ensure enough bandwidth for the video stream.
*   **Audio Issues:** Enable **Audio Sink** in Settings to hear sound through the tablet.
