function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();

  if (taskText === "") return;

  let li = document.createElement("li");

  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <button class="delete" onclick="this.parentElement.remove()">X</button>
  `;

  // ✅ Click to toggle completed
  li.addEventListener("click", function (e) {
    // prevent delete button click from triggering toggle
    if (e.target.tagName === "BUTTON") return;

    this.classList.toggle("completed");
  });

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("themeToggle");

  if (!toggleBtn) {
    console.log("Theme button not found!");
    return;
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      toggleBtn.textContent = "☀️ Light Mode";
    } else {
      toggleBtn.textContent = "🌙 Dark Mode";
    }
  });
});
