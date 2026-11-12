import os
from PIL import Image, ImageDraw, ImageFont

out_dir = r"C:\Users\CHARAN\.gemini\antigravity\scratch\swathi-portfolio\public\projects"
w, h = 1280, 720

# Create sleek minimal dark gradient
img = Image.new("RGB", (w, h), (11, 15, 25)) # slate 950
draw = ImageDraw.Draw(img)

# Smooth ambient gradient glow in background
for r in range(450, 0, -4):
    alpha = int(35 * (1 - r / 450))
    # Indigo glow top-left
    draw.ellipse([(200-r, 180-r), (200+r, 180+r)], fill=(15 + int(alpha*1.4), 20 + int(alpha*1.6), 65 + int(alpha*4.5)))

for r in range(400, 0, -4):
    alpha = int(30 * (1 - r / 400))
    # Teal/Emerald glow bottom-right
    draw.ellipse([(1080-r, 540-r), (1080+r, 540+r)], fill=(10 + int(alpha*0.8), 45 + int(alpha*3.2), 55 + int(alpha*3.8)))

# Minimal frame border
draw.rounded_rectangle([(40, 40), (w - 40, h - 40)], radius=24, outline=(30, 41, 59), width=2)

try:
    font_badge = ImageFont.truetype("arialbd.ttf", 18)
    font_title = ImageFont.truetype("arialbd.ttf", 64)
    font_sub = ImageFont.truetype("arial.ttf", 26)
    font_stack = ImageFont.truetype("arial.ttf", 20)
except Exception:
    font_badge = font_title = font_sub = font_stack = None

# Category Badge Pill
draw.rounded_rectangle([(w//2 - 130, 200), (w//2 + 130, 240)], radius=20, fill=(30, 41, 59), outline=(71, 85, 105), width=1)
draw.text((w//2, 220), "FULL-STACK HEALTHCARE", fill=(129, 140, 248), font=font_badge, anchor="mm")

# Project Title
draw.text((w//2, 320), "DocSpot", fill=(255, 255, 255), font=font_title, anchor="mm")

# Subtitle
draw.text((w//2, 390), "Clinical Appointment & Doctor Scheduling Platform", fill=(203, 213, 225), font=font_sub, anchor="mm")

# Architecture Highlights
draw.text((w//2, 440), "Optimistic Concurrency Control · Conflict-Free Slot Reservations", fill=(148, 163, 184), font=font_stack, anchor="mm")

# Tech Stack Pill
draw.text((w//2, 510), "React 18 · Redux Toolkit · Node.js · Express.js · MongoDB", fill=(99, 102, 241), font=font_stack, anchor="mm")

docspot_path = os.path.join(out_dir, "docspot.webp")
img.save(docspot_path, "WEBP", quality=90)
print(f"Generated clean gradient placeholder {docspot_path}")

