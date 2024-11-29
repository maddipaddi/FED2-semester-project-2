import { getUserWishlist } from "./getUserWishlist.mjs";
import { saveUserWishlist } from "./saveUserWishlist.mjs";

export function removeFromWishlist(listingId) {
  const wishlist = getUserWishlist();
  const updatedWishlist = wishlist.filter((id) => id !== listingId);
  saveUserWishlist(updatedWishlist);
  alert("Listing removed from your wishlist!");
}
