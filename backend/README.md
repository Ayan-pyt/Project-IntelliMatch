# 🔧 IntelliMatch Backend

Express.js backend for the IntelliMatch internship matching platform.

## 📋 Overview

This is the server-side API for IntelliMatch, built with:
- **Node.js** - JavaScript runtime
- **Express.js v5** - Web framework
- **MongoDB + Mongoose** - Database
- **JWT** - Authentication
- **Multer** - File upload handling
- **Affinda API** - Resume/CV parsing

## 📁 Project Structure

```
backend/
├── server.js                        (Express app entry point)
├── package.json                     (Dependencies)
├── .env                             (Environment variables)
│
├── 📁 controllers/                  (Business logic - 11 files)
│   ├── adminController.js           (Admin features)
│   ├── analyticsController.js       (Dashboard analytics)
│   ├── applicationController.js     (Application tracking)
│   ├── authController.js            (Authentication)
│   ├── cvController.js              (CV upload & parsing)
│   ├── feedbackController.js        (Feedback system)
│   ├── internshipController.js      (Internship management)
│   ├── interviewController.js       (Interview scheduling)
│   ├── notificationController.js    (Notifications)
│   ├── skillVerificationController.js (Skill badges)
│   └── studentController.js         (Student profiles)
│
├── 📁 models/                       (Database schemas - 10 files)
│   ├── User.js                      (User accounts)
│   ├── StudentProfile.js            (Student data with skills)
│   ├── Application.js               (Internship applications)
│   ├── Interview.js                 (Interview records)
│   ├── InternshipFeedback.js        (Feedback data)
│   ├── Notification.js              (Notifications)
│   ├── SkillVerification.js         (Skill badges)
│   ├── ActivityLog.js               (Activity tracking)
│   ├── ExternalJobPost.js           (External jobs)
│   └── SystemSetting.js             (System settings)
│
├── 📁 routes/                       (API endpoints)
│   ├── adminRoutes.js
│   ├── analyticsRoutes.js
│   ├── applicationRoutes.js
│   ├── authRoutes.js
│   ├── cvRoutes.js
│   ├── feedbackRoutes.js
│   ├── internshipRoutes.js
│   ├── interviewRoutes.js
│   ├── notificationRoutes.js
│   ├── skillVerificationRoutes.js
│   └── studentRoutes.js
│
├── 📁 middleware/
│   └── auth.js                      (JWT authentication middleware)
│
├── 📁 utils/                        (Services & utilities - 10 files)
│   ├── matchingEngine.js            (AI skill matching algorithm)
│   ├── notificationService.js       (Email & in-app notifications)
│   ├── applicationTimeline.js       (Application status tracking)
│   ├── interviewReportingService.js (Interview analytics)
│   ├── skillBadgeService.js         (Skill badge logic)
│   ├── affindaNlpService.js         (Resume parsing API)
│   ├── documentService.js           (File handling)
│   ├── jobMarketService.js          (Job market data)
│   ├── activityLogger.js            (User activity logging)
│   └── settingsService.js           (System settings)
│
├── 📁 uploads/
│   └── documents/                   (CV/Resume file storage)
│
└── Test files (optional)
    ├── test_affinda.js
    ├── test2_affinda.js
    ├── check_logs.js
    ├── check_users.js
    └── login_test.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js v16+ 
- MongoDB (local or Atlas)
- Affinda API key

### Installation

```bash
# Install dependencies
npm install
```

### Environment Configuration

Create `.env` file with:

```env
# Server
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/intellimatcha
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/intellimatcha

# JWT
JWT_SECRET=your_super_secret_jwt_key_12345
JWT_EXPIRE=7d

# Email (Gmail SMTP for notifications)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_specific_password

# CV Parsing
AFFINDA_API_KEY=your_affinda_api_key_here

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173

# Optional: GitHub Integration
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

## ▶️ Running the Server

### Development Mode (with auto-reload)
```bash
npm run dev
```
Server runs on `http://localhost:5000`

### Production Mode
```bash
npm start
```

## 🔌 API Endpoints

### Authentication
```
POST   /api/auth/register          - Register new user
POST   /api/auth/login             - Login user
POST   /api/auth/logout            - Logout user
GET    /api/auth/me                - Get current user
POST   /api/auth/verify-email      - Verify email
```

### Student Management
```
GET    /api/students/profile       - Get student profile
PUT    /api/students/profile       - Update profile
POST   /api/students/skills        - Add skill
DELETE /api/students/skills/:id    - Remove skill
GET    /api/students/skills        - Get all skills
POST   /api/students/cv            - Upload CV
```

### Internship Management
```
GET    /api/internships            - Get all internships
POST   /api/internships            - Create internship (Company)
GET    /api/internships/:id        - Get internship details
PUT    /api/internships/:id        - Update internship
DELETE /api/internships/:id        - Delete internship
GET    /api/internships/search     - Search internships
```

### Applications
```
POST   /api/applications           - Submit application
GET    /api/applications           - Get user applications
GET    /api/applications/:id       - Get application details
PUT    /api/applications/:id       - Update application status
DELETE /api/applications/:id       - Cancel application
```

