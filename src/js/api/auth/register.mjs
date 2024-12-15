import { API_AUTH_REGISTER } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import { handleErrors } from "../../utilities/handleErrors.mjs";

/**
 * Registers a new user.
 *
 * This function sends a POST request to the registration endpoint with the user's
 * name, email, and password. If the registration is successful, it returns the
 * response data. If the request fails, it handles the error appropriately.
 *
 * @async
 * @function
 * @param {Object} userData - The registration details for the new user.
 * @param {string} userData.name - The name of the user.
 * @param {string} userData.email - The email address of the user.
 * @param {string} userData.password - The password of the user.
 * @returns {Promise<Object>} Resolves with the response data from the registration request.
 * @throws {Error} Throws an error if the registration request fails.
 *
 * @example
 * try {
 *   const data = await register({ name: "John Doe", email: "john@example.com", password: "securepassword123" });
 *   console.log("Registration successful:", data);
 * } catch (error) {
 *   console.error("Registration failed:", error);
 * }
 */

export async function register({ name, email, password }) {
  const response = await authFetch(API_AUTH_REGISTER, {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
  });

  if (response.ok) {
    return await response.json();
  } else {
    await handleErrors(response);
  }
}
