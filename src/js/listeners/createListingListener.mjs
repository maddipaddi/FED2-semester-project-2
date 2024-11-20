import { onCreateListing } from "../ui/listing/create.mjs";


export function createListingListener () {
  const form = document.forms.createListing;
  form.addEventListener("submit", onCreateListing);
};