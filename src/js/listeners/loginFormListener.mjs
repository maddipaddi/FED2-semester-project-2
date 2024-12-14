import { onLogin } from "../ui/auth/login.mjs";

export function initLogin() {
  const form = document.forms.login;
  if (!form) {
    return;
  } else {
    form.addEventListener("submit", onLogin);
  }
}
