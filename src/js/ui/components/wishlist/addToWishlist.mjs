import { getUserWishlist } from "./getUserWishlist.mjs";
import { saveUserWishlist } from "./saveUserWishlist.mjs";

export function addToWishlist(listingId) {
  const wishlist = getUserWishlist();

  if (wishlist.includes(listingId)) {
    alert("Listing is already in your wishlist.");
    return;
  }

  wishlist.push(listingId);
  saveUserWishlist(wishlist); // Save the updated wishlist
  alert("Listing added to your wishlist!");
}
