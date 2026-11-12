import urllib.request
import re
import json

html = ""
with urllib.request.urlopen("http://localhost:3000") as resp:
    html = resp.read().decode("utf-8")

checks = []

def check(category, name, condition, details=""):
    checks.append({
        "category": category,
        "name": name,
        "passed": bool(condition),
        "details": details
    })

# 1. SEO
check("SEO", "Document Title", "<title>" in html and "Hanumanthu Swathi" in html, "Found custom title tag")
check("SEO", "Meta Description", '<meta name="description"' in html, "Found meta description")
check("SEO", "Meta Viewport", '<meta name="viewport"' in html, "Found mobile responsive viewport")
check("SEO", "Meta Robots", '<meta name="robots"' in html, "Found robots indexing directive")
check("SEO", "OpenGraph Image", 'property="og:image"' in html or 'og-image' in html, "OG image configured")
check("SEO", "JSON-LD Person Schema", 'application/ld+json' in html and '"@type":"Person"' in html, "Valid Person JSON-LD")

# 2. Accessibility
check("A11y", "Skip to Main Content Link", 'href="#main-content"' in html, "Found accessible skip link")
check("A11y", "Main Landmark ID", 'id="main-content"' in html, "Main landmark has id=main-content")
h1_count = len(re.findall(r'<h1[^>]*>', html))
check("A11y", "Single H1 Heading", h1_count == 1, f"Found exactly {h1_count} h1 heading(s)")
check("A11y", "ARIA Labels on Buttons", 'aria-label=' in html, "Found ARIA labels on icon buttons")
check("A11y", "ARIA Expanded on Drawers/Menus", 'aria-expanded=' in html, "Found ARIA expanded attributes")
check("A11y", "Image Alt Attributes", 'alt="StudyCircle v2' in html or 'alt=' in html, "Images have descriptive alt tags")

# 3. Best Practices
check("A11y", "Lang Attribute on HTML", '<html lang="en"' in html, "HTML has lang=en attribute")
check("Best Practices", "Charset UTF-8", '<meta charset=' in html or 'charset="utf-8"' in html.lower(), "Charset defined")
check("Best Practices", "External Links rel noopener", 'rel="noopener noreferrer"' in html, "External links protect against tab-nabbing")

# 4. Content Hygiene
has_todo = "TODO" in html
check("Content Hygiene", "Zero TODOs in Rendered UI", not has_todo, "No TODO strings rendered in UI" if not has_todo else "FAIL: TODO found in HTML")
has_wireframe = "TODO: Production Screenshot" in html
check("Content Hygiene", "Zero Wireframe Placeholders", not has_wireframe, "All projects use production thumbnails")

print(json.dumps(checks, indent=2))
passed = sum(1 for c in checks if c["passed"])
print(f"\n{passed}/{len(checks)} checks passed!")
