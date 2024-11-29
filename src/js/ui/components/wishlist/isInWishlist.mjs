import { getUserWishlist } from "./getUserWishlist.mjs";

export function isInWishlist(listingId) {
  const wishlist = getUserWishlist();
  return wishlist.includes(listingId);
}
