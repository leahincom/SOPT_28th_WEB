const toggleBtn = document.getElementById("toggleBtn");
const modeToggle = document.querySelector(".mode-toggle");

const handleToggleClick = () => {
  modeToggle.classList.toggle("dark");
};

toggleBtn.addEventListener("change", handleToggleClick);
