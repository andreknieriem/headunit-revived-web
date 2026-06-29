---
title: Application Settings
description: Detailed explanation of all configuration options in Headunit Revived.
---

This page describes the various configuration options available in the Headunit Revived application.

## General Settings

### Auto-Optimization Wizard (v2.0.0+)
The fastest way to configure your device. This tool scans your hardware and display to automatically recommend the optimal **Resolution**, **DPI**, and **Video Codec**.
- **How to use:** Click the "Auto-Optimize Settings" button at the top of the General settings list.
- **Wizard steps:** Select your approximate display size and preferred orientation.

### Language
Manually select the application language. Headunit Revived supports 15+ languages including English, German, Spanish, French, Italian, Portuguese, and more.

### Wireless Mode (v2.2.0+)
Defines how the app handles wireless connections.
*   **Helper Mode (Recommended):** The tablet waits for a trigger from our companion app, **Wireless Helper**. Supports multiple strategies including Wi-Fi Direct (P2P), Shared Wi-Fi, and Google Nearby (Beta).
    *   **Configure Wireless Helper QR (v3.0.0+):** Generates and displays a QR code containing the tablet's active Hotspot credentials. Scan this QR code using the companion Wireless Helper app on your phone for instant, automatic configuration.
*   **Native AA (Beta):** Implements the official Android Auto Wireless protocol. Allows phones to find the tablet directly in the Android Auto settings without a helper app.
*   **Headunit Server:** 
    *   **Manual:** You must manually start the server on the phone.
    *   **Auto:** Tablet actively searches for phones running the AA Headunit Server (Port 5277).
    *   **Auto-Enable Hotspot:** (Experimental) Automatically enables the tablet's hotspot when searching in Auto mode.
*   **Listen for USB Devices (v2.2.2+):** Toggles the Android system USB permission prompt. Decoupled from Auto-Start to prevent annoying popups for non-AA devices while allowing reliable detection of phones.
    *   **USB Whitelisting (v3.0.0+):** Automatically ignores Apple devices (Vendor ID `0x05AC` / iPhones) and other incompatible USB peripherals to prevent interruptions during connection setup.
*   **Use Native USB Driver (v3.1.0+):** Uses the `libusb` native library directly for USB communication instead of the standard Android OS USB accessory stack. This resolves connection instability and random USB disconnects on specific head units and cables. Disable it to fallback to the default Android USB API.

### Auto-Start & Connectivity
*   **Auto-Connect Priority:** Reorder connection methods via drag-and-drop and enable/disable them individually:
    *   **Last Session:** Automatically reconnects to the last used device (USB or WiFi).
    *   **Self-Mode:** Launches local Android Auto simulation.
    *   **Single USB:** Automatically connects if only one compatible USB device is found.
*   **Auto-Start on Bluetooth:** Automatically opens the app when a specific Bluetooth device (e.g., your car) is connected.
*   **Auto-Start on WiFi (v2.2.2+):** Automatically opens the app and attempts to connect when a specific WiFi SSID is detected. Includes a warning for Android 8+ background restrictions.
*   **Kill on Disconnect (v2.2.0+):** Gracefully closes the app and background service when the phone is disconnected. Prevents battery drain when not in use.

### Backup & Reset (v3.0.0+)
Allows you to backup, restore, or clear your application settings configuration:
*   **Export Settings:** Exports your current configuration to a JSON file in your device's storage.
*   **Import Settings:** Restores configurations from a previously exported JSON file. (Note: Restoring settings that impact the video or audio projection layer will automatically trigger a session restart).
*   **Reset Settings:** Clears all custom configurations, cached data, and auto-connection states, reverting the app to factory defaults.


## Dark Mode & UI Themes

