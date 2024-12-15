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
  } catch (error) {
    hideSpinner();
    displayErrorMessage(error, "Profile already exists.");
  } finally {
    hideSpinner();
    setTimeout(function () {
      location.reload();
    }, 3000);
  }
}
