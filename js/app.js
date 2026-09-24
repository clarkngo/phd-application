/**
 * PhD Application Tracker & Viability Engine - Application Logic
 * Applicant: Clark Ngo
 */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNavigation();
  initCountdown();
  renderDashboard();
  renderViabilityView();
  renderTrackerView();
  renderFacultyView();
  renderProfileView();
  initViabilitySliders();
  initActionButtons();
});

// Storage Keys
const STORAGE_KEY_STATE = "clark_phd_tracker_state_v1";
const STORAGE_KEY_WEIGHTS = "clark_phd_tracker_weights_v1";
const STORAGE_KEY_THEME = "clark_phd_theme_pref";

// Default State Generator
function getDefaultState() {
  const state = {
    statuses: {},
    checklists: {},
    customTasks: {}
  };

  PROGRAMS_DATA.forEach(prog => {
    state.statuses[prog.id] = "In Progress";
    state.checklists[prog.id] = {};
    prog.requirementsList.forEach(req => {
      state.checklists[prog.id][req.id] = req.completed;
    });
    state.customTasks[prog.id] = [];
  });

  return state;
}

// Load / Save State
function loadTrackerState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_STATE);
    if (!raw) return getDefaultState();
    const parsed = JSON.parse(raw);
    return parsed;
  } catch (e) {
    console.error("Failed to load state", e);
    return getDefaultState();
  }
}

function saveTrackerState(state) {
  try {
    localStorage.setItem(STORAGE_KEY_STATE, JSON.stringify(state));
    updateGlobalMetrics();
  } catch (e) {
    console.error("Failed to save state", e);
  }
}

// Theme Management
function initTheme() {
  const saved = localStorage.getItem(STORAGE_KEY_THEME);
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const activeTheme = saved || (prefersDark ? "dark" : "light");

  document.documentElement.setAttribute("data-theme", activeTheme);
  updateThemeIcon(activeTheme);

  const toggleBtn = document.getElementById("themeToggleBtn");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "light";
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem(STORAGE_KEY_THEME, next);
      updateThemeIcon(next);
      showToast(`Switched to ${next} mode`);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.querySelector("#themeToggleBtn .theme-icon");
  if (icon) {
    icon.textContent = theme === "dark" ? "☀️" : "🌙";
  }
}

// Navigation Tabs
function initNavigation() {
  const tabs = document.querySelectorAll(".nav-tab");
  const panes = document.querySelectorAll(".tab-pane");

  tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = tab.getAttribute("data-target");

      tabs.forEach(t => t.classList.remove("active"));
      panes.forEach(p => p.classList.remove("active"));

      tab.classList.add("active");
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.add("active");
      }

      // Update URL hash without jump
      history.replaceState(null, null, `#${targetId}`);
    });
  });

  // Handle direct hash navigation
  const hash = window.location.hash.replace("#", "");
  if (hash) {
    const matchingTab = document.querySelector(`.nav-tab[data-target="${hash}"]`);
    if (matchingTab) {
      matchingTab.click();
    }
  }
}

// Countdown Timer to Dec 2, 2026 11:59:59 PM PT
function initCountdown() {
  // Target: December 2, 2026, 23:59:59 PST (UTC-8)
  const targetDate = new Date("2026-12-02T23:59:59-08:00").getTime();

  function update() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      document.getElementById("cdDays").textContent = "00";
      document.getElementById("cdHours").textContent = "00";
      document.getElementById("cdMins").textContent = "00";
      document.getElementById("cdSecs").textContent = "00";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    const pad = (n) => String(n).padStart(2, "0");

    const daysEl = document.getElementById("cdDays");
    const hoursEl = document.getElementById("cdHours");
    const minsEl = document.getElementById("cdMins");
    const secsEl = document.getElementById("cdSecs");

    if (daysEl) daysEl.textContent = pad(days);
    if (hoursEl) hoursEl.textContent = pad(hours);
    if (minsEl) minsEl.textContent = pad(mins);
    if (secsEl) secsEl.textContent = pad(secs);
  }

  update();
  setInterval(update, 1000);
}

