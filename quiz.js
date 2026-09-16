/* ========================================================================== 
   Nuni – interactive anesthesia quiz for ages 7–12 and 13–18
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const shell = document.querySelector(".quiz-shell");
  if (!shell) return;

  const count = shell.querySelector(".quiz-count");
  const progress = shell.querySelector(".quiz-progress");
  const progressFill = progress.querySelector("span");
  const questionView = shell.querySelector(".quiz-question-view");
  const questionText = shell.querySelector(".quiz-question");
  const options = shell.querySelector(".quiz-options");
  const feedback = shell.querySelector(".quiz-feedback");
  const nextButton = shell.querySelector(".quiz-next");
  const result = shell.querySelector(".quiz-result");
  const scoreText = shell.querySelector(".quiz-score");
  const resultMessage = shell.querySelector(".quiz-result-message");
  const restartButton = shell.querySelector(".quiz-restart");

  let questionIndex = 0;
  let score = 0;
  let answered = false;

  const format = (template, values) => Object.entries(values).reduce(
    (text, [key, value]) => text.replace(`{${key}}`, value),
    template
  );

  function resetQuiz() {
    questionIndex = 0;
    score = 0;
    answered = false;
    result.hidden = true;
    questionView.hidden = false;
    renderQuestion();
  }

  function renderQuestion() {
    const quiz = window.NUNI.quiz;
    const t = window.NUNI.t;
    const item = quiz[questionIndex];
    answered = false;

    count.textContent = format(t.quiz_question_count, {
      current: questionIndex + 1,
      total: quiz.length
    });
    progress.setAttribute("aria-valuemax", quiz.length);
    progress.setAttribute("aria-valuenow", questionIndex + 1);
    progressFill.style.width = `${((questionIndex + 1) / quiz.length) * 100}%`;
    questionText.textContent = item.q;
    options.replaceChildren();

    item.choices.forEach((choice, choiceIndex) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "quiz-option";

      const marker = document.createElement("span");
      marker.className = "quiz-option-marker";
      marker.textContent = choiceIndex + 1;

      const label = document.createElement("span");
      label.textContent = choice;

      button.append(marker, label);
      button.addEventListener("click", () => selectAnswer(choiceIndex));
      options.append(button);
    });

    feedback.hidden = true;
    feedback.className = "quiz-feedback";
    feedback.replaceChildren();
    nextButton.hidden = true;
  }

  function selectAnswer(choiceIndex) {
    if (answered) return;
    answered = true;

    const quiz = window.NUNI.quiz;
    const t = window.NUNI.t;
    const item = quiz[questionIndex];
    const isCorrect = choiceIndex === item.answer;
    if (isCorrect) score += 1;

    [...options.children].forEach((button, index) => {
      button.disabled = true;
      if (index === item.answer) button.classList.add("is-correct");
      if (index === choiceIndex && !isCorrect) button.classList.add("is-wrong");
    });

    const status = document.createElement("strong");
    status.textContent = isCorrect ? t.quiz_correct : t.quiz_incorrect;
    const explanation = document.createElement("span");
    explanation.textContent = item.explanation;
    feedback.append(status, explanation);
    feedback.classList.add(isCorrect ? "is-correct" : "is-wrong");
    feedback.hidden = false;

    const lastQuestion = questionIndex === quiz.length - 1;
    nextButton.textContent = lastQuestion ? t.quiz_finish : t.quiz_next;
    nextButton.hidden = false;
    nextButton.focus();
  }

  function showResult() {
    const quiz = window.NUNI.quiz;
    const t = window.NUNI.t;
    questionView.hidden = true;
    result.hidden = false;
    scoreText.textContent = format(t.quiz_score, { score, total: quiz.length });
    resultMessage.textContent = score >= 8
      ? t.quiz_result_high
      : score >= 5
        ? t.quiz_result_mid
        : t.quiz_result_low;
    restartButton.focus();
  }

  nextButton.addEventListener("click", () => {
    if (questionIndex === window.NUNI.quiz.length - 1) {
      showResult();
      return;
    }
    questionIndex += 1;
    renderQuestion();
    questionText.focus({ preventScroll: true });
  });

  restartButton.addEventListener("click", resetQuiz);
  window.addEventListener("nuni:langchange", resetQuiz);

  resetQuiz();
});
