---
title: Changelog
description: History of releases and changes in Headunit Revived.
---

## v.1.13.3
- Fixed: Screen Issues on Android 4.x regarding header and navigation bars.
- Fixed: Night-Mode toggle and calculation bugs.
- New Feature: Integrated a comprehensive language selector for easier app localization.

## v.1.13.2
- Fixed: Margins now working correctly on devices prior to Android 5.0 (Jelly Bean/KitKat)
- Fixed: Broken colors and mixed UI themes (Day/Night) on older devices
- Fixed: Connection drop after ~20 minutes caused by oversized/fragmented SSL messages
- Fixed: Various compiler and lint warnings for better stability

## v.1.13.1
- Fixed: Custom Insets Dialog with a Scrollview for better landscape support
- Fixed: Multiple app crashes reported in Play Console (MicRecorder, Navigation, SSL)
- Fixed: Warnings in Play Console for edge-to-edge display compliance
- Fixed: Race condition in SSL read/write operations
- Improvement: Prevent disconnect if a single corrupted package is detected in SSL transfer

## v.1.13.0
- Improvement: USB stability overhaul (implemented 16KB internal buffer)
- New Feature: Custom Insets (Margins) setting with live preview
- Fixed: Video decoder blackscreen on some AI-Boxes (H.264 NAL padding)
- Fixed: UI focus issues in Settings causing system bars to reappear
- Fixed: Native SIGABRT crashes during reconnection
- Fixed: Android 15 Edge-to-Edge compatibility (SDK 35)

## v.1.12.0
- Major Improvement: Wireless Connectivity overhaul (Socket Reuse, better Handshake)
- New Feature: Wireless Mode Switch (Manual, Auto-Scan, Wireless Helper Support)
- Added: Support for Wireless Helper companion app
- Fixed: Android 15 (16KB page size) compatibility for native libraries

## v.1.11.1
- Improvement: 1440p and h265 are now checked both. Some old devices have more than 1080p but no h265 support and android auto crashes with Error 11
- Fixed bug in Kitkat Devices on search for wireless devices
- Merged PR #94 - Fixed blurry icon. Thanks to @nicoruy
- Merged PR #95 - Make Settings own View to apply directly. Thanks to @nicoruy

## v.1.11.0
- New Feature: Advanced Night Mode (Light Sensor, Screen Brightness, separate thresholds, manual time)
- Improvement: Audio Stuttering fixed (Optimized ACK handling)
- Improvement: USB Reconnection stability (Added "Reconnection Required" dialog for stuck sessions)
- Improvement: WiFi Discovery (Added Multi-Interface Scan and NSD/mDNS support)
- New Feature: Enhanced Service Notification (Reduced noise, added Exit button)
- Added: Spanish translation 🇪🇸 thanks to @andrecuellar
- Added: Ukraine translation 🇺🇦 thanks to welshi32
- Bugfix: Non-Fullscreen View was stretched, touch could be off
- Bugfix: Wifi with Headunit Server now works with hotspot

## v.1.10.4
- Added: Dutch translation 🇳🇱 thanks to safariking
- Several black screen and connection error enhancements
- Bugfix: Crash in Background if not started as foreground service

## v.1.10.3
- Bugfix: Force Software Decoder wasn't getting always the sw decoder
- Added: Russian translation 🇷🇺 thanks to @prostozema
- Enhancement: Fixing small issues in the video-decoder which should help lower spec devices to render properly (but act a little bit slower perhaps)

## v.1.10.2
- Bigfix - Button Mapping ignored #71
- New Feature: Screen-Orientation Feature to lock to a certain orientation (Landscape/Portrait) #69 thanks to @JanRi3D
- Enhancement: SSL will now attempt multiple times and not break instantly thanks to @MicaelJarniac
- Added: Chinese(Tradionnal) translation 🇹🇼 thanks to @GazCore
- Added: Czech translation 🇨🇿 thanks to @teodortomas #75
- Fixed brazilian portuguese folder name

## v.1.10.1
- Bugfix: Added missing 3 Byte startcode which stops some devices to start the projection
- Added PR #68 - Fix Wifi Direct detection thanks to @rakshan-kumr
- Added PR #67 - Brazilian Portuguese translation 🇧🇷 thanks to @MicaelJarniac
- Added PR #66 - Add conscrypt to fix error 7 on lower Android versions 🚀, thanks to @JanRi3D

## v.1.10.0
- New Feature: Portrait Mode Support (Dashboard & Projection) with smart resolution scaling
- New Feature: Redesigned Keymap Screen (easier configuration)
- New Feature: Right Hand side driving setting (#63)
- New Feature: Auto-Connect last session (Thanks to @JanRi3D) (#21)
- New Feature: Auto-Selfmode if enabled in settings
- New Feature: Allow sideloaded apps (#57)
- Localization: Added German Translation 🇩🇪
- Improvement: TextureView is now the default renderer
- Improvement: Fixed Dashboard layout rotation
- Rewrite: Completly Rewrite the Video-Decoder

[... See GitHub for older releases](https://github.com/andreknieriem/headunit-revived)
