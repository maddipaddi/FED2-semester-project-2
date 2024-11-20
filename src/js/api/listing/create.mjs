import { authFetch } from "../authFetch.mjs";
import { API_AUCTION_LISTINGS } from "../constants.mjs";

export async function createListing({ title, description, tags, media, endsAt }) {
  const response = await authFetch(API_AUCTION_LISTINGS, {
    method: "POST",
    body: JSON.stringify({ title, description, tags, media, endsAt }),
  });

  if (response.ok) {
    alert("New listing was created successfully!") // replace with user-friendly displayed message
  }
  else {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to add new listing");
  }
  
}
