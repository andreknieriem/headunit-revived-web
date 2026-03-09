---
title: Application Settings
description: Detailed explanation of all configuration options in Headunit Revived.
---

This page describes the various configuration options available in the HeadUnit Revived application.

## General Settings

### Auto-Optimization Wizard (New in 2.0.0)
The best way to get started. This tool scans your device's hardware and display to automatically recommend the optimal Resolution, DPI, and Video Codec.
- **How to use:** Click the "Auto-Optimize Settings" button at the top of General settings.
- **Wizard steps:** Select your approximate display size and preferred orientation. The app will do the rest.

### Language
Manually select the application language. 
*   **Options:** System Default, English, German, Spanish, French, Italian, Portuguese, Russian, and more.
*   **Behavior:** Changes are applied instantly.

### Night Mode
Controls the day/night theme of the Android Auto projection.
*   **Auto (Time):** Uses the current system time and last known location to calculate sunset/sunrise.
*   **Auto (Time + GPS):** Similar to Auto, but waits for a fresh GPS lock before applying calculated times to ensure accuracy.
*   **Light Sensor:** Uses the tablet's physical ambient light sensor (if available).
*   **Screen Brightness:** Monitors the system display brightness.
*   **Day / Night:** Manually forces the respective mode.

### Wireless Mode
Defines how the app handles wireless connections.
*   **Manual:** No background scanning. 
*   **Auto-Scan:** The tablet actively searches for phones running the AA Headunit Server (Port 5277).
*   **Helper Mode:** The tablet waits for a trigger from our companion app, **Wireless Helper**. Now supports Wi-Fi Direct (P2P) for even easier connections.

### Right-hand drive
Positions the Android Auto rail (navigation/status) for right-side driving vehicles.

### Auto start Self-Mode
Automatically starts the "Self-Mode" (local Android Auto simulation) when the application is launched.

### Auto-Connect Priority
Decide the order in which the app tries to connect. You can use drag-and-drop to prioritize **Last Session**, **USB Auto-Connect**, or **Self-Mode**.

### USB Stability Tools
*   **USB Stability Check:** Enable this if your wireless adapter disconnects/reconnects briefly during the initial handshake.
*   **Stability Timeout:** Configurable wait time (default 10s).

### Max Reconnect Attempts
*   **Options:** 1 to 10
*   **Description:** Configures how many times the app should automatically try to restart a failed session.

## Graphic Settings

### Resolution
Sets the video resolution negotiated with the phone.
*   **Options:** Auto, 480p, 720p, 1080p, 1440p
*   **Note:** 1440p requires API 24+ and H.265 support.

### DPI
Sets the screen density.
*   **Effect:** Affects the size of UI elements (icons, text) in Android Auto.
*   **Logic:** Lower values make elements larger, higher values make them smaller. Set to `0` for Auto.

### Custom Insets (Margins)
Manually adjust screen margins (Top, Bottom, Left, Right) to correct overscan or hide screen artifacts.

### Screen Mode (Updated in 2.0.0)
Choose how system bars should be handled during projection:
- **Normal:** Both status and navigation bars remain visible.
- **Immersive:** Both bars are hidden. (On older devices, they auto-hide after touch).
- **Hide Status Bar Only:** Keeps the navigation bar visible while hiding the status bar. Recommended if your headunit buttons overlap with the fullscreen view.

### Screen Orientation
*   **Options:** System Default, Auto (Sensor), Landscape, Portrait, and Reversed modes.

### View Mode
Selects the Android View type for rendering:
*   **TextureView:** (New Default) Best compatibility. Fixes distortion issues on Android 4.x.
*   **SurfaceView:** High performance and battery-efficient.
*   **GLES20:** Recommended for **older Head Units** (Android 5.0 - 8.1) where standard views might lag or show black screens.

## Audio Settings

### Enable Audio Sink
If enabled, the Head Unit acts as a speaker. Disable if you want the phone to handle audio output directly.

### Audio Volume Offsets
Provides separate volume gain controls (0% to 200%) for **Media**, **Assistant**, and **Navigation**.

### Use AAC Audio
(Experimental) Requests AAC compressed audio to save bandwidth.

### Microphone Input Source
Select between **Default**, **Microphone**, **Voice Recognition**, or **Voice Communication** (Enables Hardware Echo Cancellation).

## Video Settings

### Video Codec
*   **H.264 (AVC):** Standard compatibility.
*   **H.265 (HEVC):** Higher quality, required for 1440p.

### FPS Limit
*   **30 FPS:** Standard, stable on most connections.
*   **60 FPS:** Smoother experience on high-performance devices.

## Debug Settings

### Logging System (Updated in 2.0.0)
*   **Log Level:** Choose the detail of log output (Debug, Info, Warn, Error).
*   **Start Log Capture:** Records system logs to a local file for troubleshooting.

### Use Native SSL
Uses native OpenSSL (via JNI) for encryption. Significantly faster on older/slower devices. 
