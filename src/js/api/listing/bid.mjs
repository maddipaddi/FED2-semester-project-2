import { authFetch } from "../authFetch.mjs";
import { API_AUCTION_LISTINGS } from "../constants.mjs";
import { handleErrors } from "../../utilities/handleErrors.mjs";

export async function bidOnListing(id, data) {
  const response = await authFetch(`${API_AUCTION_LISTINGS}/${id}/bids`, {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return response;
  } else {
    await handleErrors(response);
  }
}
