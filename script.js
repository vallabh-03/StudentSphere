/**
 * StudentSphere - Modern Student Portfolio & Portal
 * Interactive Authentication, LocalStorage Persistence & Dynamic Portal Views
 * Pure Vanilla JavaScript (Modular, robust, beginner-friendly)
 */

// =============================================================================
// 1. Constants & LocalStorage Keys
// =============================================================================

const STORAGE_USERS_KEY = "studentsphere_registered_users";
const STORAGE_SESSION_KEY = "studentsphere_active_session";

// Default Demo Student Account (Elena Vance)
const DEMO_STUDENT = {
  name: "Elena Vance",
  studentId: "CS-2024-0482",
  email: "elena.vance@mit.edu",
  password: "Student@2026",
  department: "School of Computing & Information Science",
  yearOfStudy: "3rd Year (Junior)",
  currentSemester: "Semester 5 (Fall 2026)",
  program: "B.S. in Computer Science & Artificial Intelligence",
  phone: "+1 (555) 382-9014",
  advisor: "Dr. Marcus Reynolds (Assoc. Prof.)",
  residence: "Westgate Hall, Room 302-B",
  cgpa: "3.88",
  creditsCompleted: 88,
  totalCreditsRequired: 120,
  overallAttendance: "92.4%",
  completedSemestersCount: 4,
  enrolledSubjectsCount: 6,
  dateOfBirth: "April 14, 2004",
  bloodGroup: "O+ (Positive)",
  hasCustomPhoto: true,
  skills: [
    "Data Structures & Algorithms",
    "Full-Stack Web Dev",
    "Machine Learning",
    "Cloud Databases & PostgreSQL",
    "Computer Vision",
    "Distributed Systems"
  ]
};

// =============================================================================
// 2. Realistic Academic Semester Marks Data (4 Completed Semesters)
// =============================================================================

const semesterResultsData = {
  sem4: {
    title: "Semester 4 (Spring 2026)",
    sgpa: "3.92",
    creditsEarned: 22,
    totalMarksObtained: 554,
    maximumMarks: 600,
    status: "Distinction (Passed)",
    courses: [
      { name: "Design & Analysis of Algorithms", code: "CS-201", credits: 4, internal: 29, external: 66, total: 95, grade: "A+", gradePoint: 10, status: "Passed" },
      { name: "Database Management Systems", code: "CS-204", credits: 4, internal: 28, external: 64, total: 92, grade: "A", gradePoint: 9, status: "Passed" },
      { name: "Computer Organization & Architecture", code: "CS-206", credits: 4, internal: 26, external: 62, total: 88, grade: "A", gradePoint: 9, status: "Passed" },
      { name: "Linear Algebra & Applications", code: "MATH-210", credits: 3, internal: 29, external: 67, total: 96, grade: "A+", gradePoint: 10, status: "Passed" },
      { name: "Database & Cloud Systems Lab", code: "CS-215L", credits: 2, internal: 30, external: 68, total: 98, grade: "A+", gradePoint: 10, status: "Passed" },
      { name: "Professional Technical Communication", code: "HUM-102", credits: 2, internal: 27, external: 58, total: 85, grade: "A-", gradePoint: 8, status: "Passed" }
    ]
  },
  sem3: {
    title: "Semester 3 (Fall 2025)",
    sgpa: "3.85",
    creditsEarned: 22,
    totalMarksObtained: 538,
    maximumMarks: 600,
    status: "Distinction (Passed)",
    courses: [
      { name: "Data Structures & Modern C++", code: "CS-103", credits: 4, internal: 28, external: 65, total: 93, grade: "A", gradePoint: 9, status: "Passed" },
      { name: "Discrete Mathematical Structures", code: "MATH-150", credits: 4, internal: 27, external: 61, total: 88, grade: "A", gradePoint: 9, status: "Passed" },
      { name: "Digital Logic Design & Circuits", code: "EE-105", credits: 4, internal: 26, external: 59, total: 85, grade: "A-", gradePoint: 8, status: "Passed" },
      { name: "Data Structures Engineering Lab", code: "CS-108L", credits: 2, internal: 30, external: 67, total: 97, grade: "A+", gradePoint: 10, status: "Passed" },
      { name: "Environmental Systems & Climate", code: "ENV-101", credits: 2, internal: 28, external: 62, total: 90, grade: "A", gradePoint: 9, status: "Passed" },
      { name: "Object-Oriented Software Principles", code: "CS-112", credits: 3, internal: 27, external: 58, total: 85, grade: "A-", gradePoint: 8, status: "Passed" }
    ]
  },
  sem2: {
    title: "Semester 2 (Spring 2025)",
    sgpa: "3.88",
    creditsEarned: 22,
    totalMarksObtained: 542,
    maximumMarks: 600,
    status: "Distinction (Passed)",
    courses: [
      { name: "Multivariable Calculus & Series", code: "MATH-102", credits: 4, internal: 29, external: 63, total: 92, grade: "A", gradePoint: 9, status: "Passed" },
      { name: "Introduction to Computing & Python", code: "CS-101", credits: 4, internal: 30, external: 68, total: 98, grade: "A+", gradePoint: 10, status: "Passed" },
      { name: "Electromagnetism & Wave Physics", code: "PHY-102", credits: 4, internal: 25, external: 61, total: 86, grade: "A-", gradePoint: 8, status: "Passed" },
      { name: "Engineering Mechanics & Dynamics", code: "ENG-105", credits: 3, internal: 27, external: 60, total: 87, grade: "A", gradePoint: 9, status: "Passed" },
      { name: "Python Scripting & Problem Solving Lab", code: "CS-102L", credits: 2, internal: 30, external: 69, total: 99, grade: "A+", gradePoint: 10, status: "Passed" }
    ]
  },
  sem1: {
    title: "Semester 1 (Fall 2024)",
    sgpa: "3.84",
    creditsEarned: 22,
    totalMarksObtained: 535,
    maximumMarks: 600,
    status: "First Class with Distinction",
    courses: [
      { name: "Differential Calculus & Matrices", code: "MATH-101", credits: 4, internal: 28, external: 62, total: 90, grade: "A", gradePoint: 9, status: "Passed" },
      { name: "Physics for Computing & Electronics", code: "PHY-101", credits: 4, internal: 27, external: 60, total: 87, grade: "A", gradePoint: 9, status: "Passed" },
      { name: "Basics of Electrical Engineering", code: "ENG-101", credits: 4, internal: 26, external: 58, total: 84, grade: "B+", gradePoint: 8, status: "Passed" },
      { name: "Computational Thinking Foundations", code: "CS-099", credits: 3, internal: 29, external: 65, total: 94, grade: "A", gradePoint: 9, status: "Passed" },
      { name: "Applied Physics Laboratory", code: "PHY-101L", credits: 2, internal: 30, external: 68, total: 98, grade: "A+", gradePoint: 10, status: "Passed" }
    ]
  }
};

