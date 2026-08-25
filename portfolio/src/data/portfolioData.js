export const personalInfo = {
  name: "Hussain Ahmed Humaidi",
  // Hero headshot — save your photo as public/profile.jpg (served at /profile.jpg)
  photo: "/profile.jpg",
  role: "CSE Student & Aspiring Software Engineer",
  tagline: "Competitive Programmer | C++ & DSA Enthusiast | Python Developer",
  phone: "+8801754366440",
  email: "humaidiofficial408@gmail.com",
  github: "https://github.com/humaidi09",
  linkedin: "https://www.linkedin.com/in/hussain-ahmed-02264a39a",
  // Social links. WhatsApp is derived from the phone number above.
  // TODO: verify these handles — guessed from your GitHub username "humaidi09".
  whatsapp: "https://wa.me/8801754366440",
  facebook: "https://www.facebook.com/humaidi09",
  instagram: "https://www.instagram.com/humaidi09",
  twitter: "https://x.com/humaidi09",
  university: "Leading University, Sylhet",
  degree: "B.Sc. in Computer Science & Engineering (2024 – 2029)",
  gpa: "3.85 / 4.00 (3rd Semester)",
  bio: "Undergraduate Computer Science student with a strong passion for problem-solving, algorithms, Object-Oriented Programming, and building scalable modern web applications. Active competitive programmer and tech community volunteer."
};

export const stats = [
  { label: "Current CGPA", value: 3.85, suffix: " / 4.00" },
  { label: "Semester Completed", value: 3, suffix: "rd" },
  { label: "Contests & Events", value: 5, suffix: "+" },
  { label: "Projects Built", value: 10, suffix: "+" }
];

export const skills = {
  languages: ["C", "C++", "Python", "JavaScript", "HTML5", "CSS3"],
  coreCS: ["Data Structures", "Algorithms", "Object-Oriented Programming (OOP)", "Intermediate SQL", "Problem Solving"],
  toolsAndDB: ["Git", "GitHub", "VS Code", "MySQL", "React.js", "Tailwind CSS"]
};

export const projects = [
  {
    id: "world-cup-2026",
    title: "World Cup 2026 Management System",
    category: "Python/OOP",
    tech: ["Python", "OOP", "File Handling", "CLI"],
    summary: "A comprehensive Python system managing players, coaches, and teams using core Object-Oriented Programming principles.",
    details: "Implemented player/coach registration, match scoring, team stats tracking, and persistent storage via file handling. Applied OOP inheritance, encapsulation, and polymorphism.",
    github: "https://github.com/humaidi09/World-Cup-2026/",
    demo: "#"
  },
  {
    id: "restaurant-management",
    title: "Restaurant Management System",
    category: "Python/OOP",
    tech: ["Python", "Modular Architecture", "OOP"],
    summary: "Modular backend application managing admin controls, menu items, customer orders, and automatic bill calculations.",
    details: "Designed separate modules for Admin, Customer, Employee, and Shopping Cart. Applied abstraction and modular design patterns to improve maintainability.",
    github: "https://github.com/humaidi09/",
    demo: "#"
  },
  {
    id: "cgpa-calculator",
    title: "CGPA Calculator",
    category: "C++/CLI",
    tech: ["C++", "OOP", "CLI"],
    summary: "An interactive calculator that computes semester GPA and cumulative CGPA from per-course grades and credit hours.",
    details: "Takes the number of courses, then each course's grade and credit hours. Computes total credits and total grade points (grade point × credit hours), derives the semester GPA, and rolls the results up into an overall CGPA. Prints a clear per-course breakdown alongside the final CGPA.",
    github: "https://github.com/humaidi09",
    demo: "#"
  },
  {
    id: "auth-system",
    title: "Login & Registration System",
    category: "C++/File Handling",
    tech: ["C++", "File Handling", "fstream", "CLI"],
    summary: "A file-backed authentication system with registration, duplicate-username checks, and credential verification on login.",
    details: "Registration validates inputs, rejects duplicate usernames, and persists credentials to a file with hashed passwords instead of plain text. The login routine reads stored credentials, verifies the user's identity, and returns clear success or error messages for every path.",
    github: "https://github.com/humaidi09",
    demo: "#"
  },
  {
    id: "sudoku-solver",
    title: "Sudoku Solver",
    category: "C++/DSA",
    tech: ["C++", "Backtracking", "Recursion"],
    summary: "A recursive backtracking solver that fills any valid 9×9 Sudoku while enforcing row, column, and 3×3 subgrid constraints.",
    details: "Represents the board as a 2D array and scans for empty cells, trying candidate numbers that satisfy Sudoku's row, column, and 3×3 box rules. It recurses on each valid placement and backtracks on dead ends until the puzzle is solved — with an optional GUI for easier input and display.",
    github: "https://github.com/humaidi09",
    demo: "#"
  },
  {
    id: "banking-system",
    title: "Banking System",
    category: "C++/OOP",
    tech: ["C++", "OOP", "File Handling"],
    summary: "An object-oriented banking backend modeling customers, accounts, and transactions with deposits, withdrawals, and transfers.",
    details: "Dedicated Customer, Account, and Transaction classes manage account creation, deposits, withdrawals, and fund transfers between accounts. Every operation is written to a transaction history so users can review recent activity and view balances and detailed account information.",
    github: "https://github.com/humaidi09",
    demo: "#"
  }
];

export const experiences = [
  {
    role: "Executive Member",
    organization: "Leading University Computer Club (LUCC)",
    period: "Jul 2026 – Present",
    skills: ["Leadership", "Event Coordination", "Teamwork"]
  },
  {
    role: "Assistant Mathematics Teacher (Part-time)",
    organization: "Ideal Madrasah, Sylhet (Shobujbag Campus)",
    period: "Feb 2025 – Present",
    skills: ["Mathematical Logic", "Classroom Management", "Communication"]
  },
  {
    role: "Member",
    organization: "Leading University Research Society (LURS)",
    period: "Jun 2026 – Present",
    skills: ["Research Methodology", "Academic Writing"]
  },
  {
    role: "Member",
    organization: "IEEE Computer Society LU SB Chapter",
    period: "May 2024 – Present",
    skills: ["Volunteering", "Event Management"]
  }
];

export const certifications = [
  { title: "SQL (Intermediate)", issuer: "HackerRank", date: "Jul 2026", id: "292DD0FFE495" },
  { title: "SQL (Basic)", issuer: "HackerRank", date: "Jul 2026", id: "D83FAF8D7983" },
  { title: "ILUPC 2026 Team Programming Contest", issuer: "LUCC (Team Code Phoenix)", date: "Aug 2026", id: "Contestant" },
  { title: "16th National Undergraduate Math Olympiad 2025", issuer: "Bangladesh Mathematical Society", date: "Apr 2025", id: "16058" },
  { title: "Web Development with Python Career Launchpad", issuer: "Ostad", date: "Mar 2026", id: "C32383" },
  { title: "HackFusion 2026 Volunteer Certificate", issuer: "IEEE CS LU SB", date: "Apr 2025", id: "IEEE CS LU SB - 0447" }
];
