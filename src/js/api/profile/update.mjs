import { authFetch } from "../authFetch.mjs";
import { API_AUCTION_PROFILES } from "../constants.mjs";
import { handleErrors } from "../../utilities/handleErrors.mjs";

/**
 * Updates a user's profile.
 *
 * This function sends a PUT request to update the specified user's profile with the provided data.
 * If the update fails, it handles the error appropriately. If successful, it returns the updated
 * profile data from the server.
 *
 * @async
 * @function
 * @param {string} name - The username of the profile to update.
 * @param {Object} data - The data to update the user's profile with.
 * @returns {Promise<Object>} Resolves with the updated profile data.
 * @throws {Error} Throws an error if the update request fails.
 *
 * @example
 * try {
 *   const updatedProfile = await updateProfile("johndoe", { bio: "Updated bio", avatar: "new-avatar-url" });
 *   console.log("Profile updated:", updatedProfile);
 * } catch (error) {
 *   console.error("Failed to update profile:", error);
 * }
 */

export async function updateProfile(name, data) {
  const response = await authFetch(`${API_AUCTION_PROFILES}/${name}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    handleErrors(response);
  }

  return await response.json();
}
