import { onUpdateListing } from "../ui/listing/update.mjs";

export function updateListingListener() {
  const form = document.forms.updateListing;
  form.addEventListener("submit", onUpdateListing);
}
