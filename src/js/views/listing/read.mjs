import { placeBidListener } from "../../listeners/placeBidListener.mjs";
import { renderListing } from "../../ui/renderers/renderSingleListing.mjs";

export function initReadListing() {
  renderListing();
  placeBidListener();
}
