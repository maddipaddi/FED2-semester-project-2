import { closeAllElements } from "./closeAllElements.mjs";
import { leftMenu } from "./leftMenu.mjs";
import { rightMenu } from "./rightMenu.mjs";
import { searchbar } from "./searchbar.mjs";

export function setSideMenusAndSearchBar() {
  document.addEventListener("DOMContentLoaded", () => {
    leftMenu();
    rightMenu();
    searchbar();
    closeAllElements();
  });
}