// Course-wise Attendance Statistics
const attendanceData = [
  {
    code: "CS-301",
    name: "Design & Analysis of Algorithms",
    instructor: "Prof. Alan Sterling",
    conducted: 44,
    attended: 42,
    missed: 2,
    percentage: 95.5,
    safeThreshold: "Safe (Can miss 8 more)"
  },
  {
    code: "CS-304",
    name: "Database Systems Internals",
    instructor: "Dr. Sarah Lin",
    conducted: 38,
    attended: 36,
    missed: 2,
    percentage: 94.7,
    safeThreshold: "Safe (Can miss 7 more)"
  },
  {
    code: "CS-308",
    name: "Operating Systems Architecture",
    instructor: "Dr. Ronald Thorne",
    conducted: 36,
    attended: 33,
    missed: 3,
    percentage: 91.7,
    safeThreshold: "Safe (Can miss 6 more)"
  },
  {
    code: "MATH-220",
    name: "Probability & Applied Statistics",
    instructor: "Prof. David Klein",
    conducted: 30,
    attended: 27,
    missed: 3,
    percentage: 90.0,
    safeThreshold: "Safe (Can miss 4 more)"
  },
  {
    code: "CS-312",
    name: "Software Engineering Studio",
    instructor: "Dr. Maya Patel",
    conducted: 24,
    attended: 21,
    missed: 3,
    percentage: 87.5,
    safeThreshold: "Safe (Can miss 3 more)"
  }
];

// Weekly Timetable Schedule
const weeklyTimetable = {
  monday: [
    { time: "09:00 AM - 10:30 AM", code: "CS-301", course: "Design & Analysis of Algorithms", instructor: "Prof. Alan Sterling", venue: "Hall 3B (Science Wing)", type: "Lecture" },
    { time: "11:00 AM - 12:30 PM", code: "CS-304", course: "Database Systems Internals", instructor: "Dr. Sarah Lin", venue: "Turing Computing Lab 2", type: "Lab & Theory" },
    { time: "02:00 PM - 03:30 PM", code: "MATH-220", course: "Probability & Applied Statistics", instructor: "Prof. David Klein", venue: "Lecture Room 104", type: "Lecture" }
  ],
  tuesday: [
    { time: "10:00 AM - 11:30 AM", code: "CS-308", course: "Operating Systems Architecture", instructor: "Dr. Ronald Thorne", venue: "Hall 2A (West Quad)", type: "Lecture" },
    { time: "01:30 PM - 04:30 PM", code: "CS-312", course: "Software Engineering Project Studio", instructor: "Dr. Maya Patel", venue: "Innovation Sandbox Lab 4", type: "Practical Studio" }
  ],
  wednesday: [
    { time: "09:00 AM - 10:30 AM", code: "CS-301", course: "Algorithms Problem Solving", instructor: "Prof. Alan Sterling", venue: "Hall 3B (Science Wing)", type: "Tutorial" },
    { time: "11:00 AM - 12:30 PM", code: "CS-304", course: "Database Query Optimization", instructor: "Dr. Sarah Lin", venue: "Turing Computing Lab 2", type: "Lecture" },
    { time: "02:00 PM - 03:30 PM", code: "MATH-220", course: "Statistical Inference & ML Foundations", instructor: "Prof. David Klein", venue: "Lecture Room 104", type: "Lecture" }
  ],
  thursday: [
    { time: "10:00 AM - 11:30 AM", code: "CS-308", course: "Kernel & Concurrency Systems", instructor: "Dr. Ronald Thorne", venue: "Hall 2A (West Quad)", type: "Lecture" },
    { time: "01:00 PM - 03:00 PM", code: "CS-308L", course: "OS Kernel Programming Lab", instructor: "Dr. Ronald Thorne", venue: "Unix Systems Lab 1", type: "Practical Lab" },
    { time: "03:30 PM - 05:00 PM", code: "SEMINAR", course: "Academic Research Colloquium", instructor: "Faculty Panel", venue: "Auditorium C", type: "Colloquium" }
  ],
  friday: [
    { time: "09:30 AM - 11:00 AM", code: "CS-312", course: "Agile Architecture & Code Review", instructor: "Dr. Maya Patel", venue: "Lecture Room 201", type: "Lecture" },
    { time: "11:30 AM - 01:00 PM", code: "CS-301", course: "Advanced Graph Algorithms", instructor: "Prof. Alan Sterling", venue: "Hall 3B (Science Wing)", type: "Lecture" },
    { time: "02:00 PM - 04:00 PM", code: "ADVISORY", course: "Faculty Mentorship & Office Hours", instructor: "Dr. Marcus Reynolds", venue: "Faculty Tower #412", type: "Mentorship" }
  ]
};

