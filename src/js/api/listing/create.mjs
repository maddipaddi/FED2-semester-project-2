import { handleErrors } from "../../utilities/handleErrors.mjs";
import { authFetch } from "../authFetch.mjs";
import { API_AUCTION_LISTINGS } from "../constants.mjs";

export async function createListing({
  title,
  description,
  tags,
  media,
  endsAt,
}) {
  const response = await authFetch(API_AUCTION_LISTINGS, {
    method: "POST",
    body: JSON.stringify({ title, description, tags, media, endsAt }),
  });

  if (response.ok) {
    return response;
  } else {
    await handleErrors(response);
  }
}
