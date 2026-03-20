---
title: Changelog
description: Keep track of the latest changes and improvements in Headunit Revived.
---

## v.2.0.2
- **FPS Negotiation Fixed:** Resolved an issue where 60FPS settings were never correctly applied.
- **SSL Handshake Improvement:** Robust fix for truncated SSL messages on jittery connections.
- **New Visual Themes:** Added **Dark Mode** and **Xtreme Dark Mode** settings for the app itself (thanks to @andrecuellar).
- **Navigation Compatibility:** Removed redundant app category to ensure hardware NAV buttons correctly recognize the app.
- **SWC Refinement:** Fixed multiple button events and double/triple skip issues for steering wheel controls.
- **USB Permission Logic:** Improved permission request flow to prevent 'connection null' errors (thanks to @Bastel2020).
- **Video Scaling:** Added a setting to **Disable stretch to fit**, fixing distorted rendering on specific displays (thanks to @tsabaia).
- **Legacy UI Fix:** Improved touch screen accuracy when not in full-screen mode on older Android devices.
- **Dashboard Layout:** Fixed oversized icon-buttons on ultra-wide screens with small DPI.

## v.2.0.1
- **Fixed Android Auto 16.4 Compatibility:** Full support for the latest Android Auto updates (Intent/Receiver fix).
- **Fixed Multiple Volume Sliders:** Resolved an issue on modern devices (e.g. Pixel 9) where multiple volume sliders would appear in the system menu.
- **Improved Media Controls (SWC):** Enhanced support for steering wheel controls and automation apps (like MacroDroid). Added MediaSession callbacks to directly forward play, pause, and skip commands.
- **Improved Wi-Fi Direct Reliability:** Implemented a recursive discovery loop and "Ping Handoff" logic for more stable wireless connections.
- **Sauberer Shutdown:** Fixed an issue where the AA "Exit" button wouldn't fully terminate the wireless session and prevented unexpected disconnects when re-opening the app.
- **Added Romanian Translation:** Full support for the Romanian language (thanks to @LeeWiu).
- **Self Mode Fix:** Enhanced loopback connection using Network ID 0 for reliable offline startup.
- **Merged PR #189:** Navigation message handling.
- **Merged PR #215:** USB reconnect race and stale dongle data fix.
- **Merged PR #205:** Wireless dongle disconnect fix.
- **Merged PR #216:** Bluetooth SCO microphone support.

## v.2.0.0
- **Native Wi-Fi Direct (P2P) Support:** Connect your phone to the headunit without a shared network or hotspot.
- **Refactored Connection Core:** Complete rewrite of internal handling using the new **CommManager**. Improved stability and faster handshakes.
- **Enhanced Fullscreen Logic:** Choose between **Immersive**, **Status Only**, or **Normal** view modes.
- **Auto-Optimization Wizard:** Automatically recommends the best Resolution, DPI, and Codec for your specific hardware.
- **Early MediaSession Initialization:** Resolved audio routing issues ensuring sound plays through the headunit.
- **GPS Speed Fix:** Accurate speed reporting by correcting internal unit conversions.
- **New Logging System:** Integrated log level control and file capture for easier debugging.

## v.1.15.1
- **Auto-Optimization Wizard:** Recommended settings for Resolution, DPI, and Codec.
- **Self Mode Offline Fix:** Network ID 0 fix for reliable offline startup.
- **Improved Audio Routing:** Proactive audio focus requests via early MediaSession.
- **GPS Speed Fix:** Corrected knots to mm/s conversion.

## v.1.15.0
- **Arabic Language Support:** Added full support for the Arabic language.
- **Day/Night Mode Intent:** New intent for manually setting maps theme.
- **Legacy UI Fixes:** Improved fullscreen support on Android 4.1 - 4.4.
- **System Navigation Provider:** Registered as an official navigation app.
- **LegacyOptimizer:** Performance improvements for single-core CPUs.

## v.1.14.3
- **App Shortcuts:** Quick Connect/Disconnect compatible with Samsung Routines.
- **Stability:** Fixed app freezes by improving internal data handling.

## v.1.14.2
- **Crash Fix:** Resolved SuperNotCalledException in MainActivity.
- **Exit Logic:** Fixed notification and exit button issues.

## v.1.14.1
- **USB Auto-Connect:** Behaviour like a native headunit.
- **USB Soft-Reset:** Recovery from USB stalls without replugging.
- **Audio Overhaul:** Major routing improvements via MediaSession.
- **Task Switching:** Music continues in background; re-opening returns to projection.
- **Key-Sniffer:** Enhanced debugger for steering wheel intents.
