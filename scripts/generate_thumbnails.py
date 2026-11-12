import os
import math
from PIL import Image, ImageDraw, ImageFont

out_dir = r"C:\Users\CHARAN\.gemini\antigravity\scratch\swathi-portfolio\public\projects"

# 1. Cloud Pipeline
p_dp = r"C:\Users\CHARAN\.gemini\antigravity\scratch\Cloud-Data-Engineering-Pipeline\images\data_quality_governance.png"
if os.path.exists(p_dp):
    im_dp = Image.open(p_dp)
    canvas_dp = Image.new("RGB", (1280, 720), (15, 23, 42))
    w_dp = 1240
    h_dp = int(im_dp.height * (w_dp / im_dp.width))
    im_dp_resized = im_dp.resize((w_dp, min(h_dp, 660)), Image.Resampling.LANCZOS)
    y_offset = (720 - im_dp_resized.height) // 2
    canvas_dp.paste(im_dp_resized, (20, y_offset))
    canvas_dp.save(os.path.join(out_dir, "cloud-pipeline.webp"), "WEBP", quality=88)
    print("Saved cloud-pipeline.webp")

# 2. Customer Churn
p_churn = r"C:\Users\CHARAN\.gemini\antigravity\scratch\Customer_Churn_Analyzer_With_ML\images\roc_pr_curves.png"
if os.path.exists(p_churn):
    im_churn = Image.open(p_churn)
    canvas_churn = Image.new("RGB", (1280, 720), (15, 23, 42))
    w_ch = 1240
    h_ch = int(im_churn.height * (w_ch / im_churn.width))
    im_churn_resized = im_churn.resize((w_ch, min(h_ch, 660)), Image.Resampling.LANCZOS)
    y_offset = (720 - im_churn_resized.height) // 2
    canvas_churn.paste(im_churn_resized, (20, y_offset))
    canvas_churn.save(os.path.join(out_dir, "customer-churn-ml.webp"), "WEBP", quality=88)
    print("Saved customer-churn-ml.webp")

# 3. VBCUA
w, h = 1280, 720
canvas_vbcua = Image.new("RGB", (w, h), (15, 23, 42))
draw = ImageDraw.Draw(canvas_vbcua)

# Background subtle indigo glow
for r in range(400, 0, -5):
    alpha = int(25 * (1 - r/400))
    draw.ellipse([(150-r, 200-r), (150+r, 200+r)], fill=(30 + int(alpha*1.2), 27 + int(alpha*1.5), 75 + int(alpha*4)))

# Card mockup
draw.rounded_rectangle([(140, 60), (1140, 660)], radius=16, fill=(18, 24, 38), outline=(51, 65, 85), width=1)
draw.rounded_rectangle([(140, 60), (1140, 120)], radius=16, fill=(24, 32, 50))
draw.rectangle([(140, 100), (1140, 120)], fill=(24, 32, 50))
draw.line([(140, 120), (1140, 120)], fill=(51, 65, 85), width=1)
draw.ellipse([(165, 85), (175, 95)], fill=(239, 68, 68))
draw.ellipse([(185, 85), (195, 95)], fill=(245, 158, 11))
draw.ellipse([(205, 85), (215, 95)], fill=(16, 185, 129))

try:
    font_lg = ImageFont.truetype("arial.ttf", 32)
    font_md = ImageFont.truetype("arial.ttf", 20)
    font_sm = ImageFont.truetype("arial.ttf", 16)
except Exception:
    font_lg = font_md = font_sm = None

draw.text((250, 78), "VBCUA - Voice-Based Concept Understanding Analyser", fill=(241, 245, 249), font=font_md)

# Waveform mockup box
draw.rounded_rectangle([(180, 150), (1100, 270)], radius=12, fill=(11, 15, 25), outline=(71, 85, 105), width=1)
draw.text((200, 165), "Acoustic Signal Processing (Librosa - 16kHz Audio Stream)", fill=(148, 163, 184), font=font_sm)
for i, bx in enumerate(range(200, 1080, 8)):
    bar_h = int(25 + 40 * math.sin(i * 0.25) * math.cos(i * 0.12) + (i % 5) * 8)
    draw.line([(bx, 240 - bar_h), (bx, 240 + bar_h)], fill=(99, 102, 241), width=4)

metrics = [
    ("Speech Pause Ratio", "0.142", "Optimal cadence"),
    ("RMS Energy", "0.048", "Clear projection"),
    ("Semantic Match", "88.5%", "High alignment"),
    ("Assessment Report", "PDF", "Ready to export")
]
for idx, (m_title, m_val, m_sub) in enumerate(metrics):
    mx = 180 + idx * 235
    draw.rounded_rectangle([(mx, 300), (mx + 215, 420)], radius=10, fill=(24, 32, 50), outline=(51, 65, 85), width=1)
    draw.text((mx + 16, 315), m_title, fill=(148, 163, 184), font=font_sm)
    draw.text((mx + 16, 345), m_val, fill=(248, 250, 252), font=font_lg)
    draw.text((mx + 16, 390), m_sub, fill=(16, 185, 129), font=font_sm)

draw.rounded_rectangle([(180, 450), (1100, 630)], radius=12, fill=(24, 32, 50), outline=(51, 65, 85), width=1)
draw.text((200, 470), "Transcript & Technical Concept Alignment", fill=(226, 232, 240), font=font_md)
draw.text((200, 510), "In distributed systems, eventual consistency allows replicas to diverge temporarily before converging...", fill=(148, 163, 184), font=font_sm)
draw.text((200, 550), "Keyword Coverage: Replication (100%), Convergence (100%), CAP Theorem (85%), Latency (90%)", fill=(129, 140, 248), font=font_sm)
draw.text((200, 590), "Engine: Groq Whisper API (primary) - OpenAI Whisper (fallback) - ReportLab PDF Generator", fill=(100, 116, 139), font=font_sm)

canvas_vbcua.save(os.path.join(out_dir, "vbcua.webp"), "WEBP", quality=88)
print("Saved vbcua.webp")

