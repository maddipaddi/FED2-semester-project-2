import { updateListingListener } from "../../listeners/updateListingListener.mjs";
import { authGuard } from "../../utilities/authGuard.mjs";
import { populateForm } from "../../utilities/populateListingFormToEdit.mjs";

export async function initUpdate() {
  await authGuard();
  populateForm();
  updateListingListener();
}
