/**
 * MAIN JAVASCRIPT CONTROLLER - WEB HỌC TIẾNG NGA TOÀN DIỆN
 * Flat UI Logic, Quiz Engine, Flashcards, Grammar Lookup & UTF-8 CSV Exporter
 */

// Application State
const AppState = {
  activeTab: 'roadmap',
  currentLevelId: 'a1',
  currentLessonId: 'a1_1',
  
  // Quiz State
  quizFilterLevel: 'all',
  quizQuestions: [],
  currentQuestionIndex: 0,
  userAnswers: [], // { question, selectedOptionIndex, isCorrect }
  quizScore: 0,
  quizCompleted: false,

  // Flashcards State
  fcIndex: 0,
  fcLevel: 'all',
  fcList: [],

  // History State
  history: []
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  loadHistoryFromStorage();
  initNavigation();
  initRoadmap();
  initQuiz();
  initFlashcards();
  initGrammarTables();
  updateStatsDashboard();
  renderHistoryTable();
});

// --- NAVIGATION CONTROLLER ---
function initNavigation() {
  const tabButtons = document.querySelectorAll('.nav-tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      switchTab(targetTab);
    });
  });
}

function switchTab(tabId) {
  AppState.activeTab = tabId;
  
  // Update nav buttons
  document.querySelectorAll('.nav-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
  });

  // Update tab content panels
  document.querySelectorAll('.tab-content').forEach(panel => {
    panel.classList.toggle('active', panel.id === `tab-${tabId}`);
  });

  // Refresh tab specific views
  if (tabId === 'history') {
    renderHistoryTable();
    updateStatsDashboard();
  } else if (tabId === 'flashcards') {
    renderFlashcard();
  }
}

// --- ROADMAP & LESSONS CONTROLLER ---
function initRoadmap() {
  renderLevelCards();
  loadLessonsForLevel(AppState.currentLevelId);
}

function renderLevelCards() {
  const container = document.getElementById('levelCardsContainer');
  if (!container) return;

  container.innerHTML = RUSSIAN_DATA.levels.map(level => `
    <div class="level-card ${level.id === AppState.currentLevelId ? 'active' : ''}" 
         onclick="selectLevel('${level.id}')">
      <span class="level-badge" style="background-color: ${level.badgeColor}">${level.code}</span>
      <h3>${level.name}</h3>
      <p>${level.desc}</p>
      <div style="margin-top: 0.8rem; font-size: 0.85rem; font-weight: 600; color: #2980b9;">
        📖 ${level.lessons.length} bài học trọng tâm
      </div>
    </div>
  `).join('');
}

function selectLevel(levelId) {
  AppState.currentLevelId = levelId;
  renderLevelCards();
  loadLessonsForLevel(levelId);
}

function loadLessonsForLevel(levelId) {
  const levelData = RUSSIAN_DATA.levels.find(lvl => lvl.id === levelId);
  if (!levelData || !levelData.lessons.length) return;

  const sidebarContainer = document.getElementById('lessonListSidebar');
  sidebarContainer.innerHTML = `
    <h4 style="color: #2c3e50; font-size: 1.05rem;">Danh sách bài học (${levelData.code})</h4>
    <div class="lesson-list">
      ${levelData.lessons.map(lesson => `
        <button class="lesson-item-btn ${lesson.id === AppState.currentLessonId ? 'active' : ''}"
                onclick="viewLesson('${lesson.id}')">
          ${lesson.title}
        </button>
      `).join('')}
    </div>
  `;

  // Select first lesson if current not in this level
  const lessonExists = levelData.lessons.some(l => l.id === AppState.currentLessonId);
  if (!lessonExists) {
    AppState.currentLessonId = levelData.lessons[0].id;
  }
  
  viewLesson(AppState.currentLessonId);
}

