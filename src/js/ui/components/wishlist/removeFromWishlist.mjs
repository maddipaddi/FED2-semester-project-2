import { router } from "../../../router/router.mjs";
import { displaySuccessMessage } from "../displayMessageToUser/displayMessage.mjs";
import { getUserWishlist } from "./getUserWishlist.mjs";
import { saveUserWishlist } from "./saveUserWishlist.mjs";

export function removeFromWishlist(listingId) {
  const wishlist = getUserWishlist();
  const updatedWishlist = wishlist.filter((id) => id !== listingId);
  saveUserWishlist(updatedWishlist);
  displaySuccessMessage("Listing removed from your wishlist!");
  setTimeout(function () {
    router.route(`/listing/read?id=${listingId}`);
  }, 2000);
}
