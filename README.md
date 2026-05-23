# 🎓 IntelliMatch: AI-Based Internship & Skill Gap Analysis System

> A comprehensive web-based platform that bridges the gap between university students and organizations offering internships through intelligent skill matching, interview management, and career analytics.

**Status**: ✅ Production Ready  
**Repository**: https://github.com/Ayan-pyt/Project-IntelliMatch  
**Last Updated**: May 2026

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Quick Start](#-quick-start)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Running the Application](#-running-the-application)
- [API Documentation](#-api-documentation)
- [Database Models](#-database-models)
- [Contributing](#-contributing)

---

## 🎯 Overview

**IntelliMatch** is an AI-powered internship matching platform designed to solve a critical problem: **The gap between student skills and industry requirements.**

### The Problem
- 👨‍🎓 Students struggle to find internships aligned with their skills
- 🏢 Companies receive thousands of unqualified applications
- 💡 Students don't know what skills to learn to be competitive
- 📊 No data-driven insights into skill demand

### The Solution
IntelliMatch uses **AI algorithms** to:
1. ✅ **Match students with internships** based on skill alignment
2. ✅ **Identify skill gaps** and recommend learning paths
3. ✅ **Manage interviews** from invitation to feedback
4. ✅ **Provide analytics** on placement rates and hiring trends
5. ✅ **Build profiles** with GitHub integration and skill verification

### Who Uses It?
- **Students** - Find internships, build skills, track applications
- **Companies** - Post opportunities, find qualified candidates, manage interviews
- **Administrators** - Monitor platform metrics, approve entities, manage settings

---

## 🎯 Key Features

### 1. **User Authentication & Role Management** ✅
- Multi-role registration (Student, Company, Admin)
- JWT-based secure authentication
- Email verification and account activation
- Fraud detection mechanisms

**Files**: `backend/controllers/authController.js`, `backend/models/User.js`

---

### 2. **Student Profile & Skills Management** ✅
- Complete profile with CGPA tracking (0-4 scale)
- Technical skills with proficiency levels
- **GitHub Integration** - Auto-import languages & projects
- Skill endorsements and verification badges
- CV/Resume upload with AI parsing

**Files**: `backend/controllers/studentController.js`, `frontend/pages/StudentDashboard.jsx`

---

### 3. **AI-Powered Skill Matching Engine** ✅

**How It Works:**
```
Match Score = (Matched Skills / Required Skills) × 100
Recommendation Score = (Match × 0.75) + (CGPA × 0.25) + Verified Skills Bonus
```

**Features:**
- Intelligent student-to-internship matching
- Skill gap identification
- Personalized learning recommendations
- 15+ skill-based learning paths

**Files**: `backend/utils/matchingEngine.js`

---

### 4. **Internship Search & Discovery** ✅
- Advanced filtering (skills, location, type, salary)
- Full-text search across postings
- AI-based recommendations
- Real-time availability tracking

**Files**: `backend/controllers/internshipController.js`, `frontend/pages/InternshipSearch.jsx`

---

### 5. **Application Tracking System** ✅
- Submit applications with automatic skill matching
- Track status: Applied → Under Review → Shortlisted → Interview → Accepted/Rejected
- Timeline visualization
- Application history and filtering

**Files**: `backend/controllers/applicationController.js`, `frontend/pages/MyApplications.jsx`

---

### 6. **Interview Management** ✅
- Schedule interviews with calendar integration
- Interview timeline tracking
- Send invitations and confirmations
- Track interview results and feedback
- Feedback collection from interviewers

**Files**: `backend/controllers/interviewController.js`, `frontend/pages/InterviewCenter.jsx`

---

### 7. **Multi-Channel Notification System** ✅

**9 Notification Types:**
- APPLICATION_SUBMITTED
- STATUS_UPDATED
- DEADLINE_REMINDER (72 hours before)
- SHORTLIST_ALERT
- INTERVIEW_REMINDER (24 hours before)
- INTERVIEW_INVITE
- INTERVIEW_STATUS
- FEEDBACK_RECEIVED
- SYSTEM announcements

**Delivery Methods:**
- 📧 HTML-formatted emails
- 🔔 In-app dashboard notifications
- Real-time delivery

**Files**: `backend/controllers/notificationController.js`, `backend/utils/notificationService.js`

---

### 8. **Comprehensive Analytics & Dashboards** ✅

**Admin Dashboard:**
- Total internships, applications, placements
- Department-wise performance
- Top skills in demand
- Skill gap analysis
- Hiring trends

**Company Analytics:**
- Applicant pool quality
- Average match scores
- Application status breakdown
- Top candidates ranking

**Student Analytics:**
- Application history and status
- Match trends over time
- Skill coverage analysis
- Learning recommendations

**Files**: `backend/controllers/analyticsController.js`

---

### 9. **Skill Verification & Badges** ✅

**3-Tier Badge System:**
- 🥇 **Gold** - Verified & endorsed by multiple companies
- 🥈 **Silver** - Company-verified skills
- 🥉 **Bronze** - Self-verified skills

**Features:**
- Admin approval workflow
- Company endorsements
- Public profile display

**Files**: `backend/controllers/skillVerificationController.js`

---

### 10. **Feedback System** ✅
- Students rate companies (quality, culture, learning)
- Companies rate students (performance, communication)
- Detailed feedback comments
- Rating analytics
- Anonymous feedback options

**Files**: `backend/controllers/feedbackController.js`, `frontend/pages/StudentFeedbackPortal.jsx`

---

### 11. **Interview Feedback & Reports** ✅
- Detailed interviewer feedback
- Scoring and evaluation
- Candidate ranking based on performance
- Interview analytics and trends

**Files**: `backend/utils/interviewReportingService.js`, `frontend/pages/InterviewReports.jsx`

---

### 12. **Admin Management & Oversight** ✅
- User account management
- Company approval workflow
- System settings configuration
- Activity logging and monitoring
- Platform monitoring dashboard

**Files**: `backend/controllers/adminController.js`

---

## 🛠 Tech Stack

### **Backend**
- **Runtime**: Node.js v16+
- **Framework**: Express.js v5.2.1
- **Database**: MongoDB with Mongoose v9.4.1
- **Authentication**: JWT (jsonwebtoken v9.0.3)
- **Security**: Bcrypt.js v3.0.3
- **File Upload**: Multer v2.1.1
- **CV Parsing**: Affinda API v7.7.1
- **Dev Tools**: Nodemon

### **Frontend**
- **Framework**: React v19.2.4
- **Build Tool**: Vite v8.0.4
- **Styling**: Tailwind CSS v4.2.2
- **Routing**: React Router DOM v7.14.0
- **HTTP Client**: Axios v1.14.0
- **Linting**: ESLint v9.39.4

### **External Services**
- MongoDB (Database)
- Affinda API (Resume parsing)
- Gmail SMTP (Email notifications)

---

## 📁 Project Structure

```
INTELLIMATCHA/
│
├── 📁 backend/
│   ├── server.js                          (Express entry point)
│   ├── package.json                       (Dependencies)
│   ├── .env                               (Environment variables)
│   │
│   ├── 📁 controllers/                    (Business logic)
│   │   ├── adminController.js
│   │   ├── analyticsController.js
│   │   ├── applicationController.js
│   │   ├── authController.js
│   │   ├── cvController.js
│   │   ├── feedbackController.js
│   │   ├── internshipController.js
│   │   ├── interviewController.js
│   │   ├── notificationController.js
│   │   ├── skillVerificationController.js
│   │   └── studentController.js
│   │
│   ├── 📁 models/                        (Database schemas)
│   │   ├── User.js
│   │   ├── StudentProfile.js
│   │   ├── Application.js
│   │   ├── Interview.js
│   │   ├── InternshipFeedback.js
│   │   ├── Notification.js
│   │   ├── SkillVerification.js
│   │   ├── ActivityLog.js
│   │   ├── ExternalJobPost.js
│   │   └── SystemSetting.js
│   │
│   ├── 📁 routes/                        (API endpoints)
│   │   ├── adminRoutes.js
│   │   ├── analyticsRoutes.js
│   │   ├── applicationRoutes.js
│   │   ├── authRoutes.js
│   │   ├── cvRoutes.js
│   │   ├── feedbackRoutes.js
│   │   ├── internshipRoutes.js
│   │   ├── interviewRoutes.js
│   │   ├── notificationRoutes.js
│   │   ├── skillVerificationRoutes.js
│   │   └── studentRoutes.js
│   │
│   ├── 📁 middleware/
│   │   └── auth.js                       (JWT authentication)
│   │
│   ├── 📁 utils/                         (Services)
│   │   ├── matchingEngine.js             (AI algorithm)
│   │   ├── notificationService.js        (Email & notifications)
│   │   ├── applicationTimeline.js        (Status tracking)
│   │   ├── interviewReportingService.js  (Analytics)
│   │   ├── skillBadgeService.js          (Badge logic)
│   │   ├── affindaNlpService.js          (Resume parsing)
│   │   ├── documentService.js            (File handling)
│   │   ├── jobMarketService.js           (Job data)
│   │   ├── activityLogger.js             (Activity logging)
│   │   └── settingsService.js            (Settings)
│   │
│   └── 📁 uploads/
│       └── documents/                    (CV storage)
│
├── 📁 frontend/
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   │
│   └── 📁 src/
│       ├── main.jsx
│       ├── App.jsx
│       │
│       ├── 📁 pages/                     (Page components)
│       │   ├── AdminDashboard.jsx
│       │   ├── CompanyDashboard.jsx
│       │   ├── CompanyInsights.jsx
│       │   ├── InternshipSearch.jsx
│       │   ├── InterviewCenter.jsx
│       │   ├── InterviewReports.jsx
│       │   ├── InterviewTimeline.jsx
│       │   ├── LoginPage.jsx
│       │   ├── MyApplications.jsx
│       │   ├── NotificationsPage.jsx
│       │   ├── RegisterPage.jsx
│       │   ├── StudentDashboard.jsx
│       │   ├── StudentFeedbackPortal.jsx
│       │   └── StudentInsights.jsx
│       │
│       ├── 📁 components/
│       │   └── Sidebar.jsx
│       │
│       ├── 📁 context/
│       │   └── AuthContext.jsx
│       │
│       ├── 📁 utils/
│       ├── 📁 styles/
│       └── 📁 assets/
│
└── 📄 README.md                           (This file)
```

---

## 🚀 Quick Start

### Requirements
- Node.js v16+
- npm or yarn
- MongoDB (local or Atlas)
- Affinda API key (for CV parsing)
- Git

### Installation (3 Steps)

```bash
# 1. Clone repository
git clone https://github.com/Ayan-pyt/Project-IntelliMatch
cd INTELLIMATCHA

# 2. Install backend dependencies
cd backend
npm install

# 3. Install frontend dependencies
cd ../frontend
npm install
```

---

## ⚙️ Configuration

### Backend Setup

Create `.env` file in `backend/`:

```env
# Server
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/intellimatcha
# OR MongoDB Atlas:
# MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/intellimatcha

# JWT
JWT_SECRET=your_secret_key_here
JWT_EXPIRE=7d

# Email Notifications
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# CV Parsing
AFFINDA_API_KEY=your_affinda_api_key

# Frontend
FRONTEND_URL=http://localhost:5173
```

### Frontend Setup

Create `.env` file in `frontend/`:

```env
VITE_API_URL=http://localhost:5000
VITE_APP_NAME=IntelliMatch
```

---

## ▶️ Running the Application

### 1. Start MongoDB
```bash
# If using local MongoDB
mongod

# If using MongoDB Atlas, ensure connection string is in backend/.env
```

### 2. Start Backend Server
```bash
cd backend
npm run dev
# Server runs on http://localhost:5000
```

### 3. Start Frontend (New Terminal)
```bash
cd frontend
npm run dev
# Frontend runs on http://localhost:5173
```

### 4. Open in Browser
```
http://localhost:5173
```

---

## 🔌 API Documentation

### Authentication
```
POST   /api/auth/register          - User registration
POST   /api/auth/login             - User login
POST   /api/auth/logout            - User logout
GET    /api/auth/me                - Current user info
```

### Student Profile
```
GET    /api/students/profile       - Get profile
PUT    /api/students/profile       - Update profile
GET    /api/students/skills        - Get skills
POST   /api/students/skills        - Add skill
DELETE /api/students/skills/:id    - Remove skill
```

### Internships
```
GET    /api/internships            - Get all internships
POST   /api/internships            - Create internship (Company)
GET    /api/internships/:id        - Get details
PUT    /api/internships/:id        - Update internship
DELETE /api/internships/:id        - Delete internship
```

### Applications
```
POST   /api/applications           - Submit application
GET    /api/applications           - Get applications
PUT    /api/applications/:id       - Update status
```

### Interviews
```
GET    /api/interviews             - Get interviews
POST   /api/interviews             - Schedule interview
PUT    /api/interviews/:id         - Update interview
POST   /api/interviews/:id/feedback - Submit feedback
```

### Analytics
```
GET    /api/analytics/admin        - Admin dashboard
GET    /api/analytics/company      - Company insights
GET    /api/analytics/student      - Student insights
```

---

## 🗄️ Database Models

### User
```javascript
{
  _id, email, password, role (Student/Company/Admin),
  firstName, lastName, phone, isVerified, createdAt
}
```

### StudentProfile
```javascript
{
  userId, cgpa (0-4), bio, skills [],
  certifications, projects, githubProfile,
  resumeUrl, verifiedSkills, createdAt
}
```

### Application
```javascript
{
  studentId, internshipId, status,
  matchScore, applicationDate, updatedAt
}
```

### Interview
```javascript
{
  applicationId, interviewDate, interviewType,
  feedback, score, status, createdAt
}
```

---

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/YourFeature`
2. Commit changes: `git commit -m 'Add YourFeature'`
3. Push: `git push origin feature/YourFeature`
4. Open Pull Request

---

## 📧 Support

For issues and questions, open an issue on GitHub.

---

## 📄 License

ISC License

---

## 👥 Team

**Project**: CSE-471 Internship Matching System  
**Institution**: University  
**Status**: ✅ Complete and Production Ready

---

## 🔗 Quick Links

- **GitHub Repository**: https://github.com/Ayan-pyt/Project-IntelliMatch
- **AI Matching Algorithm**: [backend/utils/matchingEngine.js](backend/utils/matchingEngine.js)
- **Database Models**: [backend/models/](backend/models/)
- **API Routes**: [backend/routes/](backend/routes/)
- **Frontend Pages**: [frontend/src/pages/](frontend/src/pages/)
