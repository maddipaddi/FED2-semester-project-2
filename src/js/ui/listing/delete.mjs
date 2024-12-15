import { deletePost } from "../../api/listing/delete.mjs";
import { displayDynamicConfirmationModal } from "../components/displayMessageToUser/confirmationModal.mjs";
import {
  displayErrorMessage,
  displaySuccessMessage,
} from "../components/displayMessageToUser/displayMessage.mjs";
import {
  hideSpinner,
  showSpinner,
} from "../components/loadingSpinner/spinner.mjs";

export async function onDeletePost(event) {
  event.preventDefault();

  const deleteButton = event.target;

  const id = deleteButton.getAttribute("id");

  try {
    const userConfirmed = await displayDynamicConfirmationModal(
      "Are you sure you want to delete this listing?"
    );
    if (!userConfirmed) {
      displaySuccessMessage("Deletion cancelled.");
      return;
    }
    showSpinner();
    await deletePost(id);
    displaySuccessMessage("Listing was deleted.");
  } catch (error) {
    displayErrorMessage(error);
  } finally {
    hideSpinner();
    setTimeout(function () {
      location.reload();
    }, 3000);
  }
}
