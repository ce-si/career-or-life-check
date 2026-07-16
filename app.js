const dimensions = {
  steady: { code: "UP", label: "稳定承接感", result: "更适合年上型关系", short: "年上型" },
  spark: { code: "DOWN", label: "鲜活带动感", result: "更适合年下型关系", short: "年下型" },
  sync: { code: "SYNC", label: "平等同频感", result: "更适合同频型关系", short: "同频型" },
};

const questions = [
  {
    scene: "稳定承接感 · SIGNAL UP",
    text: "当你被一件难事拖住时，理想伴侣的第一反应是？",
    dimension: "steady",
    options: ["先让我自己消化，等我开口再聊", "听我讲完，再问我需要什么", "陪我把问题拆开，一起找出口", "稳稳接住情绪，并带我找到下一步"],
  },
  {
    scene: "鲜活带动感 · SIGNAL DOWN",
    text: "临时空出一个晚上，你更期待对方怎么安排？",
    dimension: "spark",
    options: ["按原计划各自休息，之后再约", "一起吃顿熟悉的饭，轻松待着", "临时提一个有趣的小活动", "拉我去做一件从没试过的新鲜事"],
  },
  {
    scene: "平等同频感 · SIGNAL SYNC",
    text: "两个人意见不合时，什么最让你安心？",
    dimension: "sync",
    options: ["对方尽快给出一个明确结论", "先听更有经验的一方怎么判断", "各说理由，再由更坚持的人决定", "平等讨论，直到双方都愿意承担决定"],
  },
  {
    scene: "稳定承接感 · SIGNAL UP",
    text: "对方比你更熟悉某件事时，你最享受哪种相处？",
    dimension: "steady",
    options: ["各自处理，不必特别介入", "需要时给我一个简短提醒", "耐心讲清思路，让我少走弯路", "自然地带着我做，同时尊重我的节奏"],
  },
  {
    scene: "鲜活带动感 · SIGNAL DOWN",
    text: "一段关系最有生命力的时刻，对你来说更像？",
    dimension: "spark",
    options: ["安静地做各自熟悉的事", "偶尔分享新发现和小惊喜", "两个人总能把普通日子玩出变化", "对方不断带来新视角，让我也想往前走"],
  },
  {
    scene: "平等同频感 · SIGNAL SYNC",
    text: "关于日常相处节奏，你更看重什么？",
    dimension: "sync",
    options: ["有人替我们把大部分事情安排好", "各自负责擅长的部分就好", "重要安排一起商量，日常保留空间", "双方都能表达、协商，也能独立做决定"],
  },
  {
    scene: "稳定承接感 · SIGNAL UP",
    text: "你情绪低落却说“没事”时，希望对方怎么做？",
    dimension: "steady",
    options: ["相信我说的，给我一点空间", "轻轻问一次，需要时再靠近", "看出我的状态，陪我慢慢说出来", "不逼问也不离开，让我确定有人接得住"],
  },
  {
    scene: "鲜活带动感 · SIGNAL DOWN",
    text: "周末计划突然被雨打乱，你更喜欢对方？",
    dimension: "spark",
    options: ["取消安排，各自回到自己的节奏", "换成一个稳妥的室内选项", "马上搜新去处，把意外变成彩蛋", "兴致不减，带着我即兴创造另一种玩法"],
  },
  {
    scene: "平等同频感 · SIGNAL SYNC",
    text: "当伴侣给你建议时，哪种方式最舒服？",
    dimension: "sync",
    options: ["直接告诉我应该怎么做", "给出建议，最后由我判断", "先问我怎么看，再补充他的视角", "把我当成完整的合作者，一起推演选择"],
  },
  {
    scene: "稳定承接感 · SIGNAL UP",
    text: "面对关系里的未来安排，你更容易被什么打动？",
    dimension: "steady",
    options: ["先把眼前过好，不急着谈太远", "有大致方向，遇到变化再调整", "对方愿意提前想清风险和责任", "对方能给出可靠规划，也为我的选择留位置"],
  },
  {
    scene: "鲜活带动感 · SIGNAL DOWN",
    text: "你更容易被哪种约会状态打动？",
    dimension: "spark",
    options: ["流程舒服，不发生意外就很好", "有一两个用心准备的小细节", "对方有热情，愿意一起尝试新东西", "两个人像临时逃跑一样，笑着闯进新体验"],
  },
  {
    scene: "平等同频感 · SIGNAL SYNC",
    text: "当一方进入忙碌期，你觉得舒服的关系方式是？",
    dimension: "sync",
    options: ["另一方先接管安排，等忙完再说", "减少联系，默认彼此能够理解", "提前说清需求，一起调整相处频率", "既互相支持，也不默认任何一方必须牺牲"],
  },
  {
    scene: "稳定承接感 · SIGNAL UP",
    text: "和伴侣一起进入陌生社交场合时，你更希望？",
    dimension: "steady",
    options: ["各自应对，结束后再会合", "对方偶尔确认我是否自在", "对方自然帮我进入话题和人群", "他稳住场面，也随时照顾我的边界"],
  },
  {
    scene: "鲜活带动感 · SIGNAL DOWN",
    text: "相处久了，你希望两个人怎样对抗无聊？",
    dimension: "spark",
    options: ["接受平淡，不必刻意制造变化", "偶尔换一家餐厅或散步路线", "定期找新兴趣，让彼此保持好奇", "不断交换新世界，让关系也跟着一起生长"],
  },
  {
    scene: "平等同频感 · SIGNAL SYNC",
    text: "发生误会之后，你希望修复过程更像？",
    dimension: "sync",
    options: ["由更冷静的人先定下处理方式", "一方解释，另一方确认是否接受", "双方轮流说感受，再找共同方案", "不争输赢，一起还原问题并重建边界"],
  },
  {
    scene: "稳定承接感 · SIGNAL UP",
    text: "对方在生活经验上比你丰富，你更期待？",
    dimension: "steady",
    options: ["经验归经验，不要影响我的决定", "遇到大事时提醒我可能的风险", "愿意分享方法，也允许我自己试错", "成为可靠参照，但从不把经验变成控制"],
  },
  {
    scene: "鲜活带动感 · SIGNAL DOWN",
    text: "你希望两个人的聊天，更常带给你什么？",
    dimension: "spark",
    options: ["熟悉和放松，不需要太多变化", "一些新鲜信息和不同看法", "越聊越有能量，常常冒出新点子", "像打开另一扇窗，让我想去体验更大的世界"],
  },
  {
    scene: "平等同频感 · SIGNAL SYNC",
    text: "如果把年龄标签拿掉，你最想保留的判断标准是？",
    dimension: "sync",
    options: ["谁更能照顾和带领这段关系", "谁的生活阶段更适合长期安排", "我们能不能坦白协商彼此的需要", "我们是否平等、同频，也尊重各自成长"],
  },
];

