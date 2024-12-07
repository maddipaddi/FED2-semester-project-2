import { router } from "./js/router/router.mjs";
import { renderProfileMenu } from "./js/ui/renderers/renderProfileMenu.mjs";
import { initLogin } from "./js/listeners/loginFormListener.mjs";
import { logoutListener } from "./js/listeners/logoutListener.mjs";
import "./input.css";

function init() {
  router();
  renderProfileMenu();
  initLogin();
  logoutListener();
  const htmlElement = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");

  // Funksjon for å sette tema basert på localStorage
  function applyTheme() {
    if (localStorage.getItem("theme") === "dark") {
      htmlElement.classList.add("dark");
      themeToggle.textContent = "Light mode"; // Endre knappeteksten
    } else {
      htmlElement.classList.remove("dark");
      themeToggle.textContent = "Dark mode"; // Endre knappeteksten
    }
  }

  // Kjør tema ved hver lasting
  applyTheme();

  // EventListener for å bytte tema og lagre valget
  themeToggle.addEventListener("click", () => {
    if (htmlElement.classList.contains("dark")) {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      themeToggle.textContent = "Dark mode"; // Endre knappeteksten
    } else {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      themeToggle.textContent = "Light mode"; // Endre knappeteksten
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    // Venstremeny funksjonalitet
    const menuLeft = document.getElementById("menu-left");
    const openMenuLeftButton = document.getElementById("open-menu-left");
    const closeMenuLeftButton = document.getElementById("close-menu-left");

    // Åpne venstremeny
    openMenuLeftButton.addEventListener("click", () => {
      menuLeft.style.transform = "translateX(0)";
    });

    // Lukke venstremeny
    closeMenuLeftButton.addEventListener("click", () => {
      menuLeft.style.transform = "translateX(-100%)";
    });

    // Høyremeny funksjonalitet
    const menuRight = document.getElementById("menu-right");
    const openMenuRightButton = document.getElementById("open-menu-right");
    const closeMenuRightButton = document.getElementById("close-menu-right");

    // Åpne høyremeny
    openMenuRightButton.addEventListener("click", () => {
      menuRight.style.transform = "translateX(0)";
    });

    // Lukke høyremeny
    closeMenuRightButton.addEventListener("click", () => {
      menuRight.style.transform = "translateX(100%)";
    });

    // Søkeboks funksjonalitet
    const searchBarContainer = document.getElementById("search-bar-container");
    const searchIcon = document.getElementById("search-icon");
    const closeSearchButton = document.getElementById("close-search");

    // Åpne søkeboks
    searchIcon.addEventListener("click", () => {
      searchBarContainer.classList.remove("hidden");
    });

    // Lukke søkeboks
    closeSearchButton.addEventListener("click", () => {
      searchBarContainer.classList.add("hidden");
    });

    // Klikk utenfor for å lukke alle elementer
    document.addEventListener("click", (event) => {
      // Venstremeny
      if (
        !menuLeft.contains(event.target) &&
        !openMenuLeftButton.contains(event.target)
      ) {
        menuLeft.style.transform = "translateX(-100%)";
      }

      // Høyremeny
      if (
        !menuRight.contains(event.target) &&
        !openMenuRightButton.contains(event.target)
      ) {
        menuRight.style.transform = "translateX(100%)";
      }

      // Søkeboks
      if (
        searchBarContainer &&
        !searchBarContainer.contains(event.target) &&
        !searchIcon.contains(event.target)
      ) {
        searchBarContainer.classList.add("hidden");
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const errorModal = document.getElementById("user-message-error");
    const successModal = document.getElementById("user-message-success");
    const dismissError = document.getElementById("dismiss-error");
    const dismissSuccess = document.getElementById("dismiss-success");
  
    // Vis modal-funksjon
    function showModal(modal) {
      modal.classList.remove("hidden");
    }
  
    // Skjul modal-funksjon
    function hideModal(modal) {
      modal.classList.add("hidden");
    }
  
    // Lukk Error Modal
    dismissError.addEventListener("click", () => hideModal(errorModal));
  
    // Lukk Success Modal
    dismissSuccess.addEventListener("click", () => hideModal(successModal));
  
    // Test: Vis modalen manuelt
    //showModal(errorModal); // Kall for å vise Error
    //showModal(successModal); // Kall for å vise Success
  });
  
}

init();