### Interviews
```
GET    /api/interviews             - Get interviews
POST   /api/interviews             - Schedule interview
PUT    /api/interviews/:id         - Update interview
POST   /api/interviews/:id/feedback - Submit feedback
DELETE /api/interviews/:id         - Cancel interview
```

### Notifications
```
GET    /api/notifications          - Get user notifications
POST   /api/notifications/:id/read - Mark as read
DELETE /api/notifications/:id      - Delete notification
```

### Analytics
```
GET    /api/analytics/admin        - Admin dashboard data
GET    /api/analytics/company      - Company insights
GET    /api/analytics/student      - Student analytics
```

### Admin
```
GET    /api/admin/users            - Get all users
PUT    /api/admin/users/:id        - Update user
DELETE /api/admin/users/:id        - Delete user
GET    /api/admin/stats            - System statistics
```

## 🗄️ Database Models

### User
```javascript
{
  _id: ObjectId,
  email: String (unique),
  password: String (hashed),
  firstName: String,
  lastName: String,
  phone: String,
  role: String (Student/Company/Admin),
  isVerified: Boolean,
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### StudentProfile
```javascript
{
  _id: ObjectId,
  userId: ObjectId,
  cgpa: Number (0-4),
  bio: String,
  skills: [
    {
      name: String,
      proficiency: String (Beginner/Intermediate/Expert),
      verified: Boolean,
      endorsements: Number
    }
  ],
  certifications: [String],
  projects: [
    {
      title: String,
      description: String,
      url: String
    }
  ],
  githubProfile: String,
  resumeUrl: String,
  createdAt: Date
}
```

### Application
```javascript
{
  _id: ObjectId,
  studentId: ObjectId,
  internshipId: ObjectId,
  status: String (Applied/Under Review/Shortlisted/Interview/Accepted/Rejected),
  matchScore: Number (0-100),
  appliedAt: Date,
  updatedAt: Date
}
```

### Interview
```javascript
{
  _id: ObjectId,
  applicationId: ObjectId,
  interviewDate: Date,
  interviewType: String (Phone/Video/In-Person),
  feedback: String,
  score: Number (0-100),
  status: String (Scheduled/Completed/Cancelled),
  createdAt: Date
}
```

## 🤖 AI Matching Algorithm

Located in `utils/matchingEngine.js`

**Algorithm:**
```
Match Score = (Matched Skills / Required Skills) × 100
Recommendation Score = (Match × 0.75) + (CGPA × 0.25) + Verified Skills Bonus
```

**Features:**
- Compares student skills with internship requirements
- Weights skills by importance
- Considers student CGPA
- Bonus points for verified skills
- Identifies skill gaps
- Recommends learning paths

## 📧 Notification System

Located in `utils/notificationService.js`

**9 Notification Types:**
1. APPLICATION_SUBMITTED
2. STATUS_UPDATED
3. DEADLINE_REMINDER (72 hours before)
4. SHORTLIST_ALERT
5. INTERVIEW_REMINDER (24 hours before)
6. INTERVIEW_INVITE
7. INTERVIEW_STATUS
8. FEEDBACK_RECEIVED
9. SYSTEM

**Delivery Methods:**
- HTML-formatted email via Gmail SMTP
- In-app dashboard notifications

## 📤 File Upload Handling

**CV/Resume Upload:**
- Stored in `uploads/documents/`
- Parsed via Affinda API
- Extracts: skills, education, experience
- Max file size: 10MB

**Supported formats:**
- PDF
- DOCX
- TXT

## 🧪 Testing

Test files provided:
```bash
# Test Affinda API
node test_affinda.js
node test2_affinda.js

# Check system logs
node check_logs.js

# Check users database
node check_users.js
```

## 🐛 Troubleshooting

**MongoDB Connection Error?**
- Ensure MongoDB is running: `mongod`
- Verify connection string in `.env`
- Check credentials for MongoDB Atlas

**Email not sending?**
- Enable "Less secure apps" in Gmail settings
- Use App Password instead of account password
- Verify SMTP credentials in `.env`

**Affinda API Error?**
- Check API key is valid
- Verify API limits not exceeded
- Check file format and size

**JWT Authentication fails?**
- Clear localStorage on frontend
- Check JWT_SECRET is set in `.env`
- Verify token expiration time

## 🔐 Security Features

- ✅ Password hashing with bcryptjs
- ✅ JWT token-based authentication
- ✅ CORS enabled for frontend only
- ✅ Input validation and sanitization
- ✅ Role-based access control
- ✅ Activity logging
- ✅ Email verification

## 📈 Performance Considerations

- Database indexing on frequently queried fields
- Pagination for large datasets
- Caching strategies for analytics
- Efficient matching algorithm

## 🤝 Contributing

1. Create feature branch
2. Follow existing code patterns
3. Add comments for complex logic
4. Test thoroughly
5. Submit Pull Request

## 📄 License

ISC License

---

**For complete project documentation, see** [../README.md](../README.md)
