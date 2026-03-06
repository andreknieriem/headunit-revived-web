---
title: Wireless Helper
description: Use our companion app to automate your wireless connection.
---

The **Wireless Helper** is the most reliable way to establish a wireless connection between your phone and Headunit Revived. It automates the handshake process so you don't have to touch your phone when you get into the car.

## Recommended: Wireless Helper

We developed the **Wireless Helper** specifically for Headunit Revived. It is lightweight, modern, and supports both mDNS (Zero-Config), Wi-Fi Direct Auto-Connect, and Bluetooth auto-start.

### Setup
1. **Head Unit:** Go to Settings -> Wireless Mode and select **Helper Mode**.
2. **Phone:** Install [Wireless Helper](https://play.google.com/store/apps/details?id=com.andrerinas.wirelesshelper) from the Google Play Store.
3. **Configure:** In Wireless Helper, grant permissions and optionally select your car's Bluetooth for auto-start.
4. **Result:** Just start your car, and Android Auto will appear on your tablet automatically.

## Wi-Fi Direct Auto-Connect (P2P)

Wi-Fi Direct is the most powerful connection method because it doesn't require a shared Wi-Fi network or a manual hotspot. The app can automatically find your tablet and establish a high-speed peer-to-peer connection.

### 1. Find your Tablet's Name
Android assigns a unique name to every device for Wi-Fi Direct. You need this name so your phone knows what to look for.
- On your **Tablet** (Head Unit):
    - Go to Android **Settings**.
    - Navigate to **Wi-Fi** -> **Wi-Fi Direct** (usually found under "Advanced" or "More settings").
    - Note down the name of the device (e.g., `Android_1234` or `Car-Tablet`).

### 2. Configure Wireless Helper
- On your **Phone**:
    - Open the **Wireless Helper** app.
    - Set the **Connection Mode** to **Wi-Fi Direct**.
    - Click on **Wi-Fi Direct Device Name** and enter the name you found in step 1.
    - *Tip:* You only need to enter a part of the name (e.g., `Android`) if it's unique enough.

### 3. Initial Manual Pairing (Crucial)
For security, Android requires you to manually accept the first connection request between two devices.
- Start the service in **Wireless Helper** on your phone.
- Once the phone finds the tablet, a system dialog will appear on **both devices**.
- Accept the connection on the tablet and the phone.
- If your device offers an option like **"Always allow"** or **"Remember this device"**, make sure to check it!

### 4. Automatic Operation
After the initial pairing is done, the process is fully automated:
1. You get into the car.
2. Bluetooth connects (if configured), triggering the **Wireless Helper**.
3. The phone searches for your tablet's Wi-Fi Direct signal.
4. The devices connect automatically in the background.
5. Android Auto starts on your head unit.

---

## Alternative: Original Wireless Launcher

Headunit Revived remains compatible with the original [Wireless Launcher](https://play.google.com/store/apps/details?id=com.borconi.emil.wifilauncherforhur) app.

### Setup
1. **Head Unit:** Set Wireless Mode to **Helper Mode**.
2. **Network:** Ensure both devices are in the same WiFi network.
3. **Start:** Open the Launcher on your phone and start the service.

:::note
Wireless Helper is highly recommended for better stability and modern Android support.
:::