// Render Dashboard View
function renderDashboard() {
  const container = document.getElementById("dashboardProgramCards");
  if (!container) return;

  const state = loadTrackerState();

  container.innerHTML = PROGRAMS_DATA.map(prog => {
    const status = state.statuses[prog.id] || "In Progress";
    const totalReqs = prog.requirementsList.length;
    const completedReqs = Object.values(state.checklists[prog.id] || {}).filter(Boolean).length;
    const percent = Math.round((completedReqs / totalReqs) * 100);

    let scoreClass = "score-high";
    if (prog.viabilityScore < 70) scoreClass = "score-caution";
    else if (prog.viabilityScore < 85) scoreClass = "score-medium";

    return `
      <div class="program-card ${prog.id === 'uw-ischool' ? 'featured' : ''}">
        <div class="program-top-meta">
          <span class="university-pill ${prog.badgeColor}">${prog.shortName}</span>
          <span class="degree-tag">${prog.degreeType}</span>
        </div>

        <h3>${prog.degree}</h3>
        <div class="program-degree-subtitle">${prog.university} &bull; ${prog.college}</div>
        <p class="program-tagline">"${prog.tagline}"</p>

        <div class="viability-score-gauge">
          <div class="gauge-left">
            <span class="gauge-label">Resume Viability Fit</span>
            <span class="gauge-tier">${prog.viabilityCategory.split("(")[0].trim()}</span>
          </div>
          <div class="gauge-score-value ${scoreClass}">
            ${prog.viabilityScore}<span>/100</span>
          </div>
        </div>

        <div class="program-quick-specs">
          <div class="spec-item">
            <span class="spec-icon">📅</span>
            <div><strong>Deadline:</strong> ${prog.deadlineFormatted}</div>
          </div>
          <div class="spec-item">
            <span class="spec-icon">💰</span>
            <div><strong>Funding:</strong> ${prog.fundingModel}</div>
          </div>
          <div class="spec-item">
            <span class="spec-icon">🎯</span>
            <div><strong>GRE:</strong> ${prog.greRequired ? "Required" : "Not Required / Not Considered"}</div>
          </div>
          <div class="spec-item">
            <span class="spec-icon">📊</span>
            <div><strong>Tasks Done:</strong> ${completedReqs}/${totalReqs} (${percent}%)</div>
          </div>
        </div>

        <div class="program-card-footer">
          <button class="btn btn-primary btn-sm switch-tab-btn" data-tab="tab-tracker" data-scroll="${prog.id}">
            Checklist (${percent}%)
          </button>
          <button class="btn btn-outline btn-sm switch-tab-btn" data-tab="tab-viability" data-scroll="viab-${prog.id}">
            Viability Breakdown
          </button>
          <a href="${prog.websiteUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" title="Visit Official Website">
            Official ↗
          </a>
        </div>
      </div>
    `;
  }).join("");

  attachSwitchTabEvents();
}

function attachSwitchTabEvents() {
  document.querySelectorAll(".switch-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-tab");
      const scrollId = btn.getAttribute("data-scroll");

      const targetTab = document.querySelector(`.nav-tab[data-target="${tabId}"]`);
      if (targetTab) targetTab.click();

      if (scrollId) {
        setTimeout(() => {
          const el = document.getElementById(scrollId);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150);
      }
    });
  });
}

