const countdownInput = document.getElementById("countdownInput");
const countdownDisplay = document.getElementById("countdownDisplay");
let countdownTimer;

document.getElementById("startCountdown").addEventListener("click", () => {
  clearInterval(countdownTimer);
  let seconds = +countdownInput.value || 0;
  countdownDisplay.textContent = seconds;

  countdownTimer = setInterval(() => {
    seconds--;
    countdownDisplay.textContent = seconds;
    if (seconds <= 0) {
      clearInterval(countdownTimer);
      countdownDisplay.textContent = "Time’s up!";
    }
  }, 1000);
});

const stopwatchDisplay = document.getElementById("stopwatchDisplay");
let stopwatchTimer, elapsed = 0;

document.getElementById("startStopwatch").addEventListener("click", () => {
  if (stopwatchTimer) return;
  stopwatchTimer = setInterval(() => {
    elapsed++;
    stopwatchDisplay.textContent = elapsed + "s";
  }, 1000);
});

document.getElementById("stopStopwatch").addEventListener("click", () => {
  clearInterval(stopwatchTimer);
  stopwatchTimer = null;
});

document.getElementById("resetStopwatch").addEventListener("click", () => {
  clearInterval(stopwatchTimer);
  stopwatchTimer = null;
  elapsed = 0;
  stopwatchDisplay.textContent = "0s";
});
