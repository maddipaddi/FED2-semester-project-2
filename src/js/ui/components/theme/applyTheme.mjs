export function applyTheme() {
  const htmlElement = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");
  const logo = document.getElementById("logo");
  const lightLogoSrc = "/assets/AH-logo-dark.png";
  const darkLogoSrc = "/assets/AH-logo-light.png";
  if (localStorage.getItem("theme") === "dark") {
    htmlElement.classList.add("dark");
    themeToggle.textContent = "Light mode";
    logo.src = lightLogoSrc;
  } else {
    htmlElement.classList.remove("dark");
    themeToggle.textContent = "Dark mode";
    logo.src = darkLogoSrc;
  }
}