function viewLesson(lessonId) {
  AppState.currentLessonId = lessonId;
  
  // Highlight in sidebar
  document.querySelectorAll('.lesson-item-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('onclick').includes(lessonId));
  });

  // Find lesson data
  let lesson = null;
  let level = null;
  for (const lvl of RUSSIAN_DATA.levels) {
    const found = lvl.lessons.find(l => l.id === lessonId);
    if (found) {
      lesson = found;
      level = lvl;
      break;
    }
  }

  if (!lesson) return;

  const detailContainer = document.getElementById('lessonDetailContainer');
  detailContainer.innerHTML = `
    <div class="lesson-detail-header">
      <div>
        <span class="level-badge" style="background-color: ${level.badgeColor}; margin-bottom: 0.4rem;">${level.code}</span>
        <h2 style="font-size: 1.6rem; color: #2c3e50; margin-bottom: 0.2rem;">${lesson.title}</h2>
        <div style="font-size: 1.05rem; font-style: italic; color: #7f8c8d;">${lesson.subtitle}</div>
      </div>
      <div>
        <button class="flat-btn flat-btn-success" onclick="startQuizForLesson('${level.code}')">
          ✏️ Luyện tập ngay (${level.code})
        </button>
      </div>
    </div>
    <div class="lesson-detail-content">
      ${lesson.content}
    </div>
  `;

  // Render interactive alphabet if container exists
  if (document.getElementById('alphabetGridContainer')) {
    renderInteractiveAlphabet();
  }
}

// --- INTERACTIVE ALPHABET CONTROLLER ---
let currentPreviewChar = 'Автобус';

function renderInteractiveAlphabet() {
  const container = document.getElementById('alphabetGridContainer');
  if (!container || !RUSSIAN_DATA.alphabet) return;

  container.innerHTML = RUSSIAN_DATA.alphabet.map((item, idx) => `
    <button class="alpha-letter-card ${idx === 0 ? 'active' : ''}" 
            onclick="previewAlphabetLetter(${idx})" title="${item.name}: ${item.vn}">
      <span class="alpha-num">${item.num}</span>
      <span class="alpha-char">${item.upper} ${item.lower}</span>
      <span class="alpha-name">${item.name}</span>
    </button>
  `).join('');

  previewAlphabetLetter(0);
}

function previewAlphabetLetter(index) {
  const item = RUSSIAN_DATA.alphabet[index];
  if (!item) return;

  document.querySelectorAll('.alpha-letter-card').forEach((card, idx) => {
    card.classList.toggle('active', idx === index);
  });

  const previewCharElem = document.getElementById('alphaPreviewChar');
  const previewTitleElem = document.getElementById('alphaPreviewTitle');
  const previewDescElem = document.getElementById('alphaPreviewDesc');

  if (previewCharElem) previewCharElem.textContent = `${item.upper} ${item.lower}`;
  if (previewTitleElem) previewTitleElem.textContent = `Chữ cái ${item.upper} ${item.lower} - Tên: "${item.name}" (${item.type})`;
  if (previewDescElem) {
    previewDescElem.innerHTML = `
      <strong>Phiên âm IPA:</strong> <code>${item.ipa}</code> &bull; 
      <strong>Cách đọc tiếng Việt:</strong> ${item.vn} &bull; 
      <strong>Từ ví dụ:</strong> <span style="color: #2980b9; font-weight: 700;">${item.word}</span> <code>${item.word_ipa}</code>: ${item.word_vn}
    `;
  }

  currentPreviewChar = item.word;
  speakLetter(item.word);
}

function speakLetter(text) {
  if (!text) return;
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ru-RU';
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  }
}

function startQuizForLesson(levelCode) {
  // Set filter in quiz
  const filterSelect = document.getElementById('quizFilterSelect');
  if (filterSelect) {
    filterSelect.value = levelCode;
  }
  AppState.quizFilterLevel = levelCode;
  switchTab('practice');
  restartQuiz();
}

// --- QUIZ & PRACTICE ENGINE ---
function initQuiz() {
  const filterSelect = document.getElementById('quizFilterSelect');
  if (filterSelect) {
    filterSelect.addEventListener('change', (e) => {
      AppState.quizFilterLevel = e.target.value;
      restartQuiz();
    });
  }

  restartQuiz();
}

function restartQuiz() {
  let questions = RUSSIAN_DATA.exercises;
  if (AppState.quizFilterLevel !== 'all') {
    questions = questions.filter(q => q.level.toUpperCase() === AppState.quizFilterLevel.toUpperCase());
  }

  AppState.quizQuestions = questions;
  AppState.currentQuestionIndex = 0;
  AppState.userAnswers = [];
  AppState.quizScore = 0;
  AppState.quizCompleted = false;

  document.getElementById('quizActiveCard').style.display = 'block';
  document.getElementById('quizSummaryCard').classList.remove('show');

  renderCurrentQuestion();
}

