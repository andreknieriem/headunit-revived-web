---
title: Hardware Compatibility
description: Tested devices and recommended settings for various SoCs.
---

Android Head Units use a vast variety of processors (SoCs). Some work perfectly with default settings, while others (like Mediatek or Rockchip) require specific tweaks for stability.

## Tested Devices

| Device / SoC Type | Android Version | View| Recommended Settings (different from default) |
| :--- | :--- | :--- | :--- |
| Samsung Galaxy S24 | 16 | Landscape | Resolution: 1080p, DPI 240 |
| Samsung Galaxy S24 | 16 | Portrait | Resolution: 1080p, DPI 175 |
| Amazon Fire HD 8 | 9 | Landscape | View-Mode: Gles20, Video-Codec: H264 |
| Amazon Fire HD 8 | 9 | Portrait | DPI: 150, View-Mode: Gles20, Video-Codec: H264 |
| Chinese Headunit Ultrawide (1920x720) | 8.1 | Landscape | Resolution: 1080p, DPI 240, View-Mode: Gles20, Video-Codec: H264 |
| Noname Chinese Tablet | 8.1 or 5.1, hard to tell | Landscape | Resolution: 720p, View-Mode: Gles20, Video-Codec: H264 |
| Noname Chinese Tablet | 8.1 or 5.1, hard to tell | Portrait | Resolution: 1080p, DPI: 150, View-Mode: Gles20, Video-Codec: H264 |

## Troubleshooting Tips

### Black Screen but Audio works
*   Switch **View Mode** to `GLES20`.
*   Enable **Force Software Decoding** (last resort).

### Video Freezes
*   Lower **FPS Limit** to `30`.
*   Lower **Resolution** to `720p`.
*   Ensure you are using 5GHz WiFi if connecting wirelessly.

### Laggy Input
*   Try changing the **DPI** to a fixed value (e.g., 160 or 240) instead of Auto.

:::tip
**Community Driven:** If you have tested a device not listed here, please open an issue on GitHub to help the community!
:::
