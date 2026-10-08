"""Yeni RULMAK logosunu proje varlıklarına işler.

Kullanım:
    python script/update_logo.py [YENI_LOGO.png] [YENI_IKON.png]

Üretilen dosyalar:
    client/public/logo/logo.png            - renkli (açık zemin) logo
    client/public/logo/logo-white.png      - beyaz (koyu zemin) logo
    client/public/logo/favicon.png         - favicon (512)
    client/public/favicon.png              - index.html favicon'i (512)
    client/public/logo/favicon.ico         - çok boyutlu ico
    favicon.ico                            - kökteki ico (electron)
    buildResources/icon.ico, electron/app.ico - electron ikonları
    attached_assets/logo_*.png             - Login/Register/Admin sayfaları
"""

import sys
from pathlib import Path

from PIL import Image

ICO_SIZES = [(16, 16), (24, 24), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
ALPHA_THRESHOLD = 8
PAD = 4


def load(path: Path) -> Image.Image:
    if not path.exists():
        raise SystemExit(f"Dosya bulunamadı: {path}")
    return Image.open(path).convert("RGBA")


def trim(img: Image.Image) -> Image.Image:
    """Saydam kenar boşluklarını kırpır."""
    mask = img.getchannel("A").point(lambda a: 255 if a > ALPHA_THRESHOLD else 0)
    box = mask.getbbox()
    if box is None:
        raise SystemExit("Görsel tamamen saydam.")
    left, top, right, bottom = box
    left = max(0, left - PAD)
    top = max(0, top - PAD)
    right = min(img.width, right + PAD)
    bottom = min(img.height, bottom + PAD)
    return img.crop((left, top, right, bottom))


def to_white(img: Image.Image) -> Image.Image:
    """Tüm görünür pikselleri beyaza çevirir (koyu zemin için)."""
    white = Image.new("RGBA", img.size, (255, 255, 255, 0))
    white.putalpha(img.getchannel("A"))
    return white


def square(img: Image.Image) -> Image.Image:
    """Görseli şeffaf dolgulu kareye oturtur."""
    side = max(img.width, img.height)
    out = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    out.paste(img, ((side - img.width) // 2, (side - img.height) // 2), img)
    return out


def main():
    root = Path(__file__).resolve().parents[1]

    logo_src = Path(sys.argv[1]) if len(sys.argv) > 1 else Path.home() / "Downloads" / "Rulmak-Mavi.png"
    icon_src = Path(sys.argv[2]) if len(sys.argv) > 2 else Path.home() / "Downloads" / "Rulmak-Icon-Mavi.png"

    color_logo = trim(load(logo_src))
    white_logo = to_white(color_logo)

    favicon_master = square(trim(load(icon_src))).resize((512, 512), Image.LANCZOS)

    png_targets = [
        root / "client" / "public" / "logo" / "logo.png",
        root / "attached_assets" / "logo_1766887510744.png",
    ]
    white_targets = [
        root / "client" / "public" / "logo" / "logo-white.png",
        root / "attached_assets" / "logo-white_1766887510744.png",
    ]
    favicon_targets = [
        root / "client" / "public" / "logo" / "favicon.png",
        root / "client" / "public" / "favicon.png",
    ]
    ico_targets = [
        root / "client" / "public" / "logo" / "favicon.ico",
        root / "favicon.ico",
        root / "buildResources" / "icon.ico",
        root / "electron" / "app.ico",
    ]

    for path in png_targets:
        path.parent.mkdir(parents=True, exist_ok=True)
        color_logo.save(path, format="PNG", optimize=True)
        print("yazildi", path.relative_to(root), color_logo.size)

    for path in white_targets:
        path.parent.mkdir(parents=True, exist_ok=True)
        white_logo.save(path, format="PNG", optimize=True)
        print("yazildi", path.relative_to(root), white_logo.size)

    for path in favicon_targets:
        path.parent.mkdir(parents=True, exist_ok=True)
        favicon_master.save(path, format="PNG", optimize=True)
        print("yazildi", path.relative_to(root), favicon_master.size)

    for path in ico_targets:
        path.parent.mkdir(parents=True, exist_ok=True)
        favicon_master.save(path, format="ICO", sizes=ICO_SIZES)
        print("yazildi", path.relative_to(root), path.stat().st_size, "bayt")


if __name__ == "__main__":
    main()