// Render Viability Deep Dive View
function renderViabilityView() {
  const container = document.getElementById("viabilityCardsContainer");
  if (!container) return;

  container.innerHTML = PROGRAMS_DATA.map(prog => {
    let badgeClass = "badge-strong";
    if (prog.viabilityScore >= 85) badgeClass = "badge-very-strong";
    if (prog.viabilityScore < 70) badgeClass = "badge-moderate";

    return `
      <div class="viability-card ${prog.id}" id="viab-${prog.id}">
        <div class="viability-card-head">
          <div class="card-title-block">
            <h3>${prog.name} (${prog.degreeType})</h3>
            <p>${prog.degree} &bull; ${prog.university}</p>
          </div>
          <div class="viability-badge-tier ${badgeClass}">
            Score: ${prog.viabilityScore}/100 &bull; ${prog.viabilityCategory}
          </div>
        </div>

        <div class="summary-callout">
          <strong>Strategic Assessment for Clark Ngo:</strong> ${prog.viabilitySummary}
        </div>

        <div class="viability-grid-2">
          <div class="matrix-box pros">
            <h4>Profile Strengths & Synergies</h4>
            <ul>
              ${prog.strengthsMatch.map(s => `<li>${s}</li>`).join("")}
            </ul>
          </div>
          <div class="matrix-box cons">
            <h4>Admissions Gaps & Risks</h4>
            <ul>
              ${prog.challengesToAddress.map(c => `<li>${c}</li>`).join("")}
            </ul>
          </div>
        </div>

        <div class="positioning-box">
          <h4>💡 Recommended Application Positioning</h4>
          <p>${prog.recommendedPositioning}</p>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; font-size: 0.85rem; color: var(--text-muted);">
          <span><strong>Funding Security:</strong> ${prog.fundingModel}</span>
          <a href="${prog.portalUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
            Open Application Portal ↗
          </a>
        </div>
      </div>
    `;
  }).join("");
}

// Render Application Tracker View (Interactive Checklists)
function renderTrackerView() {
  const container = document.getElementById("trackerProgramList");
  if (!container) return;

  const state = loadTrackerState();

  container.innerHTML = PROGRAMS_DATA.map(prog => {
    const currentStatus = state.statuses[prog.id] || "In Progress";
    const reqs = prog.requirementsList;
    const customList = state.customTasks[prog.id] || [];

    const completedReqs = Object.values(state.checklists[prog.id] || {}).filter(Boolean).length;
    const completedCustom = customList.filter(t => t.completed).length;
    const totalItems = reqs.length + customList.length;
    const totalCompleted = completedReqs + completedCustom;
    const percent = totalItems === 0 ? 0 : Math.round((totalCompleted / totalItems) * 100);

    return `
      <div class="tracker-program-block" id="${prog.id}">
        <div class="program-block-head">
          <div class="block-title-group">
            <h3>${prog.name}</h3>
            <p>${prog.degree} &bull; Deadline: <strong>${prog.deadlineFormatted}</strong></p>
          </div>
          <div class="status-selector">
            <span class="status-label">Status:</span>
            <select class="status-dropdown" data-program="${prog.id}">
              ${["Not Started", "In Progress", "Ready for Review", "Submitted", "Interview", "Accepted", "Waitlisted"]
                .map(opt => `<option value="${opt}" ${opt === currentStatus ? "selected" : ""}>${opt}</option>`)
                .join("")}
            </select>
          </div>
        </div>

        <div class="checklist-progress-bar-wrap">
          <div class="progress-info">
            <span>Progress: ${totalCompleted} of ${totalItems} steps completed</span>
            <span>${percent}%</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" style="width: ${percent}%;"></div>
          </div>
        </div>

        <div class="checklist-items-grid">
          ${reqs.map(req => {
            const isChecked = !!(state.checklists[prog.id] && state.checklists[prog.id][req.id]);
            return `
              <label class="checklist-item ${isChecked ? 'completed' : ''}">
                <input type="checkbox" class="custom-checkbox task-check" 
                  data-program="${prog.id}" 
                  data-req="${req.id}" 
                  ${isChecked ? 'checked' : ''}>
                <span class="item-text">${req.label}</span>
              </label>
            `;
          }).join("")}

          ${customList.map((task, idx) => `
            <label class="checklist-item ${task.completed ? 'completed' : ''}">
              <input type="checkbox" class="custom-checkbox custom-task-check" 
                data-program="${prog.id}" 
                data-index="${idx}" 
                ${task.completed ? 'checked' : ''}>
              <span class="item-text">${task.label}</span>
              <button type="button" class="btn-sm delete-task-btn" data-program="${prog.id}" data-index="${idx}" style="color: var(--text-muted); font-size: 0.75rem;">✕</button>
            </label>
          `).join("")}
        </div>

        <form class="custom-task-form" data-program="${prog.id}">
          <input type="text" class="custom-task-input" placeholder="+ Add custom task or milestone (e.g. 'Draft email to Dr. Amy Ko')..." required>
          <button type="submit" class="btn btn-outline btn-sm">Add Task</button>
        </form>
      </div>
    `;
  }).join("");

  attachTrackerEvents();
  updateGlobalMetrics();
}

