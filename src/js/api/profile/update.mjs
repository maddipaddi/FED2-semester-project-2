import { authFetch } from "../authFetch.mjs";
import { API_AUCTION_PROFILES } from "../constants.mjs";
import { router } from "../../router/router.mjs";

export async function updateProfile(name, data) {
  const response = await authFetch(`${API_AUCTION_PROFILES}/${name}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });

  if (response.ok) {
    alert("Profile was updated");
    router.route("/my-profile/read");
  } else {
    throw new Error("Failed to update profile");
  }

  return await response.json();
}