// =============================================================================
// 3. Application State & Storage Management
// =============================================================================

let currentUser = null;
let appState = {
  currentView: "dashboard",
  selectedSemester: "sem4",
  selectedDay: "monday"
};

/**
 * Initialize accounts in localStorage with demo user if empty
 */
function initDatabase() {
  try {
    let users = JSON.parse(localStorage.getItem(STORAGE_USERS_KEY));
    if (!users || !Array.isArray(users) || users.length === 0) {
      users = [DEMO_STUDENT];
      localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(users));
    } else {
      const demoExists = users.some(u => u.email.toLowerCase() === DEMO_STUDENT.email.toLowerCase());
      if (!demoExists) {
        users.push(DEMO_STUDENT);
        localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(users));
      }
    }
  } catch (err) {
    console.error("LocalStorage initialization error:", err);
  }
}

/**
 * Fetch all registered users from localStorage
 */
function getRegisteredUsers() {
  try {
    const raw = localStorage.getItem(STORAGE_USERS_KEY);
    return raw ? JSON.parse(raw) : [DEMO_STUDENT];
  } catch (e) {
    return [DEMO_STUDENT];
  }
}

/**
 * Save user session to localStorage
 */
function saveActiveSession(user, remember = true) {
  currentUser = user;
  try {
    if (remember) {
      localStorage.setItem(STORAGE_SESSION_KEY, JSON.stringify(user));
    } else {
      sessionStorage.setItem(STORAGE_SESSION_KEY, JSON.stringify(user));
    }
  } catch (e) {
    console.warn("Could not save session storage:", e);
  }
}

/**
 * Retrieve saved session from localStorage or sessionStorage
 */
function getActiveSession() {
  try {
    const local = localStorage.getItem(STORAGE_SESSION_KEY);
    if (local) return JSON.parse(local);
    const session = sessionStorage.getItem(STORAGE_SESSION_KEY);
    if (session) return JSON.parse(session);
  } catch (e) {
    return null;
  }
  return null;
}

/**
 * Clear saved session upon logout
 */
function clearActiveSession() {
  currentUser = null;
  try {
    localStorage.removeItem(STORAGE_SESSION_KEY);
    sessionStorage.removeItem(STORAGE_SESSION_KEY);
  } catch (e) {
    console.warn("Error clearing session:", e);
  }
}

// =============================================================================
// 4. Form Validation & Alert Helpers
// =============================================================================

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).trim());
}

function showFormAlert(alertBoxId, message, type = "error") {
  const alertBox = document.getElementById(alertBoxId);
  if (!alertBox) return;

  const msgSpan = alertBox.querySelector(".form-alert-content");
  if (msgSpan) msgSpan.textContent = message;

  alertBox.className = `form-alert show ${type}`;

  const icon = alertBox.querySelector("i");
  if (icon) {
    icon.className = type === "success" ? "fa-solid fa-circle-check" : "fa-solid fa-circle-exclamation";
  }
}

function hideFormAlert(alertBoxId) {
  const alertBox = document.getElementById(alertBoxId);
  if (alertBox) {
    alertBox.className = "form-alert";
  }
}

let toastTimeout;
function showToast(message, type = "info") {
  const toast = document.getElementById("toast-notification");
  if (!toast) return;

  clearTimeout(toastTimeout);
  toast.textContent = message;
  toast.className = `show ${type}`;

  toastTimeout = setTimeout(() => {
    toast.className = "";
  }, 3500);
}

// =============================================================================
// 5. Password Visibility Toggles
// =============================================================================

function setupPasswordToggle(buttonId, inputId) {
  const toggleBtn = document.getElementById(buttonId);
  const input = document.getElementById(inputId);

  if (!toggleBtn || !input) return;

  toggleBtn.addEventListener("click", () => {
    const isPassword = input.type === "password";
    input.type = isPassword ? "text" : "password";

    const icon = toggleBtn.querySelector("i");
    if (icon) {
      if (isPassword) {
        icon.className = "fa-regular fa-eye-slash";
        toggleBtn.setAttribute("title", "Hide password");
      } else {
        icon.className = "fa-regular fa-eye";
        toggleBtn.setAttribute("title", "Show password");
      }
    }
  });
}

// =============================================================================
// 6. Authentication Flows (Login, Signup, Demo, Logout)
// =============================================================================

