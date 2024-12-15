import { createListing } from "../../api/listing/create.mjs";
import { router } from "../../router/router.mjs";
import { setMediaObjects } from "../../utilities/setImageUrlsAsObjects.mjs";
import { setTagsWithCategory } from "../../utilities/setTagsWithCategory.mjs";
import {
  displayErrorMessage,
  displaySuccessMessage,
} from "../components/displayMessageToUser/displayMessage.mjs";
import {
  hideSpinner,
  showSpinner,
} from "../components/loadingSpinner/spinner.mjs";

/**
 * Handles the creation of a new auction listing.
 *
 * This function processes the form submission event for creating a new auction listing.
 * It extracts form data, organizes media and tags, and constructs a `listingData` object
 * with the necessary fields for submitting the new listing.
 *
 * @async
 * @function
 * @param {Event} event - The form submission event.
 * @returns {void} Does not return a value.
 *
 * @example
 * document.getElementById("listingForm").addEventListener("submit", onCreateListing);
 * // When the form is submitted, the onCreateListing function processes the data.
 */

export async function onCreateListing(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData.entries());

  const imageURLs = formData.getAll("images[]");
  const mediaObjects = setMediaObjects(imageURLs);

  const selectedCategory = formValues.category;
  const tags = setTagsWithCategory(selectedCategory);

  const listingData = {
    title: formValues.title,
    description: formValues.description,
    tags: tags,
    media: mediaObjects,
    endsAt: formValues.auctionEnds,
  };

  try {
    showSpinner();
    await createListing(listingData);
    displaySuccessMessage("You have added a listing.");
    setTimeout(function () {
      router.route("/my-listings/active");
    }, 2000);
  } catch (error) {
    displayErrorMessage(error);
  } finally {
    hideSpinner();
  }
}