const reports = {
  steady: {
    summary: "你被“年上感”吸引的核心，可能不是年龄数字，而是关系里那种有分寸的承接：能看见情绪、愿意承担，也能在复杂时刻给出稳定参照。",
    insight: "你想要的不是被管理，而是在不确定里仍有人稳稳站在身边。",
    detail: "当对方能提前想一步、说到做到，并用经验帮你减少无谓消耗时，你更容易放松下来。这类需要常让年上型关系显得有吸引力，但真正重要的是成熟与尊重能否同时存在。",
    reminder: "可靠不等于控制；真正适合你的承接，会为你的判断和成长留出位置。",
    actions: ["观察对方的“照顾”是在回应你的需要，还是替你做主。", "留意承诺落地的稳定度，而不只听成熟好听的话。", "遇到分歧时，确认经验差是否仍允许你平等表达。"],
  },
  spark: {
    summary: "你被“年下感”吸引的核心，可能是关系里的鲜活与流动：好奇、直接、愿意试错，也能把普通日子变成两个人共同生长的新现场。",
    insight: "你想要的不是更年轻的人，而是一段不会太快失去好奇心的关系。",
    detail: "热情、行动力和新视角会明显点亮你。你更容易在轻快互动里打开自己，也愿意和对方一起创造体验。年下型关系可能承载这种想象，但活力仍需要责任感和稳定沟通来托住。",
    reminder: "新鲜不等于不负责；让你心动的活力，也应该经得起日常与承诺。",
    actions: ["观察新鲜感过去后，对方是否仍愿意处理琐事和分歧。", "分清“带来活力”和“需要你一直善后”之间的界线。", "确认你们对承诺、节奏和未来的理解是否同样具体。"],
  },
  sync: {
    summary: "对你来说，年龄差可能不是决定变量。真正影响舒适度的，是双方能不能平等协商、彼此保留主体性，并在相近的关系节奏里共同承担。",
    insight: "比起谁带领谁，你更在意两个人能不能并肩把关系过明白。",
    detail: "你会被能够说清需要、尊重边界、愿意共同决策的人吸引。年上或年下都可能适合你，前提是年龄和经验没有变成权力，而差异可以被放到桌面上坦诚讨论。",
    reminder: "同频不是完全相同，而是差异出现时，双方仍愿意平等地理解和调整。",
    actions: ["比较彼此的生活阶段，而不是只比较出生年份。", "观察重要决定里，双方是否拥有同等的知情与表达空间。", "确认差异出现时，你们能协商，而不是靠一方长期迁就。"],
  },
};

