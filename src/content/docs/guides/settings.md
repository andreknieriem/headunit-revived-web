---
title: Application Settings
description: Detailed explanation of all configuration options in Open Headunit.
---

This page describes the various configuration options available in the Open Headunit application.

## General Settings

### Auto-Optimization Wizard (v2.0.0+)
The fastest way to configure your device. This tool scans your hardware and display to automatically recommend the optimal **Resolution**, **DPI**, and **Video Codec**.
- **How to use:** Click the "Auto-Optimize Settings" button at the top of the General settings list.
- **Wizard steps:** Select your approximate display size and preferred orientation.

### Permissions Checklist
Quick access to check and grant required system permissions (Draw Overlays, Notifications, Ignore Battery Optimization, Write Settings, etc.) required for smooth background operation and automatic launching.

### Connection Mode
Select the primary connection methods you use (Wireless, USB, or Self-Mode). This controls the curated options displayed in the **Basic** settings tab while the **Advanced** tab always reveals every available setting.

### Language
Manually select the application language. Open Headunit supports 20+ languages including English, German, Spanish, French, Italian, Portuguese, and more. Changes are applied instantly.

### Vehicle Info Settings (v3.2.0+)
Customize the vehicle **Make**, **Model**, and **Year** reported to Android Auto during the initial protocol handshake.

### UI Scale
Adjust the overall scale and font size of the application settings, dialogs, and main menus for optimal visibility on displays of varying sizes and distances.

### Show Toast Messages
Toggles floating on-screen status and connection toast notifications.

### Listen for USB Devices (v2.2.2+)
Toggles the Android system USB permission prompt. Decoupled from Auto-Start to prevent annoying popups for non-AA devices while allowing reliable detection of phones.
*   **USB Whitelisting (v3.0.0+):** Automatically ignores Apple devices (Vendor ID `0x05AC` / iPhones) and other incompatible USB peripherals to prevent interruptions during connection setup.

### Use Native USB Driver (v3.1.0+)
Uses the `libusb` native library directly for USB communication instead of the standard Android OS USB accessory stack. This resolves connection instability and random USB disconnects on specific head units and cables. Disable it to fallback to the default Android USB API.


## Wireless Mode (v2.2.0+)

### Helper Mode (Recommended)
Defines how the app handles wireless connections. The tablet waits for a trigger from our companion app, **Wireless Helper**.
*   **Strategies:** Wi-Fi Direct (P2P), Shared Wi-Fi, Phone Hotspot, Tablet Hotspot (Passive), Google Nearby (Beta).
*   **Wait for Wi-Fi:** (Wi-Fi Direct only) Waits for a stable Wi-Fi connection before initiating the P2P handshake. Includes a configurable timeout (5s to 30s).
*   **Static BSSID (v3.1.1+):** Manually set the tablet's Wi-Fi Direct interface MAC address (BSSID) if auto-detection is blocked by system permission restrictions (returns `02:00:00:00:00:00`).
*   **Configure Wireless Helper QR (v3.0.0+):** Generates and displays a QR code containing the tablet's active Hotspot credentials. Scan this QR code using the companion Wireless Helper app on your phone for instant, automatic configuration.

### Native AA (Beta)
Implements the official Android Auto Wireless protocol. Allows phones to find the tablet directly in the Android Auto settings without a helper app.
*   **Native AP Transport:** Choose whether the tablet hosts a local Wi-Fi Hotspot or establishes a Wi-Fi Direct P2P group.
*   **Wi-Fi Direct & Hotspot Bands (v3.2.0+):** Select the preferred Wi-Fi band (**Auto**, **2.4 GHz**, or **5 GHz**) for wireless connections. Includes support for **P2P Legacy 5 GHz Upper Band** (channels 149–165) for compatibility with hardware that cannot establish groups on lower DFS channels.
*   **Manual Hotspot Credentials Override:** Manually specify SSID, password, and interface name (`wlan0`, `ap0`) if Android system restrictions prevent Open Headunit from reading local hotspot details automatically.
*   **Select Bluetooth Adapter (v3.2.0+):** Choose the specific Bluetooth adapter/controller to use for the handshake. Useful for dual-Bluetooth head unit systems.
*   **Manual Secondary Bluetooth Service (v3.2.0+):** Specify secondary Bluetooth service parameters when integrating with proprietary dual-radio automotive boards.
*   **Keep Dummy VPN:** Keeps a local dummy VPN running during wireless sessions to prevent Android from routing AAP traffic over cellular data.

