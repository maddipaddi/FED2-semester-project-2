import { onBidPlaced } from "../ui/listing/bid.mjs";

export function placeBidListener() {
  const form = document.forms.placeBid;
  form.addEventListener("submit", onBidPlaced);
}
