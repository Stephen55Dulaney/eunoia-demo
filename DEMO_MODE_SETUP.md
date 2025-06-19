# Demo Mode Setup Guide

## Overview
The Eunoia demo now supports a **Demo Mode** that allows visitors to access the portfolio without requiring authentication, while preserving all your user management functionality for production use.

## How to Enable Demo Mode

### Option 1: Environment Variable (Recommended)
Add this to your `.env` file:
```bash
DEMO_MODE=true
```

### Option 2: Command Line
Run the server with demo mode enabled:
```bash
DEMO_MODE=true flask run --port 5050
```

### Option 3: Export Variable
```bash
export DEMO_MODE=true
flask run --port 5050
```

## What Demo Mode Does

### ✅ **Allows Access To:**
- Home page (`/`)
- All case studies (`/case-studies/*`)
- Memory Companion demo (`/memory-companion-demo`)
- Cover Oregon prototype (`/cover-oregon-prototype/`)

### 🔒 **Still Protected (Requires Login):**
- User management (`/users/*`)
- Admin dashboard (`/admin/*`)
- Project management (`/projects/*`)
- Role management (`/roles/*`)
- API endpoints for sensitive operations

### 🎯 **Benefits:**
- **Easy Sharing**: Friends and testers can access your portfolio immediately
- **No Password Hassle**: Visitors can explore your work without registration
- **Preserved Security**: All admin and management features remain protected
- **Toggle On/Off**: Easy to switch between demo and production modes

## Testing Demo Mode

1. **Enable demo mode** using one of the methods above
2. **Start the server**: `flask run --port 5050`
3. **Visit**: `http://localhost:5050`
4. **Test**: You should be able to access all case studies and demos without login

## Production Deployment

For production (Render, Heroku, etc.), simply **don't set** the `DEMO_MODE` environment variable, and the system will require full authentication as before.

## Security Notes

- Demo mode only affects **viewing** routes
- All **management** and **admin** routes remain protected
- User management system is completely preserved
- No data is exposed that shouldn't be public

## Troubleshooting

If demo mode isn't working:
1. Check that `DEMO_MODE=true` is set in your environment
2. Restart the Flask server after setting the variable
3. Clear your browser cache
4. Check the server logs for any errors

## Switching Back to Production

To disable demo mode:
1. Remove `DEMO_MODE=true` from your `.env` file
2. Or set `DEMO_MODE=false`
3. Restart the server

The system will immediately require authentication for all protected routes. 