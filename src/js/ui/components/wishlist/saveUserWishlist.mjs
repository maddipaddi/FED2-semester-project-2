import { loggedInUser } from "../../../utilities/findLoggedInUser.mjs";

export function saveUserWishlist(wishlist) {
  const currentUser = loggedInUser();
  if (!currentUser) {
    return;
  }

  const userWishlistKey = `wishlist_${currentUser.email}`;
  localStorage.setItem(userWishlistKey, JSON.stringify(wishlist));
}
