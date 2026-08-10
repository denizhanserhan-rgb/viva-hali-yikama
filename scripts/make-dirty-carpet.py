"""Before = same carpet, yellowed/dusty/matted. After = bright clean."""
from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image, ImageEnhance, ImageFilter

ROOT = Path(r"c:\Users\Kartal\Desktop\Viva\public\images")
SRC = ROOT / "before-after-carpet.png"
OUT_BEFORE = ROOT / "carpet-before.png"
OUT_AFTER = ROOT / "carpet-after.png"

rng = np.random.default_rng(42)


def value_noise(h: int, w: int, scale: int) -> np.ndarray:
    gh = max(2, h // scale + 2)
    gw = max(2, w // scale + 2)
    grid = rng.random((gh, gw)).astype(np.float32)
    ys = np.linspace(0, gh - 1, h)
    xs = np.linspace(0, gw - 1, w)
    y0 = np.floor(ys).astype(int)
    x0 = np.floor(xs).astype(int)
    y1 = np.clip(y0 + 1, 0, gh - 1)
    x1 = np.clip(x0 + 1, 0, gw - 1)
    wy = (ys - y0)[:, None]
    wx = (xs - x0)[None, :]
    top = grid[y0][:, x0] * (1 - wx) + grid[y0][:, x1] * wx
    bot = grid[y1][:, x0] * (1 - wx) + grid[y1][:, x1] * wx
    return top * (1 - wy) + bot * wy


def fbm(h: int, w: int) -> np.ndarray:
    total = np.zeros((h, w), dtype=np.float32)
    amp, norm, scale = 0.5, 0.0, 80
    for _ in range(5):
        total += value_noise(h, w, scale) * amp
        norm += amp
        amp *= 0.5
        scale = max(5, scale // 2)
    out = total / norm
    return (out - out.min()) / (out.max() - out.min() + 1e-6)


def main() -> None:
    clean = Image.open(SRC).convert("RGB")
    w, h = clean.size
    src = np.asarray(clean).astype(np.float32)

    after = ImageEnhance.Color(clean).enhance(1.12)
    after = ImageEnhance.Contrast(after).enhance(1.1)
    after = ImageEnhance.Brightness(after).enhance(1.06)
    after.save(OUT_AFTER, optimize=True)

    lum = (0.299 * src[:, :, 0] + 0.587 * src[:, :, 1] + 0.114 * src[:, :, 2]) / 255.0
    light = np.clip((lum - 0.25) / 0.6, 0, 1)
    uneven = fbm(h, w)

    # Start from original — keep pattern/colors recognizable
    dirty = src.copy()

    # Yellow the light cream patches (tea / age)
    tea = np.array([186, 158, 112], dtype=np.float32)
    tea_amt = light * (0.42 + 0.28 * uneven)
    dirty = dirty * (1 - tea_amt[:, :, None]) + tea * tea_amt[:, :, None]

    # Soft dusty film (gray-beige), stronger on lights
    dust = np.array([150, 140, 122], dtype=np.float32)
    dust_amt = light * (0.18 + 0.22 * uneven)
    dirty = dirty * (1 - dust_amt[:, :, None]) + dust * dust_amt[:, :, None]

    # Mild wear darkening down the middle — keep subtle
    yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
    path = np.exp(-(((yy / h - 0.52) / 0.38) ** 2) - (((xx / w - 0.5) / 0.5) ** 2))
    path = path * (0.55 + 0.45 * uneven)
    dirty *= 1.0 - 0.16 * path[:, :, None]

    # Slight overall dim + warmth (dirty room)
    dirty = dirty * 0.90
    dirty[:, :, 0] *= 1.03
    dirty[:, :, 2] *= 0.95

    # Matte pile — reduce bright peaks only
    peak = np.clip((lum - 0.55) / 0.35, 0, 1)[:, :, None]
    dirty = dirty * (1 - peak * 0.12)

    # Micro grit
    grit = (value_noise(h, w, max(4, min(h, w) // 70)) - 0.5) * 8
    dirty += grit[:, :, None]

    dirty = np.clip(dirty, 0, 255)
    img = Image.fromarray(dirty.astype(np.uint8), mode="RGB")
    img = ImageEnhance.Color(img).enhance(0.9)
    img = ImageEnhance.Contrast(img).enhance(0.94)
    # Tiny blur for matted feel, blended lightly
    soft = img.filter(ImageFilter.GaussianBlur(radius=0.55))
    img = Image.blend(img, soft, 0.25)

    arr = np.asarray(img).astype(np.float32)
    arr += rng.normal(0, 2.0, (h, w, 1)).astype(np.float32)
    out = Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8))
    out.save(OUT_BEFORE, optimize=True)
    out.save(ROOT / "before-carpet-dirty.png", optimize=True)
    Image.open(OUT_AFTER).save(ROOT / "after-carpet-clean.png", optimize=True)
    print("done")


if __name__ == "__main__":
    main()
