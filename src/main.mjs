import { router } from "./js/router/router.mjs";
import { renderLoggedInProfileMenu } from "./js/ui/renderers/renderLoggedInProfileMenu.mjs";
import { initLogin } from "./js/listeners/loginFormListener.mjs";
import { logoutListener } from "./js/listeners/logoutListener.mjs";
import { applyTheme } from "./js/ui/components/theme/applyTheme.mjs";
import { themeToggle } from "./js/ui/components/theme/themeToggle.mjs";
import { setSideMenusAndSearchBar } from "./js/ui/components/nav/setSideMenusAndSearchBar.mjs";
import "./input.css";

function init() {
  router();
  renderLoggedInProfileMenu();
  initLogin();
  logoutListener();
  applyTheme();
  themeToggle();
  setSideMenusAndSearchBar();
}

init();
