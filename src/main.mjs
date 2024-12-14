import { router } from "./js/router/router.mjs";
import { renderLoggedInProfileMenu } from "./js/ui/renderers/renderLoggedInProfileMenu.mjs";
import { initLogin } from "./js/listeners/loginFormListener.mjs";
import { logoutListener } from "./js/listeners/logoutListener.mjs";
import { applyTheme } from "./js/ui/components/theme/applyTheme.mjs";
import { themeToggle } from "./js/ui/components/theme/themeToggle.mjs";
import { setSideMenusAndSearchBar } from "./js/ui/components/nav/setSideMenusAndSearchBar.mjs";
import "./input.css";
import { onSearchListener } from "./js/listeners/searchListener.mjs";

function init() {
  router();
  renderLoggedInProfileMenu();
  initLogin();
  logoutListener();
  onSearchListener();
  applyTheme();
  themeToggle();
  setSideMenusAndSearchBar();
}

init();