### Headunit Server
*   **Manual:** You must manually start the server on the phone (via Android Auto Developer Settings -> Start headunit server).
*   **Auto:** Tablet actively searches for phones running the AA Headunit Server (Port 5277).
*   **Auto-Enable Hotspot:** (Experimental) Automatically enables the tablet's hotspot when searching in Auto mode.


## Auto-Start & Connectivity

*   **Auto-Connect Priority:** Reorder connection methods via drag-and-drop and enable/disable them individually:
    *   **Last Session:** Automatically reconnects to the last used device (USB or WiFi).
    *   **Self-Mode:** Launches local Android Auto simulation.
    *   **Single USB:** Automatically connects if only one compatible USB device is found.
*   **Auto-Start on Bluetooth:** Automatically opens the app when a specific Bluetooth device is connected.
*   **Auto-Start on WiFi (v2.2.2+):** Automatically opens the app and attempts to connect when a specific WiFi SSID is detected. Includes a warning for Android 8+ background restrictions.
*   **Reopen on Reconnection (v3.2.0+):** When pressing Exit, the app stays running in the background monitoring USB. If a device reconnects, the app reopens automatically.
*   **Kill on Disconnect (v2.2.0+):** Gracefully closes the app and the foreground service when the phone is disconnected. Prevents battery drain when not in use.
*   **Raise Projection During Call (v3.2.0+):** Automatically brings the Android Auto projection screen to the foreground when an incoming or outgoing phone call is initiated.


## Navigation & Safety

### GPS for Navigation
If enabled, the tablet's GPS data is shared with the phone to improve accuracy and save phone battery.

### Navigation Provider
Open Headunit registers as a system-wide navigation app. This allows vehicle systems (like BMW iDrive) to recognize it and display directions in instrument clusters or HUDs (if supported).

### Navigation Notifications
Toggles the display of turn-by-turn navigation alerts and banners.

### Fake Speed (v2.2.0+)
If enabled, the app reports a static speed of 10 km/h to the phone. This bypasses "Video Lock" or "Safety Lock" restrictions in many Android Auto apps (like YouTube or video players) while driving.


## Graphic & Video Settings

### Screen Mode
*   **Normal:** Status and navigation bars are always visible.
*   **Immersive:** Both bars are hidden.
*   **Hide Status Bar Only:** Recommended if hardware buttons overlap with the view.
*   **Immersive (Avoid Notch):** Special mode for modern devices with hole-punch or notch cameras.

### Screen Orientation
Force the display orientation to **Default**, **Landscape**, **Portrait**, **Reverse Landscape**, **Reverse Portrait**, or follow the device's physical **Sensor** orientation.

### Stretch to Fill (v2.1.0+)
Forces the video projection to fill the entire available screen area, ignoring the original aspect ratio. Requires a session restart.

### Pixel Aspect Ratio (PAR) (v3.1.0+)
Fine-tunes the pixel aspect ratio multiplier to eliminate stretching or squishing on non-square pixel displays or ultrawide panoramic automotive screens.

### Measured Touch Surface (v3.1.0+)
Uses exact measured view bounds for touch input translation, ensuring pixel-perfect touch alignment on letterboxed or ultrawide screens.

### Forced Scale (v2.2.0+)
(SurfaceView only) Manually forces the scaling logic to use the provided dimensions. Useful for displays with non-standard hardware scaling.

### HUD Mode (Horizontal Flip) (v3.2.0+)
Flips the video display horizontally for windshield reflection projection (Head-Up Display). **Note:** Requires `TextureView` or `GLES20` view mode (does not work with `SurfaceView`).

### Custom Insets (Margins)
Manually adjust Top, Bottom, Left, Right margins (0 to 500px). **Crucial for buggy headunits** where system bars overlay the app buttons. Features a **Live Preview** while adjusting.

