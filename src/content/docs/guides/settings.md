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
*   **Native AA (Beta):** Implements the official Android Auto Wireless protocol. Allows phones to find the tablet directly in the Android Auto settings without a helper app.
*   **Headunit Server:** 
    *   **Manual:** You must manually start the server on the phone.
    *   **Auto:** Tablet actively searches for phones running the AA Headunit Server (Port 5277).
    *   **Auto-Enable Hotspot:** (Experimental) Automatically enables the tablet's hotspot when searching in Auto mode.

### Auto-Start & Connectivity
*   **Auto-Connect Priority:** Reorder connection methods via drag-and-drop and enable/disable them individually:
    *   **Last Session:** Automatically reconnects to the last used device (USB or WiFi).
    *   **Self-Mode:** Launches local Android Auto simulation.
    *   **Single USB:** Automatically connects if only one compatible USB device is found.
*   **Auto-Start on Bluetooth:** Automatically opens the app when a specific Bluetooth device (e.g., your car) is connected.
*   **Kill on Disconnect (v2.2.0+):** Gracefully closes the app and background service when the phone is disconnected. Prevents battery drain when not in use.

## Dark Mode & UI Themes

### Application Theme (UI)
Choose how the app interface itself looks:
*   **Clear / Dark / Extreme Dark:** Static themes.
*   **Auto (Time / GPS):** Switches based on sunrise/sunset calculated from your last location.
*   **Light Sensor:** Switches based on hardware ambient light. Includes a configurable **Threshold Slider**.
*   **Screen Brightness:** Monitors system display brightness. Useful for headunits that dim automatically when headlights are turned on.
*   **Manual Time:** Set specific start and end times for the theme switch.

### Visual Customization
*   **Monochrome Icons:** Switches app icons to a simplified black and white style.
*   **Extreme Dark Mode:** Forces a pitch-black background (perfect for OLED screens) for automatic modes.
*   **Gradient Background:** Enables a subtle gradient effect on menus (Disabled when Extreme Dark is active).

### Android Auto Night Mode
Controls the theme of the projected Android Auto interface. It supports the same modes as the App Theme (Auto, Sensor, Brightness, Manual).
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

### Resolution & DPI
*   **Resolution:** 480p up to **2160p (4K)**.
*   **Note:** 1440p+ requires H.265 (HEVC) support and a powerful chipset.
*   **DPI:** Controls the size of icons and text. Set to `0` for automatic detection.

### Video Codec & Performance
*   **Codec:** Choose between Auto, H.264 (Standard), or H.265 (Better quality). 
*   **H.265 Optimization (v2.1.0+):** Features enhanced 4MB buffers and VPS/SPS/PPS parsing to eliminate artifacts on high-bitrate 4K-capable hardware.
*   **FPS Limit:** Toggle between 30 FPS (stable) and 60 FPS (smooth).
*   **View Mode:** Select between SurfaceView (Efficient, Default), TextureView (Flexible), or GLES20 (Legacy/Hardware fix).

## Audio & Input Settings

### Enable Audio Sink
If enabled, the Head Unit acts as a speaker. Disable if you want the phone to handle audio output directly (e.g., via Bluetooth to the car speakers).

### Audio Volume Offsets (v1.14.0+)
Provides separate volume gain controls (0% to 200%) for **Media**, **Assistant**, and **Navigation** streams using vertical sliders.

### Audio Latency & Stability (v2.2.0+)
*   **Audio Latency Multiplier:** Adjusts the internal audio buffer size. 
    *   **Lower (1x-2x):** Less lag, better for voice commands.
    *   **Higher (4x-8x):** Less stuttering on unstable WiFi connections.
*   **Audio Queue Capacity:** Limits the number of audio chunks waiting to be processed. Prevents audio from drifting further behind when the network is slow (Backpressure).

### Media Integration (v2.2.0+)
*   **Sync Media Session AA Metadata:** Mirrors the phone's "Now Playing" information (Title, Artist, Duration, Album Art) to the tablet's system media session and media notification. Useful for showing current track info on system dashboards or lock screens.

### Microphone Input
*   **Input Source:** Default, Microphone, Voice Recognition, or **Voice Communication** (Recommended for Hardware Echo Cancellation). Supports **Bluetooth SCO** for external mics.
*   **Sample Rate:** 16kHz (Standard) up to 48kHz.
*   **Use AAC Audio:** (Experimental) Requests AAC compressed audio to save WiFi bandwidth.

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
*   **Log Capture:** Real-time capture of system and AAP logs.
*   **Export Logs:** Save logs to a public folder to share with developers for troubleshooting.

### Show FPS Counter
Displays a real-time overlay with current FPS, bitrate, and decoder latency.

### Use Native SSL
Uses native OpenSSL (via JNI) for encryption. Mandatory for Android 15 and highly recommended for performance on older chipsets. 
