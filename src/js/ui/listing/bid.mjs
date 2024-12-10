import { bidOnListing } from "../../api/listing/bid.mjs";
import { findId } from "../../utilities/findId.mjs";
import {
  displayErrorMessage,
  displaySuccessMessage,
} from "../components/displayMessageToUser/displayMessage.mjs";

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
    await bidOnListing(id, bidData);
    displaySuccessMessage("You have placed a bid on this listing.");
  } catch (error) {
    displayErrorMessage(error);
  } finally {
    setTimeout(function () {
      location.reload();
    }, 3000);
  }
}
