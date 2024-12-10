import { dismissMsgBtnListener } from "../../../listeners/dismissMsgBtn.mjs";

export function displaySuccessMessage(successMsg) {
  const messageContainer = document.getElementById("user-message-container");
  const successTitle = document.getElementById("message-title");
  const successText = document.getElementById("message-description");
  const dismissBtn = document.getElementById("dismiss-btn");

  if (!messageContainer) return;

  successText.innerText = successMsg;
  successTitle.innerText = "Success";
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

  // Define default messages for specific status codes
  const statusMessages = {
    400: "Bad Request: Please check your input and try again.",
    401: "Invalid email or password.",
    403: "Forbidden: You are not allowed to perform this action.",
    404: "Resource not found: The requested item doesn't exist.",
    500: "Internal Server Error: Something went wrong on our side.",
    503: "Service Unavailable: Please try again later.",
    default:
      "Something went wrong. Please try again, or contact support if error persists.", // Fallback message
  };

  // Extract status code and choose message
  const { status } = responseError;
  const message =
    customMessage || statusMessages[status] || statusMessages.default;

  // Display the message in the container
  errorText.innerText = message;
  errorTitle.innerText = "Error";
  errorTitle.classList.add("text-secondary");
  dismissBtn.classList.add("bg-secondary");
  messageContainer.classList.remove("hidden");
  dismissMsgBtnListener();
}
