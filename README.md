# Tamasha Onboarding Wizard

A full-stack onboarding wizard built with **React, FastAPI, SQLAlchemy, and SQLite**.

The application provides a structured four-step onboarding experience where users can enter their personal information, select their preferences, choose their technology stack, review their details, and submit the information. Submitted data is stored in a SQLite database through a FastAPI backend.

---

## 📌 Project Overview

The Tamasha Onboarding Wizard is designed as a multi-step form application with a clean and simple user experience.

The application guides users through four steps:

1. **Personal Information**
2. **Preferences**
3. **Tech Stack**
4. **Review & Submit**

The project demonstrates frontend state management, form validation, conditional rendering, local draft persistence, API integration, backend development, and database storage.

---

## ✨ Features

### Multi-Step Onboarding

- Four-step onboarding workflow
- Next and Previous navigation
- Step progress indicator
- Edit functionality from the Review page

### Personal Information

Users can enter:

- Name
- Email
- Portfolio / GitHub URL

Validation is implemented for:

- Required name
- Required email
- Valid email format

### Preferences

Users can select:

**Primary Track**

- Frontend
- Backend
- Fullstack
- UI/UX Design

**Experience Level**

- Junior
- Mid
- Senior

### Conditional Tech Stack

Technology options are dynamically displayed according to the selected track.

**Frontend**

- React
- Vue
- TypeScript
- CSS Modules

**Backend**

- Node.js
- Python/Django
- PostgreSQL
- Redis

**UI/UX Design**

- Figma
- Storybook
- Design Systems

Users can select multiple technologies.

### Review & Submit

The final step provides a complete summary of the information entered by the user.

Users can:

- Review their information
- Edit previous sections
- Return to previous steps
- Submit the completed onboarding form

### Draft Auto-Save

The application automatically saves the current form data to browser `localStorage`.

A **500 ms debounce** is used to prevent saving after every individual input change.

Saved drafts are automatically restored when the application is refreshed.

### Backend Integration

The React frontend communicates with a FastAPI backend using HTTP requests.

Submitted onboarding information is stored in a SQLite database.

---

# 🛠️ Technology Stack

## Frontend

- React
- Vite
- JavaScript
- CSS
- React Hooks
  - `useState`
  - `useEffect`
- Fetch API
- Browser LocalStorage

## Backend

- Python
- FastAPI
- Uvicorn
- SQLAlchemy
- Pydantic

## Database

- SQLite

## Development Tools

- Visual Studio Code
- Git
- GitHub
- Chrome / Web Browser

---

# 🏗️ Application Architecture

The application follows a simple client-server architecture.

```text
                    React Frontend
                         │
                         │ HTTP Request
                         ↓
                  FastAPI Backend
                         │
                         ↓
                    SQLAlchemy
                         │
                         ↓
                    SQLite DB
