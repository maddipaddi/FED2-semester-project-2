import { onLogin } from "../ui/auth/login.mjs";

export function initLogin () {
  const form = document.forms.login;
  form.addEventListener("submit", onLogin);
};