import {
  displayErrorMessage,
  displaySuccessMessage,
} from "../displayMessageToUser/displayMessage.mjs";
import { getUserWishlist } from "./getUserWishlist.mjs";
import { saveUserWishlist } from "./saveUserWishlist.mjs";
import { router } from "../../../router/router.mjs";

export function addToWishlist(listingId) {
  const wishlist = getUserWishlist();

  if (wishlist.includes(listingId)) {
    displayErrorMessage("Listing is already in your wishlist.");
    return;
  }

  wishlist.push(listingId);
  saveUserWishlist(wishlist);
  displaySuccessMessage("Listing added to your wishlist!");
  setTimeout(function () {
    router.route(`/listing/read?id=${listingId}`);
  }, 2000);
}
