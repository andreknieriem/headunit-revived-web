---
title: Changelog
description: Keep track of the latest changes and improvements in Headunit Revived.
---

## v.2.0.1
- **Fixed Android Auto 16.4 Compatibility:** Full support for the latest Android Auto updates (Intent/Receiver fix).
- **Improved Media Controls (SWC):** Enhanced support for steering wheel controls and automation apps (like MacroDroid). Added MediaSession callbacks to directly forward play, pause, and skip commands.
- **Fixed Multiple Volume Sliders:** Resolved an issue on modern devices (e.g. Pixel 9) where multiple volume sliders would appear in the system menu.
- **Improved Wi-Fi Direct Reliability:** Implemented a recursive discovery loop and "Ping Handoff" logic for more stable wireless connections.
- **Sauberer Shutdown:** Fixed an issue where the AA "Exit" button wouldn't fully terminate the wireless session and prevented unexpected disconnects when re-opening the app.
- **Added Romanian Translation:** Full support for the Romanian language (thanks to @LeeWiu).
- **Self Mode Fix:** Enhanced loopback connection using Network ID 0 for reliable offline startup.

## v.2.0.0
- **Native Wi-Fi Direct (P2P) Support:** Connect your phone to the headunit without a shared network or hotspot.
- **Refactored Connection Core:** Complete rewrite of internal handling using the new **CommManager**. Improved stability and faster handshakes.
- **Enhanced Fullscreen Logic:** Choose between **Immersive** (hide all), **Status Only** (keep navigation bars), or **Normal** view modes.
- **Auto-Optimization Wizard:** Automatically recommends the best Resolution, DPI, and Codec for your specific hardware.
- **Early MediaSession Initialization:** Resolved audio routing issues ensuring sound plays through the headunit.
- **GPS Speed Fix:** Accurate speed reporting by correcting internal unit conversions.
- **New Logging System:** Integrated log level control and file capture for easier debugging.

## v.1.15.1
- **New Feature:** Added Auto-Optimization Wizard to automatically find the best Resolution, DPI, and Codec settings.
- **Bugfix:** Fixed Self Mode failing to start in offline/hotspot scenarios (Network ID 0 fix).
- **Bugfix:** Improved Audio Routing by using an early-initialized MediaSession.
- **Bugfix:** Fixed GPS Speed calculation (corrected knots to mm/s conversion).
- **UI:** Improved Settings readability on small screens with multi-line descriptions.

## v.1.15.0
- **Arabic Language Support:** Added full support for the Arabic language (thanks to A5H0).
- **Day/Night Mode Intent:** New intent for manually setting maps theme.
- **Legacy UI Fixes:** New window flags for better fullscreen support on Android 4.1 - 4.4.
- **System Navigation Provider:** Registered HURev as an official navigation app.
- **LegacyOptimizer:** Performance improvements for single-core CPUs on older devices.
- **Improved Audio Focus:** Enhanced MediaSession logic for better routing.

## v.1.14.3
- **App Shortcuts:** Added shortcuts for quick Connect/Disconnect (compatible with Samsung Routines).
- **Navigation Provider:** Registered as an official system navigation provider.
- **App Freeze Fix:** Optimized memory hygiene and FIFO handling for long sessions.
- **Fire Tablet Support:** Improved compatibility for devices without GPS hardware.

## v.1.14.2
- **Crash Fix:** Resolved `SuperNotCalledException` in MainActivity.
- **Exit Logic:** Fixed issue where notification/exit buttons wouldn't close the app.
- **Bluetooth Cleanup:** Removed legacy invisible Bluetooth setting.

## v.1.14.1
- **USB Auto-Connect:** Integrated into "Auto-Connect Last Session".
- **USB Soft-Reset:** Automatic recovery from USB stalls without replugging.
- **Audio Overhaul:** Major focus and routing improvements via MediaSession.
- **Task Switching:** Leaving the app no longer breaks the connection.
- **Key-Sniffer:** Enhanced debugger for steering wheel and proprietary intents.
- **Navigation Registration:** HURev recognized as a navigation provider (`geo:`, `google.navigation:`).
