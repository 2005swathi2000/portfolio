import urllib.request
import ssl
import json
import socket

# Disable SSL verification issues if any corporate proxy, but keep standard ssl context
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

urls = {
    # 7 Profiles
    "Profile: GitHub": "https://github.com/2005swathi2000",
    "Profile: LinkedIn": "https://linkedin.com/in/swathi-hanumanthu-817265291",
    "Profile: LeetCode": "https://leetcode.com/u/Hanumanthu_Swathi/",
    "Profile: GeeksforGeeks": "https://www.geeksforgeeks.org/profile/swathihanumanthu21",
    "Profile: CodeChef": "https://www.codechef.com/users/swathi_hanu_82",
    "Profile: Codeforces": "https://codeforces.com/profile/Swathi_Hanumanthu",
    "Profile: HackerRank": "https://hackerrank.com/profile/hanumanthuswath1",

    # Featured Repos (7)
    "Repo: StudyCircle v2": "https://github.com/2005swathi2000/studycircle-v2",
    "Repo: DevMind AI": "https://github.com/2005swathi2000/DevMind-AI",
    "Repo: AI Resume Analyzer": "https://github.com/2005swathi2000/AI-Resume-Analyzer",
    "Repo: Cloud Data Pipeline": "https://github.com/2005swathi2000/Cloud-Data-Engineering-Pipeline",
    "Repo: Customer Churn ML": "https://github.com/2005swathi2000/Customer_Churn_Analyzer_With_ML",
    "Repo: DocSpot": "https://github.com/2005swathi2000/DocSpot-MERN",
    "Repo: VBCUA": "https://github.com/2005swathi2000/VBCUA-",

    # More Projects Repos (7)
    "Repo: Retail Sales Analysis": "https://github.com/2005swathi2000/FUTURE_DS_Task01",
    "Repo: Hotel Management": "https://github.com/2005swathi2000/Hotel_Management_System",
    "Repo: Student Management": "https://github.com/2005swathi2000/Student-Management-System",
    "Repo: To-Do List": "https://github.com/2005swathi2000/To-Do-List-Python",
    "Repo: Gym Website": "https://github.com/2005swathi2000/Gym-Website",
    "Repo: documind-ai": "https://github.com/2005swathi2000/documind-ai",
    "Repo: DevTwin-AI": "https://github.com/2005swathi2000/DevTwin-AI",

    # Live Demos (6)
    "Demo: StudyCircle v2": "https://studycircle-v2-frontend-standalone.vercel.app/",
    "Demo: DevMind AI": "https://dev-mind-ai-tau.vercel.app/",
    "Demo: AI Resume Analyzer": "https://ai-resume-analyzer-sand-beta.vercel.app/",
    "Demo: Cloud Pipeline": "https://cloud-data-engineering-pipeline-ccwowzxswdnaq6cbcdyxo5.streamlit.app/",
    "Demo: Customer Churn ML": "https://2005swathi2000-customer-churn-analyzer-with-ml-app-0eax27.streamlit.app/",
    "Demo: VBCUA": "https://6r93czc7qqtznsnrythdmn.streamlit.app/",
}

results = []

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
}

for label, url in urls.items():
    status = "UNKNOWN"
    notes = ""
    try:
        req = urllib.request.Request(url, headers=headers, method="GET")
        with urllib.request.urlopen(req, timeout=12, context=ctx) as resp:
            code = resp.getcode()
            status = f"HTTP {code}"
            final_url = resp.geturl()
            if final_url != url:
                notes = f"Redirected to {final_url}"
    except urllib.error.HTTPError as e:
        status = f"HTTP {e.code}"
        # Some platforms return 403 / 429 to non-browser user agents or bot protection (e.g. LinkedIn, LeetCode)
        if e.code in (403, 999):
            notes = "Bot protection / Auth wall (valid page in standard browser)"
    except urllib.error.URLError as e:
        status = f"ERROR"
        notes = str(e.reason)
    except socket.timeout:
        status = "TIMEOUT"
        notes = "Socket timed out after 12s"
    except Exception as e:
        status = "EXCEPTION"
        notes = str(e)
    
    print(f"[{status}] {label} -> {url} {('(' + notes + ')') if notes else ''}")
    results.append({"label": label, "url": url, "status": status, "notes": notes})

with open(r"C:\Users\CHARAN\.gemini\antigravity\scratch\swathi-portfolio\link_audit_report.json", "w") as f:
    json.dump(results, f, indent=2)

print("\nAudit completed. Saved to link_audit_report.json")
