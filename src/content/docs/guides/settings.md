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
Manually select the application language. Headunit Revived supports 13+ languages including English, German, Spanish, French, Italian, Portuguese, and more.

### Wireless Mode
Defines how the app handles wireless connections.
*   **Helper Mode (Recommended):** The tablet waits for a trigger from our companion app, **Wireless Helper**. Now supports Wi-Fi Direct (P2P) for even easier connections.
*   **Auto-Scan:** The tablet actively searches for phones running the AA Headunit Server (Port 5277).

### Auto-Start & Connectivity
*   **Auto-Connect Priority:** Reorder connection methods via drag-and-drop and enable/disable them individually:
    *   **Last Session:** Automatically reconnects to the last used device (USB or WiFi).
    *   **Self-Mode:** Launches local Android Auto simulation.
    *   **Single USB:** Automatically connects if only one compatible USB device is found.
*   **Auto-Start on Bluetooth:** Automatically opens the app when a specific Bluetooth device (e.g., your car) is connected.
*   **Exit on Disconnect (v2.1.0+):** Gracefully closes the app and background service when the phone is disconnected.

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

## Navigation & System Integration

### GPS for Navigation
*   **Type:** Toggle
*   **Description:** If enabled, the tablet's GPS data is shared with the phone to improve navigation accuracy and save phone battery.

### Navigation Provider (v1.15.0+)
Headunit Revived registers as a system-wide navigation app (`category: maps`). This allows it to:
*   Be recognized by vehicle systems (like BMW iDrive) as the primary nav app.
*   Receive `NAVIGATE` intents from other apps (Google Maps, Yandex).
*   Display directions in native instrument clusters or HUDs (if supported by vehicle hardware).

## Graphic & Video Settings

### Screen Mode (v2.0.0+)
Choose how system bars should be handled during projection:
- **Normal:** Both status and navigation bars remain visible.
- **Immersive:** Both bars are hidden. 
- **Hide Status Bar Only:** Recommended if your headunit buttons overlap with the immersive view.

### Stretch to Fill (v2.1.0+)
Forces the video projection to fill the entire available screen area, ignoring the original aspect ratio. This is useful for wide or non-standard displays. Requires a session restart.

### Custom Insets (Margins)
Manually adjust Top, Bottom, Left, Right margins. **Crucial for fixing UI accessibility on buggy headunits** where system bars overlay the app buttons. Includes a live preview directly in the settings UI.

### Resolution & DPI
*   **Resolution:** 480p up to 1440p. 
*   **Note:** 1440p requires H.265 (HEVC) support and a powerful chipset.
*   **DPI:** Controls the size of icons and text. Set to `0` for automatic detection.

### Video Codec & Performance
*   **Codec:** Choose between H.264 (Standard) or H.265 (Better quality). 
*   **H.265 Optimization (v2.1.0+):** Features enhanced 4MB buffers and VPS/SPS/PPS parsing to eliminate artifacts on high-bitrate 4K-capable hardware.
*   **FPS Limit:** Toggle between 30 FPS (stable) and 60 FPS (smooth).
*   **View Mode:** Select between TextureView (Default), SurfaceView, or GLES20 (Legacy/Hardware fix).

## Audio & Input Settings

### Enable Audio Sink
If enabled, the Head Unit acts as a speaker. Disable if you want the phone to handle audio output directly (e.g., via Bluetooth to the car speakers).

### Audio Volume Offsets (v1.14.0+)
Provides separate volume gain controls (0% to 200%) for **Media**, **Assistant**, and **Navigation** streams using vertical sliders.

### Microphone Input
*   **Input Source:** Default, Microphone, Voice Recognition, or **Voice Communication** (Recommended for Hardware Echo Cancellation).
*   **Sample Rate:** 16kHz (Standard) up to 48kHz.
*   **Use AAC Audio:** (Experimental) Requests AAC compressed audio to save WiFi bandwidth.

### Keymap
The Keymap screen allows you to map steering wheel buttons or knobs to Android Auto commands.
*   **BMW iDrive Fix (v2.1.0+):** The `ENTER` key is now automatically mapped to `DPAD_CENTER` for full controller compatibility.

## Debug Settings

### Logging System
*   **Log Level:** Adjust verbosity (Info, Debug, Verbose).
*   **Export Logs:** Save logs to a public folder to share with developers for troubleshooting.

### Use Native SSL
Uses native OpenSSL (via JNI) for encryption. Mandatory for Android 15 and highly recommended for performance on older chipsets. 
