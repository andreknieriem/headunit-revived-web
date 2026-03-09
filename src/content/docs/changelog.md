---
title: Changelog
description: Keep track of the latest changes and improvements in Headunit Revived.
---

## v.2.0.0
- **Fixed Android Auto 16.4 Compatibility:** Full support for the latest Android Auto updates. Resolved "ActivityNotFound" and connection drops by implementing a new broadcast-based trigger mechanism.
- **Native Wi-Fi Direct (P2P) Support:** Connect your phone to the headunit without a shared network or hotspot. The headunit now automatically becomes visible as a P2P peer for a seamless wireless experience.
- **Refactored Connection Core:** Complete rewrite of the internal connection handling using the new **CommManager**. Improved stability, faster handshakes, and better handling of background transitions.
- **Enhanced Fullscreen Logic:** A new flexible system allows you to choose between **Immersive** (hide everything), **Status Only** (keep navigation bars visible), or **Normal** view modes.
- **Auto-Optimization Wizard:** A new setup wizard that scans your hardware and display to automatically recommend the best Resolution, DPI, and Codec settings.
- **Self Mode Offline Fix:** Improved loopback connection by using Network ID 0, allowing Self Mode to start reliably without an active internet connection.
- **Early MediaSession Initialization:** Resolved audio routing issues where the phone would sometimes play sound through its own speakers instead of the headunit.
- **GPS Speed Fix:** Accurate speed reporting for navigation apps by correcting internal unit conversions.
- **UI & UX Improvements:** 
    - Used Constraints Barriers to fix button alignment on the home screen for multi-line labels.
    - Improved settings readability on small screens.
    - Standardized numeric input dialogs (DPI, Thresholds) with consistent styling and padding.

## v.1.15.1
- **Auto-Optimization Wizard:** Added a setup wizard that scans your hardware and display to recommend the best Resolution, DPI, and Codec settings.
- **Self Mode Offline Fix:** Resolved an issue preventing Self Mode from starting when no active WiFi or data connection was present.
- **Improved Audio Routing:** Enhanced the reliability of audio switching to the headunit by initializing the MediaSession earlier.
- **GPS Speed Fix:** Fixed a bug where navigation apps would show double the actual speed due to an incorrect unit conversion.
- **UI & UX Improvements:** 
    - Used Constraints Barriers to fix button alignment on the home screen for multi-line labels.
    - Improved settings readability on small screens.
    - Standardized numeric input dialogs (DPI, Thresholds) with consistent styling and padding.

## v.1.15.0
- **Auto-Connect Priority:** Redesigned connection logic with reorderable priorities.
- **USB Stability Tools:** Added a dedicated USB stability check and configurable timeout.
- **Automation & App Shortcuts:** Native support for App Shortcuts (Connect, Disconnect, Night Mode).
- **BMW & System Integration:** Registered as a system navigation provider for better vehicle integration.
- **Localization:** Synchronized and updated all translations.
