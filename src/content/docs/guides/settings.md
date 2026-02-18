---
title: Application Settings
description: Detailed explanation of all configuration options in Headunit Revived.
---

This page describes the various configuration options available in the HeadUnit Revived application.

## General Settings

### Language (New in 1.13.3)
Manually select the application language. 
*   **Options:** System Default, English, German, Spanish, French, Italian, Portuguese, Russian, and more.
*   **Behavior:** Changes are applied instantly to the current screen and background activities.

### Night Mode
Controls the day/night theme of the Android Auto projection.
*   **Auto (Time):** Uses the current system time and last known location to calculate sunset/sunrise.
*   **Auto (Time + GPS):** Similar to Auto, but waits for a fresh GPS lock before applying calculated times to ensure accuracy.
*   **Light Sensor:** Uses the tablet's physical ambient light sensor (if available) to switch modes.
*   **Screen Brightness:** Monitors the system display brightness. Useful if your tablet/car automatically dims the screen when headlights are turned on.
*   **Day / Night:** Manually forces the respective mode.

:::note
In Auto modes, the app displays the currently calculated sunrise/sunset times directly in the settings for transparency.
:::

### Night Mode Threshold
Sets the threshold for switching to Night mode in dynamic modes.
*   **Lux (Light Sensor):** Values between 0-10000. Default is 100. Below this value, the app switches to Night mode.
*   **Brightness (Screen):** Values between 0-255. Default is 40. Below this value, the app switches to Night mode.

### Wireless Mode (Updated in 1.12.0)
Defines how the app handles wireless connections.
*   **Manual:** No background scanning. User must start connection manually from the WiFi dashboard.
*   **Auto-Scan:** The tablet actively searches for phones running the Android Auto Headunit Server (Port 5277).
*   **Helper Mode:** The tablet waits for a trigger from a phone utility like **Wireless Helper** or **Wifi Launcher**. Recommended for stability.

### Right-hand drive
Positions the Android Auto rail (navigation/status) for right-side driving vehicles.

### Auto start Self-Mode
Automatically starts the "Self-Mode" (local Android Auto simulation) when the application is launched.

### Auto-Connect Last Session
Automatically attempts to reconnect to the last used device (WiFi or USB) when the application starts.

### Auto-Start on Bluetooth (New in 1.14.0)
Automatically opens the app when a specific Bluetooth device (e.g., your car's headunit) is connected.
*   **Setup:** Enable the toggle and select your car's Bluetooth name or MAC address from the list.

## Graphic Settings

### Resolution
Sets the video resolution negotiated with the phone.
*   **Options:** Auto, 480p, 720p, 1080p, 1440p
*   **Note:** 1440p requires API 24+ and H.265 support.

### DPI
Sets the screen density (Dots Per Inch).
*   **Effect:** Affects the size of UI elements (icons, text) in Android Auto.
*   **Logic:** Lower values make elements larger, higher values make them smaller. Set to `0` for Auto.

### Custom Insets (Margins) (Updated in 1.13.2)
Manually adjust screen margins (Top, Bottom, Left, Right).
*   **Usage:** Correct overscan issues or hide hardware-related screen artifacts.
*   **Compatibility:** Now supported on older Android 4.x devices.
*   **Feature:** Includes a live preview that updates the app's padding instantly.

### Start in Fullscreen Mode
If enabled, the projection screen will hide the Android status bar and navigation bar (Immersive Mode). 
*   **Note:** On older devices (pre-Android 4.4), bars will auto-hide after a short delay if touched.

### Screen Orientation
Manually overrides the screen orientation of the head unit app.
*   **Options:** System Default, Auto (Sensor), Landscape (0°), Landscape Reverse (180°), Portrait (90°), Portrait Reverse (270°)

### View Mode
Selects the Android View type used for rendering the video stream.
*   **SurfaceView:** (Default) More performant and battery-efficient. Recommended for most devices.
*   **TextureView:** Better support for alpha/transparency and animations. Use if SurfaceView glitches.
*   **GLES20:** Uses OpenGL ES 2.0. Recommended for **older Head Units** (Android 8.1 or older) where standard views produce black screens.

## Audio Settings

### Enable Audio Sink
If enabled, the Head Unit acts as a speaker. Android Auto routes audio (Music, Nav, Calls) to the Head Unit.
*   **Disable:** If you want the phone to handle audio output directly (e.g., via Bluetooth to car speakers).

### Audio Volume Offsets (New in 1.14.0)
Provides separate volume gain controls for different audio streams.
*   **Streams:** Media (Music), Assistant (Google Voice), and Navigation (Maps/Waze).
*   **Control:** Accessible via a consolidated dialog with vertical sliders.
*   **Range:** 0% to 200% (100% is the default/neutral gain).
*   **Benefit:** Allows you to balance the volume levels if, for example, navigation prompts are too quiet compared to your music.

### Use AAC Audio
(Experimental) Requests AAC compressed audio. Can save bandwidth but requires compatible decoding on the Head Unit.

### Microphone Input Source (New in 1.13.2)
Select the Android audio source for the microphone.
*   **Default:** Standard system source.
*   **Microphone:** Direct raw microphone access.
*   **Voice Recognition:** Optimized for Google Assistant.
*   **Voice Communication:** Optimized for calls, usually enables hardware Echo Cancellation (AEC).

### Mic Sample Rate (Moved to Audio)
Sets the sampling rate for the microphone input passed to Android Auto.
*   **Default:** 16kHz
*   **Options:** 8kHz, 16kHz, 24kHz, 32kHz, 44.1kHz, 48kHz

## Video Settings

### Force Software Decoding
Forces the app to use a software video decoder (ffmpeg/google.h264) instead of the hardware decoder.
*   **Usage:** Enable this if you see a black screen or artifacts, but be aware it increases CPU usage significantly.

### Video Codec
Selects the video compression format.
*   **H.264 (AVC):** Standard, high compatibility.
*   **H.265 (HEVC):** Better compression, higher quality, but requires hardware support. Required for 1440p.

### FPS Limit
*   **30 FPS:** Standard, stable on most WiFi connections.
*   **60 FPS:** Smoother, but requires high-bandwidth 5GHz WiFi.

## Debug Settings

### Debug Mode
Enables verbose logging to Logcat. 

### Use Native SSL
Uses the native OpenSSL library (via JNI) for encryption instead of Java SSLEngine.
*   **Benefit:** Significantly faster on older/slower devices (Rockchip/Mediatek). Can fix audio stuttering or lag.
*   **Android 15:** Fully compatible with 16KB page size requirements.

### Export Logs
Saves the internal app logs to a public file for easier sharing and troubleshooting.