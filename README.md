# DIE — Luxury Editorial E-Commerce Experience

A high-end editorial e-commerce and portfolio platform built with **Next.js (App Router)**, **Supabase Authentication**, and a brutalist luxury UI system.

This project focuses on cinematic UI, typography-driven design, and modern authentication architecture.

---

## ✨ Tech Stack

- Next.js 14+ (App Router)
- TypeScript
- Supabase (Auth + Backend)
- Tailwind CSS
- Lucide Icons
- Middleware-based route protection

---

## 🔐 Authentication System

Authentication is fully handled using **Supabase Auth**:

- Email + password signup
- Secure login flow
- Session persistence
- Middleware route protection
- Auto redirect logic:
  - Logged-in users → redirected from `/auth/*` → `/`
  - Guests → blocked from `/account`

---

## 📁 Project Structure
src/
├── app/
│ ├── auth/
│ ├── account/
│ ├── page.tsx
│
├── components/
│ ├── home/
│ ├── auth/
│ ├── navigation/
│
├── lib/
│ ├── supabase.ts
│ ├── supabase/server.ts
│
├── hooks/
│ ├── useAuth.ts


---

## ⚙️ Environment Variables

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key


🚀 Getting Started
# install dependencies
npm install

# run development server
npm run dev

# build for production
npm run build

# start production build
npm start


🔒 Middleware Protection

Routes are protected using Next.js middleware:

/account → requires authentication
/auth/* → blocked for logged-in users

🎨 Design Philosophy

This project is built around:

Brutalist editorial UI
Luxury fashion-inspired typography
Minimalist black/white aesthetic
Cinematic motion-first layout
High-end digital brand identity


🧠 Key Features


Supabase authentication flow
Protected routes via middleware
Dynamic navbar auth state
Account session handling
Responsive editorial hero section
Luxury UI system with strict typography rules