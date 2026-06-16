---
title: Changelog
description: Keep track of the latest changes and improvements in Headunit Revived.
---

## v.3.0.0
- **Custom Loading Screen:** Added support for setting a custom image, GIF, or video background to display while Android Auto is initializing.
- **Settings Backup & Reset:** Added complete export, import, and factory reset functionality for all configuration options.
- **Removed Legacy SSL:** Removed old deprecated C-based SSL libraries to improve security, maintenance, and reduce the overall APK file size.
- **Direct File Logging:** Added support for writing logs directly to a file (APPLOG_FILE) to bypass Android logcat permission restrictions on newer Android versions.
- **USB Disconnect Buffer:** USB connection is kept alive for 8 seconds to survive short USB dongle reboots or disconnects.
- **Car Headlight Signal (ILL+):** Implemented vehicle headlight signal integration for automatic day/night theme management.
- **USB Device Whitelisting:** Automatically ignores Apple devices (Vendor ID `0x05AC` / iPhones) and other incompatible USB peripherals to prevent connection interruptions.
- **QR Code Companion Setup:** Added a QR code generator for easy pairing and automatic setup of the companion **Wireless Helper** app.
- **Full-Screen Edge Gesture:** Added a two-finger swipe gesture from the right side to easily toggle between fullscreen mode and standard navigation bar mode.
- **Controls & Keymapping:** Mapped the Navigation Button key and resolved steering wheel auto-connect conflicts dragging the session into wireless flow during active USB connections.
- **Audio Stuttering Fixes:** Resolved audio stutter issues on some specific chipsets since v2.1.1.
- **Google Nearby Enhancements:** Optimized Nearby connections to prevent low video frame rate (0-2 FPS) issues.

## v.2.3.1
- **Audio Mixer & Static Audio Focus Fixes:** Added a software-based Audio Mixer to mix multiple audio streams (media, navigation, assistant) into a single stream, resolving volume routing issues and muting bugs on Chinese head units.
- **Cellular/WiFi Handover:** Fixed connection drops at cellular/WiFi borders by binding sockets to the WiFi network interface when available.
- **Samsung Compatibility:** Fixed issues with Samsung Modes & Routines shortcuts.
- **Orientation Handling:** Fixed wrong initial display orientation when launching the app while holding the phone at an angle.
- **AAWireless Compatibility:** Fixed USB connection errors on AAWireless dongles.
- **Bluetooth Multi-Device:** Added support for auto-starting connection on multiple Bluetooth devices.
- **Mic Routing Fix:** Corrected microphone input source mapping issues.
- **Vietnamese Language:** Added Vietnamese translation 🇻🇳.
- **Back Key Mapping:** Integrated back key routing and keymap support.

## v.2.3.0
- **Static Audio Focus & Software Ducking:** Added a setting to suppress system-level audio focus requests (ideal for devices where system FM Radio should play concurrently) and implemented software-based media volume ducking (by 60%) when navigation instructions play.
- **Orientation Normalization:** Fixed visual stretching, green/distorted rendering, and split-second handshake failures when starting the app in portrait mode while having a landscape target orientation configured.
- **Graceful Connection Recovery:** Added robust automatic recovery for wireless drops with an extended 20-second timeout window, showing a "Connection Interrupted" overlay during reconnection.
- **Automation & Shortcuts:** Restored app shortcuts and Bixby Routines launch behavior by directing static shortcuts to `AutomationActivity` to prevent task-switching flashes and activity duplication.
- **SDK 16 Stability:** Fixed media session initialization crashes on legacy Android versions (such as Android 4.2.2 API 17).
- **Overlay & Watchdog Fixes:** Shortened video watchdog to 1.5s for faster recovery and prevented the loading overlay from getting stuck during decoder restarts.
- **100% Battery USB Workaround:** Added support for automatic reconnection (within 1.5s) when phones detach USB accessory mode upon reaching full charge.
- **PiP & Gesture Navigation:** Fully supported Picture-in-Picture mode on Android 8.0+ and added a new multi-option exit menu triggered via a 2-finger swipe edge gesture.
- **Safety Toggles:** Added a "Fake Speed" toggle (enabled by default) to report virtual vehicle speed and bypass system driving video lockouts.
- **Wireless UI Refresh:** Modernized settings with segmented button selectors for wireless strategies and Nearby modes.

