import { displayWishlist } from "../../ui/components/wishlist/displayWishlist.mjs";
import { renderBidsWithListingsByProfile } from "../../ui/renderers/renderBidsWithListingsByProfile.mjs";

export function initWishlistAndBids() {
  displayWishlist();
  renderBidsWithListingsByProfile();
}
