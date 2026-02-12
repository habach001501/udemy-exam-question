# FLOW — Project Architecture & Data Flow

Developer documentation describing the architecture and feature flows of the application.

---

## Directory Structure (`src/`)

```
src/
├── App.jsx                 # Main routing
├── config.js               # Course config & data file paths
├── main.jsx                # Entry point, wraps QuizProvider
│
├── context/
│   └── QuizContext.jsx     # Global state management (useReducer)
│
├── pages/
│   ├── Home.jsx            # Home page — select certification
│   ├── Dashboard.jsx       # Choose exam/review mode, configure exam (set selection, count, time)
│   ├── Quiz.jsx            # Wrapper — routes to ExamView or ReviewView
│   ├── Result.jsx          # Display results after exam
│   ├── History.jsx         # Exam history & statistics (per-course tabs)
│   └── WeakReview.jsx      # Review incorrectly answered questions
│
├── components/
│   ├── Header.jsx          # Fixed header bar
│   ├── ExamView.jsx        # Exam interface with timer, NEW/ATTENTION badges
│   ├── ReviewView.jsx      # Review interface by set
│   └── ReviewCard.jsx      # Single question card in review mode
│
├── services/
│   └── api.js              # Backend API calls (history CRUD, scoped by courseId), localStorage fallback
│
├── data/
│   ├── DOP-C02/            # DOP-C02 question sets (neal_*.js, stephan_*.js, dojo_*.js)
│   └── SCS-C03/            # SCS-C03 question sets
│
└── utils/
    └── dataLoader.js       # Dynamic import of question data files
```

---

## Routing (`App.jsx`)

| Route                  | Page         | Description                           |
| ---------------------- | ------------ | ------------------------------------- |
| `/`                    | `Home`       | Home page — select certification      |
| `/dashboard/:courseId` | `Dashboard`  | Choose mode (Exam/Review) & configure |
| `/quiz/:courseId`      | `Quiz`       | Take exam or review questions         |
| `/result`              | `Result`     | Exam results                          |
| `/history`             | `History`    | Exam history & statistics             |
| `/weak-review`         | `WeakReview` | Review weak questions                 |

---

## State Management (`QuizContext`)

All state is managed via `useReducer` in `QuizContext.jsx`:

```
state = {
  currentCourse   → Currently selected course object (e.g. { id: 'DOP-C02', ... })
  availableData   → Array of loaded question sets: { name, count, questions }
  session         → Current exam/review session
    ├── active       → Is session in progress?
    ├── mode         → 'exam' | 'review'
    ├── questions    → Array of question objects
    ├── currentIndex → Current question position
    ├── answers      → { questionId: [selectedOptions] }
    ├── timeLeft     → Remaining time in seconds
    └── isFinished   → Has session ended?
}
```

**Key actions:**

| Action               | Description                   |
| -------------------- | ----------------------------- |
| `SET_COURSE`         | Select a certification course |
| `SET_AVAILABLE_DATA` | Load question set data        |
| `START_SESSION`      | Begin exam or review session  |
| `ANSWER_QUESTION`    | Save selected answer          |
| `NAVIGATE_QUESTION`  | Move to another question      |
| `TICK_TIMER`         | Decrement timer               |
| `TOGGLE_PAUSE`       | Pause/resume session          |
| `FINISH_EXAM`        | End exam session              |
| `RESET_SESSION`      | Reset session state           |

---

## Question Data Flow (`config.js` → `data/`)

```
config.js
  └── courses[].scripts = ['DOP-C02/neal_1.js', ...]
        ↓
Dashboard.jsx — loadCourseData(scripts) via dynamic import
        ↓
Extract questions array from each file → dispatch SET_AVAILABLE_DATA
        ↓
User configures exam (select sets, count, time) → dispatch START_SESSION
```

Each file in `data/` exports an object with this structure:

```javascript
export const neal_1 = {
  count: 65,
  results: [
    {
      id: 12345,
      assessment_type: "multiple-choice",  // or "multi-select"
      prompt: {
        question: "<p>Question content</p>",
        answers: ["<p>A</p>", "<p>B</p>", ...],
        explanation: "<p>Explanation</p>"
      },
      correct_response: ["a"],  // or ["a", "c"] for multi-select
      section: "Category Name",
      question_plain: "Plain text question"
    },
    ...
  ]
};
```

---

## Flow 1: Exam Mode