const dimensionOrder = Object.keys(dimensions);
let currentQuestion = 0;
let answers = Array(questions.length).fill(null);
let analysisInterval = null;
let resultTimeout = null;

const screens = [...document.querySelectorAll(".screen")];
const siteHeader = document.querySelector(".site-header");
const questionPanel = document.querySelector("#question-panel");
const backButton = document.querySelector("#back-button");
const resultScreen = document.querySelector("#result");
const progressTrack = document.querySelector(".progress-track");

function showScreen(id) {
  screens.forEach((screen) => screen.classList.toggle("is-active", screen.id === id));
  siteHeader.style.display = id === "home" ? "flex" : "none";
  window.scrollTo({ top: 0, behavior: "instant" });
}

function startQuiz(reset = false) {
  clearAnalysisTimers();
  if (reset) {
    currentQuestion = 0;
    answers = Array(questions.length).fill(null);
  } else {
    const firstEmpty = answers.findIndex((answer) => answer === null);
    currentQuestion = firstEmpty === -1 ? 0 : firstEmpty;
  }
  showScreen("quiz");
  renderQuestion();
}

function renderQuestion(animate = false) {
  const question = questions[currentQuestion];
  const number = currentQuestion + 1;
  const percent = Math.round((number / questions.length) * 100);

  document.querySelector("#question-scene").textContent = question.scene;
  document.querySelector("#question-title").textContent = question.text;
  document.querySelector("#question-route-number").textContent = String(number).padStart(2, "0");
  document.querySelector("#progress-label").textContent = `${String(number).padStart(2, "0")} / ${questions.length}`;
  document.querySelector("#progress-percent").textContent = `${percent}%`;
  document.querySelector("#progress-bar").style.width = `${percent}%`;
  progressTrack.setAttribute("aria-valuenow", number);
  progressTrack.setAttribute("aria-valuemax", questions.length);
  backButton.style.visibility = currentQuestion === 0 ? "hidden" : "visible";

  const options = document.querySelector("#options");
  options.innerHTML = question.options.map((option, index) => `
    <button class="option-button${answers[currentQuestion] === index ? " is-selected" : ""}" type="button" role="radio" aria-checked="${answers[currentQuestion] === index}" data-answer="${index}">
      <span class="option-letter">${String.fromCharCode(65 + index)}</span>
      <span class="option-text">${option}</span>
      <span class="option-arrow" aria-hidden="true">↗</span>
    </button>
  `).join("");

  options.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => selectAnswer(Number(button.dataset.answer), button));
  });

  if (animate) {
    questionPanel.classList.remove("is-changing");
    void questionPanel.offsetWidth;
    questionPanel.classList.add("is-changing");
  }
}

function selectAnswer(index, button) {
  if (questionPanel.dataset.locked === "true") return;
  questionPanel.dataset.locked = "true";
  answers[currentQuestion] = index;
  document.querySelectorAll(".option-button").forEach((option) => {
    const selected = option === button;
    option.classList.toggle("is-selected", selected);
    option.setAttribute("aria-checked", selected);
  });

  window.setTimeout(() => {
    if (currentQuestion < questions.length - 1) {
      currentQuestion += 1;
      renderQuestion(true);
      questionPanel.dataset.locked = "false";
    } else {
      questionPanel.dataset.locked = "false";
      runAnalysis();
    }
  }, 260);
}

function calculateScores(answerList) {
  const totals = Object.fromEntries(dimensionOrder.map((key) => [key, 0]));
  const counts = Object.fromEntries(dimensionOrder.map((key) => [key, 0]));
  questions.forEach((question, index) => {
    totals[question.dimension] += answerList[index] ?? 0;
    counts[question.dimension] += 1;
  });
  return Object.fromEntries(dimensionOrder.map((key) => [key, Math.round((totals[key] / (counts[key] * 3)) * 100)]));
}

function rankScores(scores) {
  return Object.entries(scores).sort((a, b) => b[1] - a[1] || dimensionOrder.indexOf(a[0]) - dimensionOrder.indexOf(b[0]));
}