## v.2.2.2
- **Audio Routing:** Added support for **Separate Audio Streams**. This allows independent volume control for Media, Assistant, and Navigation.
- **USB Stability:** Fixed an issue where the Android USB system prompt wouldn't appear. The prompt is now decoupled from Auto-Start behavior and can be toggled via the "Listen for USB Devices" setting.
- **Voice Quality:** Extended microphone debugging and added support for **NoiseSuppressor**, **AutomaticGainControl**, and **AcousticEchoCanceler** (hardware-dependent).
- **Adaptive UI:** Implemented dynamic rescale and UpdateUI logic for devices that report incorrect navigation bar dimensions.
- **Connectivity:** Fixed exit intent handling and improved steering wheel control compatibility across more devices.
- **Day/Night Fix:** Resolved a bug in Auto-Night mode affecting users in the UK and other specific timezones.
- **WiFi Auto-Start:** Added "Auto-start on WiFi" setting. Automatically connect when a specific WiFi SSID is detected.
- **H.265 Optimization:** Implemented dynamic video buffer sizing (2MB for 1080p, 8MB for 4K) to balance stability and performance.


## v.2.2.1
- **USB Stability:** Fixed a fatal error in USB connections introduced in 2.2.0. This is a critical hotfix for wired users.
- **Native Wireless Reconnection:** Implemented a non-blocking, event-driven handshake logic. Pokes (wake-up signals) are now precisely timed to fire only after Wi-Fi credentials are ready, ensuring the phone connects reliably every time.
- **Google Nearby Support:** Added auto-connect support for Google Nearby mode.
- **UI & Task Handling:** Resolved a bug where the app would appear twice in the "Recent Apps" launcher / App-Drawer.
- **Automation:** Fixed issues with routines and intents (e.g., `headunit://connect`) not working correctly.
- **Self Mode Fix:** Added specific error messages for Android 10 and below when attempting to use self-mode.
- **Improved Scaling:** Implemented a new approach for scaling and touch event processing to prevent visual and touch offsets.
- **Localization:** Added translations for USB permission error dialogs in all 15+ supported languages.

## v.2.2.0
- Added: Native AA. 🎉  Warning! This will only work on a limited amount of headunits! Most Android devices do not support connecting 2 Android devices via Bluetooth which is essential for this to work.
- Added: Google Nearby Support as connection method. Needs Wireless Helper 1.6.0 or later
- Added: Pip-Support
- Added: 4K in select
- Try to fix connection problems on WiFi
- Added: Intent and routine for starting the app directly to self mode
- Added: Force Scale Option for older devices on surface view
- Added: New Immersive Fullscreen with avoided notch area. This should fix problems for eg. Pixel Phones
- Enhanced: Video Decoder Error Handling
- Added: 2 new WiFi-Options for a WiFi-Direct. Thanks to @andrecuellar
- Added Japanese language 🇯🇵 thanks to @mattyann87
- Enhanced: Media Session Announcement. Thanks to @irwanrhmn
- New App-Icon without text for better visibility
- Fixed: USB modal appearing for non-Android Auto devices thanks to @andrecuellar
- Added: Create configurable audio queue and audio buffer in settings thanks to @irwanrhmn

## v.2.1.1
- **Hotspot Support:** Added "Enable Hotspot" option for devices where manual hotspot activation is preferred. (Note: Compatibility varies by device, especially on Android 13+).
- **Fake VPN Handler:** Implemented a workaround for newer Android Auto versions in offline mode to ensure reliable connections without active internet.
- **Audio Focus Enhancement:** Improved audio focus logic to resolve issues where sound wouldn't correctly route to the headunit/tablet.
- **Auto-Boot:** Added functionality to automatically start the app on device boot (thanks to @andrecuellar).
- **Legacy Support:** Fixed a layout crash occurring on older Android 4.2 devices.

## v.2.1.0
- **H.265 Video Optimization:** Eliminated artifacts on high-bitrate and 4K-capable hardware by increasing video buffers to 4MB and implementing full VPS/SPS/PPS NAL unit parsing.
- **BMW iDrive Support:** Mapped `KEYCODE_ENTER` to `KEYCODE_DPAD_CENTER` in the internal keymap, ensuring full compatibility with iDrive-style controllers.
- **Clean Exit on Disconnect:** Added a new "Exit on disconnect" setting. Replaced the "brutal" process kill with a graceful shutdown using a global `ExitIntent`.
- **UI Rescue Mode:** Added a secondary "Save" button at the bottom of the settings list. Insets and Fullscreen modes now save immediately (`settings.commit()`) to help users on buggy headunits where the top toolbar is inaccessible.
- **Robustness Fixes:** Resolved an infinite log spam issue in the transport layer during disconnects.
- **Improved Wireless Launch:** Implemented a robust hybrid trigger (Activity + Broadcast) to ensure Android Auto starts reliably on Gearhead 16.4+ (Android 14/15).
- **UI Refinements:** Fixed invisible navigation arrows in light mode and corrected the "Save" button text color in dark mode.
- **Localization:** Added "Wi-Fi is disabled" info toast in all 13 supported languages.
- **Dashboard Scaling:** Increased the maximum width of the home screen layout to 1200dp for better appearance on ultra-wide high-resolution displays (e.g., 1920x720).

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
- **System Navigation Provider:** Registered HURev as an official navigation app.
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
