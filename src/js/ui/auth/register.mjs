import { register } from "../../api/auth/register.mjs";
import { login } from "../../api/auth/login.mjs";
import {
  displayErrorMessage,
  displaySuccessMessage,
} from "../components/displayMessageToUser/displayMessage.mjs";
import {
  hideSpinner,
  showSpinner,
} from "../components/loadingSpinner/spinner.mjs";
import { router } from "../../router/router.mjs";

export async function onRegister(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const account = Object.fromEntries(formData.entries());

  try {
    showSpinner();
    await register(account);
    await login({ email: account.email, password: account.password });
    displaySuccessMessage(
      "Registration successful, you will now be logged in!"
    );
    setTimeout(function () {
      router.route("/");
      location.reload();
    }, 2000);
  } catch (error) {
    hideSpinner();
    displayErrorMessage(error, "Profile already exists.");
    setTimeout(function () {
      router.route("/account/register");
    }, 3000);
  } finally {
    hideSpinner();
  }
}
