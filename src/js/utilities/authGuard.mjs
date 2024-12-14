import { displayErrorMessage } from "../ui/components/displayMessageToUser/displayMessage.mjs";
import { router } from "../router/router.mjs";

export async function authGuard() {
  return new Promise((resolve, reject) => {
    if (!localStorage.token) {
      const content = document.getElementById("content");
      content.innerHTML = "";
      const customMessage = "You must be logged in to view this page";
      displayErrorMessage({}, customMessage);
      setTimeout(() => {
        router.route("/");
        reject(new Error("User not authenticated"));
      }, 2500);
    } else {
      resolve();
    }
  });
}
