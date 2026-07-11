# Orange Global Infotech Backend

This is a complete, production-ready NestJS backend for the **Orange Global Infotech** website. It provides a robust, typed API that connects to a Supabase PostgreSQL database using the Prisma ORM. It serves both the public-facing website and the private Admin Dashboard.

## 🚀 Tech Stack
- **Framework**: NestJS (Node.js)
- **Language**: TypeScript
- **Database**: PostgreSQL (Hosted on Supabase)
- **ORM**: Prisma
- **Validation**: class-validator & class-transformer
- **Authentication**: JWT (PIN-based login for Admin)
- **Emails**: Resend SDK (previously Nodemailer)
- **API Documentation**: Swagger OpenAPI

## ✨ Core Features
- **Dynamic Content Delivery**: Manage Hero, About, and Footer sections dynamically.
- **Service & Project Management**: Full CRUD operations for portfolio projects and business services, integrating directly with Supabase Storage for multi-device image uploads.
- **Contact Inquiry System**: Captures user inquiries from the website, stores them in the DB, and emails notifications to admins using Resend. Admins can also reply to inquiries directly from the dashboard.
- **Careers Portal**: API endpoints for managing open positions.
- **Admin Authentication**: Secure JWT-based PIN authentication to protect sensitive management routes.
- **Global Error Handling**: Built-in exception filters to ensure standard RESTful error responses.

## 📁 File Structure
```
src/
├── admin/            # Admin authentication and dashboard metrics logic
├── auth/             # JWT auth guards, decorators, and strategies
├── careers/          # Careers and job posting endpoints
├── common/           # Shared modules, filters (HTTP exceptions), and interceptors
├── contact/          # Inquiries handling and email replying logic
├── mail/             # Email services utilizing Resend SDK
├── prisma/           # Prisma client integration service
├── projects/         # Portfolio projects CRUD endpoints
├── services/         # Business services CRUD endpoints
├── website-content/  # Dynamic website section content endpoints
├── app.module.ts     # Root module configuring all features
└── main.ts           # Application entry point & Swagger setup
```

## 🛠️ Setup Instructions

### 1. Prerequisites
- Node.js (>= 18.x)
- npm or yarn

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory (you can copy from `.env.example`).
```env
# Database Credentials
DATABASE_URL="postgresql://postgres.[YOUR_SUPABASE_PROJECT_ID]:[PASSWORD]@aws-1-ap-southeast-2.pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=5&pool_timeout=15"
DIRECT_URL="postgresql://postgres.[YOUR_SUPABASE_PROJECT_ID]:[PASSWORD]@aws-1-ap-southeast-2.pooler.supabase.com:5432/postgres"

# Application Settings
PORT=5001
NODE_ENV=development

# JWT Settings
JWT_SECRET="your-secure-random-string"
JWT_EXPIRES_IN="7d"

# Admin Setup
ADMIN_EMAIL="admin@orangeglobalinfotech.com"
ADMIN_PASSWORD_HASH="your-bcrypt-hashed-pin"

# Email Setup (Resend)
RESEND_API_KEY="re_..."
MAIL_FROM="onboarding@resend.dev"

# CORS URLs
FRONTEND_URL="http://localhost:3000"
ADMIN_DASHBOARD_URL="http://localhost:5173"
```

### 4. Database Setup (Prisma)
Generate the Prisma client and push your schema to the Supabase database:
```bash
npx prisma generate
npx prisma db push
```

### 5. Running the Application
```bash
# Development mode
npm run start:dev

# Production mode
npm run build
npm run start:prod
```

## 📚 API Documentation
Once the server is running locally, you can view the fully interactive Swagger API Documentation at:
**[http://localhost:5001/api/docs](http://localhost:5001/api/docs)**

## 🚢 Deployment Guidelines
- Ensure all environment variables are correctly mapped in your hosting provider (Vercel, Render, Railway, etc.).
- The build command must include Prisma generation: `npm install && npx prisma generate && npm run build`
- Start command: `npm run start:prod`
- Update CORS URLs (`FRONTEND_URL` and `ADMIN_DASHBOARD_URL`) to match your production domains.
