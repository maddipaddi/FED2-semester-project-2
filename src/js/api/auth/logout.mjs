import { router } from "../../router/router.mjs";
import { remove } from "../storage/remove.mjs";

/**
 * Logs out the current user.
 *
 * This function clears the user's authentication token and profile information
 * from local storage and redirects the user to the home page.
 *
 * @function
 * @returns {void} Does not return a value.
 *
 * @example
 * logoutUser();
 * // User's session is cleared, and they are redirected to the home page.
 */

export function logoutUser() {
  remove("profile");
  remove("token");
  router.route("/");
}
