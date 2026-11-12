import os

files = [
    "About.tsx",
    "Skills.tsx",
    "MoreProjects.tsx",
    "Experience.tsx",
    "Certifications.tsx",
    "Achievements.tsx",
    "Education.tsx",
    "CodingProfiles.tsx",
    "Footer.tsx"
]

base_dir = r"C:\Users\CHARAN\.gemini\antigravity\scratch\swathi-portfolio\src\components"

for name in files:
    path = os.path.join(base_dir, name)
    with open(path, "r", encoding="utf-8") as f:
        lines = f.readlines()
    if lines and 'use client' in lines[0]:
        # Remove the first line and any following blank line
        new_lines = lines[1:]
        while new_lines and new_lines[0].strip() == '':
            new_lines.pop(0)
        with open(path, "w", encoding="utf-8") as f:
            f.writelines(new_lines)
        print(f"Converted {name} to Server Component")
    else:
        print(f"{name} is already Server Component")

