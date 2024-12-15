import { dismissMsgBtnListener } from "../../../listeners/dismissMsgBtnListener.mjs";

export function displaySuccessMessage(successMsg) {
  const messageContainer = document.getElementById("user-message-container");
  const successTitle = document.getElementById("message-title");
  const successText = document.getElementById("message-description");
  const dismissBtn = document.getElementById("dismiss-btn");

  if (!messageContainer) return;

  successText.innerText = successMsg;
  successTitle.innerText = "Success";
  if (successTitle.innerText) {
    successTitle.removeAttribute("aria-hidden");
  }
  successTitle.classList.add("text-accent");
  dismissBtn.classList.add("bg-accent");
  messageContainer.classList.remove("hidden");
  dismissMsgBtnListener();
}

export function displayErrorMessage(responseError = {}, customMessage = "") {
  const messageContainer = document.getElementById("user-message-container");
  const errorTitle = document.getElementById("message-title");
  const errorText = document.getElementById("message-description");
  const dismissBtn = document.getElementById("dismiss-btn");

  if (!messageContainer) return;

  const statusMessages = {
    400: "Bad Request: Please check your input and try again.",
    401: "Unauthorized: Please log in to continue.",
    403: "Forbidden: You are not allowed to perform this action.",
    404: "Resource not found: The requested item doesn't exist.",
    500: "Internal Server Error: Something went wrong on our side.",
    503: "Service Unavailable: Please try again later.",
    default:
      "Something went wrong. Please try again, or contact support if error persists.",
  };

  const { status } = responseError;
  const message =
    customMessage || statusMessages[status] || statusMessages.default;

  errorText.innerText = message;
  errorTitle.innerText = "Error";
  if (errorTitle.innerText) {
    errorTitle.removeAttribute("aria-hidden");
  }
  errorTitle.classList.add("text-secondary");
  dismissBtn.classList.add("bg-secondary");
  messageContainer.classList.remove("hidden");
  dismissMsgBtnListener();
}
