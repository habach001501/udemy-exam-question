# CloudPro Simulator

A practice platform for AWS certification exams, featuring timed exam simulation and topic-based review modes.

## Key Features

- **Exam Mode** — Timed exam simulation with randomly selected questions from the question bank. Supports **set selection** to pick specific practice sets or mix all sets randomly.
- **Review Mode** — Browse questions by practice set with instant answer reveals and detailed explanations.
- **Weak Review** — Re-study questions you previously answered incorrectly.
- **Question Badges** — Questions are tagged as **NEW** (never seen before) or **ATTENTION** (always answered incorrectly) during exams.
- **Results & History** — Track scores, review attempt history, and view performance statistics per course.
- **Git-Synced History** — Exam history is stored per-course in `backend/data/<course_id>/history.json` and can be synced across machines via Git.

## Supported Certifications

| ID      | Certification                                |
| ------- | -------------------------------------------- |
| DOP-C02 | AWS Certified DevOps Engineer – Professional |
| SCS-C03 | AWS Certified Security – Specialty           |

## Tech Stack

| Layer     | Technology                        |
| --------- | --------------------------------- |
| Frontend  | React 18 + Vite                   |
| Styling   | Tailwind CSS, FontAwesome         |
| Routing   | React Router v6                   |
| State     | React Context (`QuizContext`)     |
| Backend   | Django (Python)                   |
| Container | Docker + Docker Compose           |
| Data Sync | Per-course `history.json` via Git |

## Quick Start

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) & Docker Compose
- Git

### Install & Run

```bash
# 1. Clone the repo
git clone https://github.com/habach001501/udemy-exam-question.git
cd udemy-exam-question

# 2. Start the entire system with Docker Compose
docker-compose up -d --build

# 3. Access the app
#    Frontend : http://localhost:3333
#    Backend  : http://localhost:8888
```

### Stop

```bash
docker-compose down
```

### Common Commands

| Scenario                            | Command                                       |
| ----------------------------------- | --------------------------------------------- |
| Sync history only (no code changes) | `docker-compose restart backend`              |
| Backend code changes                | `docker-compose up -d --build backend`        |
| Dependency changes                  | `docker-compose up -d --build`                |
| Container errors                    | `docker-compose down && docker-compose up -d` |

## Syncing Exam History Across Machines

History is stored per-course under `backend/data/`:

```
backend/data/
├── DOP-C02/
│   └── history.json
└── SCS-C03/
    └── history.json
```

These files are tracked by Git. After completing an exam, commit and push to sync with other machines.

```bash
# Machine A — after completing an exam
git add backend/data/
git commit -m "Update history"
git push

# Machine B — pull history from Machine A
git pull
docker-compose restart backend
```

> **Note:** Only `restart` is needed — **no** `--build` required when syncing history.

## License

Private / Proprietary
