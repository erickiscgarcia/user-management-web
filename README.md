![Angular](https://img.shields.io/badge/Angular-8-red)
![Bootstrap](https://img.shields.io/badge/Styled_with-Bootstrap-blueviolet)
![Dockerized](https://img.shields.io/badge/Docker-Ready-blue)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# User Management Frontend

Angular 8 frontend for a user management system, styled with Bootstrap and deployable via Docker and Nginx.

---

## 📄 Overview

This Angular 8 application provides a responsive and user-friendly interface to manage users via RESTful API integration.

---

## ⚙️ Requirements

- Node.js v14
- Angular CLI v8
- Docker (optional)

---

## ⚙️ Environment Configuration

Environment variables are located in:

- `src/environments/environment.ts` → for local development
- `src/environments/environment.prod.ts` → for production

Backend URL is configured using `apiUsersBaseUrl`.

---

## 📁 Project Structure

```plaintext
user-management-web/
├── Dockerfile
├── angular.json
├── package.json
├── src/
│   ├── environments/
│   ├── app/
│   └── index.html
└── ...
```

---

## ▶️ Running Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
ng serve
```

Access the app at: [http://localhost:4200](http://localhost:4200)

---

## 📦 Production Build

To build the frontend for production:

```bash
ng build --prod
```

---

## 🐳 Running with Docker

Build the Docker image:

```bash
docker build -t user-management-frontend .
```

Run the container:

```bash
docker run -p 4200:80 user-management-frontend
```

The app is served using Nginx.

---

## 📝 Notes

- Ensure the backend URL is properly configured in `environment.prod.ts` for production builds.
- Dockerfile is set to build a production-ready app using Angular CLI and serve it through Nginx.

---

## 🌐 Live Demo on Render

> ⚠️ **Note**: Render may suspend free-tier services due to inactivity. The first request can take a few seconds while the service "wakes up", but subsequent responses should be fast.

- 🧑‍💻 Frontend: [https://user-management-web-0nc6.onrender.com/](https://user-management-web-0nc6.onrender.com/)

---

## 🧾 License

MIT – use, modify, and share freely.
