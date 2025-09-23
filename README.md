 ⛪ Church Management System

![License](https://img.shields.io/badge/License-MIT-green.svg)
![Status](https://img.shields.io/badge/Status-In%20Development-yellow)
![Tech](https://img.shields.io/badge/Stack-Next.js%20%7C%20Express.js%20%7C%20PostgreSQL-blue)

A **modern church management platform** for administrators, pastors, leaders, and members.
Built with **Next.js** (frontend), **Express.js** (backend), and **PostgreSQL** (database) to provide reliability, scalability, and a seamless user experience.

---

## ✨ Features

* 🙌 **Member Management** – Register, organize, and manage member records
* 📅 **Event & Service Management** – Schedule services, events, and programs
* 💸 **Donation & Tithes Tracking** – Record contributions and generate reports
* 📝 **Attendance Tracking** – Monitor attendance for services and groups
* 👥 **Group/Ministry Management** – Organize ministries, small groups, and teams
* 📊 **Reports & Analytics** – Financial, attendance, and engagement insights
* 📱 **Mobile App (Members)** – Easy access to updates, events, and giving

---
| Role                          | Developer      |
| ----------------------------- | -------------- |
| **Frontend Web (Next.js)**    | **NK-CIL**     |
| **Backend (Go)**              | **KAF, Henry** |
| **Database (Postgres + Go)**  | **Martin**     |
| **Frontend Mobile (Flutter)** | **Method**     |


## 🛠 Tech Stack

| Layer          | Technology                         |
| -------------- | ---------------------------------- |
| **Frontend**   | Next.js (TypeScript + Material UI) |
| **Backend**    | Express.js (Node.js)               |
| **Database**   | PostgreSQL (with Prisma ORM)       |
| **API**        | RESTful API + JSON                 |
| **Security**   | JWT Authentication, HTTPS          |
| **Deployment** | Docker & Cloud Hosting             |

---

## 📦 Installation

### Prerequisites

* Node.js & npm (or yarn, pnpm, bun)
* PostgreSQL database
* Git

### Setup

```bash
# Clone repository
git clone https://github.com/ceciljayyy/Church-Management-System.git
cd Church-Management-System

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app in your browser.

---

## 🚀 Deployment

We recommend deploying with **Vercel** (frontend) and **Dockerized Express.js backend** hosted on a cloud provider (e.g., AWS, Render, Railway).

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to add.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).
