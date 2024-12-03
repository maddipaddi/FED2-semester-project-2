import { bidOnListing } from "../../api/listing/bid.mjs";
import { findId } from "../../utilities/findId.mjs";

export async function onBidPlaced(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData.entries());

  const bidData = {
    amount: Number(formValues.amount),
  };

  const id = findId();

  await bidOnListing(id, bidData);
  window.location.reload();
}
