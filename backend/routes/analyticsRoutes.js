const express = require('express');
const router = express.Router();
const {
  getAdminDashboardAnalytics,
  getCompanyApplicantAnalytics,
  getStudentMatchTrends,
} = require('../controllers/analyticsController');
const { protect, authorizeRoles } = require('../middleware/auth');

router.get('/admin/dashboard', protect, authorizeRoles('university_admin', 'system_admin'), getAdminDashboardAnalytics);
router.get('/company/applicants', protect, authorizeRoles('company'), getCompanyApplicantAnalytics);
router.get('/student/match-trends', protect, authorizeRoles('student'), getStudentMatchTrends);

module.exports = router;
