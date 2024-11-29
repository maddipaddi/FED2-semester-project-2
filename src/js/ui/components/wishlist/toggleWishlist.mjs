import { removeFromWishlist } from "./removeFromWishlist.mjs";
import { addToWishlist } from "./addToWishlist.mjs";
import { isInWishlist } from "./isInWishlist.mjs";

export function toggleWishlist(event) {
  const button = event.target;
  const listingId = button.getAttribute("data-id");

  if (isInWishlist(listingId)) {
    removeFromWishlist(listingId);
    button.innerText = "Wishlist";
  } else {
    addToWishlist(listingId);
    button.innerText = "Remove from Wishlist";
  }
}
