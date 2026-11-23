# Campus Clinic Appointment and Service Queue System

A web-based system that replaces manual clinic appointment requests with one digital channel.
Students book appointments and track their status; clinic staff review requests, manage the
daily queue, and monitor service workload.

> Course project: Information Systems Agile Project Management with DevOps (IS 2026).
> Path B (Simulated Client), Case 2.

## Problem
- Appointment requests arrive through many channels and get lost.
- Students cannot see whether a request is accepted.
- Slots clash and queue order is decided manually.
- Staff cannot see daily workload.

## Features (MVP)
| ID | Feature | Priority |
|----|---------|----------|
| PB-01 | Register, login, logout | Must |
| PB-02 | Role-based access (Student, Staff, Admin) | Must |
| PB-03 | Manage services and slots (quota) | Must |
| PB-04 | Student requests an appointment | Must |
| PB-05 | Student views own appointment status | Must |
| PB-06 | Staff accept, reject, reschedule | Must |
| PB-07 | Automatic queue number | Must |
| PB-08 | Staff manages today's queue status | Must |
| PB-09 | Dashboard: queue and service workload | Must |
| PB-10 | Student cancels appointment | Should |
| PB-11 | Visit history | Should |
| PB-12 | Health-check endpoint | Should |

Out of scope: medical records, payment/insurance, WhatsApp/SMS/email notifications, multi-clinic, native mobile app.

## Tech stack
- **Frontend:** HTML/CSS/JS prototype (current), React or Next.js (planned)
- **Backend:** Node.js + Express REST API (planned, Sprint 2)
- **Database:** PostgreSQL / Supabase (planned)
- **DevOps:** GitHub Actions (CI), Docker, Vercel (frontend), Render or Railway (backend)

## Project status
| Sprint | Goal | Status |
|--------|------|--------|
| Sprint 1 (Week 12) | Prototype, repo, CI draft, backlog | In progress |
| Sprint 2 (Week 13) | Backend, change request, QA, release | Planned |
| Sprint 3 (Week 14) | Operations, monitoring, handover | Planned |

## Repository structure
```
frontend/            HTML prototype (index.html)
backend/             API (added in Sprint 2)
scripts/             CI helper scripts
.github/workflows/   GitHub Actions pipeline
docs/                Documents and evidence
```

## Run the prototype locally
No build step is needed. Open `frontend/index.html` in a browser, or serve it:
```bash
npx serve frontend
```

Demo accounts (dummy data, resets on refresh):

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@campus.edu | admin123 |
| Staff | nina@campus.edu | staff123 |
| Student | sari@campus.edu | student123 |

## Branching strategy
- `main`: stable, release-ready
- `develop`: integration branch
- `feature/<name>`: one branch per feature or fix

Rules: no direct pushes to `main`; changes go through a pull request with at least one reviewer
and a passing CI run.

Commit format: `feat: add slot quota validation`, `fix: duplicate queue number`,
`docs: update README`, `test: add full-slot case`, `ci: update workflow`.

## CI
GitHub Actions runs on every push and pull request: HTML structure and JS syntax check, HTML lint.
Backend install, lint, test and build are added in Sprint 2.

## Planned API endpoints
`POST /api/auth/register`, `POST /api/auth/login`, `GET /api/services`, `GET /api/slots?date=`,
`POST /api/slots`, `POST /api/appointments`, `GET /api/appointments`,
`PATCH /api/appointments/:id/decision`, `GET /api/queue/today`, `PATCH /api/queue/:id/status`,
`GET /api/dashboard/summary`, `GET /api/health`.

## Team
| Name | Role |
|------|------|
| Syalu | Product Owner / Business Analyst |
| Dian | Scrum Master / Project Coordinator |
| Adel | Development Lead |
| Kia | QA / UAT Lead |
| Vio | DevOps / Release Coordinator |

## Privacy note
The system stores only a short complaint text, never detailed medical data. Access is restricted by role.

Sprint 1 CI test.
> **Sprint 1 note:** This repository currently contains a working frontend prototype with simulated data.  
> Backend implementation, database persistence, API endpoints, authentication, and slot-quota transaction logic are planned for Sprint 