function renderCurrentQuestion() {
  const total = AppState.quizQuestions.length;
  if (total === 0) {
    document.getElementById('quizActiveCard').innerHTML = `
      <div style="text-align: center; padding: 2rem;">
        <h3>Chưa có câu hỏi nào trong bộ lọc này!</h3>
        <p style="color: #7f8c8d; margin-top: 0.5rem;">Vui lòng chọn cấp độ khác trên thanh điều khiển.</p>
      </div>
    `;
    return;
  }

  const q = AppState.quizQuestions[AppState.currentQuestionIndex];
  const currentIdx = AppState.currentQuestionIndex + 1;
  const progressPercent = Math.round((currentIdx / total) * 100);

  // Update progress
  document.getElementById('quizProgressText').textContent = `Câu ${currentIdx} / ${total}`;
  document.getElementById('quizProgressBarFill').style.width = `${progressPercent}%`;

  // Question Info
  document.getElementById('questionBadge').textContent = q.level;
  document.getElementById('questionTopic').textContent = `Chủ đề: ${q.topic}`;
  document.getElementById('questionText').innerHTML = q.question;

  // Options
  const optionsContainer = document.getElementById('optionsContainer');
  const letters = ['A', 'B', 'C', 'D'];
  optionsContainer.innerHTML = q.options.map((opt, idx) => `
    <button class="quiz-option-btn" id="optBtn_${idx}" onclick="selectQuizOption(${idx})">
      <span class="option-marker">${letters[idx]}</span>
      <span>${opt}</span>
    </button>
  `).join('');

  // Reset feedback and action buttons
  const feedbackBox = document.getElementById('feedbackBox');
  feedbackBox.className = 'feedback-box';
  feedbackBox.innerHTML = '';

  const actionBtn = document.getElementById('quizActionButton');
  actionBtn.textContent = 'Kiểm tra đáp án';
  actionBtn.className = 'flat-btn flat-btn-primary';
  actionBtn.onclick = checkCurrentAnswer;
  actionBtn.disabled = true; // disabled until an option is selected

  AppState.selectedOptionIndex = null;
}

function selectQuizOption(index) {
  if (AppState.answerChecked) return;

  AppState.selectedOptionIndex = index;
  document.querySelectorAll('.quiz-option-btn').forEach((btn, idx) => {
    btn.classList.toggle('selected', idx === index);
  });

  const actionBtn = document.getElementById('quizActionButton');
  actionBtn.disabled = false;
}

function checkCurrentAnswer() {
  if (AppState.selectedOptionIndex === null) return;

  const q = AppState.quizQuestions[AppState.currentQuestionIndex];
  const isCorrect = (AppState.selectedOptionIndex === q.correctAnswer);
  
  AppState.answerChecked = true;
  if (isCorrect) AppState.quizScore++;

  // Record user answer
  AppState.userAnswers.push({
    questionId: q.id,
    level: q.level,
    topic: q.topic,
    question: q.question,
    selectedOptionText: q.options[AppState.selectedOptionIndex],
    correctOptionText: q.options[q.correctAnswer],
    isCorrect: isCorrect,
    explanation: q.explanation
  });

  // Highlight options
  document.querySelectorAll('.quiz-option-btn').forEach((btn, idx) => {
    btn.onclick = null; // disable further clicks
    if (idx === q.correctAnswer) {
      btn.classList.add('correct');
    } else if (idx === AppState.selectedOptionIndex && !isCorrect) {
      btn.classList.add('wrong');
    }
  });

  // Show Feedback Box
  const feedbackBox = document.getElementById('feedbackBox');
  feedbackBox.className = `feedback-box show ${isCorrect ? 'correct' : 'wrong'}`;
  feedbackBox.innerHTML = `
    <div class="feedback-title">
      ${isCorrect ? '✅ Chính xác! Tuyệt vời!' : '❌ Chưa chính xác!'}
    </div>
    <div class="feedback-explanation">
      <strong>Giải thích:</strong> ${q.explanation}
    </div>
  `;

  // Update Action Button to Next / Finish
  const actionBtn = document.getElementById('quizActionButton');
  const isLast = (AppState.currentQuestionIndex === AppState.quizQuestions.length - 1);
  actionBtn.textContent = isLast ? 'Hoàn thành bài tập' : 'Câu tiếp theo ➔';
  actionBtn.className = 'flat-btn flat-btn-success';
  actionBtn.onclick = isLast ? finishQuiz : nextQuestion;
}

function nextQuestion() {
  AppState.answerChecked = false;
  AppState.selectedOptionIndex = null;
  AppState.currentQuestionIndex++;
  renderCurrentQuestion();
}