function clearAnalysisTimers() {
  window.clearInterval(analysisInterval);
  window.clearTimeout(resultTimeout);
}

function runAnalysis() {
  clearAnalysisTimers();
  showScreen("analysis");
  const statuses = ["整理你的 18 次选择…", "比较三组关系信号…", "生成你的关系时差报告…"];
  const stepNodes = [...document.querySelectorAll(".analysis-steps span")];
  const numberNode = document.querySelector("#analysis-number");
  const increment = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 20 : 2;
  let value = 0;

  numberNode.textContent = value;
  analysisInterval = window.setInterval(() => {
    value = Math.min(100, value + increment);
    numberNode.textContent = value;
    const step = Math.min(stepNodes.length - 1, Math.floor(value / (100 / stepNodes.length)));
    document.querySelector("#analysis-status").textContent = statuses[step];
    stepNodes.forEach((node, index) => node.classList.toggle("is-running", index === step));
    if (value >= 100) {
      window.clearInterval(analysisInterval);
      resultTimeout = window.setTimeout(renderResult, 220);
    }
  }, 32);
}

function renderResult() {
  const scores = calculateScores(answers);
  const sorted = rankScores(scores);
  const [primary, primaryScore] = sorted[0];
  const report = reports[primary];

  resultScreen.dataset.route = primary;
  document.querySelector("#route-code").textContent = dimensions[primary].code;
  document.querySelector("#result-title").textContent = dimensions[primary].result;
  document.querySelector("#result-summary").textContent = report.summary;
  document.querySelector("#result-insight").textContent = report.insight;
  document.querySelector("#result-detail").textContent = report.detail;
  document.querySelector("#result-reminder").textContent = report.reminder;
  document.querySelector("#signal-level").textContent = `${primaryScore}%`;
  document.querySelector("#report-date").textContent = new Intl.DateTimeFormat("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
  document.querySelector("#action-list").innerHTML = report.actions.map((action) => `<li>${action}</li>`).join("");
  document.querySelector("#score-list").innerHTML = sorted.map(([key, value]) => `
    <div class="score-column${key === primary ? " is-primary" : ""}">
      <strong>${value}%</strong>
      <div class="score-track"><span data-height="${value}%"></span></div>
      <small>${dimensions[key].label}</small>
    </div>
  `).join("");

  showScreen("result");
  window.requestAnimationFrame(() => window.requestAnimationFrame(() => {
    document.querySelectorAll(".score-track span").forEach((bar) => { bar.style.height = bar.dataset.height; });
  }));
}

function copyResult() {
  const scores = calculateScores(answers);
  const primary = rankScores(scores)[0][0];
  const text = `我的关系时差结果：${dimensions[primary].result}\n${reports[primary].insight}\n三组信号：${Object.entries(scores).map(([key, value]) => `${dimensions[key].label} ${value}%`).join("、")}\n结果仅用于自我观察，不是匹配概率或择偶结论。`;
  const button = document.querySelector("#copy-result");
  let completed = false;
  let fallbackTimer;

  const done = () => {
    if (completed) return;
    completed = true;
    window.clearTimeout(fallbackTimer);
    button.textContent = "已复制结果";
    window.setTimeout(() => { button.textContent = "复制结果摘要"; }, 1800);
  };

  const failed = () => {
    if (completed) return;
    completed = true;
    window.clearTimeout(fallbackTimer);
    button.textContent = "复制失败，请重试";
    window.setTimeout(() => { button.textContent = "复制结果摘要"; }, 1800);
  };

  if (fallbackCopy(text)) {
    done();
  } else if (navigator.clipboard?.writeText) {
    fallbackTimer = window.setTimeout(failed, 1200);
    navigator.clipboard.writeText(text).then(done).catch(failed);
  } else {
    failed();
  }
}

function fallbackCopy(text) {
  const area = document.createElement("textarea");
  area.value = text;
  area.style.position = "fixed";
  area.style.opacity = "0";
  document.body.appendChild(area);
  area.select();
  const copied = document.execCommand("copy");
  area.remove();
  return copied;
}

document.addEventListener("click", (event) => {
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (action === "start") startQuiz();
  if (action === "home") showScreen("home");
  if (action === "restart") startQuiz(true);
});

backButton.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion -= 1;
    renderQuestion(true);
  }
});

document.querySelector("#copy-result").addEventListener("click", copyResult);

globalThis.__assessmentData = { dimensions, questions, reports, calculateScores, rankScores };
