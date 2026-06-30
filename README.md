# AXION INSPECT SRL — Corporate Website

A modern, high-performance corporate landing page for **AXION INSPECT SRL**, a leader in European Third-Party Inspection, Expediting, NDT, and Quality Assurance services.

This project is built using React, Vite, TailwindCSS, and Framer Motion, and features localized translations (English and Italian) and interactive contact forms integrated with the **Resend** email platform.

---

## Tech Stack & Core Libraries

- **Frontend**: [React 19](https://react.dev/) & [Vite](https://vite.dev/) (Client Environment)
- **Styling**: [TailwindCSS v3](https://tailwindcss.com/) & Vanilla CSS
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Email Ingestion**: [Resend SDK](https://resend.com/)

---

## File Structure

```
├── api/
│   └── contact.js          # Production serverless endpoint for email submissions
├── public/                 # Static assets (images, logos, favicon)
├── src/
│   ├── components/         # Reusable page section components
│   │   ├── About.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx     # Form submission component with Resend integration
│   │   ├── CorporateStructure.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── HowWeWork.jsx
│   │   ├── IndustrialBanner.jsx
│   │   ├── Industries.jsx
│   │   ├── Navbar.jsx      # Mobile-responsive navigation header
│   │   ├── Partners.jsx
│   │   └── Services.jsx
│   ├── i18n/               # Multi-language translation setup
│   │   ├── LanguageContext.jsx
│   │   └── translations.js
│   ├── lib/                # Shared utilities & animation keyframes
│   │   └── motion.js
│   ├── App.jsx             # Main root wrapper layout with overflow safety
│   ├── index.css           # Global Tailwind & Custom styles
│   └── main.jsx            # Entry mount point
├── index.html              # Main HTML template
├── package.json            # Node scripts and dependencies
├── tailwind.config.js      # Tailwind configuration and custom colors
└── vite.config.js          # Vite config & Local API dev server middleware
```

---

## Getting Started

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) installed.

### 2. Installation
Clone the repository and install the dependencies:
```bash
npm install
```

### 3. Setup Environment Variables
Create a file named `.env` at the root of the project and add your Resend API Key:
```env
RESEND_API_KEY=re_your_api_key_here
```

### 4. Development Server
Run the project locally:
```bash
npm run dev
```
The local server will start, typically at `http://localhost:5173/`. Local contact form submissions are processed by custom Vite dev middleware that forwards emails via Resend.

### 5. Production Build
To create an optimized production build:
```bash
npm run build
```
The output files will be built to the `dist` directory, ready to be served statically.

---

## Setup Guide for Contact Form
For a step-by-step guide for non-technical users to set up a Resend account and activate the email contact form, please refer to [SETUP_GUIDE.md](SETUP_GUIDE.md).
