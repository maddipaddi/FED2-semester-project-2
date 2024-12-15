import { bidOnListing } from "../../api/listing/bid.mjs";
import { findId } from "../../utilities/findId.mjs";
import {
  displayErrorMessage,
  displaySuccessMessage,
} from "../components/displayMessageToUser/displayMessage.mjs";
import {
  hideSpinner,
  showSpinner,
} from "../components/loadingSpinner/spinner.mjs";

/**
 * Handles the submission of a bid on an auction listing.
 *
 * This function processes the form submission event for placing a bid. It extracts
 * the bid amount from the form data, formats it as a number, and retrieves the
 * auction ID to construct the `bidData` object for further processing.
 *
 * @async
 * @function
 * @param {Event} event - The form submission event.
 * @returns {void} Does not return a value.
 *
 * @example
 * document.getElementById("bidForm").addEventListener("submit", onBidPlaced);
 * // When the form is submitted, the onBidPlaced function processes the bid.
 */

export async function onBidPlaced(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData.entries());

  const bidData = {
    amount: Number(formValues.amount),
  };

  const id = findId();

  try {
    showSpinner();
    await bidOnListing(id, bidData);
    displaySuccessMessage("You have placed a bid on this listing.");
  } catch (error) {
    displayErrorMessage(error);
  } finally {
    hideSpinner();
    setTimeout(function () {
      location.reload();
    }, 3000);
  }
}