function finishQuiz() {
  AppState.quizCompleted = true;
  document.getElementById('quizActiveCard').style.display = 'none';

  const total = AppState.quizQuestions.length;
  const score = AppState.quizScore;
  const percent = Math.round((score / total) * 100);

  // Save attempt to history
  const attemptRecord = {
    id: 'ATT_' + Date.now(),
    date: new Date().toLocaleString('vi-VN'),
    level: AppState.quizFilterLevel === 'all' ? 'Tổng hợp' : AppState.quizFilterLevel,
    score: score,
    total: total,
    percentage: percent,
    details: AppState.userAnswers
  };

  AppState.history.unshift(attemptRecord);
  saveHistoryToStorage();
  updateStatsDashboard();

  // Show Summary
  const summaryCard = document.getElementById('quizSummaryCard');
  summaryCard.classList.add('show');

  document.getElementById('summaryScoreNum').textContent = `${score}/${total}`;
  document.getElementById('summaryScorePercentage').textContent = `${percent}%`;

  let badgeMsg = '';
  let badgeColor = '';
  if (percent >= 85) {
    badgeMsg = '🏆 Xuất sắc! Nắm vững kiến thức!';
    badgeColor = 'var(--color-success)';
  } else if (percent >= 66) {
    badgeMsg = '🎉 Đạt yêu cầu chuẩn TRKI!';
    badgeColor = 'var(--color-primary)';
  } else {
    badgeMsg = '💪 Cần ôn tập thêm bài học tương ứng!';
    badgeColor = 'var(--color-accent)';
  }

  const badgeElem = document.getElementById('summaryRatingBadge');
  badgeElem.textContent = badgeMsg;
  badgeElem.style.color = badgeColor;

  showToast('Đã hoàn thành bài tập và ghi nhận kết quả!');
}

// --- CSV EXPORTER (WITH UTF-8 BOM FOR FULL EXCEL/GOOGLE SHEETS SUPPORT) ---
/**
 * Xuất kết quả bài làm vừa làm xong ra file CSV
 */
function exportCurrentQuizCSV() {
  if (!AppState.userAnswers || AppState.userAnswers.length === 0) {
    alert('Chưa có dữ liệu bài làm để xuất CSV!');
    return;
  }

  const headers = [
    'Mã câu hỏi',
    'Cấp độ',
    'Chủ đề ngữ pháp',
    'Nội dung câu hỏi',
    'Câu trả lời của bạn',
    'Đáp án chính xác',
    'Kết quả',
    'Điểm',
    'Giải thích ngữ pháp'
  ];

  const rows = AppState.userAnswers.map(ans => [
    ans.questionId,
    ans.level,
    ans.topic,
    cleanForCSV(ans.question),
    cleanForCSV(ans.selectedOptionText),
    cleanForCSV(ans.correctOptionText),
    ans.isCorrect ? 'ĐÚNG' : 'SAI',
    ans.isCorrect ? 1 : 0,
    cleanForCSV(ans.explanation)
  ]);

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const fileName = `Ket_qua_tieng_Nga_${AppState.quizFilterLevel}_${timestamp}.csv`;

  downloadCSV(headers, rows, fileName);
}

/**
 * Xuất toàn bộ lịch sử học tập ra CSV
 */
function exportAllHistoryCSV() {
  if (!AppState.history || AppState.history.length === 0) {
    alert('Chưa có lịch sử làm bài để xuất CSV!');
    return;
  }

  const headers = [
    'Mã lần thi',
    'Thời gian thực hiện',
    'Cấp độ',
    'Số câu đúng',
    'Tổng số câu',
    'Tỷ lệ chính xác (%)',
    'Đánh giá'
  ];

  const rows = AppState.history.map(item => [
    item.id,
    item.date,
    item.level,
    item.score,
    item.total,
    `${item.percentage}%`,
    item.percentage >= 66 ? 'ĐẠT' : 'CHƯA ĐẠT'
  ]);

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const fileName = `Lich_su_hoc_tieng_Nga_all_${timestamp}.csv`;

  downloadCSV(headers, rows, fileName);
}

/**
 * Tiện ích làm sạch chuỗi và escape chuẩn RFC 4180 cho CSV
 */
