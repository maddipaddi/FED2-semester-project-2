export function applyTheme() {
  const htmlElement = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");
  if (localStorage.getItem("theme") === "dark") {
    htmlElement.classList.add("dark");
    themeToggle.textContent = "Light mode";
  } else {
    htmlElement.classList.remove("dark");
    themeToggle.textContent = "Dark mode";
  }
}
