import os
from PIL import Image, ImageDraw, ImageFont

scratch_dir = r"C:\Users\CHARAN\.gemini\antigravity\scratch\swathi-portfolio"
public_dir = os.path.join(scratch_dir, "public")
app_dir = os.path.join(scratch_dir, "src", "app")

# 1. Generate OG Image (1200x630)
og_w, og_h = 1200, 630
og = Image.new("RGB", (og_w, og_h), (11, 15, 25))
draw_og = ImageDraw.Draw(og)

# Subtle background glows
for r in range(400, 0, -4):
    a = int(30 * (1 - r/400))
    draw_og.ellipse([(150-r, 120-r), (150+r, 120+r)], fill=(15 + int(a*1.2), 20 + int(a*1.5), 60 + int(a*4)))

for r in range(350, 0, -4):
    a = int(25 * (1 - r/350))
    draw_og.ellipse([(1050-r, 500-r), (1050+r, 500+r)], fill=(10 + int(a*0.8), 45 + int(a*3), 50 + int(a*3)))

# Subtle border
draw_og.rounded_rectangle([(30, 30), (og_w - 30, og_h - 30)], radius=20, outline=(30, 41, 59), width=2)

try:
    font_badge = ImageFont.truetype("arial.ttf", 18)
    font_name = ImageFont.truetype("arial.ttf", 64)
    font_sub = ImageFont.truetype("arial.ttf", 30)
    font_body = ImageFont.truetype("arial.ttf", 22)
    font_foot = ImageFont.truetype("arial.ttf", 18)
except Exception:
    font_badge = font_name = font_sub = font_body = font_foot = None

# Green Status Pill
draw_og.rounded_rectangle([(80, 75), (320, 115)], radius=20, fill=(6, 78, 59, 100), outline=(16, 185, 129), width=1)
draw_og.ellipse([(100, 91), (112, 103)], fill=(52, 211, 153))
draw_og.text((124, 85), "OPEN TO WORK · SDE", fill=(52, 211, 153), font=font_badge)

# Name & Title
draw_og.text((80, 160), "Hanumanthu Swathi", fill=(255, 255, 255), font=font_name)
draw_og.text((80, 245), "SDE, Full-Stack & AI Engineer", fill=(129, 140, 248), font=font_sub)

# Value statement / summary
draw_og.text(
    (80, 320),
    "B.Tech Information Technology (CGPA 8.30) · Aditya College of Engineering & Technology",
    fill=(226, 232, 240),
    font=font_body,
)
draw_og.text(
    (80, 360),
    "Building real-time collaboration platforms, high-throughput cloud ELT pipelines & production ML.",
    fill=(148, 163, 184),
    font=font_body,
)

# Tech stack tags
tags = ["Next.js", "TypeScript", "Python", "Spring Boot", "AWS", "DuckDB", "Socket.io", "PostgreSQL"]
tx = 80
ty = 440
for tag in tags:
    tw = len(tag) * 11 + 24
    draw_og.rounded_rectangle([(tx, ty), (tx + tw, ty + 38)], radius=8, fill=(30, 41, 59), outline=(71, 85, 105), width=1)
    draw_og.text((tx + 12, ty + 9), tag, fill=(226, 232, 240), font=font_foot)
    tx += tw + 14

# Footer bar
draw_og.line([(80, 530), (og_w - 80, 530)], fill=(30, 41, 59), width=1)
draw_og.text((80, 555), "github.com/2005swathi2000", fill=(148, 163, 184), font=font_foot)
draw_og.text((og_w - 420, 555), "swathi-portfolio-omega.vercel.app", fill=(99, 102, 241), font=font_foot)

og_path = os.path.join(public_dir, "og-image.png")
og.save(og_path, "PNG", optimize=True)
print(f"Generated {og_path} ({os.path.getsize(og_path)} bytes)")


# 2. Generate Apple Touch Icon (180x180)
ati_size = 180
ati = Image.new("RGB", (ati_size, ati_size), (15, 23, 42)) # Slate 900
draw_ati = ImageDraw.Draw(ati)

# Subtle rounded inner background
draw_ati.rounded_rectangle([(8, 8), (ati_size - 8, ati_size - 8)], radius=36, fill=(19, 27, 46), outline=(99, 102, 241), width=2)
# Emerald indicator dot
draw_ati.ellipse([(ati_size - 38, 22), (ati_size - 24, 36)], fill=(16, 185, 129))

try:
    font_logo = ImageFont.truetype("arialbd.ttf", 76)
except Exception:
    font_logo = None

draw_ati.text((42, 48), "HS", fill=(255, 255, 255), font=font_logo)

ati_public = os.path.join(public_dir, "apple-touch-icon.png")
ati_app = os.path.join(app_dir, "apple-touch-icon.png")
ati.save(ati_public, "PNG")
ati.save(ati_app, "PNG")
print(f"Generated apple-touch-icon.png ({ati_size}x{ati_size})")


# 3. Generate Favicon ICO & PNG
icon_32 = ati.resize((32, 32), Image.Resampling.LANCZOS)
icon_16 = ati.resize((16, 16), Image.Resampling.LANCZOS)
icon_48 = ati.resize((48, 48), Image.Resampling.LANCZOS)

fav_ico_pub = os.path.join(public_dir, "favicon.ico")
fav_ico_app = os.path.join(app_dir, "favicon.ico")
icon_48.save(fav_ico_pub, format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
icon_48.save(fav_ico_app, format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])

# 4. Generate SVG icon
svg_content = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="16" fill="#0f172a" stroke="#6366f1" stroke-width="2"/>
  <circle cx="50" cy="14" r="4" fill="#10b981" />
  <text x="50%" y="62%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="28">HS</text>
</svg>'''

with open(os.path.join(public_dir, "icon.svg"), "w", encoding="utf-8") as f:
    f.write(svg_content)
with open(os.path.join(app_dir, "icon.svg"), "w", encoding="utf-8") as f:
    f.write(svg_content)

print("Generated icon.svg")