function switchAuthTab(mode) {
  const loginTabBtn = document.getElementById("tab-login-btn");
  const signupTabBtn = document.getElementById("tab-signup-btn");
  const loginFormContainer = document.getElementById("login-form-container");
  const signupFormContainer = document.getElementById("signup-form-container");

  hideFormAlert("login-alert");
  hideFormAlert("signup-alert");

  if (mode === "login") {
    loginTabBtn.classList.add("active");
    signupTabBtn.classList.remove("active");
    loginFormContainer.style.display = "block";
    signupFormContainer.style.display = "none";
  } else {
    loginTabBtn.classList.remove("active");
    signupTabBtn.classList.add("active");
    loginFormContainer.style.display = "none";
    signupFormContainer.style.display = "block";
  }
}

function showPortalScreen() {
  document.getElementById("auth-view").style.display = "none";
  document.getElementById("portal-layout").style.display = "flex";
  navigateTo("dashboard");
}

function showAuthScreen() {
  document.getElementById("auth-view").style.display = "flex";
  document.getElementById("portal-layout").style.display = "none";
  switchAuthTab("login");
}

function handleLoginSubmit(e) {
  e.preventDefault();
  hideFormAlert("login-alert");

  const emailInput = document.getElementById("login-email");
  const passwordInput = document.getElementById("login-password");
  const rememberCheckbox = document.getElementById("login-remember");

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!email) {
    showFormAlert("login-alert", "Please enter your institutional email address.");
    emailInput.focus();
    return;
  }

  if (!isValidEmail(email)) {
    showFormAlert("login-alert", "Please enter a valid email format (e.g. name@mit.edu).");
    emailInput.focus();
    return;
  }

  if (!password) {
    showFormAlert("login-alert", "Password is required to sign in.");
    passwordInput.focus();
    return;
  }

  const users = getRegisteredUsers();
  const matchedUser = users.find(u => u.email.toLowerCase() === email.toLowerCase());

  if (!matchedUser) {
    showFormAlert("login-alert", "No account found with this email. Please verify your email or sign up.");
    return;
  }

  if (matchedUser.password !== password) {
    showFormAlert("login-alert", "Incorrect password. Please verify your credentials or use the demo account.");
    passwordInput.focus();
    return;
  }

  saveActiveSession(matchedUser, rememberCheckbox ? rememberCheckbox.checked : true);
  updateUserDisplayInfo(matchedUser);

  showFormAlert("login-alert", `Credentials verified! Welcome back, ${matchedUser.name}.`, "success");
  showToast(`Welcome back, ${matchedUser.name}!`, "success");

  setTimeout(() => {
    showPortalScreen();
  }, 350);
}

function handleSignupSubmit(e) {
  e.preventDefault();
  hideFormAlert("signup-alert");

  const nameInput = document.getElementById("signup-name");
  const studentIdInput = document.getElementById("signup-student-id");
  const yearInput = document.getElementById("signup-year");
  const departmentInput = document.getElementById("signup-department");
  const emailInput = document.getElementById("signup-email");
  const passwordInput = document.getElementById("signup-password");
  const confirmPasswordInput = document.getElementById("signup-confirm-password");

  const fullName = nameInput.value.trim();
  const studentId = studentIdInput.value.trim();
  const year = yearInput.value;
  const department = departmentInput.value;
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (!fullName) {
    showFormAlert("signup-alert", "Full legal name is required.");
    nameInput.focus();
    return;
  }

  if (!studentId) {
    showFormAlert("signup-alert", "Student ID is required.");
    studentIdInput.focus();
    return;
  }

  if (!email) {
    showFormAlert("signup-alert", "Institutional email is required.");
    emailInput.focus();
    return;
  }

  if (!isValidEmail(email)) {
    showFormAlert("signup-alert", "Please enter a valid email address format (e.g. name@mit.edu).");
    emailInput.focus();
    return;
  }

  if (!password) {
    showFormAlert("signup-alert", "Please choose a secure password.");
    passwordInput.focus();
    return;
  }

  if (password.length < 6) {
    showFormAlert("signup-alert", "Password must be at least 6 characters in length.");
    passwordInput.focus();
    return;
  }

  if (password !== confirmPassword) {
    showFormAlert("signup-alert", "Passwords do not match. Please retype carefully.");
    confirmPasswordInput.focus();
    return;
  }

  const users = getRegisteredUsers();
  const duplicate = users.find(u => u.email.toLowerCase() === email.toLowerCase());

  if (duplicate) {
    showFormAlert("signup-alert", "An account with this email address already exists. Please sign in instead.");
    return;
  }

  const newUser = {
    name: fullName,
    studentId: studentId,
    email: email,
    password: password,
    department: department,
    yearOfStudy: year,
    currentSemester: "Semester 5 (Fall 2026)",
    program: `B.S. in ${department.replace(/^(School of|Department of)\s+/i, "")}`,
    phone: "+1 (555) 710-8832",
    advisor: "Assigned by Academic Dean",
    residence: "Westgate Residential Hall",
    cgpa: "3.85",
    creditsCompleted: 88,
    totalCreditsRequired: 120,
    overallAttendance: "92.0%",
    completedSemestersCount: 4,
    enrolledSubjectsCount: 6,
    dateOfBirth: "May 20, 2004",
    bloodGroup: "B+ (Positive)",
    hasCustomPhoto: false,
    skills: ["Computer Systems", "Problem Solving", "Modern Web Frameworks", "Algorithm Design"]
  };

  users.push(newUser);
  try {
    localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(users));
  } catch (err) {
    console.error("Failed to save new user to localStorage:", err);
  }

  saveActiveSession(newUser, true);
  updateUserDisplayInfo(newUser);

  showFormAlert("signup-alert", `Account successfully created! Welcome, ${fullName}.`, "success");
  showToast(`Account created! Welcome to StudentSphere, ${fullName}!`, "success");

  document.getElementById("signup-form").reset();

  setTimeout(() => {
    showPortalScreen();
  }, 500);
}

