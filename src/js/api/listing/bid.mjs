import { authFetch } from "../authFetch.mjs";
import { API_AUCTION_LISTINGS } from "../constants.mjs";

export async function bidOnListing(id, data) {
  const response = await authFetch(`${API_AUCTION_LISTINGS}/${id}/bids`, {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (response.ok) {
    alert("You placed a bid on this listing"); // replace with user-friendly displayed message
  } else {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to place bid on listing");
  }
}