function cleanForCSV(text) {
  if (text === null || text === undefined) return '';
  // Strip HTML tags
  let cleaned = String(text).replace(/<[^>]*>/g, ' ');
  // Replace multiple spaces
  cleaned = cleaned.replace(/\s+/g, ' ').trim();
  // Escape quotes
  if (cleaned.includes('"') || cleaned.includes(',') || cleaned.includes('\n')) {
    cleaned = `"${cleaned.replace(/"/g, '""')}"`;
  }
  return cleaned;
}

/**
 * Tạo Blob UTF-8 với BOM và kích hoạt tải về máy
 */
function downloadCSV(headers, rows, fileName) {
  // UTF-8 BOM byte sequence: \uFEFF
  let csvContent = '\uFEFF';

  // Add header line
  csvContent += headers.map(h => `"${h.replace(/"/g, '""')}"`).join(',') + '\r\n';

  // Add data rows
  rows.forEach(row => {
    const rowLine = row.map(cell => {
      const cellStr = String(cell);
      if (cellStr.startsWith('"') && cellStr.endsWith('"')) {
        return cellStr;
      }
      if (cellStr.includes(',') || cellStr.includes('"') || cellStr.includes('\n')) {
        return `"${cellStr.replace(/"/g, '""')}"`;
      }
      return cellStr;
    }).join(',');
    csvContent += rowLine + '\r\n';
  });

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  showToast(`📥 Đã xuất file CSV thành công: ${fileName}`);
}

// --- FLASHCARDS CONTROLLER ---
function initFlashcards() {
  filterFlashcards('all');

  const levelSelect = document.getElementById('fcFilterLevel');
  if (levelSelect) {
    levelSelect.addEventListener('change', (e) => {
      filterFlashcards(e.target.value);
    });
  }

  const wrapper = document.getElementById('flashcardWrapper');
  if (wrapper) {
    wrapper.addEventListener('click', () => {
      wrapper.classList.toggle('flipped');
    });
  }
}

function filterFlashcards(level) {
  AppState.fcLevel = level;
  if (level === 'all') {
    AppState.fcList = RUSSIAN_DATA.flashcards;
  } else {
    AppState.fcList = RUSSIAN_DATA.flashcards.filter(c => c.level.toUpperCase() === level.toUpperCase());
  }
  AppState.fcIndex = 0;
  renderFlashcard();
}

function renderFlashcard() {
  const wrapper = document.getElementById('flashcardWrapper');
  if (!wrapper) return;
  wrapper.classList.remove('flipped');

  if (AppState.fcList.length === 0) {
    document.getElementById('fcWord').textContent = 'Không có từ vựng';
    return;
  }

  const card = AppState.fcList[AppState.fcIndex];
  document.getElementById('fcCounter').textContent = `${AppState.fcIndex + 1} / ${AppState.fcList.length}`;
  document.getElementById('fcBadge').textContent = card.level;
  document.getElementById('fcWord').textContent = card.stress || card.ru;
  document.getElementById('fcIpa').textContent = card.ipa;
  document.getElementById('fcPos').textContent = card.pos;

  document.getElementById('fcMeaning').textContent = card.vn;
  document.getElementById('fcExample').textContent = `Ví dụ: "${card.ex}"`;
}

function prevFlashcard(e) {
  if (e) e.stopPropagation();
  if (AppState.fcList.length === 0) return;
  AppState.fcIndex = (AppState.fcIndex - 1 + AppState.fcList.length) % AppState.fcList.length;
  renderFlashcard();
}

function nextFlashcard(e) {
  if (e) e.stopPropagation();
  if (AppState.fcList.length === 0) return;
  AppState.fcIndex = (AppState.fcIndex + 1) % AppState.fcList.length;
  renderFlashcard();
}

function speakCurrentWord(e) {
  if (e) e.stopPropagation();
  const card = AppState.fcList[AppState.fcIndex];
  if (!card) return;

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(card.ru);
    utterance.lang = 'ru-RU';
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  } else {
    alert('Trình duyệt của bạn không hỗ trợ tính năng phát âm Web Speech API.');
  }
}

// --- GRAMMAR TABLES CONTROLLER ---
function initGrammarTables() {
  renderNounDeclensionTable();
  renderVerbPrefixesTable();
}

