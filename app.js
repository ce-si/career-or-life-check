const dimensions = {
  work: { code: "A", label: "工作错配", result: "先看工作本身", short: "换工作变量" },
  life: { code: "B", label: "生活失衡", result: "先换生活算法", short: "换活法" },
  recovery: { code: "C", label: "判断透支", result: "先恢复判断力", short: "先恢复" },
};

const questions = [
  {
    scene: "休息充分后的周一 · 工作错配",
    text: "如果先好好休息三天，再想到核心工作内容，你的感觉更接近？",
    dimension: "work",
    options: ["仍有兴趣，愿意继续做深", "有些乏味，但能找到想改善的部分", "大部分内容都不想再做", "即使状态很好，也不愿再回到这类工作"],
  },
  {
    scene: "晚上 19:06 · 生活失衡",
    text: "忙完一天，你的私人时间通常如何开始？",
    dimension: "life",
    options: ["能按计划切换到自己的生活", "会再处理一会儿消息，之后能停下", "人已下班，注意力仍一直留在工作", "没有明确下班，工作随时会重新开始"],
  },
  {
    scene: "刚醒来的十分钟 · 判断透支",
    text: "一个普通工作日醒来时，你的身体通常是什么状态？",
    dimension: "recovery",
    options: ["精神比较稳定，能正常开始一天", "启动得有点慢，活动后会好转", "睡过仍觉得累，要靠意志起床", "长期明显疲惫或不适，已经影响日常"],
  },
  {
    scene: "把条件调好一点 · 工作错配",
    text: "如果薪资和工作量都有改善，你还愿意留在现在的工作里吗？",
    dimension: "work",
    options: ["愿意，主要矛盾大概会缓解", "大概率愿意，但还有一两处想调整", "还是会犹豫，内容或环境并不适合", "仍然不愿意，根本问题不在待遇和忙碌"],
  },
  {
    scene: "私人计划被打断 · 生活失衡",
    text: "别人临时占用你原本留给自己的时间时，你通常会？",
    dimension: "life",
    options: ["判断必要性，不合适就拒绝", "偶尔配合，也会重新安排自己的时间", "先答应下来，之后独自消化不满", "几乎总是让步，自己的安排排在最后"],
  },
  {
    scene: "一个普通选择 · 判断透支",
    text: "最近要做一个并不重大的决定时，你通常？",
    dimension: "recovery",
    options: ["能比较选项，并在合理时间决定", "需要多想一会儿，但不太影响行动", "容易反复纠结，把决定拖到最后", "只想逃开选择，希望任何人替我决定"],
  },
  {
    scene: "表达专业判断 · 工作错配",
    text: "当你提出不同意见或合理建议时，环境通常怎样回应？",
    dimension: "work",
    options: ["愿意讨论，也可能据此调整", "不一定采纳，但能认真听完", "经常被忽略，只能照旧执行", "表达会带来惩罚或羞辱，所以最好沉默"],
  },
  {
    scene: "评价这一天 · 生活失衡",
    text: "你通常用什么判断自己今天过得是否值得？",
    dimension: "life",
    options: ["工作、关系、感受和休息都会算进去", "主要看完成了什么，也能允许自己休息", "事情没做完就很难安心停下", "工作表现不好时，会否定整个人的价值"],
  },
  {
    scene: "需要专注一小时 · 判断透支",
    text: "最近面对一项熟悉任务，你的注意力通常能维持多久？",
    dimension: "recovery",
    options: ["大体能完成，中间偶尔分心", "需要刻意隔绝干扰才能继续", "频繁走神，一小时的事会拖很久", "很难理解或推进，连开始都觉得吃力"],
  },
  {
    scene: "能力使用率 · 工作错配",
    text: "现在的工作，有多少机会让你使用并积累想要的能力？",
    dimension: "work",
    options: ["很多，正在形成长期积累", "有一些，只是比预期慢", "很少，大部分时间在重复消耗", "几乎没有，继续做只会离目标更远"],
  },
  {
    scene: "翻开这一周 · 生活失衡",
    text: "你的日程里，有多少时间是自己主动选择怎么使用的？",
    dimension: "life",
    options: ["每天都有一段明确属于自己的时间", "忙的时候会变少，但一周仍能找回来", "很少，大多被工作和责任提前占满", "几乎没有，我一直在响应别人的需要"],
  },
  {
    scene: "计划突然被打乱 · 判断透支",
    text: "一件小事打乱安排后，你的情绪通常多久能恢复？",
    dimension: "recovery",
    options: ["调整一下就能继续", "会烦一阵，但不影响整天", "很容易失控或低落很久", "像最后一根稻草，整个人会立刻崩掉"],
  },
  {
    scene: "想象两年以后 · 工作错配",
    text: "如果在相似岗位和环境里再做两年，你最真实的感受是？",
    dimension: "work",
    options: ["可以接受，我知道自己会积累什么", "略有担心，但能看到调整空间", "明显不甘心，怕继续停在原地", "很窒息，不愿让未来的自己还在这里"],
  },
  {
    scene: "工作之外的身份 · 生活失衡",
    text: "除了工作，最近还有哪部分生活会让你觉得“这就是我”？",
    dimension: "life",
    options: ["有几部分，我能稳定投入", "有一部分，只是最近时间变少了", "很难想起，过去喜欢的事都停了", "几乎没有，我的身份只剩下工作"],
  },
  {
    scene: "连续两天不工作 · 判断透支",
    text: "有机会完整休息两天后，你通常能恢复到什么程度？",
    dimension: "recovery",
    options: ["大体恢复，也会重新有兴趣做事", "能缓过来一半，基本状态变好", "身体停下了，疲惫和麻木仍在", "几乎没有恢复，想到工作又立刻耗尽"],
  },
  {
    scene: "尝试解决问题 · 工作错配",
    text: "当前工作里最困扰你的问题，通过沟通和调整解决的可能性有多大？",
    dimension: "work",
    options: ["比较大，过去也有问题被解决", "有可能，需要更具体地推动", "很小，相同问题已经反复出现", "几乎不可能，问题来自稳定的制度或价值观"],
  },
  {
    scene: "只调整生活变量 · 生活失衡",
    text: "如果岗位和收入不变，只把作息与工作边界调好，你想离开的程度会？",
    dimension: "life",
    options: ["几乎不变，我不满的是工作本身", "会好一点，但大概仍想离开", "会明显降低，很多不满来自失去生活", "大概就不想离开了，我只是太久没按自己的方式生活"],
  },
  {
    scene: "想离开的瞬间 · 判断透支",
    text: "“我必须马上离开”的念头，最常在什么状态下出现？",
    dimension: "recovery",
    options: ["即使清醒稳定时，判断也没有改变", "忙累之后会更明显", "睡不好或连续高压时会非常强烈", "几乎只在耗尽或崩溃时出现，让我想立刻逃开"],
  },
];

