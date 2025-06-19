# Eunoia-Demo Regression Test Plan

## Overview
This comprehensive regression test plan ensures all features of the Eunoia-Demo application work correctly before each release. The plan covers authentication, user management, AI agents, case studies, and demo functionality.

## Test Environment Setup

### Prerequisites
- Python 3.13+
- Virtual environment activated
- All dependencies installed: `pip install -r requirements.txt`
- Database initialized: `flask db upgrade`
- Environment variables configured (see `.env.example`)
- Demo mode configuration tested

### Test Data Setup
```bash
# Create test admin user
python backend/create_admin.py

# Initialize database with default roles and permissions
flask shell
>>> from backend.app import init_db
>>> init_db()
>>> exit()
```

## 1. Authentication & Authorization Testing

### 1.1 Login/Logout Functionality
**Test Cases:**
- [ ] **TC-AUTH-001**: Valid user login with correct credentials
- [ ] **TC-AUTH-002**: Invalid login with wrong password
- [ ] **TC-AUTH-003**: Invalid login with non-existent email
- [ ] **TC-AUTH-004**: Login with empty credentials
- [ ] **TC-AUTH-005**: Logout functionality
- [ ] **TC-AUTH-006**: Session persistence after browser refresh
- [ ] **TC-AUTH-007**: Session timeout handling

**Test Steps:**
1. Navigate to `/login`
2. Test various credential combinations
3. Verify redirect behavior
4. Check session management
5. Test logout and session cleanup

### 1.2 Registration Functionality
**Test Cases:**
- [ ] **TC-REG-001**: New user registration with valid data
- [ ] **TC-REG-002**: Registration with existing email
- [ ] **TC-REG-003**: Registration with invalid email format
- [ ] **TC-REG-004**: Registration with weak password
- [ ] **TC-REG-005**: Registration with missing required fields
- [ ] **TC-REG-006**: Password confirmation mismatch

### 1.3 Demo Mode Testing
**Test Cases:**
- [ ] **TC-DEMO-001**: Demo mode enabled - access without login
- [ ] **TC-DEMO-002**: Demo mode disabled - login required
- [ ] **TC-DEMO-003**: Demo mode toggle functionality
- [ ] **TC-DEMO-004**: Protected routes still require auth in demo mode
- [ ] **TC-DEMO-005**: Environment variable configuration

**Test Steps:**
```bash
# Test demo mode enabled
export DEMO_MODE=true
flask run --port 5050

# Test demo mode disabled
export DEMO_MODE=false
flask run --port 5050
```

## 2. User Management Testing

### 2.1 User CRUD Operations
**Test Cases:**
- [ ] **TC-USER-001**: Create new user via admin interface
- [ ] **TC-USER-002**: Edit existing user information
- [ ] **TC-USER-003**: Delete user account
- [ ] **TC-USER-004**: View user list with pagination
- [ ] **TC-USER-005**: Search and filter users
- [ ] **TC-USER-006**: User profile updates
- [ ] **TC-USER-007**: User activation/deactivation

### 2.2 Role Management
**Test Cases:**
- [ ] **TC-ROLE-001**: Create new role
- [ ] **TC-ROLE-002**: Edit role permissions
- [ ] **TC-ROLE-003**: Delete role (with user dependency check)
- [ ] **TC-ROLE-004**: Assign roles to users
- [ ] **TC-ROLE-005**: Remove roles from users
- [ ] **TC-ROLE-006**: Role-based access control

### 2.3 Permission Management
**Test Cases:**
- [ ] **TC-PERM-001**: Create new permission
- [ ] **TC-PERM-002**: Edit permission details
- [ ] **TC-PERM-003**: Delete permission
- [ ] **TC-PERM-004**: Assign permissions to roles
- [ ] **TC-PERM-005**: Permission inheritance

## 3. Project Management Testing

### 3.1 Project CRUD Operations
**Test Cases:**
- [ ] **TC-PROJ-001**: Create new project
- [ ] **TC-PROJ-002**: Edit project details
- [ ] **TC-PROJ-003**: Delete project
- [ ] **TC-PROJ-004**: View project list
- [ ] **TC-PROJ-005**: Project search and filtering
- [ ] **TC-PROJ-006**: Project status management

### 3.2 Project Member Management
**Test Cases:**
- [ ] **TC-PMEM-001**: Add user to project
- [ ] **TC-PMEM-002**: Remove user from project
- [ ] **TC-PMEM-003**: Change user role in project
- [ ] **TC-PMEM-004**: Project member permissions
- [ ] **TC-PMEM-005**: Bulk member operations

