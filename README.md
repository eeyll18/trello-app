# Trello‑Style Project Management App

A collaborative, real-time task management application inspired by Trello. This project demonstrates full-stack functionality including authentication, real-time data handling, drag-and-drop support, and responsive design.

## 🚀 Features

- ✅ User authentication with Clerk
- 🔄 Real-time database updates using Supabase
- 🧩 Drag-and-drop functionality with `dnd-kit`
- 📁 Board and task creation
- 📊 Task filtering and organized layout

## 🛠 Tech Stack

- **Frontend:** Next.js, TypeScript, Tailwind CSS, Shadcn UI  
- **Backend:** Supabase
- **Authentication:** Clerk  


## 📦 Installation

### Clone the repository
git clone https://github.com/eeyll18/trello-app.git

### Install dependencies
npm install

### Set environment variables
.env.example .env.local

## Fill in the .env.local with your Supabase and Clerk keys

- NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
- CLERK_SECRET_KEY=your_clerk_secret_key
- NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
- NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Run the development server
npm run dev

## ✅ Coming Soon

<!-- - Board sharing & permissions   -->
- Task due dates and assignees  
- Dark mode support