function attachTrackerEvents() {
  const state = loadTrackerState();

  // Status dropdown change
  document.querySelectorAll(".status-dropdown").forEach(sel => {
    sel.addEventListener("change", (e) => {
      const progId = e.target.getAttribute("data-program");
      state.statuses[progId] = e.target.value;
      saveTrackerState(state);
      renderDashboard();
      showToast(`Updated status for ${progId} to "${e.target.value}"`);
    });
  });

  // Built-in task checkbox
  document.querySelectorAll(".task-check").forEach(chk => {
    chk.addEventListener("change", (e) => {
      const progId = e.target.getAttribute("data-program");
      const reqId = e.target.getAttribute("data-req");
      if (!state.checklists[progId]) state.checklists[progId] = {};
      state.checklists[progId][reqId] = e.target.checked;
      saveTrackerState(state);
      renderTrackerView();
      renderDashboard();
    });
  });

  // Custom task checkbox
  document.querySelectorAll(".custom-task-check").forEach(chk => {
    chk.addEventListener("change", (e) => {
      const progId = e.target.getAttribute("data-program");
      const idx = parseInt(e.target.getAttribute("data-index"), 10);
      if (state.customTasks[progId] && state.customTasks[progId][idx]) {
        state.customTasks[progId][idx].completed = e.target.checked;
        saveTrackerState(state);
        renderTrackerView();
      }
    });
  });

  // Delete custom task
  document.querySelectorAll(".delete-task-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const progId = btn.getAttribute("data-program");
      const idx = parseInt(btn.getAttribute("data-index"), 10);
      if (state.customTasks[progId]) {
        state.customTasks[progId].splice(idx, 1);
        saveTrackerState(state);
        renderTrackerView();
        showToast("Custom task removed");
      }
    });
  });

  // Add custom task form
  document.querySelectorAll(".custom-task-form").forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const progId = form.getAttribute("data-program");
      const input = form.querySelector(".custom-task-input");
      const text = input.value.trim();
      if (!text) return;

      if (!state.customTasks[progId]) state.customTasks[progId] = [];
      state.customTasks[progId].push({ label: text, completed: false });
      saveTrackerState(state);
      renderTrackerView();
      showToast("Custom milestone added!");
    });
  });
}

function updateGlobalMetrics() {
  const state = loadTrackerState();
  let totalTasks = 0;
  let completedTasks = 0;
  let programsSubmitted = 0;

  PROGRAMS_DATA.forEach(prog => {
    const reqs = prog.requirementsList;
    const customs = state.customTasks[prog.id] || [];
    totalTasks += reqs.length + customs.length;

    const checkedReqs = Object.values(state.checklists[prog.id] || {}).filter(Boolean).length;
    const checkedCustoms = customs.filter(c => c.completed).length;
    completedTasks += checkedReqs + checkedCustoms;

    if (state.statuses[prog.id] === "Submitted" || state.statuses[prog.id] === "Accepted" || state.statuses[prog.id] === "Interview") {
      programsSubmitted++;
    }
  });

  const overallPercent = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  const statTasksEl = document.getElementById("statTotalTasks");
  const statPercentEl = document.getElementById("statOverallPercent");
  const statSubmittedEl = document.getElementById("statSubmitted");

  if (statTasksEl) statTasksEl.textContent = `${completedTasks}/${totalTasks}`;
  if (statPercentEl) statPercentEl.textContent = `${overallPercent}%`;
  if (statSubmittedEl) statSubmittedEl.textContent = `${programsSubmitted}/${PROGRAMS_DATA.length}`;
}

