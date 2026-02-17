let score = 0;

function traverseCanyon(actionCallback) {
  const steps = [
    { name: "Enter Canyon", difficulty: 5 },
    { name: "Climb Rocks", difficulty: 10 },
    { name: "Cross River", difficulty: 15 },
    { name: "Escape Wild Animal", difficulty: 20 },
  ];

  steps.forEach((step) => {
    const success = Math.random() > 0.2;
    const scoreChange = success ? step.difficulty : -step.difficulty;
    score += scoreChange;

    actionCallback({
      step: step.name,
      success,
      scoreChange,
      totalScore: score,
    });
  });

  const finalResult = score > 0 ? "SUCCESS" : "FAIL";
  actionCallback({
    step: "Final Result",
    success: score > 0,
    scoreChange: 0,
    totalScore: score,
    finalResult,
  });
}

function logger(update) {
  console.log(
    `Step: ${update.step} | Success: ${update.success} | Score Change: ${update.scoreChange} | Total Score: ${update.totalScore}`,
  );
}

function scoreTracker(update) {
  if (update.step === "Final Result") {
    console.log(`Final Score: ${update.totalScore}`);
  }
}

function dangerDetector(update) {
  if (!update.success && update.step !== "Final Result") {
    console.log(`Danger encountered at: ${update.step}`);
  }
}

function createStepLogger(prefix) {
  return function (update) {
    console.log(
      `${prefix} ${update.step} -> ${update.success ? "Cleared" : "Failed"}`,
    );
  };
}

function combineCallbacks(...callbacks) {
  return function (update) {
    callbacks.forEach((cb) => cb(update));
  };
}

const prefixedLogger = createStepLogger("Progress:");
const combined = combineCallbacks(
  logger,
  scoreTracker,
  dangerDetector,
  prefixedLogger,
);

traverseCanyon(combined);
