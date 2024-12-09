import { register } from "../../api/auth/register.mjs";
import { login } from "../../api/auth/login.mjs";
import { router } from "../../router/router.mjs";
import {
  displayErrorMessage,
  displaySuccessMessage,
} from "../components/displayMessageToUser/displayMessage.mjs";

export async function onRegister(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const account = Object.fromEntries(formData.entries());

  try {
    // add a loading spinner?
    await register(account);
    displaySuccessMessage(
      "Registration successful, you will now be logged in!"
    );
    await login({ email: account.email, password: account.password });
    router.route("/");
  } catch (error) {
    displayErrorMessage(error, "Profile already exists.");
  } finally {
    setTimeout(function () {
      location.reload();
    }, 3000);
  }
}