// Render Faculty View
function renderFacultyView() {
  const container = document.getElementById("facultyGridContainer");
  if (!container) return;

  const allFaculty = [];
  PROGRAMS_DATA.forEach(prog => {
    prog.facultyMatches.forEach(f => {
      allFaculty.push({
        ...f,
        programName: prog.shortName,
        badgeColor: prog.badgeColor,
        university: prog.university
      });
    });
  });

  container.innerHTML = allFaculty.map(f => `
    <div class="faculty-card">
      <div class="faculty-card-header">
        <span class="faculty-school-tag university-pill ${f.badgeColor}">${f.programName}</span>
        <h4>${f.name}</h4>
        <div class="faculty-title">${f.title} &bull; ${f.university}</div>
        <div class="faculty-lab">${f.lab}</div>
      </div>

      <div class="research-tags-wrap">
        ${f.researchAreas.map(area => `<span class="research-tag">${area}</span>`).join("")}
      </div>

      <div class="alignment-note">
        <strong>Clark Ngo Alignment:</strong>
        ${f.alignment}
      </div>

      <div style="margin-top: auto; padding-top: 0.75rem; border-top: 1px solid var(--border-light);">
        <a href="${f.url}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" style="width: 100%;">
          View Lab & Publications ↗
        </a>
      </div>
    </div>
  `).join("");
}

// Render Clark Ngo Applicant Profile View
function renderProfileView() {
  const container = document.getElementById("applicantProfileContainer");
  if (!container) return;

  container.innerHTML = `
    <div class="profile-overview-card">
      <div class="profile-hero">
        <div class="profile-avatar-large">CN</div>
        <div class="profile-info">
          <h3>${APPLICANT_PROFILE.name}</h3>
          <p><strong>${APPLICANT_PROFILE.title}</strong> &bull; ${APPLICANT_PROFILE.location}</p>
          <div class="profile-pill-links" style="margin-top: 0.75rem;">
            <a href="${APPLICANT_PROFILE.links.portfolio}" target="_blank" rel="noopener noreferrer" class="pill-link">
              🌐 Portfolio (clarkngo.github.io)
            </a>
            <a href="${APPLICANT_PROFILE.links.github}" target="_blank" rel="noopener noreferrer" class="pill-link">
              💻 GitHub (@clarkngo)
            </a>
            <a href="${APPLICANT_PROFILE.links.linkedin}" target="_blank" rel="noopener noreferrer" class="pill-link">
              💼 LinkedIn Profile
            </a>
          </div>
        </div>
      </div>

      <div class="profile-sections-grid">
        <div class="profile-box">
          <h4>🎓 Academic Background</h4>
          <ul>
            ${APPLICANT_PROFILE.degrees.map(deg => `
              <li>
                <strong>${deg.degree}</strong>
                ${deg.institution} (${deg.location})<br>
                <em>Focus:</em> ${deg.focus}
                ${deg.role ? `<br><span style="color: var(--accent-blue); font-weight: 600;">Role: ${deg.role}</span>` : ""}
              </li>
            `).join("")}
          </ul>
        </div>

        <div class="profile-box">
          <h4>💼 Industry Engineering & Systems</h4>
          <ul>
            ${APPLICANT_PROFILE.industryExperience.map(exp => `
              <li>
                <strong>${exp.role}</strong>
                ${exp.companies}<br>
                <span>${exp.description}</span>
              </li>
            `).join("")}
          </ul>
        </div>

        <div class="profile-box">
          <h4>🏫 Teaching & Mentorship Leadership</h4>
          <ul>
            ${APPLICANT_PROFILE.academicExperience.map(exp => `
              <li>
                <strong>${exp.title}</strong>
                ${exp.organization}<br>
                <span>${exp.description}</span>
              </li>
            `).join("")}
          </ul>
        </div>

        <div class="profile-box">
          <h4>🔬 Target Research Agenda</h4>
          <ul>
            ${APPLICANT_PROFILE.researchInterests.map(interest => `
              <li style="display: flex; align-items: center; gap: 0.5rem;">
                <span style="color: var(--accent-blue);">✦</span> ${interest}
              </li>
            `).join("")}
          </ul>
        </div>
      </div>
    </div>
  `;
}

