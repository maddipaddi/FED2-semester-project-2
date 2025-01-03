import { updateListing } from "../../api/listing/update.mjs";
import { router } from "../../router/router.mjs";
import { findId } from "../../utilities/findId.mjs";
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

export async function onUpdateListing(event) {
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

  const id = findId();

  try {
    showSpinner;
    await updateListing(id, listingData);
    displaySuccessMessage("Listing was updated.");
    setTimeout(function () {
      router.route("/my-listings/active");
    }, 2000);
  } catch (error) {
    displayErrorMessage(error);
    setTimeout(function () {
      router.route(`/listing/update?id=${id}`);
    }, 2000);
  } finally {
    hideSpinner();
  }
}