function fillAndSubmitDemoLogin() {
  const emailInput = document.getElementById("login-email");
  const passwordInput = document.getElementById("login-password");

  if (emailInput && passwordInput) {
    emailInput.value = DEMO_STUDENT.email;
    passwordInput.value = DEMO_STUDENT.password;
  }

  hideFormAlert("login-alert");
  showToast("Loaded demo student credentials! Logging in...", "info");

  setTimeout(() => {
    saveActiveSession(DEMO_STUDENT, true);
    updateUserDisplayInfo(DEMO_STUDENT);
    showPortalScreen();
    showToast(`Signed in as Demo Student: ${DEMO_STUDENT.name}`, "success");
  }, 350);
}

function handleLogout() {
  if (confirm("Are you sure you want to sign out of StudentSphere?")) {
    clearActiveSession();
    showAuthScreen();
    showToast("You have been signed out safely.", "info");

    const passInput = document.getElementById("login-password");
    if (passInput) passInput.value = "";
  }
}

// =============================================================================
// 7. Dynamic Student Details Display Updater
// =============================================================================

function getInitials(fullName) {
  if (!fullName) return "ST";
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/**
 * Update all DOM elements with the current user's profile information
 */
function updateUserDisplayInfo(user) {
  if (!user) return;

  const initials = getInitials(user.name);

  // Full Name everywhere
  document.querySelectorAll(".student-display-name").forEach(el => {
    el.textContent = user.name;
  });

  // Student ID
  document.querySelectorAll(".student-display-id").forEach(el => {
    el.textContent = user.studentId;
  });

  // Department
  document.querySelectorAll(".student-display-department").forEach(el => {
    el.textContent = user.department;
  });

  // Year of Study
  document.querySelectorAll(".student-display-year").forEach(el => {
    el.textContent = user.yearOfStudy;
  });

  // Email
  document.querySelectorAll(".student-display-email").forEach(el => {
    el.textContent = user.email;
  });

  // Phone
  document.querySelectorAll(".student-display-phone").forEach(el => {
    el.textContent = user.phone || "+1 (555) 382-9014";
  });

  // Faculty Advisor
  document.querySelectorAll(".student-display-advisor").forEach(el => {
    el.textContent = user.advisor || "Dr. Marcus Reynolds (Assoc. Prof.)";
  });

  // Residence
  document.querySelectorAll(".student-display-residence").forEach(el => {
    el.textContent = user.residence || "Campus Residence Hall";
  });

  // Date of Birth & Blood Group
  document.querySelectorAll(".student-display-dob").forEach(el => {
    el.textContent = user.dateOfBirth || "April 14, 2004";
  });
  document.querySelectorAll(".student-display-blood").forEach(el => {
    el.textContent = user.bloodGroup || "O+ (Positive)";
  });

  // Monogram Initials
  document.querySelectorAll(".student-initials-display").forEach(el => {
    el.textContent = initials;
  });

  // 4 Specific Summary Cards: CGPA, Attendance, Total Subjects, Completed Semesters
  const cgpaEl = document.getElementById("dashboard-cgpa-display");
  if (cgpaEl) cgpaEl.textContent = user.cgpa || "3.88";

  const profileCgpaEl = document.getElementById("profile-cgpa-display");
  if (profileCgpaEl) profileCgpaEl.textContent = `${user.cgpa || "3.88"} / 4.0`;

  const cgpaSummaryEl = document.getElementById("sem-metric-cgpa-summary");
  if (cgpaSummaryEl) cgpaSummaryEl.textContent = user.cgpa || "3.88";

  const attEl = document.getElementById("dashboard-attendance-display");
  if (attEl) attEl.textContent = user.overallAttendance || "92.4%";

  const attPctEl = document.getElementById("attendance-pct-display");
  if (attPctEl) attPctEl.textContent = user.overallAttendance || "92.4%";

  const subjectsEl = document.getElementById("dashboard-subjects-display");
  if (subjectsEl) subjectsEl.textContent = `${user.enrolledSubjectsCount || 6} Enrolled`;

  const semestersEl = document.getElementById("dashboard-semesters-display");
  if (semestersEl) semestersEl.textContent = `${user.completedSemestersCount || 4} Semesters`;

  // Avatar handling (Photo vs Monogram)
  const isDemo = user.email.toLowerCase() === DEMO_STUDENT.email.toLowerCase();
  const hasPhoto = isDemo && user.hasCustomPhoto;

  const toggleAvatarPair = (imgId, fallbackId) => {
    const img = document.getElementById(imgId);
    const fb = document.getElementById(fallbackId);
    if (img && fb) {
      if (hasPhoto) {
        img.style.display = "block";
        fb.style.display = "none";
      } else {
        img.style.display = "none";
        fb.style.display = "flex";
      }
    }
  };

  toggleAvatarPair("sidebar-user-avatar", "user-fallback-avatar");
  toggleAvatarPair("header-user-avatar", "header-avatar-fallback");
  toggleAvatarPair("dash-profile-thumb", "dash-thumb-fallback");
  toggleAvatarPair("profile-card-avatar", "profile-avatar-fallback");
  toggleAvatarPair("modal-card-photo", "modal-photo-fallback");
}

// =============================================================================
// 8. Navigation & Tab Switching (Seamless Single-Page Switching)
// =============================================================================

function navigateTo(viewId) {
  appState.currentView = viewId;

  // Hide all sections, show target section
  document.querySelectorAll(".view-section").forEach(sec => {
    sec.classList.remove("active");
  });

  const target = document.getElementById(`${viewId}-view`);
  if (target) target.classList.add("active");

  // Update navigation active states
  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("data-view") === viewId) {
      link.classList.add("active");
    }
  });

  // Update breadcrumb text
  const breadcrumbCurrent = document.getElementById("breadcrumb-current-page");
  if (breadcrumbCurrent) {
    const titles = {
      dashboard: "Student Dashboard",
      profile: "Student Profile",
      results: "Semester Results",
      attendance: "Attendance Statistics",
      timetable: "Weekly Class Timetable"
    };
    breadcrumbCurrent.textContent = titles[viewId] || "Dashboard";
  }

  closeMobileSidebar();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleMobileSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar) sidebar.classList.toggle("open");
}

function closeMobileSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar) sidebar.classList.remove("open");
}

// =============================================================================
// 9. Semester Results: Marks Table & Visual Comparison Bar Chart
// =============================================================================

/**
 * Render visual bar chart comparing subject marks for selected semester
 */
function renderPerformanceChart(semKey) {
  const semData = semesterResultsData[semKey];
  if (!semData) return;

  const chartBarsContainer = document.getElementById("chart-bars-wrapper");
  const chartTitle = document.getElementById("chart-section-title");
  const avgGuideline = document.getElementById("chart-average-guideline");
  const avgBadge = document.getElementById("chart-average-badge-text");

  if (!chartBarsContainer) return;

  if (chartTitle) {
    chartTitle.textContent = `Subject Marks Comparison (${semData.title})`;
  }

  // Calculate Average Percentage
  const totalMarksSum = semData.courses.reduce((sum, c) => sum + c.total, 0);
  const avgScore = totalMarksSum / semData.courses.length;

  if (avgGuideline) {
    // 100 max score mapped to bottom %
    avgGuideline.style.bottom = `${avgScore}%`;
  }
  if (avgBadge) {
    avgBadge.textContent = `Avg: ${avgScore.toFixed(1)}%`;
  }

  // Clear previous columns
  chartBarsContainer.innerHTML = "";

  // Render each subject column
  semData.courses.forEach(c => {
    const col = document.createElement("div");
    col.className = "chart-bar-column";

    col.innerHTML = `
      <div class="chart-bar-tooltip">
        <strong>${c.name} (${c.code})</strong><br/>
        Internal: ${c.internal} / 30 · External: ${c.external} / 70<br/>
        Total: <strong>${c.total} / 100</strong> (Grade: ${c.grade})
      </div>

      <div class="chart-bar-track">
        <span class="chart-bar-score-tag tabular-nums">${c.total}</span>
        <div class="chart-bar-fill" style="height: 0%;"></div>
      </div>

      <span class="chart-bar-meta-label" title="${c.name}">${c.code}</span>
    `;

    chartBarsContainer.appendChild(col);

    // Animate bar height after insert
    setTimeout(() => {
      const fill = col.querySelector(".chart-bar-fill");
      if (fill) {
        fill.style.height = `${c.total}%`;
      }
    }, 50);
  });
}

/**
 * Render subject-wise marks table and update metrics for selected semester
 */
function renderSemesterResults(semesterKey) {
  appState.selectedSemester = semesterKey;
  const semData = semesterResultsData[semesterKey];
  if (!semData) return;

  // Sync Dropdown value
  const dropdown = document.getElementById("semester-dropdown");
  if (dropdown && dropdown.value !== semesterKey) {
    dropdown.value = semesterKey;
  }

  // Update Summary Metrics
  const semSgpaEl = document.getElementById("sem-metric-sgpa");
  if (semSgpaEl) semSgpaEl.textContent = semData.sgpa;

  const semCgpaSummary = document.getElementById("sem-metric-cgpa-summary");
  if (semCgpaSummary) {
    semCgpaSummary.textContent = currentUser ? currentUser.cgpa : "3.88";
  }

  const semCreditsEl = document.getElementById("sem-metric-credits");
  if (semCreditsEl) semCreditsEl.textContent = `${semData.creditsEarned} Credits`;

  const semMarksEl = document.getElementById("sem-metric-marks");
  if (semMarksEl) {
    semMarksEl.textContent = `${semData.totalMarksObtained} / ${semData.maximumMarks}`;
  }

  const semStatusEl = document.getElementById("sem-metric-status");
  if (semStatusEl) semStatusEl.textContent = semData.status;

  const tableTitle = document.getElementById("table-section-title");
  if (tableTitle) {
    tableTitle.textContent = `Subject-wise Evaluation (${semData.title})`;
  }

  const countBadge = document.getElementById("sem-courses-count");
  if (countBadge) {
    countBadge.textContent = `${semData.courses.length} Evaluated Subjects`;
  }

  // Populate Subject-wise Table
  const tbody = document.getElementById("semester-marks-tbody");
  if (!tbody) return;

  tbody.innerHTML = "";

  semData.courses.forEach(c => {
    const tr = document.createElement("tr");

    let gradeClass = "grade-b";
    if (c.grade.startsWith("A")) gradeClass = "grade-a";
    if (c.grade === "A+") gradeClass = "grade-a-plus";

    tr.innerHTML = `
      <td>
        <div style="font-weight: 700; color: var(--text-main);">${c.name}</div>
        <div style="font-size: 0.74rem; color: var(--text-muted);">${c.credits} Credit Units</div>
      </td>
      <td><strong>${c.code}</strong></td>
      <td class="text-center tabular-nums">${c.internal} / 30</td>
      <td class="text-center tabular-nums">${c.external} / 70</td>
      <td class="text-center tabular-nums font-bold" style="color: var(--primary-800);"><strong>${c.total}</strong> / 100</td>
      <td class="text-center"><span class="grade-badge ${gradeClass}">${c.grade}</span></td>
      <td class="text-center"><span style="color: var(--success-text); font-weight: 600;"><i class="fa-solid fa-circle-check"></i> ${c.status}</span></td>
    `;
    tbody.appendChild(tr);
  });

  // Re-render visual chart for selected semester
  renderPerformanceChart(semesterKey);
}

