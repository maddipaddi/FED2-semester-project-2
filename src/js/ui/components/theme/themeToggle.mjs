export function themeToggle() {
  const logo = document.getElementById("logo");
  const lightLogoSrc = "/assets/AH-logo-dark.png";
  const darkLogoSrc = "/assets/AH-logo-light.png";
  const themeToggle = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;
  themeToggle.addEventListener("click", () => {
    if (htmlElement.classList.contains("dark")) {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      themeToggle.textContent = "Dark mode";
      logo.src = darkLogoSrc;
    } else {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      themeToggle.textContent = "Light mode";
      logo.src = lightLogoSrc;
    }
  });
}
