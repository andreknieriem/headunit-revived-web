---
title: Wireless Connection
description: Learn how to connect your phone wirelessly to Headunit Revived.
---

HeadUnit Revived allows you to connect your phone wirelessly via WiFi. In addition to standard network connections, the app now supports **Wi-Fi Direct (P2P)** for a seamless experience without needing a shared hotspot.

## Prerequisites

*   **Phone:** Android 10 or higher with Android Auto installed.
*   **Head Unit (Tablet):** Android 4.1+ device with WiFi.
*   **Network Options:**
    *   **Wi-Fi Direct (P2P):** (v2.0.0+) Best for stability. No hotspot required.
    *   **Shared WiFi:** Both devices connected to the same external router or mobile hotspot.

## Connection Modes

### 1. Helper Mode (Recommended)
This is the most reliable way to connect. It uses the **Wireless Helper** app on your phone to trigger the connection automatically.

*   **[Wireless Helper](https://github.com/andreknieriem/wireless-helper)** 
    *   **Multi-Auto Support (v1.5.0):** Add multiple WiFi SSIDs and multiple P2P device names.
    *   **Hybrid Trigger:** Reliable launch even on Gearhead 16.4+ (Android 14/15).
    *   **Zero-Config:** Automatically finds the headunit via NSD or P2P.

**How to setup:**
1. Set **Wireless Mode** to **Helper Mode** in Headunit Revived settings.
2. Open the **Wireless Helper** app on your phone and start the service.
3. The phone finds the tablet and launches Android Auto automatically.

### 2. Auto-Scan Mode
The headunit actively scans your network for phones running the native Android Auto "Headunit Server".

1. **Phone:** Start the **Headunit Server** in Android Auto Developer Settings.
2. **Head Unit:** Set **Wireless Mode** to **Auto-Scan Mode**.
3. Projection will start automatically once the network is detected.

### 3. Manual Mode
Classic manual connection. Tap the **WiFi** button on the dashboard, then click **Scan** or enter the phone's IP manually.

---

## Technical Setup: Native Headunit Server
To use **Auto-Scan** or **Manual Mode**, you must enable the native server on your phone:

1. Open **Android Auto Settings**.
2. Tap **Version** 10 times to enable Developer Settings.
3. Click the three dots (top right) -> **Start Headunit Server**.

:::important
Native mode is often blocked by mobile hotspots. We highly recommend using **Helper Mode** for the best experience.
:::

## Troubleshooting

*   **H.265 Artifacts:** Ensure you are running **v2.1.0** or newer. We've implemented 4MB video buffers and VPS/SPS/PPS parsing to fix artifacts on high-bitrate hardware.
*   **Connection Drops:** Use **5GHz WiFi** if possible to ensure enough bandwidth for the video stream.
*   **Audio Issues:** Enable **Audio Sink** in Settings to hear sound through the tablet.
