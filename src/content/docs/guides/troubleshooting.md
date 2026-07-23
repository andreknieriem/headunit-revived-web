---
title: Troubleshooting
description: Common issues and how to fix them.
---

If you encounter issues while using Headunit Revived, check the following solutions.

## Common Issues

### Black Screen on Connection
- **Software Decoder:** Try enabling "Force Software Decoder" in the app settings.
- **Audio Sink:** Ensure the Audio Sink is configured correctly or try disabling it for testing.
- **Video Renderer:** Switch between `TextureView` and `SurfaceView` in settings to see which performs better on your hardware.

### Green Screen / Video Corruption
- **Cause:** Certain hardware video decoders on Android head units fail to decode H.265 (HEVC) streams properly, resulting in a solid green screen or heavy pixelation/glitches.
- **Fix:** Go to **Settings -> Video** -> **Video Codec** and switch from "Auto" / "H.265" to **H.264**.
- **Alternative Fixes:** Switch the **View Mode** in **Settings -> Graphic** to `GLES20` or enable **Force Software Decoding** in Video settings.

### Video runs at 30 FPS / Feels slow when not interacting
- **Design Choice:** This is a battery-saving design choice by Android Auto itself, not a bug in Headunit Revived. To save energy when the driver is not interacting with the screen, Android Auto reduces the frame rate to 30 FPS. It will instantly jump back up to 60 FPS when you tap the screen, move the map, or otherwise interact with the display.

### App Crashes
- **Log Export:** Use the "In-App Log Export" feature in the settings to save a log file and share it on GitHub or the Google Group for debugging.
- **Version Check:** Ensure you are running the latest version from the Play Store.

### USB Connection Fails
- See the [Wired USB Guide](/guides/wired/#troubleshooting-usb) for specific USB tips.

### Music keeps pausing / stopping (USB & Bluetooth connected)
If music playback keeps pausing automatically when connected:
- **Cause:** This is a known issue with Android Auto when connected via USB (or wireless) while simultaneously paired via Bluetooth. Bluetooth Media Audio conflicts with Android Auto's audio routing.
- **Fix:** On your phone, go to **Bluetooth Settings**, tap the gear icon next to your headunit/car Bluetooth device, and **turn off "Media audio" / "Media Playback"** (leave "Phone calls" enabled if needed).
- **Reference:** See the official [Google Support Community Thread](https://support.google.com/androidauto/thread/292803756/music-keeps-pausing-in-android-auto?hl=en).

### Wireless Connection Drops Frequently
If your wireless connection works but drops after a short time, it's usually a phone setting.
- **Cause:** Features like "WiFi Assistant" or "Switch to mobile data" kill the WiFi connection because the headunit's network has no internet.
- **Fix:** On your phone, go to **WiFi Settings -> Advanced** and disable **"Switch between networks"**, **"WiFi Assistant"**, or **"Network acceleration"**.

### Google Maps touch not working (Portrait Mode)
If you use the app in Portrait Mode and cannot interact with the map (but other buttons work), it's likely a scaling issue.
- **Fix:** Go to **Settings** -> **DPI** and set a value **below 200** (e.g., 190). Restart the session to apply.

### Self-mode on Android 10 (Q) and below
Google has disabled the automatic wireless projection startup for Android 10 and below in Android Auto versions 16.4 and higher. While Self-mode still works on newer Android versions, it is normally impossible to trigger projection on Android 10 and below directly.

:::tip[Workaround: Connecting via Wi-Fi Loopback]
You can bypass this restriction by starting the built-in Android Auto Headunit Server on your phone and connecting via Wi-Fi mode in Headunit Revived.
:::

1. **Enable Android Auto Developer Options**
   - Open your phone's Settings → Connected devices → Android Auto (or search for "Android Auto" in your settings).
   - Scroll to the bottom and tap the **Version** section rapidly 10 times to unlock Developer Settings.
2. **Start the Headunit Server**
   - Tap the three dots in the top-right corner of the Android Auto settings screen.
   - Select **Start head unit server** from the dropdown.
   - A persistent notification will appear in your status bar confirming the server is running.
3. **Connecting via Wi-Fi Mode in Headunit Revived**
   - Open Headunit Revived, go to Settings, and make sure your **Wireless Mode** is set to **Headunit Server**.
   - Go back to the main screen and tap the **Wi-Fi** button.
   - The app will start scanning the network (in this case, your phone's internal loopback address).
   - Select your local Android Auto server from the available connections list to launch the dashboard successfully!

## Still having trouble?

- **GitHub Issues:** [Report a bug](https://github.com/andreknieriem/headunit-revived/issues)
- **Community:** Ask in the [Google Group](https://groups.google.com/g/headunit-revived)
