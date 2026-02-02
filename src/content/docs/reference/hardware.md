---
title: Hardware Compatibility
description: Tested devices and recommended settings for various SoCs.
---

Android Head Units use a vast variety of processors (SoCs). Some work perfectly with default settings, while others (like Mediatek or Rockchip) require specific tweaks for stability.

## Tested Devices

| Device / SoC Type | Android Version | Recommended Settings | Notes |
| :--- | :--- | :--- | :--- |
| **Snapdragon (High-end)** | 10 - 13 | Default | Works flawlessly at 1080p/60fps. |
| **Mediatek (MTK)** | 9 - 12 | **View Mode: GLES20** or **Force Legacy Decoder** | Modern Async decoders often crash on MTK. |
| **Rockchip (PX5/PX6)** | 9 - 10 | **Use Native SSL** | Helps with audio stuttering. |
| **Older Tablets (Lollipop)** | 5.1 | **Force Legacy Decoder**, 480p | Low RAM devices should stay at 480p. |

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
