export function themeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;
  themeToggle.addEventListener("click", () => {
    if (htmlElement.classList.contains("dark")) {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      themeToggle.textContent = "Dark mode";
    } else {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      themeToggle.textContent = "Light mode";
    }
  });
}
