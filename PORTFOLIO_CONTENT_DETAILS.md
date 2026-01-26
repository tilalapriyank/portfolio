# Portfolio Content Details - Complete Analysis

**Document Purpose:** This document provides a comprehensive breakdown of all content displayed in your portfolio. Use this as a reference when making content updates.

**Last Updated:** January 2026  
**Portfolio Version:** 2026 Design Standards

---

## 📋 Table of Contents

1. [Navigation Menu](#1-navigation-menu)
2. [Hero Section](#2-hero-section)
3. [About Section](#3-about-section)
4. [Skills Section](#4-skills-section)
5. [Projects Section](#5-projects-section)
6. [Contact Section](#6-contact-section)
7. [Social Links & External URLs](#7-social-links--external-urls)
8. [File Locations for Updates](#8-file-locations-for-updates)

---

## 1. Navigation Menu

**File Location:** `src/constants/MenuItem.js`

### Current Menu Items:
- **Introduction** → Scrolls to `#intro` section
- **About** → Scrolls to `#about` section
- **Projects** → Scrolls to `#projects` section
- **Contact** → Scrolls to `#contact` section

**Note:** Menu items use smooth scroll navigation. To add/remove items, update the `MenuItems` array.

---

## 2. Hero Section

**File Location:** `src/components/HeroSection.jsx`

### Main Heading:
```
Hi, I'm Priyank a passionate Full Stack Developer.
```
- "Priyank" is highlighted in **neon cyan** (`accent1`)
- "passionate" is highlighted in **neon magenta** (`accent2`)

### Type Animation Sequence:
1. "I'm a Full Stack Developer." (500ms delay, 1000ms display)
2. "I build interactive UI using React." (1000ms display)
3. "I convert designs into Modern UI." (1000ms display)
4. "I make ideas & things alive." (1000ms display)
5. Repeats infinitely

### Subheading:
```
Stick around to see some of my work.
```

### Call-to-Action Buttons:
1. **"Hire Me"** → Scrolls to contact section
2. **"Download CV"** → Links to: `https://drive.google.com/file/d/1SC7wVl0dTVNE_AVOiAGbt3WWGof-yIbp/view?usp=drive_link`

### Hero Image:
- Path: `/images/heroImg.png`
- Alt text: "Hero Image"

---

## 3. About Section

**File Location:** `src/components/About.jsx`

### Section Title:
```
About Me
```

### Personal Description:
```
I am a dedicated WordPress Developer with a strong passion for creating 
innovative and user-centric web solutions. With 9 months of experience 
in developing custom plugins, themes, and optimizing website functionality, 
I specialize in transforming ideas into interactive and efficient digital 
experiences.

Recently, I've been diving into Full Stack Development, expanding my skill 
set with technologies like Node.js, React.js, Express.js. This allows me 
to build versatile applications that are not only functional but also 
scalable and performance-driven.

Every project I take on is an opportunity to blend creativity and technical 
expertise to deliver solutions that truly make a difference. From building 
intuitive interfaces to crafting robust backend systems, I'm committed to 
achieving excellence in every line of code.
```

**Highlighted Terms:**
- "WordPress Developer" → **neon cyan** (`accent1`)
- "Full Stack Development" → **neon magenta** (`accent2`)
- "Node.js, React.js, Express.js" → **neon cyan** (`accent1`)

### Education Section:

**University:** Gujarat Technologies University  
**Degree:** Bachelor of Technology in Computer Engineering  
**Duration:** 2020 - 2024  
**CPI:** 8.25  
**CGPA:** 8.01

### About Image:
- Path: `/images/about.png`
- Alt text: "meme" (⚠️ **Consider updating alt text**)

---

## 4. Skills Section

**File Location:** `src/constants/Skills.js` & `src/components/SkillSection.jsx`

### Skills Organized by Category:

#### 1. Programming Languages
- C
- JavaScript
- TypeScript
- PHP

#### 2. Frontend Development
- React.js
- HTML
- CSS
- Tailwind CSS
- Bootstrap
- Material UI
- Ant Design
- Redux
- Vite

#### 3. Backend Development
- Node.js
- Express.js
- WordPress

#### 4. Databases
- MySQL
- MongoDB

#### 5. Tools
- Git
- GitHub
- Visual Studio Code
- Postman
- FileZilla

**Note:** Skills use icons from `devicons-react` package. Each skill displays with an icon and name.

---

## 5. Projects Section

**File Location:** `src/constants/ProjectList.js`

### Total Projects: 8

#### Project 1: Tic-Tac-Toe Game
- **Name:** Tic-Tac-Toe Game
- **Description:**
  - Developed a dynamic and interactive Tic-Tac-Toe game using HTML, CSS, and JavaScript, ensuring a smooth and engaging user experience.
  - Implemented turn-based gameplay and automatic detection of win conditions, making the game fully functional for both players.
  - Added a reset functionality to restart the game after a win or draw, improving usability and user interaction.
- **Tech Stack:** HTML, CSS, JavaScript
- **GitHub:** https://github.com/tilalapriyank/Tic-Tac-Toe
- **Demo:** https://tic-tac-toe-rose-zeta.vercel.app
- **Image:** `src/assets/projects/ttt.png`

#### Project 2: WP Realty Plugin
- **Name:** WP Realty Plugin
- **Description:**
  - Developed a WordPress plugin for efficient property management, enhancing real estate workflows.
  - Integrated advanced search filters and an inquiry handling system to streamline user experience and communication.
  - Designed user-friendly frontend displays, boosting engagement and increasing booking conversions.
- **Tech Stack:** HTML, CSS, JavaScript, Wordpress, PHP, Bootstrap
- **GitHub:** null (not available)
- **Demo:** null (not available)
- **Image:** `src/assets/projects/realty.png`

#### Project 3: Weather App
- **Name:** Weather App
- **Description:**
  - Built a weather application using HTML, CSS, JavaScript, Node.js, and Express.js, providing real-time weather information based on user input.
  - Integrated an external weather API to fetch accurate, location-based weather updates and provide detailed forecasts.
  - Enhanced the app's UI with a clean, intuitive design to ensure ease of use and improve the overall user experience.
- **Tech Stack:** HTML, CSS, JavaScript, Node.js, Express.js
- **GitHub:** https://github.com/tilalapriyank/weather-app
- **Demo:** https://weather-app-production-2e01.up.railway.app/
- **Image:** `src/assets/projects/weather.png`

#### Project 4: WPTUTOR LMS
- **Name:** WPTUTOR LMS
- **Description:**
  - Developed a comprehensive WordPress LMS plugin to support online education with course and quiz management.
  - Implemented scalable functionality to track student progress and ensure seamless integration with themes and plugins.
  - Enhanced the learning experience by adding interactive features for both students and instructors.
- **Tech Stack:** JavaScript, Wordpress, PHP
- **GitHub:** null (not available)
- **Demo:** null (not available)
- **Image:** `src/assets/projects/wp_lms.png`

#### Project 5: HitScore
- **Name:** HitScore
- **Description:**
  - Developed a real-time web application to display live cricket scores and related information.
  - Built a dynamic and responsive UI using React.js and Ant Design, ensuring a smooth user experience across devices.
  - Integrated Cricbuzz API to fetch and display real-time cricket scores, match schedules, and team statistics, making it a go-to platform for cricket enthusiasts.
- **Tech Stack:** React.js, Ant Design
- **GitHub:** https://github.com/tilalapriyank/hit_score
- **Demo:** https://hit-score.vercel.app/
- **Image:** `src/assets/projects/hitscore.png`

#### Project 6: LMS
- **Name:** LMS
- **Description:**
  - Developed a full-stack Learning Management System (LMS) with secure user authentication and role-based access control.
  - Developed features to manage assignments, update course content, and efficiently handle data, providing a seamless and secure user experience.
  - Integrated a MySQL database for secure and organized data management.
- **Tech Stack:** React.js, Node.js, Express.js, Material UI
- **GitHub:** https://github.com/tilalapriyank/LMS
- **Demo:** null (not available)
- **Image:** `src/assets/projects/lms.png`

#### Project 7: Portfolio
- **Name:** Portfolio
- **Description:**
  - Designed and developed a professional portfolio website using React.js and Tailwind CSS to showcase web development skills and projects.
  - Created a responsive, modern layout that adapts seamlessly across different devices, enhancing the user experience.
  - Incorporated smooth animations and dynamic features to highlight key projects and demonstrate technical expertise.
- **Tech Stack:** React.js, Tailwind CSS
- **GitHub:** https://github.com/tilalapriyank/portfolio
- **Demo:** https://portfolio-dqehyisll-tilalapriyanks-projects.vercel.app/
- **Image:** `src/assets/projects/portfolio.png`

#### Project 8: Group Expense
- **Name:** Group Expense
- **Description:**
  - A web app for tracking and splitting group expenses efficiently.
  - Automates cost-sharing and balances debts among users.
  - Built with React.js, Node.js, Express.js, and MongoDB for a seamless experience.
  - Uses Redux-Saga for real-time updates and TypeScript for reliability.
- **Tech Stack:** React.js, Node.js, Express.js, MongoDB, Redux-Saga, TypeScript
- **GitHub:** https://github.com/tilalapriyank/group-expense
- **Demo:** https://group-expense.vercel.app/
- **Image:** `src/assets/projects/groupexpense.png`

---

## 6. Contact Section

**File Location:** `src/components/Contact.jsx`

### Section Title:
```
Get In Touch
```

### Contact Message:
```
I'm actively seeking new opportunities, and I welcome your messages. 
Whether you have inquiries or simply want to say hello, feel free to 
reach out. I'll try my best to get back to you!
```

### Contact Form Fields:
1. **Email** (required)
   - Placeholder: "abc@gmail.com"
   - Validation: Email format required

2. **Subject** (required)
   - Placeholder: "Just saying hi"

3. **Message** (required)
   - Placeholder: "Let's talk about..."
   - Textarea field

### Success Message (after form submission):
```
Thank you for reaching out! I appreciate your interest and will get back 
to you as soon as possible. In the meantime, feel free to explore more of 
my portfolio.
```

### Footer:
```
All Rights Reserved © [Current Year] - Priyank
```

**Note:** Form uses Formspree for submission. Requires `VITE_FORM_ID` environment variable.

---

## 7. Social Links & External URLs

### Social Media Links:

#### LinkedIn
- **URL:** https://www.linkedin.com/in/priyank-patel-432b56214
- **Locations:**
  - Navbar (desktop & mobile)
  - Contact section

#### GitHub
- **URL:** https://github.com/tilalapriyank
- **Locations:**
  - Navbar (desktop & mobile)
  - Contact section

#### Email
- **Address:** priyank1504patel@gmail.com
- **Mailto Link:** `mailto:priyank1504patel@gmail.com`
- **Locations:**
  - Navbar (desktop & mobile)

### Other External Links:

#### CV/Resume
- **URL:** https://drive.google.com/file/d/1SC7wVl0dTVNE_AVOiAGbt3WWGof-yIbp/view?usp=drive_link
- **Location:** Hero section "Download CV" button

### Navbar Branding:
- **Mobile:** "@Priyank"
- **Desktop:** "@Tilala_Priyank"

---

## 8. File Locations for Updates

### Content Files (Easy to Update):

| Content Type | File Path | What to Update |
|-------------|-----------|----------------|
| **Navigation Menu** | `src/constants/MenuItem.js` | Menu items array |
| **Projects** | `src/constants/ProjectList.js` | Projects array with all details |
| **Skills** | `src/constants/Skills.js` | Skills categories and items |
| **Hero Text** | `src/components/HeroSection.jsx` | Lines 47-82 (heading, animation, CTA) |
| **About Text** | `src/components/About.jsx` | Lines 71-118 (description, education) |
| **Contact Text** | `src/components/Contact.jsx` | Lines 69-77 (contact message) |
| **Social Links** | `src/components/Navbar.jsx` | Lines 74, 82, 90, 149, 159, 169 |
| **Social Links** | `src/components/Contact.jsx` | Lines 80, 91 |
| **CV Link** | `src/components/HeroSection.jsx` | Line 100 |

### SEO & Meta Tags:
- **File:** `index.html`
- **Lines:** 7-40 (meta tags, Open Graph, Twitter Cards, Structured Data)

---

## 📝 Quick Update Guide

### To Update Personal Information:
1. **Name/Branding:** Update in `HeroSection.jsx` (line 48) and `Navbar.jsx` (lines 38, 40)
2. **Email:** Update in `Navbar.jsx` and `Contact.jsx` (search for `priyank1504patel@gmail.com`)
3. **Social Links:** Update URLs in `Navbar.jsx` and `Contact.jsx`
4. **CV Link:** Update in `HeroSection.jsx` (line 100)

### To Update About Section:
1. **Description:** Edit text in `About.jsx` (lines 71-94)
2. **Education:** Update in `About.jsx` (lines 104-117)
3. **Experience:** Currently not displayed (can be added)

### To Add/Remove Projects:
1. Edit `src/constants/ProjectList.js`
2. Add/remove objects in the `ProjectList` array
3. Each project needs: `id`, `name`, `description` (array), `img`, `tech` (array), `source`, `demo`

### To Update Skills:
1. Edit `src/constants/Skills.js`
2. Modify the `MySkills` array
3. Add/remove skills from categories
4. Ensure icon imports match available icons from `devicons-react`

### To Update Type Animation:
1. Edit `src/components/HeroSection.jsx`
2. Modify the `sequence` array (lines 59-68)
3. Format: `[delay, "text", displayTime, "text", displayTime, ...]`

---

## ⚠️ Important Notes

1. **Alt Text:** The about image has alt text "meme" - consider updating to something more descriptive
2. **Missing Demo Links:** Projects 2, 4, and 6 don't have demo links
3. **Formspree:** Contact form requires `VITE_FORM_ID` environment variable
4. **Image Paths:** All images should be in `public/images/` or `src/assets/` directories
5. **URL Updates:** Remember to update portfolio URL in `index.html` meta tags (currently placeholder)

---

## 🎨 Design Notes

- **Color Accents:** Neon cyan (`accent1`) and neon magenta (`accent2`) are used throughout
- **Glassmorphic Design:** All cards use glassmorphic effects with backdrop blur
- **Animations:** Scroll-triggered animations using Framer Motion
- **Responsive:** All content is responsive across mobile, tablet, and desktop

---

**End of Content Analysis Document**

*This document should be updated whenever content changes are made to maintain accurate documentation.*

