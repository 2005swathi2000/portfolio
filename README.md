# Hanumanthu Swathi — SDE, FSD and AI Engineer

A high-performance, modern portfolio built for **Hanumanthu Swathi** using **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed specifically for technical recruiters and engineering hiring managers at top tier product companies (Google, Amazon, Flipkart, Walmart).

- **Live URL:** [https://swathi-portfolio-omega.vercel.app](https://swathi-portfolio-omega.vercel.app)
- **GitHub:** [@2005swathi2000](https://github.com/2005swathi2000)
- **Headline:** SDE, FSD and AI Engineer
- **Target Role:** SDE, FSD and AI Engineer / SWE Internships & Entry-Level Roles

---

## 🏗️ Architecture & Single-Source-of-Truth Content

All textual content, project links, credentials, experience bullets, and configuration options live in **one single typed TypeScript file**:

```text
/data/portfolio.ts
```

*(Note: `src/data/portfolio.ts` simply re-exports this master file for clean import aliasing).*

To update any text on the website:
1. Open `/data/portfolio.ts`.
2. Edit the corresponding typed fields (e.g., `hero`, `about`, `skills`, `featuredProjects`, `moreProjects`, `experience`, `certifications`, `achievements`, `education`, `codingProfiles`, `contact`).
3. Save the file. Changes are immediately reflected across the entire site without touching a single React component.

---

## 🚀 Quickstart & Local Development

### Prerequisites
- **Node.js**: v18.17.0+ (Tested on Node v22.19.0)
- **npm**: v9.0+

### Setup
```bash
# 1. Clone the repository
git clone https://github.com/2005swathi2000/swathi-portfolio.git
cd swathi-portfolio

# 2. Install dependencies
npm install

# 3. Create your local environment file (optional for contact form)
cp .env.example .env.local

# 4. Start local development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view your site.

### Build & Lint
```bash
# Run ESLint validation
npm run lint

# Generate optimized production build
npm run build

# Start production server locally
npm run start
```

---

## ✉️ Contact Form Configuration (Formspree & Zero Secrets)

The contact form is built with **zero client-side secrets**. You have two options:

### Option A: Using Formspree (Recommended)
1. Sign up for free at [Formspree.io](https://formspree.io) and create a new form.
2. Note your Form ID (e.g., `xpznklyb`).
3. Set your Form ID or Endpoint URL in `.env.local`:
   ```bash
   # In .env.local
   NEXT_PUBLIC_FORMSPREE_ID=xpznklyb
   # Or provide the full endpoint:
   # NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xpznklyb
   ```
4. For Vercel production:
   - Go to your Vercel Project Dashboard -> **Settings** -> **Environment Variables**.
   - Add Key: `NEXT_PUBLIC_FORMSPREE_ID`, Value: `your_form_id`.
   - Redeploy.

### Option B: Built-in Mailto Fallback
If neither `NEXT_PUBLIC_FORMSPREE_ID` nor `NEXT_PUBLIC_FORMSPREE_ENDPOINT` is set, the contact form automatically falls back to generating a pre-filled `mailto:` link opening the visitor's default email client addressed to `hanumanthuswathi24@gmail.com`.

---

## 📄 Updating Your Resume

1. Place your latest resume in the `public/` directory with the exact filename:
   ```text
   public/resume.pdf
   ```
2. The site's "Download Resume" buttons in the Hero and Navbar are configured to download this file with the recruiter-friendly name `Hanumanthu_Swathi_Resume.pdf`.

---

## 🚢 Step-by-Step Vercel Deployment

Your existing portfolio is currently live on Vercel at:
**`https://swathi-portfolio-omega.vercel.app`**

Follow these instructions to safely deploy this new codebase to the **exact same Vercel project and domain**:

### ⚠️ Pre-Deployment Checklist
Before updating your site:
1. **Back up your old code**: Your old portfolio repository remains completely untouched and safe on GitHub.
2. **Back up Vercel Settings**: Check your Vercel Project Settings for any custom environment variables or custom domains.
3. **Verify Resume**: Confirm `public/resume.pdf` is present and valid.

### Recommended Deployment: Push to a New Repository (`swathi-portfolio-v2`) and Reconnect Vercel

This is the cleanest and safest approach. It leaves your old portfolio repo intact as an archive while seamlessly updating the live domain (`swathi-portfolio-omega.vercel.app`) to this new codebase without any force-pushes:

1. **Create a new GitHub repository**:
   - Go to [GitHub](https://github.com/new) and create a new repository named **`swathi-portfolio-v2`** (Public).

2. **Push this codebase to `swathi-portfolio-v2`**:
   ```bash
   # In the swathi-portfolio project directory:
   git remote add origin https://github.com/2005swathi2000/swathi-portfolio-v2.git
   git branch -M main
   git push -u origin main
   ```

3. **Reconnect your existing Vercel project to `swathi-portfolio-v2`**:
   - Open your [Vercel Dashboard](https://vercel.com/dashboard) and select your existing project: **`swathi-portfolio-omega`**.
   - Navigate to **Settings** -> **Git**.
   - Under **Connected Git Repository**, click **Disconnect**.
   - Click **Connect Git Repository**, choose your new **`swathi-portfolio-v2`** repository, and select branch **`main`**.
   - Vercel will immediately build and deploy the new codebase.
   - Your existing live domain (`https://swathi-portfolio-omega.vercel.app`) automatically serves this new site!

4. **Configure Environment Variables in Vercel**:
   - In **Settings** -> **Environment Variables**, add:
     - **Key**: `NEXT_PUBLIC_FORMSPREE_ID`
     - **Value**: Your Formspree Form ID (optional, fallback mailto is active by default)
   - Go to **Deployments** and click **Redeploy** to apply the environment variable.

### Alternative: Direct Vercel CLI Deployment
```bash
# Install Vercel CLI globally if not already installed
npm install -g vercel

# Login to your Vercel account
vercel login

# Link to your existing project and deploy to production
vercel --prod
```

---

## 📊 Project Showcase Summary

| Project | Stack | Role | Key Metric / Outcome |
| :--- | :--- | :--- | :--- |
| **StudyCircle v2** | Next.js · Express · PostgreSQL · Socket.io | Team Lead | Real-time presence & note sync; Bloom filter pre-checks |
| **DevMind AI** | Spring Boot 3 · Angular 19 · Gemini API · SSE | Solo | Async review queue streaming via SSE; Monaco editor |
| **AI Resume Analyzer** | Next.js 15 · TypeScript · Gemini API · Vitest | Solo | ATS scoring engine; **19/19 Vitest tests passing** |
| **Cloud Data Pipeline** | Python · Apache Beam · DuckDB · BigQuery · Pytest | Solo | Idempotent ELT & quarantine routing; **20/20 tests passing** |
| **Customer Churn ML** | Python · Scikit-learn · XGBoost · Streamlit | Solo | Leakage-free ColumnTransformer; **Recall 78.88%, ROC-AUC 0.8434** |
| **DocSpot** | React 18 · Redux Toolkit · Node · Express · MongoDB | Group | Optimistic concurrency & compound partial unique index |
| **Voice-Based Concept Understanding Analyser (VBCUA)** | Streamlit · Groq Whisper · Librosa · ReportLab | Solo | Acoustic speech diagnostics (RMS, pause ratio) & PDF reports |

---

## 🛡️ License & Credits
Authored by **Hanumanthu Swathi** © 2026. Built with Next.js, Tailwind CSS & TypeScript.