// =============================================================================
// 10. Attendance Statistics Rendering
// =============================================================================

function renderAttendanceData() {
  const tbody = document.getElementById("attendance-tbody");
  if (!tbody) return;

  tbody.innerHTML = "";

  attendanceData.forEach(item => {
    const tr = document.createElement("tr");

    let fillClass = "fill-emerald";
    if (item.percentage < 85) fillClass = "fill-blue";
    if (item.percentage < 75) fillClass = "fill-red";

    tr.innerHTML = `
      <td>
        <div style="font-weight: 700; color: var(--text-main);">${item.name}</div>
        <div style="font-size: 0.75rem; color: var(--text-muted);">${item.code} · ${item.instructor}</div>
      </td>
      <td class="text-center tabular-nums">${item.conducted}</td>
      <td class="text-center tabular-nums" style="color: var(--success-text); font-weight: 600;">${item.attended}</td>
      <td class="text-center tabular-nums" style="color: var(--danger-text); font-weight: 600;">${item.missed}</td>
      <td>
        <div style="display: flex; justify-content: space-between; font-size: 0.78rem; font-weight: 700;">
          <span>${item.percentage}%</span>
          <span style="color: var(--text-muted); font-size: 0.72rem;">Min 75%</span>
        </div>
        <div class="attendance-progress-bar-container">
          <div class="attendance-progress-fill ${fillClass}" style="width: ${item.percentage}%;"></div>
        </div>
      </td>
      <td>
        <span style="font-size: 0.78rem; font-weight: 600; color: #047857; background: #ecfdf5; padding: 4px 10px; border-radius: 9999px;">
          ${item.safeThreshold}
        </span>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// =============================================================================
// 11. Weekly Timetable Rendering
// =============================================================================

function renderTimetableForDay(dayKey) {
  appState.selectedDay = dayKey;

  document.querySelectorAll(".day-tab-btn").forEach(btn => {
    btn.classList.remove("active");
    if (btn.getAttribute("data-day") === dayKey) {
      btn.classList.add("active");
    }
  });

  const container = document.getElementById("timetable-cards-container");
  if (!container) return;

  const classes = weeklyTimetable[dayKey] || [];
  container.innerHTML = "";

  if (classes.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 40px; text-align: center; color: var(--text-muted); background: white; border-radius: var(--radius-lg); border: 1px dashed var(--border-color);">
        <i class="fa-regular fa-calendar-xmark" style="font-size: 2rem; margin-bottom: 12px; color: var(--primary-400);"></i>
        <h3>No classes scheduled for this day</h3>
        <p style="font-size: 0.88rem; margin-top: 4px;">Enjoy your research and project development time.</p>
      </div>
    `;
    return;
  }

  classes.forEach(c => {
    const card = document.createElement("div");
    card.className = "schedule-card";

    let tagClass = "tag-lecture";
    if (c.type.includes("Lab") || c.type.includes("Studio")) tagClass = "tag-lab";

    card.innerHTML = `
      <div>
        <div class="schedule-card-top">
          <span class="schedule-time-badge"><i class="fa-regular fa-clock"></i> ${c.time}</span>
          <span class="schedule-course-code">${c.code}</span>
        </div>
        <h4 class="schedule-course-title">${c.course}</h4>
        
        <div class="schedule-details-row">
          <div class="schedule-detail-item">
            <i class="fa-solid fa-chalkboard-user"></i>
            <span>${c.instructor}</span>
          </div>
          <div class="schedule-detail-item">
            <i class="fa-solid fa-location-dot"></i>
            <span>${c.venue}</span>
          </div>
        </div>
      </div>

      <div class="schedule-card-footer">
        <span class="class-tag ${tagClass}">${c.type}</span>
        <button class="btn-secondary" style="width: auto; padding: 6px 12px; font-size: 0.75rem;" onclick="showToast('Class syllabus and notes for ${c.code} are current.', 'info')">
          <i class="fa-solid fa-book-open"></i> Syllabus
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

// =============================================================================
// 12. Modal & Action Handlers
// =============================================================================

function openIdCardModal() {
  const modal = document.getElementById("idcard-modal");
  if (modal) modal.classList.add("show");
}

function closeIdCardModal() {
  const modal = document.getElementById("idcard-modal");
  if (modal) modal.classList.remove("show");
}

// =============================================================================
// 13. Document Ready Initialization
// =============================================================================

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize registered users database in localStorage
  initDatabase();

  // 2. Setup Password Visibility Toggles
  setupPasswordToggle("toggle-login-password", "login-password");
  setupPasswordToggle("toggle-signup-password", "signup-password");
  setupPasswordToggle("toggle-signup-confirm-password", "signup-confirm-password");

  // 3. Tab switching between Login and Signup
  const tabLoginBtn = document.getElementById("tab-login-btn");
  const tabSignupBtn = document.getElementById("tab-signup-btn");
  const switchLoginLink = document.getElementById("link-switch-to-login");

  if (tabLoginBtn) tabLoginBtn.addEventListener("click", () => switchAuthTab("login"));
  if (tabSignupBtn) tabSignupBtn.addEventListener("click", () => switchAuthTab("signup"));
  if (switchLoginLink) switchLoginLink.addEventListener("click", () => switchAuthTab("login"));

  // 4. Form Submissions
  const loginForm = document.getElementById("login-form");
  if (loginForm) loginForm.addEventListener("submit", handleLoginSubmit);

  const signupForm = document.getElementById("signup-form");
  if (signupForm) signupForm.addEventListener("submit", handleSignupSubmit);

  // 5. One-Click Demo Login
  const demoLoginBtn = document.getElementById("btn-demo-login");
  if (demoLoginBtn) demoLoginBtn.addEventListener("click", fillAndSubmitDemoLogin);

  // 6. Forgot Password Action
  const forgotPasswordBtn = document.getElementById("btn-forgot-password");
  if (forgotPasswordBtn) {
    forgotPasswordBtn.addEventListener("click", () => {
      const email = document.getElementById("login-email").value.trim();
      if (email && isValidEmail(email)) {
        showToast(`Password reset link dispatched to ${email}`, "info");
      } else {
        showToast("Enter your registered email above to receive password recovery instructions.", "info");
      }
    });
  }

  // 7. Navigation Links (Single Page Section Switching)
  document.querySelectorAll(".nav-link[data-view]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const viewId = link.getAttribute("data-view");
      navigateTo(viewId);
    });
  });

  // 8. Header Profile Link
  const headerUserTrigger = document.getElementById("header-user-trigger");
  if (headerUserTrigger) {
    headerUserTrigger.addEventListener("click", () => {
      navigateTo("profile");
    });
  }

  // 9. Mobile Sidebar Navigation Toggle
  const mobileToggleBtn = document.getElementById("mobile-menu-toggle");
  if (mobileToggleBtn) mobileToggleBtn.addEventListener("click", toggleMobileSidebar);

  const sidebarCloseBtn = document.getElementById("sidebar-close-btn");
  if (sidebarCloseBtn) sidebarCloseBtn.addEventListener("click", closeMobileSidebar);

  // 10. Logout Actions
  document.querySelectorAll(".logout-action-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      handleLogout();
    });
  });

  // 11. Semester Results Dropdown Event Listener
  const semesterDropdown = document.getElementById("semester-dropdown");
  if (semesterDropdown) {
    semesterDropdown.addEventListener("change", (e) => {
      const semKey = e.target.value;
      renderSemesterResults(semKey);
      showToast(`Loaded marks and visual comparison for ${semesterResultsData[semKey].title}.`, "info");
    });
  }

  // 12. Timetable Day Buttons
  document.querySelectorAll(".day-tab-btn").forEach(tab => {
    tab.addEventListener("click", () => {
      const dayKey = tab.getAttribute("data-day");
      renderTimetableForDay(dayKey);
    });
  });

  // 13. Download / Print Actions
  const btnDownloadTranscript = document.getElementById("btn-download-transcript");
  if (btnDownloadTranscript) {
    btnDownloadTranscript.addEventListener("click", () => {
      showToast("Generating official grade transcript PDF...", "info");
      setTimeout(() => {
        window.print();
      }, 500);
    });
  }

  const btnPrintTimetable = document.getElementById("btn-print-timetable");
  if (btnPrintTimetable) {
    btnPrintTimetable.addEventListener("click", () => {
      window.print();
    });
  }

  const btnDownloadIdCard = document.getElementById("btn-download-idcard");
  if (btnDownloadIdCard) {
    btnDownloadIdCard.addEventListener("click", openIdCardModal);
  }

  const modalCloseIdCard = document.getElementById("modal-close-idcard");
  if (modalCloseIdCard) {
    modalCloseIdCard.addEventListener("click", closeIdCardModal);
  }

  const idcardModal = document.getElementById("idcard-modal");
  if (idcardModal) {
    idcardModal.addEventListener("click", (e) => {
      if (e.target === idcardModal) closeIdCardModal();
    });
  }

  // 14. Notifications Button
  const notifBtn = document.getElementById("btn-notifications");
  if (notifBtn) {
    notifBtn.addEventListener("click", () => {
      showToast("You have 2 upcoming deadlines: Midterm Exam schedule & Hackathon registration.", "info");
    });
  }

  // 15. Initial Data Population
  renderSemesterResults("sem4");
  renderAttendanceData();
  renderTimetableForDay("monday");

  // 16. Active Session State Check
  const activeSession = getActiveSession();
  if (activeSession) {
    currentUser = activeSession;
    updateUserDisplayInfo(currentUser);
    showPortalScreen();
  } else {
    showAuthScreen();
  }
});
