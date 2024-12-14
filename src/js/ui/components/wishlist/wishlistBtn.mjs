import { loggedInUser } from "../../../utilities/findLoggedInUser.mjs";
import { isInWishlist } from "./isInWishlist.mjs";
import { toggleWishlist } from "./toggleWishlist.mjs";

export function initializeWishlistButton(listingId) {
  const currentUser = loggedInUser();
  if (!currentUser) {
    return;
  }

  const wishlistButton = document.getElementById("wishlist-button");
  wishlistButton.setAttribute("data-id", listingId);

  if (isInWishlist(listingId)) {
    wishlistButton.innerText = "Remove from Wishlist";
  } else {
    wishlistButton.innerText = "Wishlist";
  }

  wishlistButton.addEventListener("click", toggleWishlist);
}
