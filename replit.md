# Portfolio Website - React + Vite + TailwindCSS

## Overview
Personal portfolio website for Omolayo Ayokanmi (BeeTechHub), built with React, Vite, TailwindCSS, and React Router.

## Project Structure
```
client/
  src/
    components/        # Reusable components
      Layout.jsx       # Main layout with sidebar
      Sidebar.jsx      # Navigation sidebar
      MobileNav.jsx    # Mobile navigation
      Footer.jsx       # Footer component
    pages/             # Page components (separate routes)
      Home.jsx         # Home/Hero page
      About.jsx        # About me page
      Services.jsx     # What I Do page
      Skills.jsx       # Tech stack page
      Projects.jsx     # Featured projects
      Education.jsx    # Education history
      Experience.jsx   # Work experience
      Contact.jsx      # Contact form
    assets/images/     # Portfolio images
    App.jsx            # Router setup
    main.jsx           # React entry point
    index.css          # Tailwind + global styles
  public/              # Static assets
  package.json         # Dependencies
  vite.config.js       # Vite config (port 5000, all hosts)
  tailwind.config.js   # Tailwind config
```

## Tech Stack Displayed
- **Frontend**: HTML, TailwindCSS, JavaScript, React
- **Backend**: PHP & Laravel, Python & Django
- **Databases**: SQLite, MySQL, PostgreSQL, Supabase
- **ML/DL**: TensorFlow, PyTorch, scikit-learn

## Routes
- `/` - Home
- `/about` - About Me
- `/services` - What I Do
- `/skills` - Tech Stack
- `/projects` - Projects
- `/education` - Education
- `/experience` - Experience
- `/contact` - Contact

## Running
```
cd client && npm run dev
```

## Deployment
Static deployment - builds to `client/dist`
