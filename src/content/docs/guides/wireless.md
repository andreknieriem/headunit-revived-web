---
title: Wireless Connection
description: Learn how to connect your phone wirelessly to Open Headunit.
---

Open Headunit allows you to connect your phone wirelessly via WiFi. In addition to standard network connections, the app supports **Wi-Fi Direct (P2P)** for a seamless experience without needing a shared hotspot.

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
* Configure in Open Headunit Settings under **Wireless Mode** -> **Native AA**.

### 3. Headunit Server (Developer Mode - Required for Self-Mode on AA 17.4+)
Uses the built-in Android Auto developer server running on the phone (or on the headunit itself for Self-Mode).

**How to setup:**
1. **Enable Developer Mode:** Open Android Auto Settings on your phone -> tap **Version** 10 times.
2. **Start Server:** Tap the three-dot menu in the top right corner and select **Start headunit server**.
3. **Connect:** In Open Headunit, tap the **WiFi** dashboard button (or select Self-Mode).

### 4. Wireless Helper Companion App (for Android Auto up to v17.3)
The **Wireless Helper** is our companion app designed to automate the wireless connection between your phone and Open Headunit. It automates the handshake process so you don't have to touch your phone when you get into the car.

* **Compatibility:** Android Auto **v17.3 and below**.
* **Download:** [Wireless Helper on Google Play](https://play.google.com/store/apps/details?id=com.andrerinas.wirelesshelper)

#### Setup Guide
1. **Head Unit:** Go to Settings -> Wireless Mode and select **Helper Mode**.
2. **Phone:** Install **Wireless Helper** from the Play Store.
3. **Configure:** In Wireless Helper, grant permissions and optionally select your car's Bluetooth for auto-start.
4. **Result:** Just start your car, and Android Auto will appear on your tablet automatically.

#### Multi-Auto Support (v1.5.0+)
Wireless Helper supports multiple vehicles and tablets:
- **Multiple SSIDs:** Add a list of allowed Wi-Fi networks for auto-start.
- **Multiple P2P Names:** If you use different tablets in different cars, you can enter multiple target names for Wi-Fi Direct.

---

## Wi-Fi Direct Auto-Connect (P2P)

Wi-Fi Direct is the most powerful connection method because it doesn't require a shared Wi-Fi network or a manual hotspot. The app can automatically find your tablet and establish a high-speed peer-to-peer connection.

### 1. Find your Tablet's Name
Android assigns a unique name to every device for Wi-Fi Direct. You need this name so your phone knows what to look for:
- On your **Tablet** (Head Unit):
    - Go to Android **Settings**.
    - Navigate to **Wi-Fi** -> **Wi-Fi Direct** (usually found under "Advanced" or "More settings").
    - Note down the name of the device (e.g., `Android_1234` or `Car-Tablet`).

### 2. Configure Wireless Helper
- On your **Phone**:
    - Open the **Wireless Helper** app.
    - Set the **Connection Mode** to **Wi-Fi Direct**.
    - Click on **Wi-Fi Direct Device Names** and add the name you found in step 1.
    - *Tip:* The default name is `OpenHU`. You only need to enter a part of the name (e.g., `Android`) if it's unique enough.

### 3. Static BSSID / MAC Address Entry (Android 12+)
Beginning with Android 12, Google restricts access to device MAC addresses (returning `02:00:00:00:00:00` or `00:00:00:00:00:00`). If your tablet cannot auto-detect its P2P MAC address, you can manually enter the **Static BSSID** in Open Headunit settings. 

To find the tablet's Wi-Fi Direct BSSID (MAC Address) manually, use one of the following methods:

#### Method 1: Using a Wi-Fi Scanner App (Easiest)
1. Start the Wi-Fi Direct group on your tablet (OpenHU).
2. Install a free Wi-Fi Analyzer/Scanner app (such as *WiFi Analyzer* by farproc) on your **phone**.
3. Scan for nearby Wi-Fi networks in the analyzer app.
4. Locate the network starting with `DIRECT-` (e.g., `DIRECT-xx-OpenHU`). The app will display its BSSID (MAC address) right next to the SSID.

#### Method 2: From Phone Wi-Fi Connection Details
1. Manually connect your phone to the tablet's Wi-Fi Direct group once.
2. On your phone, go to **Settings -> Network & Internet -> Wi-Fi**.
3. Tap the settings gear/info icon next to the connected `DIRECT-` network.
4. Look for the **BSSID** or **Access Point MAC address** entry.

#### Method 3: Using ADB (For Developers / Power Users)
1. Connect the tablet to a computer via USB and enable USB Debugging.
2. Open a terminal/command prompt and run:
   ```bash
   adb shell ip link
   ```
3. Locate the interface named `p2p0` or `p2p-p2p0-0`.
4. The MAC address listed next to `link/ether` (e.g., `ee:2b:eb:74:e1:ec`) is your P2P BSSID.

Once found, enter this MAC address in Open Headunit Settings under **Static BSSID** (e.g. `ee:2b:eb:74:e1:ec`).

### 4. Initial Manual Pairing (Crucial)
For security, Android requires you to manually accept the first connection request between two devices:
1. Start the service in **Wireless Helper** on your phone.
2. Once the phone finds the tablet, a system dialog will appear on **both devices**.
3. Accept the connection on the tablet and the phone.
4. If your device offers an option like **"Always allow"** or **"Remember this device"**, make sure to check it!

### 5. Automatic Operation
After the initial pairing is done, the process is fully automated:
1. You get into the car.
2. Bluetooth connects (if configured), triggering the **Wireless Helper**.
3. The phone searches for your tablet's Wi-Fi Direct signal.
4. The devices connect automatically in the background.
5. Android Auto starts on your head unit.

---

## Alternative: Original Wireless Launcher

Open Headunit remains compatible with the original [Wireless Launcher](https://play.google.com/store/apps/details?id=com.borconi.emil.wifilauncherforhur) app.

### Setup
1. **Head Unit:** Set Wireless Mode to **Helper Mode**.
2. **Network:** Ensure both devices are in the same WiFi network.
3. **Start:** Open the Launcher on your phone and start the service.

---

## Troubleshooting

*   **H.265 Artifacts:** Ensure you are running **v2.1.0** or newer. We've implemented 4MB video buffers and VPS/SPS/PPS parsing to fix artifacts on high-bitrate hardware.
*   **Connection Drops:** Use **5GHz WiFi** if possible to ensure enough bandwidth for the video stream.
*   **Audio Issues:** Enable **Audio Sink** in Settings to hear sound through the tablet.
