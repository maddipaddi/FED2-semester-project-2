import { deletePost } from "../../api/listing/delete.mjs";
import {
  displayErrorMessage,
  displaySuccessMessage,
} from "../components/displayMessageToUser/displayMessage.mjs";

export async function onDeletePost(event) {
  event.preventDefault();

  const deleteButton = event.target;

  const id = deleteButton.getAttribute("id");

  try {
    await deletePost(id);
    displaySuccessMessage("Listing was deleted.");
  } catch (error) {
    displayErrorMessage(error);
  } finally {
    setTimeout(function () {
      location.reload();
    }, 3000);
  }
}
