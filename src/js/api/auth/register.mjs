import { API_AUTH_REGISTER } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import { handleErrors } from "../../utilities/handleErrors.mjs";

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
