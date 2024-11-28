import { updateListingListener } from "../../listeners/updateListingListener.mjs";
import { populateForm } from "../../utilities/populateListingFormToEdit.mjs";

export function initUpdate() {
  populateForm();
  updateListingListener();
}
