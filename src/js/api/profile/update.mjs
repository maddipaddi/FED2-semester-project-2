import { authFetch } from "../authFetch.mjs";
import { API_AUCTION_PROFILES } from "../constants.mjs";
import { handleErrors } from "../../utilities/handleErrors.mjs";

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
