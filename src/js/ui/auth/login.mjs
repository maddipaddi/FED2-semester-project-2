import { login } from "../../api/auth/login.mjs";
import {
  displaySuccessMessage,
  displayErrorMessage,
} from "../components/displayMessageToUser/displayMessage.mjs";
import {
  hideSpinner,
  showSpinner,
} from "../components/loadingSpinner/spinner.mjs";

export async function onLogin(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const account = Object.fromEntries(formData.entries());

  try {
    showSpinner();
    await login(account);
    displaySuccessMessage("Login successful!");
  } catch (error) {
    if (error.status === 401) {
      const customMessage = "Invalid email or password";
      displayErrorMessage({}, customMessage);
    } else {
      displayErrorMessage(error);
    }
  } finally {
    hideSpinner();
    setTimeout(function () {
      location.reload();
    }, 3000);
  }
}