// Viability Slider Interaction
function initViabilitySliders() {
  const container = document.getElementById("criteriaSlidersContainer");
  if (!container) return;

  const savedWeights = loadSavedWeights();

  container.innerHTML = VIABILITY_CRITERIA.map(crit => {
    const val = savedWeights[crit.key] !== undefined ? savedWeights[crit.key] : crit.weight;
    return `
      <div class="slider-item">
        <div class="slider-label-row">
          <span>${crit.name}</span>
          <span class="slider-val" id="val-${crit.key}">${val}%</span>
        </div>
        <input type="range" min="0" max="50" step="5" value="${val}" class="custom-range weight-slider" data-key="${crit.key}">
        <span style="font-size: 0.72rem; color: var(--text-muted);">${crit.description}</span>
      </div>
    `;
  }).join("");

  document.querySelectorAll(".weight-slider").forEach(slider => {
    slider.addEventListener("input", (e) => {
      const key = e.target.getAttribute("data-key");
      const val = parseInt(e.target.value, 10);
      document.getElementById(`val-${key}`).textContent = `${val}%`;

      savedWeights[key] = val;
      localStorage.setItem(STORAGE_KEY_WEIGHTS, JSON.stringify(savedWeights));
      recalculateViabilityScores(savedWeights);
    });
  });

  const resetBtn = document.getElementById("resetWeightsBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      localStorage.removeItem(STORAGE_KEY_WEIGHTS);
      initViabilitySliders();
      recalculateViabilityScores(getDefaultWeights());
      showToast("Weights reset to default profile baseline");
    });
  }
}

function getDefaultWeights() {
  const weights = {};
  VIABILITY_CRITERIA.forEach(c => { weights[c.key] = c.weight; });
  return weights;
}

function loadSavedWeights() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_WEIGHTS);
    if (!raw) return getDefaultWeights();
    return JSON.parse(raw);
  } catch (e) {
    return getDefaultWeights();
  }
}

function recalculateViabilityScores(weights) {
  // Recalculate dynamic scores based on criteria matrix:
  // Base raw traits per program [0-100 scale]:
  const traits = {
    "uw-ischool": { degreeType: 100, csAlignment: 90, teachingFit: 95, fundingSecurity: 100, localProximity: 100 },
    "uw-hcde": { degreeType: 100, csAlignment: 88, teachingFit: 85, fundingSecurity: 100, localProximity: 100 },
    "seattleu-eoll": { degreeType: 40, csAlignment: 35, teachingFit: 80, fundingSecurity: 40, localProximity: 100 },
    "uw-education": { degreeType: 100, csAlignment: 65, teachingFit: 90, fundingSecurity: 85, localProximity: 100 }
  };

  const totalWeight = Object.values(weights).reduce((a, b) => a + b, 0) || 1;

  PROGRAMS_DATA.forEach(prog => {
    const t = traits[prog.id];
    if (!t) return;
    let weightedSum = 0;
    Object.keys(weights).forEach(k => {
      weightedSum += (t[k] || 50) * weights[k];
    });
    prog.viabilityScore = Math.min(99, Math.round(weightedSum / totalWeight));
  });

  renderDashboard();
  renderViabilityView();
}

// Global Action Buttons (Export JSON, Import JSON, Print)
function initActionButtons() {
  const exportBtn = document.getElementById("exportStateBtn");
  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      const state = loadTrackerState();
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
      const downloadAnchor = document.createElement("a");
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `clark_ngo_phd_tracker_backup_${new Date().toISOString().slice(0,10)}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      showToast("Application tracker data exported as JSON!");
    });
  }

  const printBtn = document.getElementById("printSummaryBtn");
  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }
}

// Toast System
function showToast(message) {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}
