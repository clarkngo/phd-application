# PhD Application Tracker & Viability Engine

A responsive, high-performance static web application built for **Clark Ngo** to track and evaluate doctoral program applications across the Seattle academic ecosystem:
- **University of Washington (UW) — Information School (iSchool)**: *Ph.D. in Information Science*
- **University of Washington (UW) — Human Centered Design & Engineering (HCDE)**: *Ph.D. in Human Centered Design & Engineering*
- **Seattle University — College of Education**: *Ed.D. in Educational & Organizational Learning & Leadership (EOLL)*
- **UW College of Education (Alternative Ph.D.)**: *Ph.D. in Education (Learning Sciences & Human Development)*

---

## 🌟 Key Features

1. **Strategic Viability Decision Engine**
   - In-depth alignment analysis mapping Clark's background (**MSCS from City University of Seattle**, De La Salle BS, enterprise software engineering at Thomson Reuters/S&P/eBay, and Graduate Teaching Assistant experience) to each program's admissions preferences.
   - Interactive weight sliders to dynamically adjust priorities (PhD vs. EdD distinction, CS alignment, pedagogy fit, funding security, and local proximity).
   - Specific positioning recommendations and SWOT matrices (Strengths vs. Admissions Gaps).

2. **Annual Cycle Countdown & Deadlines**
   - Real-time countdown timer to the strict **December 2, 2026 (11:59 PM PT)** deadline for UW iSchool and HCDE.
   - Side-by-side policy summaries: funding guarantees (4-5 year tuition waiver + living stipend), GRE requirements (waived/not considered), and degree specifications.

3. **Interactive Milestone Checklists with `localStorage` Persistence**
   - Individual task tracking for Statements of Purpose (SoP), Equity/Diversity/Personal statements, CV, transcripts, and faculty outreach.
   - Ability to add and delete custom milestones per university.
   - Progress bars and status dropdowns (`Not Started`, `In Progress`, `Ready for Review`, `Submitted`, `Interview`, `Accepted`).
   - All state is securely saved in the user's browser, with one-click **JSON Export / Backup** and print-ready summary styles.

4. **Faculty Alignment & Research Lab Directory**
   - Detailed profiles of prospective mentors and research labs at UW (e.g., Dr. Amy J. Ko's *Code & Cognition Lab*, Dr. Julie Kientz, Dr. Jacob Wobbrock's *ACE Lab*, Dr. Jennifer Turns, Dr. Chirag Shah, Dr. Sean Munson) with custom alignment notes for Clark's interests.

5. **Applicant Profile Showcase**
   - Integrated links to Clark's personal portfolio ([clarkngo.github.io](https://clarkngo.github.io)), GitHub ([@clarkngo](https://github.com/clarkngo)), and LinkedIn.
   - Academic CV synthesis, research agenda summary, and teaching highlights.

6. **Modern Design System**
   - University color themes: UW Purple & Gold, Seattle U Red, and modern slate accents.
   - System-aware Dark and Light modes with manual toggle.
   - Mobile-first, fully responsive, zero-build vanilla JS architecture (instant loading on GitHub Pages).

---

## 🚀 GitHub Pages Deployment

The repository is configured with a GitHub Actions workflow (`.github/workflows/static.yml`) that automatically deploys the site whenever changes are pushed to the `main` branch.

### Manual Local Preview
Because this application is built with vanilla HTML, CSS, and JavaScript, you can preview it immediately:
- Simply open `index.html` in any modern web browser, or
- Run a lightweight local server:
  ```bash
  python3 -m http.server 8000
  ```
  and visit `http://localhost:8000`.

---

## 👤 Applicant Contact
- **Clark Ngo**
- Website: [clarkngo.github.io](https://clarkngo.github.io)
- GitHub: [github.com/clarkngo](https://github.com/clarkngo)
- LinkedIn: [linkedin.com/in/clarkngo](https://www.linkedin.com/in/clarkngo/)