import { loggedInUser } from "../../../utilities/findLoggedInUser.mjs";

export function getUserWishlist() {
  const currentUser = loggedInUser();
  if (!currentUser) {
    alert("You must be logged in to view your wishlist.");
    return [];
  }

  const userWishlistKey = `wishlist_${currentUser.email}`;
  return JSON.parse(localStorage.getItem(userWishlistKey)) || [];
}
