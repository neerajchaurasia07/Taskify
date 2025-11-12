const input = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTask.addEventListener("click", () => {
  if (input.value.trim() === "") return;
  const li = document.createElement("li");
  li.textContent = input.value;
  const del = document.createElement("button");
  del.textContent = "❌";
  del.onclick = () => li.remove();
  li.appendChild(del);
  taskList.appendChild(li);
  input.value = "";
});

// Pomodoro Timer
let time = 25 * 60;
let interval;
const timeDisplay = document.getElementById("time");

document.getElementById("startTimer").onclick = () => {
  if (interval) return;
  interval = setInterval(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timeDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    if (time <= 0) {
      clearInterval(interval);
      alert("Time’s up!");
    }
    time--;
  }, 1000);
};

document.getElementById("resetTimer").onclick = () => {
  clearInterval(interval);
  interval = null;
  time = 25 * 60;
  timeDisplay.textContent = "25:00";
};