### Resolution & DPI
*   **Resolution:** 480p up to **2160p (4K)** (H.265 required for 1440p+).
*   **DPI:** Controls the size of icons/text. Set to `0` for Auto.

### Video Codec & Performance
*   **Video Codec:** Auto, H.264 (Standard), or H.265 (Better quality). 
*   **H.265 Optimization:** Features dynamic buffer sizing (2MB for <=1080p, 8MB for 4K) to prevent crashes on Allwinner/Rockchip chipsets while maintaining 4K performance.
*   **FPS Limit:** Toggle between 30 FPS (stable) and 60 FPS (smooth).
*   **View Mode:** SurfaceView (Efficient, Default), TextureView (Flexible), or GLES20 (High Performance / Legacy).
*   **Force Software Decoding:** Forces CPU-based software video decoding if hardware decoders crash or produce black screens.
*   **Software Video Decoder Selection:** Select specific software decoder engines (OpenMAX, FFmpeg, or Google).
*   **Low Latency Video Mode:** Minimizes internal frame queuing for responsive touch interaction on high-performance processors.


## Theming & Customization (v3.2.0+)

### Customization Menu (v3.2.0+ / v3.3.0+)
Customize the visual appearance of the Open Headunit main interface:
*   **Background Image:** Choose a custom image file (JPG, PNG, WebP) from your device's storage to use as the background for the main home screen. Features an image-only picker, a live background preview, and a *"Reset to Default"* button to easily revert to the default gradient (`bg.png`).
*   **Theme & Gradients (v3.3.0+):** Choose custom gradient styles, button accent colors, and custom button scaling.
*   **OLED Pure Black (v3.3.0+):** Forces true `#000000` pitch black backgrounds in night mode for OLED panels.

### Custom Loading Screen (v3.0.0+)
Customize the loading screen that appears while Android Auto is initializing:
*   **Media Path:** Select a custom image, GIF, or video file from your device.
*   **Show Loading Text:** Toggle the visibility of the initialization progress text.
*   **Keep Aspect Ratio:** Force the selected media to preserve its native aspect ratio instead of stretching.
*   **Scale (v3.1.0+):** Adjust the size/scaling of the loading screen media using a custom scale slider (e.g., to adjust the image or video to fit perfectly on different screens).
*   **Loop Video:** (If video selected) Continuously loops the video while loading.


## Dark Mode & UI Themes