```
Home → Select certification
  ↓
Dashboard → Click "Exam Simulator"
  ↓
Configure Exam:
  • Question Source — select specific sets or "All Sets (Random Mix)" (default)
  • Number of Questions — how many to include
  • Time Limit — countdown duration in minutes
  ↓ dispatch START_SESSION (mode='exam', timeLeft=N)
Quiz.jsx → render ExamView
  ↓
ExamView:
  • Display question + answer options
  • Show badges: NEW (first-time question) or ATTENTION (always incorrect)
  • Countdown timer (TICK_TIMER every second)
  • User selects answer → dispatch ANSWER_QUESTION
  • Navigate between questions → dispatch NAVIGATE_QUESTION
  • Submit / time runs out → dispatch FINISH_EXAM
  ↓
Result.jsx:
  • Calculate score, display breakdown by section
  • Call api.addHistory(record, courseId) → POST /api/history/<courseId>/
  ↓
Backend (Django):
  • Write to /app/data/<courseId>/history.json (bind mount → host)
```

---

## Flow 2: Review Mode

```
Home → Select certification
  ↓
Dashboard → Click "Review Questions" → select a specific set
  ↓ dispatch START_SESSION (mode='review')
Quiz.jsx → render ReviewView
  ↓
ReviewView:
  • Display questions via ReviewCard
  • Select answer → immediately show correct/incorrect + explanation
  • Set Switcher — switch between sets without returning to Dashboard
  • No timer
```

---

## Flow 3: Weak Review

```
History.jsx → Click "Weak Review" button
  ↓ Opens new tab → /weak-review
WeakReview.jsx:
  • Fetch history from API for the selected course
  • Analyze all attempts to find questions always answered incorrectly
  • Display each weak question with correct answer + explanation
  • No timer
```

---

## Flow 4: History Sync via Git

```
┌──────── Machine A ─────────┐
│                             │
│  User completes an exam     │
│  ↓                          │
│  POST /api/history/<cid>/   │
│  ↓                          │
│  Django writes to           │
│  /app/data/<cid>/history.json│
│  ↓ (bind mount)             │
│  ./backend/data/<cid>/      │
│    history.json              │
│  ↓                          │
│  git add + commit + push    │
│                             │
└────────┬────────────────────┘
         │ git push/pull
         ↓
┌──────── Machine B ─────────┐
│                             │
│  git pull                   │
│  ↓                          │
│  ./backend/data/<cid>/      │
│    history.json (updated)   │
│  ↓ (bind mount)             │
│  docker-compose             │
│    restart backend          │
│  ↓                          │
│  GET /api/history/<cid>/    │
│  ↓                          │
│  User sees history! ✅       │
│                             │
└─────────────────────────────┘
```

**Why it works:**

- `docker-compose.yml` mounts `./backend/data:/app/data` → host files = container files.
- Backend Django reads/writes to `/app/data/<courseId>/history.json` dynamically based on the course.
- Files are in the Git repo, so they can be synced via `git push/pull`.

---

## API Endpoints (Backend Django)

All history endpoints are scoped by `course_id`:

| Method   | Endpoint                                     | Description                                      |
| -------- | -------------------------------------------- | ------------------------------------------------ |
| `GET`    | `/api/history/<course_id>/`                  | Get all history for a course                     |
| `POST`   | `/api/history/<course_id>/`                  | Add a new exam result                            |
| `GET`    | `/api/history/<course_id>/latest/`           | Get the latest exam result                       |
| `GET`    | `/api/history/<course_id>/seen-questions/`   | Get IDs of all previously seen questions         |
| `GET`    | `/api/history/<course_id>/always-incorrect/` | Get IDs of always-incorrectly-answered questions |
| `DELETE` | `/api/history/<course_id>/<record_id>/`      | Delete a specific history record                 |

**Fallback:** If the API is unavailable, `api.js` automatically falls back to `localStorage`.

---

## Adding New Question Sets

1. Create a JS file in `src/data/<CertID>/`, export an object following the structure described above.
2. Add the file path to the `scripts` array in `src/config.js`.
3. The frontend will automatically load the new set when entering the Dashboard.

---

## Quick Debugging

| Issue                      | Solution                                                          |
| -------------------------- | ----------------------------------------------------------------- |
| History not syncing        | `git pull` → `docker-compose restart backend`                     |
| Permission denied on write | `chmod 755 backend/data && chmod 644 backend/data/*/history.json` |
| View backend logs          | `docker-compose logs backend`                                     |
| Check container status     | `docker-compose ps`                                               |
| Test API                   | `curl http://localhost:8888/api/history/DOP-C02/`                 |
