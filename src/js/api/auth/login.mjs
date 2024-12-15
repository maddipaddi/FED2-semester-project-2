import { handleErrors } from "../../utilities/handleErrors.mjs";
import { authFetch } from "../authFetch.mjs";
import { API_AUTH_LOGIN } from "../constants.mjs";
import { save } from "../storage/save.mjs";

/**
 * Logs in a user using their email and password.
 *
 * This function sends a POST request to the authentication endpoint to validate
 * the provided email and password. If successful, it stores the user's access token
 * and profile information in local storage and returns the user's profile. If the
 * login attempt fails, it handles the error appropriately.
 *
 * @async
 * @function
 * @param {Object} credentials - The user's login credentials.
 * @param {string} credentials.email - The email address of the user.
 * @param {string} credentials.password - The password of the user.
 * @returns {Promise<Object>} Resolves with the user's profile information if login is successful.
 * @throws {Error} Throws an error if the login request fails.
 *
 * @example
 * try {
 *   const profile = await login({ email: "user@stud.noroff.no", password: "securepassword123" });
 *   console.log("Logged in user:", profile);
 * } catch (error) {
 *   console.error("Login failed:", error);
 * }
 */

export async function login({ email, password }) {
  const response = await authFetch(API_AUTH_LOGIN, {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const { accessToken, ...profile } = (await response.json()).data;
    save("token", accessToken);
    save("profile", profile);
    return profile;
  } else {
    await handleErrors(response);
  }
}