## 4. Case Studies Testing

### 4.1 Case Study Pages
**Test Cases:**
- [ ] **TC-CASE-001**: AI Interview Assistant page loads correctly
- [ ] **TC-CASE-002**: User Authentication case study displays
- [ ] **TC-CASE-003**: Amazon Leave Portal case study displays
- [ ] **TC-CASE-004**: Cover Oregon case study displays
- [ ] **TC-CASE-005**: Eunoia Research Council case study displays
- [ ] **TC-CASE-006**: Eunoia Memory Companion case study displays

### 4.2 Case Study Content
**Test Cases:**
- [ ] **TC-CONT-001**: All images load correctly
- [ ] **TC-CONT-002**: Navigation between sections works
- [ ] **TC-CONT-003**: Interactive elements function
- [ ] **TC-CONT-004**: Responsive design on different screen sizes
- [ ] **TC-CONT-005**: External links work correctly

### 4.3 Cover Oregon Prototype
**Test Cases:**
- [ ] **TC-CO-001**: Prototype loads without errors
- [ ] **TC-CO-002**: All prototype pages accessible
- [ ] **TC-CO-003**: Form submissions work
- [ ] **TC-CO-004**: Navigation within prototype
- [ ] **TC-CO-005**: Static assets load correctly

## 5. AI Agents Testing

### 5.1 Memory Companion Agent
**Test Cases:**
- [ ] **TC-MC-001**: Memory Companion demo loads
- [ ] **TC-MC-002**: Chat functionality works
- [ ] **TC-MC-003**: Memory persistence across sessions
- [ ] **TC-MC-004**: Timeline creation and management
- [ ] **TC-MC-005**: Timeline entry deletion
- [ ] **TC-MC-006**: Project data loading
- [ ] **TC-MC-007**: API endpoints respond correctly
- [ ] **TC-MC-008**: Error handling for API failures
- [ ] **TC-MC-009**: Memory cleanup functionality
- [ ] **TC-MC-010**: Timeline synchronization

**API Endpoints to Test:**
- `GET /api/memory_companion/project_data`
- `POST /api/memory_companion/chat`
- `DELETE /api/memory_companion/timeline/<id>`

### 5.2 Research Council Prompt Manager
**Test Cases:**
- [ ] **TC-RC-001**: Prompt manager interface loads
- [ ] **TC-RC-002**: Prompt creation functionality
- [ ] **TC-RC-003**: Prompt editing and saving
- [ ] **TC-RC-004**: Prompt deletion
- [ ] **TC-RC-005**: Prompt validation
- [ ] **TC-RC-006**: YAML file parsing
- [ ] **TC-RC-007**: Character testing functionality

### 5.3 Multi-Agent Orchestration
**Test Cases:**
- [ ] **TC-MAO-001**: Agent orchestration initialization
- [ ] **TC-MAO-002**: Inter-agent communication
- [ ] **TC-MAO-003**: Agent state management
- [ ] **TC-MAO-004**: Error handling in orchestration

## 6. Interview System Testing

### 6.1 Interview Sessions
**Test Cases:**
- [ ] **TC-INT-001**: Start new interview session
- [ ] **TC-INT-002**: Send messages during interview
- [ ] **TC-INT-003**: End interview session
- [ ] **TC-INT-004**: Session history persistence
- [ ] **TC-INT-005**: Session status management
- [ ] **TC-INT-006**: Multiple concurrent sessions

## 7. Messaging System Testing

### 7.1 Demo Messaging
**Test Cases:**
- [ ] **TC-MSG-001**: Send demo message
- [ ] **TC-MSG-002**: View inbox
- [ ] **TC-MSG-003**: Message persistence
- [ ] **TC-MSG-004**: Message formatting

## 8. Database Testing

### 8.1 Database Operations
**Test Cases:**
- [ ] **TC-DB-001**: Database connection
- [ ] **TC-DB-002**: User table operations
- [ ] **TC-DB-003**: Role table operations
- [ ] **TC-DB-004**: Permission table operations
- [ ] **TC-DB-005**: Project table operations
- [ ] **TC-DB-006**: Interview session table operations
- [ ] **TC-DB-007**: Activity log table operations
- [ ] **TC-DB-008**: Database migrations
- [ ] **TC-DB-009**: Data integrity constraints

