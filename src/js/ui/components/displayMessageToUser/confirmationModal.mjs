export function displayDynamicConfirmationModal(customMessage = "") {
  return new Promise((resolve) => {
    const modalContainer = document.createElement("div");
    modalContainer.setAttribute("role", "alert");
    modalContainer.className =
      "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30";

    const modalContent = document.createElement("div");
    modalContent.className =
      "bg-white rounded-lg shadow-2xl max-w-sm w-full p-6 transform transition-all duration-300 scale-90 hover:scale-100";

    const modalTitle = document.createElement("h2");
    modalTitle.innerText = "Confirmation";
    modalTitle.className =
      "font-serif font-extrabold uppercase text-center mb-4 text-lg tracking-wide";
    modalContent.appendChild(modalTitle);

    const modalMessage = document.createElement("p");
    modalMessage.innerText = customMessage;
    modalMessage.className = "text-center text-copy text-base leading-relaxed";
    modalContent.appendChild(modalMessage);

    const modalActions = document.createElement("div");
    modalActions.className = "flex justify-around mt-4";

    const confirmBtn = document.createElement("button");
    confirmBtn.innerText = "Yes";
    confirmBtn.className =
      "bg-accent text-white py-2 px-4 rounded hover:font-bold";
    modalActions.appendChild(confirmBtn);

    const cancelBtn = document.createElement("button");
    cancelBtn.innerText = "No";
    cancelBtn.className =
      "bg-secondary text-white py-2 px-4 rounded hover:font-bold";
    modalActions.appendChild(cancelBtn);

    modalContent.appendChild(modalActions);
    modalContainer.appendChild(modalContent);

    const mainContent = document.getElementById("app");
    mainContent.appendChild(modalContainer);

    const cleanup = () => {
      modalContainer.remove();
    };

    confirmBtn.addEventListener("click", () => {
      cleanup();
      resolve(true);
    });

    cancelBtn.addEventListener("click", () => {
      cleanup();
      resolve(false);
    });
  });
}