function renderNounDeclensionTable() {
  const container = document.getElementById('nounTableContainer');
  if (!container) return;
  const tableData = RUSSIAN_DATA.grammarTables.nounDeclension;

  container.innerHTML = `
    <h3 style="color: #2c3e50; margin-bottom: 0.75rem;">${tableData.title}</h3>
    <table class="flat-table">
      <thead>
        <tr>${tableData.columns.map(c => `<th>${c}</th>`).join('')}</tr>
      </thead>
      <tbody>
        ${tableData.rows.map(r => `
          <tr>
            <td><strong>${r[0]}</strong></td>
            <td><em>${r[1]}</em></td>
            <td>${r[2]}</td>
            <td>${r[3]}</td>
            <td>${r[4]}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function renderVerbPrefixesTable() {
  const container = document.getElementById('prefixesTableContainer');
  if (!container) return;
  const tableData = RUSSIAN_DATA.grammarTables.verbPrefixes;

  container.innerHTML = `
    <h3 style="color: #2c3e50; margin: 1.5rem 0 0.75rem 0;">${tableData.title}</h3>
    <table class="flat-table">
      <thead>
        <tr>${tableData.columns.map(c => `<th>${c}</th>`).join('')}</tr>
      </thead>
      <tbody>
        ${tableData.rows.map(r => `
          <tr>
            <td><strong style="color: #e67e22; font-size: 1.1rem;">${r[0]}</strong></td>
            <td>${r[1]}</td>
            <td><strong>${r[2]}</strong></td>
            <td><strong>${r[3]}</strong></td>
            <td><em>${r[4]}</em></td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

// --- HISTORY & ANALYTICS ---
function loadHistoryFromStorage() {
  try {
    const raw = localStorage.getItem('russian_learning_history');
    if (raw) {
      AppState.history = JSON.parse(raw);
    }
  } catch (e) {
    console.error('Error loading history:', e);
    AppState.history = [];
  }
}

function saveHistoryToStorage() {
  try {
    localStorage.setItem('russian_learning_history', JSON.stringify(AppState.history));
  } catch (e) {
    console.error('Error saving history:', e);
  }
}

function updateStatsDashboard() {
  const totalAttempts = AppState.history.length;
  let totalQuestionsAnswered = 0;
  let totalCorrect = 0;

  AppState.history.forEach(h => {
    totalQuestionsAnswered += h.total;
    totalCorrect += h.score;
  });

  const avgAccuracy = totalQuestionsAnswered > 0 
    ? Math.round((totalCorrect / totalQuestionsAnswered) * 100) 
    : 0;

  const statAttemptsElem = document.getElementById('statTotalAttempts');
  const statAnsweredElem = document.getElementById('statTotalAnswered');
  const statAccuracyElem = document.getElementById('statAvgAccuracy');

  if (statAttemptsElem) statAttemptsElem.textContent = totalAttempts;
  if (statAnsweredElem) statAnsweredElem.textContent = totalQuestionsAnswered;
  if (statAccuracyElem) statAccuracyElem.textContent = `${avgAccuracy}%`;
}

function renderHistoryTable() {
  const container = document.getElementById('historyTableContainer');
  if (!container) return;

  if (AppState.history.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2rem; color: #7f8c8d;">
        <p>Chưa có lịch sử làm bài nào.</p>
        <p style="margin-top: 0.5rem;">Hãy sang tab "Luyện tập & Kiểm tra" để thử sức ngay!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <table class="flat-table">
      <thead>
        <tr>
          <th>Thời gian</th>
          <th>Cấp độ</th>
          <th>Điểm số</th>
          <th>Tỷ lệ</th>
          <th>Đánh giá</th>
        </tr>
      </thead>
      <tbody>
        ${AppState.history.map(item => `
          <tr>
            <td>${item.date}</td>
            <td><span class="level-badge" style="background-color: var(--color-primary);">${item.level}</span></td>
            <td><strong>${item.score} / ${item.total}</strong></td>
            <td><strong>${item.percentage}%</strong></td>
            <td>
              <span style="font-weight: 700; color: ${item.percentage >= 66 ? 'var(--color-success)' : 'var(--color-danger)'};">
                ${item.percentage >= 66 ? '✓ Đạt' : '✗ Cần ôn lại'}
              </span>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function clearAllHistory() {
  if (confirm('Bạn có chắc chắn muốn xóa toàn bộ lịch sử luyện tập không?')) {
    AppState.history = [];
    saveHistoryToStorage();
    renderHistoryTable();
    updateStatsDashboard();
    showToast('Đã xóa sạch lịch sử học tập.');
  }
}

// --- UTILITIES: TOAST NOTIFICATION ---
function showToast(message) {
  let toast = document.getElementById('appToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'appToast';
    toast.className = 'flat-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