const reports = {
  work: {
    summary: "相对另外两组信号，你的阻力更多来自工作内容、环境或长期方向。先验证哪些问题属于这份工作，而不是把所有不适都归咎于自己不够会生活。",
    insight: "如果休息和边界都变好，你可能还是不想留在这里。",
    detail: "不匹配可能来自岗位内容、组织方式、成长路径或价值观。它不等于必须立刻辞职，但说明继续只优化作息，未必能触及根本问题。你需要的是一次有证据的外部比较。",
    reminder: "换工作不是逃跑；未经验证地跳走，才容易把同一个问题带去下一站。",
    actions: ["把不满分成“可协商”和“结构性”两列，每列只写三项具体事实。", "找两个相邻岗位，比较真实日常、能力要求和你会失去什么，不只看职位名称。", "选择一个最关键问题进行一次正式沟通，并记录对方是否给出明确行动与时间。"],
  },
  life: {
    summary: "你的工作未必需要立刻换掉，但现在的生活组织方式正在放大它的重量。节奏、边界和单一的成功标准，让工作占据了本该属于整个人生的空间。",
    insight: "你想离开的，也许不是岗位，而是一种只剩下岗位的生活。",
    detail: "当私人时间持续被侵占，休息带着愧疚，自我价值又只由产出来衡量，任何工作都会显得令人窒息。先把生活的主导权拿回一点，才能看清这份工作本身究竟合不合适。",
    reminder: "换活法不是劝自己忍耐，而是先停止用同一种方式消耗自己。",
    actions: ["圈出本周两个不可挪用的 45 分钟，只做与工作表现无关、但对你重要的事。", "写一句固定的收工提示，并在同一时间执行三天：记录进度、关闭入口、离开工作位置。", "暂停一件只是因为“别人都这样”才坚持的事，观察不做之后真正发生了什么。"],
  },
  recovery: {
    summary: "现在最突出的不是去哪条路，而是身心透支正在影响你判断路线。重大决定可以稍后，恢复最基本的睡眠、专注和情绪空间应该先发生。",
    insight: "当人已经耗尽时，每一条路看起来都像死路。",
    detail: "疲惫不会让你的不满失效，但会让选项变少、后果变大、行动更急。先把判断力恢复到可用状态，再重新回答“要不要走”，得到的结论通常更稳定，也更能执行。",
    reminder: "暂缓不可逆的决定，不是退缩，是先让做决定的人回来。",
    actions: ["给自己设一个 7 天观察期：不做不可逆决定，只记录睡眠、身体不适和离开念头出现的时刻。", "本周主动删减或求助一件非必要任务，为连续两晚的基本休息腾出空间。", "如果疲惫、失眠或情绪问题持续影响生活，预约医生、心理咨询师或其他合适的专业支持。"],
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
  document.querySelector(".progress-track").setAttribute("aria-valuenow", number);
  backButton.style.visibility = currentQuestion === 0 ? "hidden" : "visible";

  const options = document.querySelector("#options");
  options.innerHTML = question.options.map((option, index) => `
    <button class="option-button${answers[currentQuestion] === index ? " is-selected" : ""}" type="button" role="radio" aria-checked="${answers[currentQuestion] === index}" data-answer="${index}">
      <span class="option-letter">${String.fromCharCode(65 + index)}</span>
      <span class="option-text">${option}</span>
      <span class="option-arrow" aria-hidden="true">→</span>
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
  }, 280);
}

function getScores() {
  const totals = Object.fromEntries(dimensionOrder.map((key) => [key, 0]));
  const counts = Object.fromEntries(dimensionOrder.map((key) => [key, 0]));
  questions.forEach((question, index) => {
    totals[question.dimension] += answers[index] ?? 0;
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
  const statuses = ["整理你的 18 次选择…", "比较三组决策信号…", "生成你的下一步路线…"];
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
      resultTimeout = window.setTimeout(renderResult, 240);
    }
  }, 34);
}

function renderResult() {
  const scores = getScores();
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
    <div class="score-row${key === primary ? " is-primary" : ""}">
      <div class="score-row-top"><span>${dimensions[key].label}</span><strong>${value}%</strong></div>
      <div class="score-track"><span data-width="${value}%"></span></div>
    </div>
  `).join("");

  showScreen("result");
  window.requestAnimationFrame(() => window.requestAnimationFrame(() => {
    document.querySelectorAll(".score-track span").forEach((bar) => { bar.style.width = bar.dataset.width; });
  }));
}

function copyResult() {
  const scores = getScores();
  const primary = rankScores(scores)[0][0];
  const text = `我的路线判断：${dimensions[primary].result}\n${reports[primary].insight}\n三组信号：${Object.entries(scores).map(([key, value]) => `${dimensions[key].label} ${value}%`).join("、")}\n结果用于自我梳理，不是离职概率。`;
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
