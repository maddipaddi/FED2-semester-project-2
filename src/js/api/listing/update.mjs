import { authFetch } from "../authFetch.mjs";
import { API_AUCTION_LISTINGS } from "../constants.mjs";

export async function updateListing(id, { title, description, tags, media, endsAt }) {
  if (!id) {
    throw new Error("Update requires a post ID");
  }

  const response = await authFetch(`${API_AUCTION_LISTINGS}/${id}`, {
    method: "PUT",
    body: JSON.stringify({ title, description, tags, media, endsAt }),
  });

  if (response.ok) {
    alert("Listing was updated")
  } else {
    throw new Error("Failed to update the listing");
  }

  return await response.json();
}