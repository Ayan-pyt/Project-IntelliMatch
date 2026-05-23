# 🎨 IntelliMatch Frontend

React + Vite frontend for the IntelliMatch internship matching platform.

## 📋 Overview

This is the client-side application for IntelliMatch, built with:
- **React 19** - UI framework
- **Vite 8** - Build tool with fast HMR
- **Tailwind CSS 4** - Styling
- **React Router 7** - Routing
- **Axios** - API client

## 📁 Project Structure

```
src/
├── pages/                    # 14 Page components
│   ├── AdminDashboard.jsx       (Admin analytics & monitoring)
│   ├── CompanyDashboard.jsx     (Company post & manage internships)
│   ├── CompanyInsights.jsx      (Company analytics)
│   ├── InternshipSearch.jsx     (Search & filter internships)
│   ├── InterviewCenter.jsx      (Interview management)
│   ├── InterviewReports.jsx     (Interview feedback & reports)
│   ├── InterviewTimeline.jsx    (Interview timeline view)
│   ├── LoginPage.jsx            (User login)
│   ├── MyApplications.jsx       (Track applications)
│   ├── NotificationsPage.jsx    (View notifications)
│   ├── RegisterPage.jsx         (User registration)
│   ├── StudentDashboard.jsx     (Student profile & skills)
│   ├── StudentFeedbackPortal.jsx (Submit feedback)
│   └── StudentInsights.jsx      (Student analytics)
│
├── components/              # Reusable components
│   └── Sidebar.jsx          (Navigation sidebar)
│
├── context/                 # State management
│   └── AuthContext.jsx      (Authentication state)
│
├── utils/                   # Utility functions
│   └── (API helpers, formatters, etc.)
│
├── styles/                  # Component styles
├── assets/                  # Images & static files
│
├── App.jsx                  (Main app component)
├── main.jsx                 (Entry point)
└── index.css                (Global styles)
```

## 🚀 Getting Started

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Visit http://localhost:5173

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Lint Code
```bash
npm run lint
```

## ⚙️ Configuration

Create `.env` file:
```env
VITE_API_URL=http://localhost:5000
VITE_APP_NAME=IntelliMatch
```

## 🔌 API Connection

The frontend connects to the backend API at:
- **Development**: http://localhost:5000
- **Production**: (Set in .env)

All API calls go through Axios configured in `src/utils/`

## 🎨 Styling

- **Tailwind CSS** - Utility-first CSS framework
- **Global styles** - `src/index.css`
- **Component styles** - `src/styles/` folder

## 📦 Dependencies

- **react** v19.2.4
- **react-dom** v19.2.4
- **react-router-dom** v7.14.0
- **axios** v1.14.0
- **tailwindcss** v4.2.2
- **vite** v8.0.4

## 🧪 Development Tips

- Use React DevTools extension for debugging
- Hot Module Replacement (HMR) enabled by default
- ESLint configured for code quality
- Check `.eslintrc.config.js` for linting rules

## 📚 Key Pages Overview

| Page | Purpose | Users |
|------|---------|-------|
| StudentDashboard | Profile, skills, CV upload | Students |
| InternshipSearch | Search & filter internships | Students |
| MyApplications | Track application status | Students |
| StudentFeedbackPortal | Submit company feedback | Students |
| StudentInsights | Application trends & analytics | Students |
| CompanyDashboard | Post internships, manage apps | Companies |
| CompanyInsights | Applicant analytics | Companies |
| InterviewCenter | Manage interviews | Companies/Students |
| InterviewReports | Interview feedback & results | Companies |
| AdminDashboard | Platform analytics | Admins |
| LoginPage | User authentication | All users |
| RegisterPage | New user signup | New users |
| NotificationsPage | View all notifications | All users |

## 🔐 Authentication

- JWT tokens stored in localStorage
- AuthContext manages user state globally
- Protected routes require authentication
- Role-based page access (Student/Company/Admin)

## 🐛 Troubleshooting

**Blank page on load?**
- Check browser console for errors
- Verify `VITE_API_URL` in .env
- Ensure backend is running

**API requests failing?**
- Check backend is running on correct port
- Verify CORS settings in backend
- Check network tab in browser DevTools

**Styling issues?**
- Run `npm install` again
- Clear browser cache
- Rebuild with `npm run build`

## 🤝 Contributing

1. Create feature branch from `main`
2. Make changes and test
3. Submit Pull Request
4. Follow code style (use ESLint)

## 📄 License

ISC License

---

**For complete project documentation, see** [../README.md](../README.md)