### Application Theme (UI)
Choose how the app interface itself looks:
*   **Clear / Dark / Extreme Dark:** Static themes.
*   **Auto (Time / GPS):** Switches based on sunrise/sunset calculated from your last location.
*   **Light Sensor:** Switches based on hardware ambient light. Includes a configurable **Threshold Slider**.
*   **Screen Brightness:** Monitors system display brightness. Useful for headunits that dim automatically when headlights are turned on.
*   **Car Headlight Signal (ILL+) (v3.0.0+):** Switches between day/night theme automatically based on the vehicle headlight signal state (receives a binary illumination signal from the car's hardware integration).
*   **Manual Time:** Set specific start and end times for the theme switch.

### Visual Customization
*   **Monochrome Icons:** Switches app icons to a simplified black and white style.
*   **Extreme Dark Mode:** Forces a pitch-black background (perfect for OLED screens) for automatic modes.
*   **Gradient Background:** Enables a subtle gradient effect on menus (Disabled when Extreme Dark is active).

### Android Auto Night Mode
Controls the theme of the projected Android Auto interface. It supports the same modes as the App Theme (Auto, Sensor, Brightness, Headlight Signal (ILL+), Manual).
*   **AA Monochrome (v2.0.0+):** Desaturates the colors of the Android Auto projection during night mode to reduce glare while driving. Features a **Desaturation Level** slider (0% to 100%).

## Navigation & Safety

### GPS for Navigation
If enabled, the tablet's GPS data is shared with the phone to improve navigation accuracy and save phone battery.

### Navigation Provider (v1.15.0+)
Headunit Revived registers as a system-wide navigation app (`category: maps`). This allows it to be recognized by vehicle systems (like BMW iDrive) as the primary nav app and display directions in native instrument clusters or HUDs.

### Fake Speed (v2.2.0+)
If enabled, the app reports a static speed of 10 km/h to the phone. This bypasses "Video Lock" or "Safety Lock" restrictions in many Android Auto apps (like YouTube or video players) while driving.

## Graphic & Video Settings

### Screen Mode (v2.0.0+)
Choose how system bars should be handled during projection:
- **Normal:** Both status and navigation bars remain visible.
- **Immersive:** Both bars are hidden. 
- **Hide Status Bar Only:** Recommended if your headunit buttons overlap with the immersive view.
- **Immersive (Avoid Notch):** Special mode for modern devices with hole-punch or notch cameras.

### Stretch to Fill (v2.1.0+)
Forces the video projection to fill the entire available screen area, ignoring the original aspect ratio. Requires a session restart.

### Forced Scale (v2.2.0+)
(SurfaceView only) Manually forces the scaling logic to use the provided dimensions. Useful for displays with non-standard hardware scaling.

### Custom Insets (Margins)
Manually adjust Top, Bottom, Left, Right margins (0 to 500px). **Crucial for buggy headunits** where system bars overlay the app buttons. Includes a live preview directly in the settings UI.

### Custom Loading Screen (v3.0.0+)
Customize the loading screen that appears while Android Auto is initializing:
- **Media Path:** Select a custom image, GIF, or video file from your device.
- **Show Loading Text:** Toggle the visibility of the initialization progress text.
- **Keep Aspect Ratio:** Force the selected media to preserve its native aspect ratio instead of stretching.
- **Scale (v3.1.0+):** Adjust the size/scaling of the loading screen media using a custom scale slider (e.g., to adjust the image or video to fit perfectly on different screens).
- **Loop Video:** (If video selected) Continuously loops the video while loading.

### Resolution & DPI
*   **Resolution:** 480p up to **2160p (4K)**.
*   **Note:** 1440p+ requires H.265 (HEVC) support and a powerful chipset.
*   **DPI:** Controls the size of icons and text. Set to `0` for automatic detection.

### Video Codec & Performance
*   **Video Codec:** Auto, H.264 (Standard), or H.265 (Better quality). 
*   **H.265 Optimization:** Features dynamic buffer sizing (2MB for <=1080p, 8MB for 4K) to prevent crashes on Allwinner/Rockchip chipsets while maintaining 4K performance.
*   **FPS Limit:** Toggle between 30 FPS (stable) and 60 FPS (smooth).
*   **View Mode:** Select between SurfaceView (Efficient, Default), TextureView (Flexible), or GLES20 (Legacy/Hardware fix).

## Audio & Input Settings

### Enable Audio Sink
If enabled, the Head Unit acts as a speaker. Disable if you want the phone to handle audio output directly (e.g., via Bluetooth to the car speakers).

### Audio Volume & Streams (v2.2.2+)
*   **Separate Audio Streams:** If enabled, the app uses independent Android audio streams for Media, Assistant, and Navigation.
*   **Volume Offsets:** Separate volume gain controls (0% to 200%) for each stream using vertical sliders.
*   **Static Audio Focus (v2.3.0+):** If enabled, the app suppresses system-level audio focus requests. This allows external sources (like a vehicle's built-in FM Radio) to play audio concurrently without being muted or interrupted by the app. Includes **Software-based Ducking** which temporarily dims the media volume by 60% when a navigation or assistant prompt plays.
*   **Audio Mixer (v2.3.1+):** Automatically mixes media, navigation, and assistant audio channels in software when Static Audio Focus is enabled, preventing system-level audio routing conflicts on Chinese head units.

### Audio Latency & Stability (v2.2.0+)
*   **Audio Latency Multiplier:** Adjusts the internal audio buffer size. 
    *   **Lower (1x-2x):** Less lag, better for voice commands.
    *   **Higher (4x-8x):** Less stuttering on unstable WiFi connections.
*   **Audio Queue Capacity:** Limits the number of audio chunks waiting to be processed. Prevents audio from drifting further behind when the network is slow (Backpressure).

### Media Integration (v2.2.0+)
*   **Sync Media Session AA Metadata:** Mirrors the phone's "Now Playing" information (Title, Artist, Duration, Album Art) to the tablet's system media session and media notification. Useful for showing current track info on system dashboards or lock screens.

### Microphone Input
*   **Input Source:** Default, Microphone, Voice Recognition, or **Voice Communication** (Recommended for Echo Cancellation). Supports **Bluetooth SCO** for external mics.
*   **Voice Processing (v2.2.2+):** Supports hardware-level **Noise Suppression**, **Automatic Gain Control**, and **Acoustic Echo Cancellation** (AEC).
*   **Sample Rate:** 16kHz up to 48kHz.
*   **Use AAC Audio:** (Experimental) Uses compressed audio to save WiFi bandwidth.

### Input Controls
*   **Keymap:** Map physical keys (steering wheel, knobs) to AA commands. Supports 17+ proprietary steering wheel protocols.
*   **Enable Rotary:** Enables support for iDrive-style rotary controllers and trackpads.

## Exit & PiP (v2.2.0+)

### Picture-in-Picture (PiP)
Fully supported for Android 8.0+. Allows you to keep Android Auto visible in a small window while using other apps (like the original car radio or a map app).

### Multi-Option Exit Dialog
Triggered via the back button or a **2-finger edge gesture** (swipe from left). Offers quick access to:
*   **Stop Connection**
*   **Enter PiP**
*   **Move to Background**

## Debug Settings

### Logging System
*   **Log Level:** Adjust verbosity (Info, Debug, Verbose).
*   **Log Source (v3.0.0+):** Choose the backend source for logs:
    *   **Logcat:** Standard Android system log buffer. Requires setting up ADB permissions on newer Android versions.
    *   **Direct File:** Writes application events directly to a log file. Bypasses logcat permission checks, enabling hassle-free logging on modern Android versions.
*   **Log Capture:** Real-time capture of system and AAP logs.
*   **Export Logs:** Save logs to a public folder to share with developers for troubleshooting.

### Show FPS Counter
Displays a real-time overlay with current FPS, bitrate, and decoder latency.

### Use Native SSL
Uses native OpenSSL (via JNI) for encryption. Mandatory for Android 15 and highly recommended for performance on older chipsets. 