### Application Theme (UI)
Choose how the app interface itself looks:
*   **Clear / Dark / Extreme Dark:** Static themes.
*   **Auto (Time / GPS):** Switches based on sunrise/sunset.
*   **Light Sensor / Screen Brightness:** Switches based on hardware ambient light or system brightness. Includes a configurable **Threshold Slider**.
*   **Car Headlight Signal (ILL+) (v3.0.0+):** Switches between day/night theme automatically based on the vehicle headlight signal state (receives a binary illumination signal from the car's hardware integration).
*   **Manual Time:** Set specific hours for the theme switch.

### Visual Options
*   **Monochrome Icons:** Switches app icons to a simplified black/white style.
*   **Extreme Dark Mode:** Forces a pitch-black background (OLED friendly) for auto modes.
*   **Gradient Background:** Enables a subtle gradient effect on menus (Disabled in Extreme Dark).

### Android Auto Night Mode
Controls the theme of the projected Android Auto interface:
*   **Same modes as App Theme:** (Auto, Sensor, Brightness, Headlight Signal (ILL+), Manual Time).
*   **AA Monochrome (v2.0.0+):** Desaturates colors during night mode to reduce glare. Features a **Desaturation Level** slider (0% to 100%).


## Audio & Input Settings

### Audio Sink
If enabled, audio plays through the headunit. If disabled, audio stays on the phone.

### Per-Channel Audio Streams (v3.3.0+)
Route Android Auto audio channels independently to specific Android system audio streams:
*   **Channel Routing:** Route **Media**, **Navigation**, and **Speech / Assistant** independently to system streams like *Music*, *Notification*, *System*, *Ring*, *Alarm*, or *Voice Call*.
*   **Test Stream Audio:** Tap the speaker icon beside any stream selection to test audio playback through that specific stream before committing.
*   **Volume Offsets:** Separate volume gain controls (0% to 200%) for Media, Navigation, and Assistant streams.
*   **Static Audio Focus (v2.3.0+):** If enabled, the app suppresses system-level audio focus requests. This allows external sources (like a vehicle's built-in FM Radio) to play audio concurrently without being muted or interrupted by the app. Includes **Software-based Ducking** which temporarily dims the media volume by 60% when a navigation or assistant prompt plays.
*   **Audio Mixer (v2.3.1+):** Automatically mixes media, navigation, and assistant audio channels in software when Static Audio Focus is enabled, preventing system-level audio routing conflicts on Chinese head units.
*   **Playback Focus Mode:** Customize audio focus behavior (**Dynamic**, **Transient**, **Abandon**, or **None**).
*   **Hardware DSP Equalizer:** Connects Android Auto's audio session directly to the vehicle/head unit's hardware DSP equalizer.

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
*   **Keymap:** Map physical keys (steering wheel, knobs) to AA functions. Supports 17+ proprietary steering wheel protocols.
*   **Enable Rotary:** Enables support for iDrive-style rotary controllers and trackpads.
*   **Media Key Routing (v3.2.4+):** Choose whether steering wheel and hardware media buttons (Play, Pause, Next, Prev) are forwarded to Android Auto or retained locally by the head unit's native media player.


## UI & Status Display (v3.3.0+)

*   **Hide Clock:** Option to hide the status bar digital clock on the home screen.
*   **Hide Phone Signal:** Option to hide the cellular phone signal strength indicator.
*   **Hide Battery Level:** Option to hide the phone battery level indicator.


## Exit & PiP (v2.2.0+)

### Picture-in-Picture (PiP)
Fully supported for Android 8.0+. Allows you to keep Android Auto visible in a small window while using other apps (like the original car radio or a map app).

### Multi-Option Exit Dialog
Triggered via the back button or a **2-finger edge gesture** (swipe from left). Offers quick access to:
*   **Stop Connection** (Red icon)
*   **Enter PiP**
*   **Move to Background** (Home icon)


## Backup & Reset (v3.0.0+)

Allows you to backup, restore, or clear your application settings configuration:
*   **Export Settings:** Exports your current configuration to a JSON file in your device's storage.
*   **Import Settings:** Restores configurations from a previously exported JSON file. (Note: Restoring settings that impact the video or audio projection layer will automatically trigger a session restart).
*   **Reset Settings:** Clears all custom configurations, cached data, and auto-connection states, reverting the app to factory defaults.


## Debugging

### Logging
*   **Log Level:** Adjust verbosity (Info, Debug, Verbose).
*   **Log Source (v3.0.0+):** Choose the backend source for logs:
    *   **Logcat:** Standard Android system log buffer. Requires setting up ADB permissions on newer Android versions.
    *   **Direct File:** Writes application events directly to a log file. Bypasses logcat permission checks, enabling hassle-free logging on modern Android versions.
*   **Log Storage Location (v3.2.4+):** Choose between **Default (App Storage)** (`getExternalFilesDir`) and **Downloads Folder** (`/sdcard/Download/OpenHeadunitLogs`). Useful for legacy head units where file managers cannot access private app storage.
*   **Log Capture:** Real-time capture of system and AAP logs.
*   **Export Logs:** Save logs to a public folder to share with developers.

### Show FPS Counter
Displays a real-time overlay with current FPS, bitrate, and decoder latency.

### Use Native SSL
Uses native OpenSSL for significantly better performance on older chipsets. Mandatory for Android 15+.

### Developer Diagnostics
Developer tools for testing low-memory conditions, transport pacing, and decoder resilience:
*   **Force Memory Profile:** Simulate constrained or high-memory profiles.
*   **Video Feed Hold:** Temporarily hold/pause the video feed for rendering pipeline inspection.
*   **Video Fault Injection:** Test video decoder recovery under simulated network packet loss or corrupt byte streams.
