import { login } from "../../api/auth/login.mjs";
import {
  displaySuccessMessage,
  displayErrorMessage,
} from "../components/displayMessageToUser/displayMessage.mjs";

export async function onLogin(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const account = Object.fromEntries(formData.entries());

  try {
    // add a loading spinner?
    await login(account);
    displaySuccessMessage("Login successful!");
  } catch (error) {
    displayErrorMessage(error);
  } finally {
    setTimeout(function () {
      location.reload();
    }, 3000);
  }
}
