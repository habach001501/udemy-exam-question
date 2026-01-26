/**
 * CloudPro Simulator Logic (Multi-Page Architecture)
 */
const app = {
    // Configuration
    courses: [
        {
            id: 'DOP-C02',
            title: 'AWS Certified DevOps Engineer - Professional (DOP-C02)',
            description: 'Advanced technical skills for provisioning, operating, and managing distributed application systems on the AWS platform.',
            icon: 'fa-server',
            scripts: [
                'course/DOP-C02/neal_1.js',
                'course/DOP-C02/neal_2.js',
                'course/DOP-C02/neal_3.js',
                'course/DOP-C02/neal_4.js',
                'course/DOP-C02/neal_5.js',
                'course/DOP-C02/neal_6.js',
                'course/DOP-C02/stephan_1.js',
                'course/DOP-C02/stephan_2.js'
            ]
        }
    ],

    // State
    currentCourse: null,
    data: [],
    currentSession: {
        mode: null,
        questions: [],
        currentIndex: 0,
        answers: {},
        startTime: null,
        timerInterval: null,
        timeLeft: 0
    },

    // Initialization: Route based on filename
    init: function () {
        const path = window.location.pathname;
        const page = path.split('/').pop() || 'index.html';
        const urlParams = new URLSearchParams(window.location.search);
        const courseId = urlParams.get('course');

        // Global Course Load (except for index/history which might not need specific course data immediately, 
        // though History page might want to know context. Index definitely doesn't.)

        if (page === 'index.html' || page === '') {
            this.setupCourseSelection();
        } else if (courseId) {
            // Find course config
            const courseConfig = this.courses.find(c => c.id === courseId);
            if (!courseConfig) {
                alert('Course not found');
                window.location.href = 'index.html';
                return;
            }

            // Load scripts then run page logic
            this.loadCourseScripts(courseConfig).then(() => {
                this.currentCourse = courseConfig;
                this.loadData(); // Aggregate loaded data

                if (page === 'dashboard.html') this.setupDashboard();
                if (page === 'quiz.html') this.setupQuiz(urlParams);
            });
        } else if (page === 'history.html') {
            this.renderHistory();
        } else if (page === 'result.html') {
            this.setupResult();
        } else {
            // Fallback
            window.location.href = 'index.html';
        }
    },

    // -------------------------------------------------------------------------
    // Navigation Helper
    // -------------------------------------------------------------------------
    navTo: function (page) {
        window.location.href = page;
    },

    // -------------------------------------------------------------------------
    // Logic: Course Selection (index.html)
    // -------------------------------------------------------------------------
    setupCourseSelection: function () {
        const container = document.getElementById('course-list');
        if (!container) return; // Safety

        container.innerHTML = '';
        this.courses.forEach(course => {
            const el = document.createElement('div');
            el.className = 'mode-card';
            el.innerHTML = `
                <div class="mode-icon"><i class="fa-solid ${course.icon}"></i></div>
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <div style="margin-top: 1rem; font-size: 0.9rem; color: var(--text-muted);">
                   <i class="fa-solid fa-file-code"></i> ${course.scripts.length} datasets
                </div>
                <!-- Redirect to dashboard with course param -->
                <button class="btn btn-primary" style="margin-top: 1.5rem; width: 100%;">Select Course</button>
            `;
            el.onclick = () => {
                localStorage.setItem('last_course', course.id);
                window.location.href = `dashboard.html?course=${course.id}`;
            };
            container.appendChild(el);
        });
    },

    // -------------------------------------------------------------------------
    // Logic: Data Loading
    // -------------------------------------------------------------------------
    loadCourseScripts: function (course) {
        // Show loading state if applicable (e.g. on dashboard title)
        const titleEl = document.getElementById('course-title');
        if (titleEl) titleEl.innerText = 'Loading resources...';

        const loadScript = (src) => {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = src;
                script.onload = resolve;
                script.onerror = reject;
                document.body.appendChild(script);
            });
        };

        return Promise.all(course.scripts.map(src => loadScript(src)));
    },

    loadData: function () {
        const sources = [];
        const possibleVars = [
            'neal_1', 'neal_2', 'neal_3', 'neal_4', 'neal_5', 'neal_6',
            'stephan_1', 'stephan_2'
        ];

        possibleVars.forEach(v => {
            try {
                if (typeof window[v] !== 'undefined') {
                    sources.push({ name: this.formatName(v), data: window[v] });
                } else {
                    const val = eval(v);
                    if (val) sources.push({ name: this.formatName(v), data: val });
                }
            } catch (e) { }
        });

        this.data = sources.map(source => {
            if (source.data && source.data.results) {
                return {
                    name: source.name,
                    count: source.data.results.length,
                    questions: source.data.results
                };
            }
            return null;
        }).filter(item => item !== null);
    },

    formatName: function (varName) {
        const parts = varName.split('_');
        if (parts.length === 2) {
            return parts[0].charAt(0).toUpperCase() + parts[0].slice(1) + " Set " + parts[1];
        }
        return varName;
    },

    // -------------------------------------------------------------------------
    // Logic: Dashboard
    // -------------------------------------------------------------------------
    setupDashboard: function () {
        document.getElementById('course-title').innerText = this.currentCourse.title;
        // The HTML already has onclick handlers calling app.setupExamMode / setupReviewMode
    },

    setupReviewMode: function () {
        // Show Review Setup in 'view-setup' (which is just a section in dashboard.html)
        // Or simpler: We can do a quick JS toggle since we kept it in the same file for now.
        // But to be cleaner, let's just populate the setup-options div and scroll to it or toggle visibility.

        const container = document.getElementById('setup-options');
        const title = document.getElementById('setup-title');
        const btn = document.getElementById('btn-start-session');

        // Toggle Visibility
        document.getElementById('view-dashboard').classList.remove('active');
        document.getElementById('view-setup').classList.add('active');

        title.innerText = "Select Topic for Review";
        container.innerHTML = '';

        this.data.forEach((set, index) => {
            const el = document.createElement('div');
            el.className = 'mode-card';
            el.style.textAlign = 'center';
            el.innerHTML = `<h3>${set.name}</h3><p>${set.count} Questions</p>`;
            el.onclick = () => {
                // Launch Quiz Page with params
                const url = `quiz.html?course=${this.currentCourse.id}&mode=review&sets=${index}`;
                window.location.href = url;
            };
            container.appendChild(el);
        });

        // Hide start button for Review Mode since click launches immediately
        btn.style.display = 'none';
    },

    setupExamMode: function () {
        document.getElementById('view-dashboard').classList.remove('active');
        document.getElementById('view-setup').classList.add('active');

        const container = document.getElementById('setup-options');
        const title = document.getElementById('setup-title');
        const btn = document.getElementById('btn-start-session');

        title.innerText = "Configure Exam Simulation";
        container.innerHTML = `
            <div class="mode-card" style="grid-column: 1/-1; cursor: default;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
                    <div>
                        <label style="display:block; margin-bottom: 0.5rem; font-weight: 600;">Number of Questions</label>
                        <input type="number" id="exam-q-count" value="75" min="1" max="500" class="form-input" style="width: 100%; padding: 1rem; background: var(--bg-dark); color: white; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px;">
                    </div>
                    <div>
                        <label style="display:block; margin-bottom: 0.5rem; font-weight: 600;">Time Limit (Minutes)</label>
                        <input type="number" id="exam-time-limit" value="180" min="1" class="form-input" style="width: 100%; padding: 1rem; background: var(--bg-dark); color: white; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px;">
                    </div>
                </div>
            </div>
        `;
        btn.style.display = 'inline-block';
        btn.onclick = () => {
            const count = document.getElementById('exam-q-count').value;
            const minutes = document.getElementById('exam-time-limit').value;
            window.location.href = `quiz.html?course=${this.currentCourse.id}&mode=exam&count=${count}&time=${minutes}`;
        };
    },

    // -------------------------------------------------------------------------
    // Logic: Quiz / Session
    // -------------------------------------------------------------------------
    setupQuiz: function (params) {
        const mode = params.get('mode');
        const setIndices = params.get('sets') ? params.get('sets').split(',').map(Number) : null;
        const count = parseInt(params.get('count') || '75');
        const timeLimit = parseInt(params.get('time') || '0');

        this.currentSession.mode = mode;
        this.currentSession.currentIndex = 0;
        this.currentSession.startTime = new Date();

        // 1. Prepare Pool
        let pool = [];
        if (mode === 'review') {
            setIndices.forEach(idx => pool = pool.concat(this.data[idx].questions));
        } else {
            this.data.forEach(set => pool = pool.concat(set.questions));
            pool.sort(() => Math.random() - 0.5);
            pool = pool.slice(0, Math.min(count, pool.length));
        }
        this.currentSession.questions = pool;

        // 2. Setup UI & Timer
        const container = document.querySelector('.quiz-container');
        const mainEl = document.querySelector('main');

        if (mode === 'exam') {
            mainEl.classList.add('wide-container');
            container.classList.remove('review-mode-layout');
            this.currentSession.timeLeft = timeLimit * 60;
            this.startTimer();
            document.getElementById('btn-submit-exam').style.display = 'block';

            this.generateNavDots();
            this.loadQuestion(0);
        } else {
            mainEl.classList.add('wide-container');
            container.classList.add('review-mode-layout');

            // Inject Toggle Switch for Review Mode
            const sidebar = document.querySelector('.quiz-sidebar');

            // Check if toggle already exists
            if (!document.getElementById('mode-toggle')) {
                const toggleDiv = document.createElement('div');
                toggleDiv.className = 'mode-toggle-container';
                toggleDiv.id = 'mode-toggle';
                toggleDiv.innerHTML = `
                     <button class="mode-toggle-btn" id="btn-mode-study">Study</button>
                     <button class="mode-toggle-btn active" id="btn-mode-interactive">Practice</button>
                 `;

                // Insert after timer
                const timer = document.getElementById('quiz-timer');
                timer.innerText = ''; // Clear "Review Mode" text as we have toggle now
                timer.classList.remove('review-mode'); // Remove the class too
                timer.style.display = 'none'; // Or hide it entirely

                // Insert in the middle of the sidebar/topbar
                sidebar.insertBefore(toggleDiv, sidebar.children[1]); // Assuming timer is 0

                document.getElementById('btn-mode-study').onclick = () => this.switchReviewMode('study');
                document.getElementById('btn-mode-interactive').onclick = () => this.switchReviewMode('interactive');
            }

            document.getElementById('btn-submit-exam').style.display = 'none';

            // Default to Interactive (Practice)
            this.switchReviewMode('interactive');

            // Render all questions at once
            this.renderReviewMode();
            this.generateNavDots();
        }
    },

    switchReviewMode: function (type) {
        const container = document.querySelector('.quiz-container');
        const btnStudy = document.getElementById('btn-mode-study');
        const btnPractice = document.getElementById('btn-mode-interactive');

        if (type === 'study') {
            container.classList.remove('interactive-mode');
            btnStudy.classList.add('active');
            btnPractice.classList.remove('active');
        } else {
            container.classList.add('interactive-mode');
            btnStudy.classList.remove('active');
            btnPractice.classList.add('active');

            // Reset all cards to unrevealed state when switching?
            // Maybe better to keep state? Let's keep state for now.
        }
    },

    // New: Render all questions for horizontal scrolling
    renderReviewMode: function () {
        const area = document.querySelector('.question-area');
        area.innerHTML = ''; // Clear existing

        const scroller = document.createElement('div');
        scroller.className = 'questions-scroller';

        this.currentSession.questions.forEach((qData, index) => {
            const card = document.createElement('div');
            card.className = 'review-question-card';
            card.id = `review-card-${index}`;

            // Header
            card.innerHTML = `
                <div class="q-header">
                    <span>Question ${index + 1} of ${this.currentSession.questions.length}</span>
                    <span>ID: #${qData.id}</span>
                </div>
                <div class="q-text">${qData.prompt.question}</div>
            `;

            // Options
            const optionsDiv = document.createElement('div');
            optionsDiv.className = 'options-list';

            const isMulti = qData.correct_response.length > 1;
            const userAnswers = this.currentSession.answers[qData.id] || [];
            const correct = qData.correct_response;

            qData.prompt.answers.forEach((optHtml, idx) => {
                const letter = String.fromCharCode(97 + idx);
                const isCorrect = correct.includes(letter);
                const isSelected = userAnswers.includes(letter); // For persistence during re-render

                const div = document.createElement('div');
                div.className = `option-item ${isCorrect ? 'correct-answer' : ''} ${isSelected ? 'selected' : ''}`;
                div.onclick = () => this.selectOption(qData.id, letter, isMulti);

                div.innerHTML = `
                    <div class="option-marker">${letter.toUpperCase()}</div>
                    <div style="flex: 1">${optHtml}</div>
                `;
                optionsDiv.appendChild(div);
            });
            card.appendChild(optionsDiv);

            // Explanation (Always Visible in Study, Hidden in Interactive)
            const expBox = document.createElement('div');
            expBox.className = 'explanation-box visible';
            expBox.style.display = 'block';
            expBox.innerHTML = `
                <h4><i class="fa-solid fa-circle-check"></i> Explanation</h4>
                <div>${qData.prompt.explanation}</div>
            `;
            card.appendChild(expBox);

            // Reveal Button
            const btnReveal = document.createElement('button');
            btnReveal.className = 'btn btn-success reveal-btn';
            btnReveal.innerText = 'Reveal Answer';
            btnReveal.onclick = () => {
                card.classList.add('revealed');

                // Update Dot Status
                const userAns = (this.currentSession.answers[qData.id] || []).sort().join('');
                const correctAns = (qData.correct_response || []).sort().join('');
                const isCorrect = userAns === correctAns;

                const dot = document.getElementById(`dot-${index}`);
                if (dot) {
                    dot.classList.remove('attempted');
                    if (isCorrect) {
                        dot.classList.add('correct');
                    } else {
                        dot.classList.add('incorrect');
                    }
                }
            };
            card.appendChild(btnReveal);

            scroller.appendChild(card);
        });

        area.appendChild(scroller);
    },

    loadQuestion: function (index) {
        if (index < 0 || index >= this.currentSession.questions.length) return;

        this.currentSession.currentIndex = index;
        const qData = this.currentSession.questions[index];

        document.getElementById('q-progress').innerText = `Question ${index + 1} of ${this.currentSession.questions.length}`;
        document.getElementById('q-id').innerText = `ID: #${qData.id}`;
        document.getElementById('q-text').innerHTML = qData.prompt.question;

        const container = document.getElementById('q-options');
        container.innerHTML = '';

        // Check local state or global answers?
        // Since we reload pages, answers are ephemeral unless we persist them. 
        // For a simple exam, memory is fine as long as they don't refresh.
        // If user refreshes quiz.html, they lose progress. Use sessionStorage?
        // For now, let's keep it simple (memory only).

        const userAnswers = this.currentSession.answers[qData.id] || [];
        const isMulti = qData.correct_response.length > 1;

        qData.prompt.answers.forEach((optHtml, idx) => {
            const letter = String.fromCharCode(97 + idx);
            const isSelected = userAnswers.includes(letter);

            const div = document.createElement('div');
            div.className = `option-item ${isSelected ? 'selected' : ''}`;
            div.onclick = () => this.selectOption(qData.id, letter, isMulti);

            const marker = document.createElement('div');
            marker.className = 'option-marker';
            marker.innerText = letter.toUpperCase();

            const content = document.createElement('div');
            content.style.flex = "1";
            content.innerHTML = optHtml;

            div.appendChild(marker);
            div.appendChild(content);
            container.appendChild(div);
        });

        const expBox = document.getElementById('q-explanation');
        expBox.classList.remove('visible');
        expBox.querySelector('#explanation-content').innerHTML = qData.prompt.explanation;

        this.updateNavDots();

        // Review Mode = Study Mode (Always reveal)
        if (this.currentSession.mode === 'review') {
            this.revealAnswer(true); // pass true to indicate it's auto/view-only
        }
    },

    selectOption: function (qId, letter, isMulti) {
        let current = this.currentSession.answers[qId] || [];

        // Toggle Logic
        if (isMulti) {
            if (current.includes(letter)) {
                current = current.filter(l => l !== letter);
            } else {
                current.push(letter);
            }
        } else {
            current = [letter];
        }
        this.currentSession.answers[qId] = current;

        // Visual Update Logic
        if (this.currentSession.mode === 'review') {
            // 1. Find the specific card options using qId or we need the index. 
            // qId is unique. Let's find the card by looking up the question index or storing qId in DOM.
            // We added ID `review-card-{index}`. We can find it via the qId if we map it, 
            // but easier to find the opt element directly if we had IDs. 
            // Let's pass 'index' to selectOption? Or find index from qId.
            const qIndex = this.currentSession.questions.findIndex(q => q.id === qId);
            if (qIndex === -1) return;

            const card = document.getElementById(`review-card-${qIndex}`);
            if (!card) return;

            // Check if already revealed (Locked)
            if (card.classList.contains('revealed')) return;

            // Update Options UI
            const options = card.querySelectorAll('.option-item');
            options.forEach((el, idx) => {
                const l = String.fromCharCode(97 + idx); // a, b, c...
                if (current.includes(l)) {
                    el.classList.add('selected');
                } else {
                    el.classList.remove('selected');
                }
            });

            // Update Dot UI
            const dot = document.getElementById(`dot-${qIndex}`);
            if (dot) dot.classList.add('attempted');

        } else {
            // Exam Mode: Full Re-render of current slide
            this.loadQuestion(this.currentSession.currentIndex);
        }
    },

    revealAnswer: function (isAuto = false) {
        const qData = this.currentSession.questions[this.currentSession.currentIndex];
        const correct = qData.correct_response;

        const options = document.querySelectorAll('.option-item');
        options.forEach((el, idx) => {
            const letter = String.fromCharCode(97 + idx);
            if (correct.includes(letter)) {
                el.classList.add('correct-answer');
            } else if (el.classList.contains('selected')) {
                el.classList.add('wrong-answer');
            }
        });
        document.getElementById('q-explanation').classList.add('visible');
    },

    startTimer: function () {
        const display = document.getElementById('quiz-timer');
        const updateDisplay = () => {
            const m = Math.floor(this.currentSession.timeLeft / 60);
            const s = this.currentSession.timeLeft % 60;
            display.innerText = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        };
        updateDisplay();
        this.currentSession.timerInterval = setInterval(() => {
            this.currentSession.timeLeft--;
            updateDisplay();
            if (this.currentSession.timeLeft <= 0) {
                clearInterval(this.currentSession.timerInterval);
                this.finishExam();
            }
        }, 1000);
    },

    finishExam: function () {
        clearInterval(this.currentSession.timerInterval);

        let score = 0;
        let total = this.currentSession.questions.length;
        this.currentSession.questions.forEach(q => {
            const userAns = (this.currentSession.answers[q.id] || []).sort().join('');
            const correctAns = (q.correct_response || []).sort().join('');
            if (userAns === correctAns) score++;
        });

        const percent = Math.round((score / total) * 100);

        const attempt = {
            date: new Date().toISOString(),
            course: this.currentCourse.id,
            mode: this.currentSession.mode,
            score: score,
            total: total,
            percent: percent,
            duration: new Date() - this.currentSession.startTime
        };

        // Save history
        this.saveHistory(attempt);

        // Save result for result page
        localStorage.setItem('latest_result', JSON.stringify(attempt));

        // Redirect
        window.location.href = 'result.html';
    },

    nextQuestion: function () {
        if (this.currentSession.currentIndex < this.currentSession.questions.length - 1) {
            this.loadQuestion(this.currentSession.currentIndex + 1);
        }
    },

    prevQuestion: function () {
        if (this.currentSession.currentIndex > 0) {
            this.loadQuestion(this.currentSession.currentIndex - 1);
        }
    },

    generateNavDots: function () {
        const container = document.getElementById('question-nav');
        container.innerHTML = '';
        this.currentSession.questions.forEach((q, idx) => {
            const dot = document.createElement('div');
            dot.className = 'q-dot';
            dot.innerText = idx + 1;

            dot.onclick = () => {
                if (this.currentSession.mode === 'review' || (this.currentSession.mode === null && document.querySelector('.review-layout'))) {
                    // Review Mode: Scroll to card
                    const card = document.getElementById(`review-card-${idx}`);
                    if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
                } else {
                    // Exam Mode: Load question
                    this.loadQuestion(idx);
                }
            };

            dot.id = `dot-${idx}`;
            container.appendChild(dot);
        });
    },

    updateNavDots: function () {
        document.querySelectorAll('.q-dot').forEach(d => d.classList.remove('active'));
        const active = document.getElementById(`dot-${this.currentSession.currentIndex}`);
        if (active) active.classList.add('active');

        // Mark answered
        this.currentSession.questions.forEach((q, idx) => {
            const dot = document.getElementById(`dot-${idx}`);
            if (this.currentSession.answers[q.id] && this.currentSession.answers[q.id].length > 0) {
                dot.classList.add('answered');
            }
        });
    },

    // -------------------------------------------------------------------------
    // Logic: Results
    // -------------------------------------------------------------------------
    setupResult: function () {
        const result = JSON.parse(localStorage.getItem('latest_result'));
        if (!result) {
            window.location.href = 'dashboard.html';
            return;
        }

        document.getElementById('score-percent').innerText = `${result.percent}%`;
        document.getElementById('score-text').innerText = `${result.score} / ${result.total} Correct`;
        document.getElementById('score-circle').style.setProperty('--percent', `${result.percent * 3.6}deg`);

        const msg = result.percent >= 75 ? "PASSED! Great job." : "FAILED. Keep practicing.";
        const el = document.getElementById('result-message');
        el.innerText = msg;
        el.style.color = result.percent >= 75 ? 'var(--success)' : 'var(--danger)';
    },

    // -------------------------------------------------------------------------
    // Logic: History
    // -------------------------------------------------------------------------
    saveHistory: function (attempt) {
        let history = JSON.parse(localStorage.getItem('cp_history') || '[]');
        history.unshift(attempt);
        localStorage.setItem('cp_history', JSON.stringify(history));
    },

    renderHistory: function () {
        const tbody = document.getElementById('history-list');
        const history = JSON.parse(localStorage.getItem('cp_history') || '[]');
        tbody.innerHTML = '';
        if (history.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6" style="text-align:center; padding: 2rem;">No attempts yet.</td></tr>';
            return;
        }
        history.forEach(h => {
            const tr = document.createElement('tr');
            const date = new Date(h.date).toLocaleDateString() + ' ' + new Date(h.date).toLocaleTimeString();
            const min = Math.round(h.duration / 60000);
            tr.innerHTML = `
                <td>${date}</td>
                <td><span class="badge badge-info">${h.course}</span></td>
                <td>${h.mode.toUpperCase()}</td>
                <td style="color: ${h.percent >= 75 ? 'var(--success)' : 'var(--danger)'}; font-weight: bold;">${h.percent}%</td>
                <td>${min} min</td>
                <td>${h.score}/${h.total}</td>
            `;
            tbody.appendChild(tr);
        });
    },

    exportHistory: function () {
        const history = localStorage.getItem('cp_history');
        const blob = new Blob([history], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'cloudpro-history.json';
        a.click();
    }
};

window.onload = function () {
    app.init();
};