### 8.2 Database Relationships
**Test Cases:**
- [ ] **TC-REL-001**: User-Role relationships
- [ ] **TC-REL-002**: Role-Permission relationships
- [ ] **TC-REL-003**: User-Project relationships
- [ ] **TC-REL-004**: User-Interview relationships
- [ ] **TC-REL-005**: Cascade delete operations

## 9. API Testing

### 9.1 REST API Endpoints
**Test Cases:**
- [ ] **TC-API-001**: GET /api/users
- [ ] **TC-API-002**: POST /api/users
- [ ] **TC-API-003**: PUT /api/users/<id>
- [ ] **TC-API-004**: DELETE /api/users/<id>
- [ ] **TC-API-005**: GET /api/projects
- [ ] **TC-API-006**: POST /api/projects
- [ ] **TC-API-007**: PUT /api/projects/<id>
- [ ] **TC-API-008**: DELETE /api/projects/<id>
- [ ] **TC-API-009**: GET /api/projects/<id>/members
- [ ] **TC-API-010**: POST /api/projects/<id>/members
- [ ] **TC-API-011**: DELETE /api/projects/<id>/members

### 9.2 API Authentication
**Test Cases:**
- [ ] **TC-APIAUTH-001**: API access with valid session
- [ ] **TC-APIAUTH-002**: API access without authentication
- [ ] **TC-APIAUTH-003**: API access with expired session
- [ ] **TC-APIAUTH-004**: Role-based API access control

## 10. Security Testing

### 10.1 Authentication Security
**Test Cases:**
- [ ] **TC-SEC-001**: Password hashing verification
- [ ] **TC-SEC-002**: Session security
- [ ] **TC-SEC-003**: CSRF protection
- [ ] **TC-SEC-004**: SQL injection prevention
- [ ] **TC-SEC-005**: XSS prevention
- [ ] **TC-SEC-006**: Input validation
- [ ] **TC-SEC-007**: Rate limiting (if implemented)

### 10.2 Authorization Security
**Test Cases:**
- [ ] **TC-SECAUTH-001**: Role-based access control
- [ ] **TC-SECAUTH-002**: Permission-based access control
- [ ] **TC-SECAUTH-003**: Resource ownership verification
- [ ] **TC-SECAUTH-004**: Privilege escalation prevention

## 11. Performance Testing

### 11.1 Load Testing
**Test Cases:**
- [ ] **TC-PERF-001**: Concurrent user login
- [ ] **TC-PERF-002**: Database query performance
- [ ] **TC-PERF-003**: Memory usage monitoring
- [ ] **TC-PERF-004**: Response time under load
- [ ] **TC-PERF-005**: Static asset loading performance

### 11.2 Memory Management
**Test Cases:**
- [ ] **TC-MEM-001**: Memory leak detection
- [ ] **TC-MEM-002**: Database connection pooling
- [ ] **TC-MEM-003**: Session cleanup
- [ ] **TC-MEM-004**: Cache management

## 12. Error Handling Testing

### 12.1 Application Errors
**Test Cases:**
- [ ] **TC-ERR-001**: 404 error handling
- [ ] **TC-ERR-002**: 500 error handling
- [ ] **TC-ERR-003**: Database connection errors
- [ ] **TC-ERR-004**: API timeout handling
- [ ] **TC-ERR-005**: Invalid input handling
- [ ] **TC-ERR-006**: File upload errors

### 12.2 User Experience
**Test Cases:**
- [ ] **TC-UX-001**: Error message clarity
- [ ] **TC-UX-002**: User-friendly error pages
- [ ] **TC-UX-003**: Form validation feedback
- [ ] **TC-UX-004**: Loading states
- [ ] **TC-UX-005**: Success confirmations

## 13. Browser Compatibility Testing

### 13.1 Cross-Browser Testing
**Test Cases:**
- [ ] **TC-BROWSER-001**: Chrome compatibility
- [ ] **TC-BROWSER-002**: Firefox compatibility
- [ ] **TC-BROWSER-003**: Safari compatibility
- [ ] **TC-BROWSER-004**: Edge compatibility
- [ ] **TC-BROWSER-005**: Mobile browser compatibility

### 13.2 Responsive Design
**Test Cases:**
- [ ] **TC-RESP-001**: Desktop layout (1920x1080)
- [ ] **TC-RESP-002**: Tablet layout (768x1024)
- [ ] **TC-RESP-003**: Mobile layout (375x667)
- [ ] **TC-RESP-004**: Navigation menu responsiveness
- [ ] **TC-RESP-005**: Form layout responsiveness

