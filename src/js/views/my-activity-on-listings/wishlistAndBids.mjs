import { displayWishlist } from "../../ui/components/wishlist/displayWishlist.mjs";
import { renderBidsWithListingsByProfile } from "../../ui/renderers/renderBidsWithListingsByProfile.mjs";
import { authGuard } from "../../utilities/authGuard.mjs";

export async function initWishlistAndBids() {
  await authGuard();
  displayWishlist();
  renderBidsWithListingsByProfile();
}
