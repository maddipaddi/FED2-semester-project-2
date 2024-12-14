import { onRegister } from "../../ui/auth/register.mjs";

export function initRegister () {
  const form = document.forms.register;
  form.addEventListener("submit", onRegister);
};