## 14. Integration Testing

### 14.1 External Services
**Test Cases:**
- [ ] **TC-INTEG-001**: OpenAI API integration
- [ ] **TC-INTEG-002**: Email service integration (if applicable)
- [ ] **TC-INTEG-003**: Database service integration
- [ ] **TC-INTEG-004**: File storage integration

### 14.2 Component Integration
**Test Cases:**
- [ ] **TC-COMP-001**: User management ↔ Role management
- [ ] **TC-COMP-002**: Project management ↔ User management
- [ ] **TC-COMP-003**: AI agents ↔ Database
- [ ] **TC-COMP-004**: Frontend ↔ Backend API
- [ ] **TC-COMP-005**: Authentication ↔ Authorization

## 15. Deployment Testing

### 15.1 Environment Configuration
**Test Cases:**
- [ ] **TC-DEPLOY-001**: Environment variable loading
- [ ] **TC-DEPLOY-002**: Database URL configuration
- [ ] **TC-DEPLOY-003**: Secret key configuration
- [ ] **TC-DEPLOY-004**: Demo mode configuration
- [ ] **TC-DEPLOY-005**: Production vs development settings

### 15.2 Deployment Process
**Test Cases:**
- [ ] **TC-DEPLOY-006**: Database migration execution
- [ ] **TC-DEPLOY-007**: Static asset serving
- [ ] **TC-DEPLOY-008**: Log file generation
- [ ] **TC-DEPLOY-009**: Health check endpoints

## Test Execution Checklist

### Pre-Release Testing
- [ ] **Run all test cases** in the order specified
- [ ] **Document any failures** with screenshots and logs
- [ ] **Verify fixes** for any issues found
- [ ] **Re-run failed tests** after fixes
- [ ] **Performance baseline** measurement
- [ ] **Security scan** completion

### Automated Testing Setup
```bash
# Create test script
#!/bin/bash
echo "Starting Eunoia-Demo Regression Tests..."

# Environment setup
export FLASK_ENV=testing
export DEMO_MODE=false

# Database setup
flask db upgrade

# Run tests (when automated tests are implemented)
# python -m pytest tests/ -v

echo "Regression tests completed."
```

### Manual Testing Checklist
- [ ] **Smoke Test**: Basic functionality verification
- [ ] **Integration Test**: Component interaction verification
- [ ] **User Acceptance Test**: End-user scenario verification
- [ ] **Performance Test**: Load and stress testing
- [ ] **Security Test**: Vulnerability assessment

## Test Data Management

### Test Data Requirements
- [ ] **Test users** with various roles and permissions
- [ ] **Test projects** with different states
- [ ] **Test interview sessions** with conversation history
- [ ] **Test memory companion data** with timeline entries
- [ ] **Test prompt configurations** for research council

### Data Cleanup
- [ ] **Reset test data** after each test run
- [ ] **Clean up temporary files** and uploads
- [ ] **Reset database** to known state
- [ ] **Clear caches** and sessions

## Reporting and Documentation

### Test Results Template
```
Test Run: [Date/Time]
Environment: [Development/Staging/Production]
Tester: [Name]

Summary:
- Total Tests: [Number]
- Passed: [Number]
- Failed: [Number]
- Skipped: [Number]

Critical Issues:
- [List any blocking issues]

Recommendations:
- [List any recommendations for release]

Sign-off:
- [ ] Ready for release
- [ ] Requires fixes before release
- [ ] Additional testing needed
```

### Release Criteria
- [ ] **All critical tests pass**
- [ ] **No high-severity bugs**
- [ ] **Performance meets baseline**
- [ ] **Security scan passes**
- [ ] **Documentation updated**
- [ ] **Deployment tested**

## Maintenance

### Regular Updates
- [ ] **Update test cases** when new features are added
- [ ] **Review test coverage** monthly
- [ ] **Update test data** as needed
- [ ] **Optimize test execution** time
- [ ] **Add automated tests** for repetitive scenarios

### Version Control
- [ ] **Track test plan changes** in version control
- [ ] **Tag test plans** with application versions
- [ ] **Maintain test history** for regression analysis
- [ ] **Archive old test plans** for reference

---

**Last Updated**: [Date]
**Version**: 1.0
**Next Review**: [Date] 