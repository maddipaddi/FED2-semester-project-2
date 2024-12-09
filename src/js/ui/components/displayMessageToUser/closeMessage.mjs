export function closeMessage() {
  const messageContainer = document.getElementById("user-message-container");
  messageContainer.classList.add("hidden");
  location.reload();
}
