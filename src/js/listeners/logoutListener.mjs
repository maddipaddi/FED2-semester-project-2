import { logoutUser } from "../api/auth/logout.mjs";

export function logoutListener() {
  const logoutBtn = document.getElementById("logout-btn");

  if (!logoutBtn) {
    return;
  } else {
    logoutBtn.addEventListener("click", () => {
      logoutUser();
      window.location.reload();
    });
  }
}
