import { handleErrors } from "../../utilities/handleErrors.mjs";
import { authFetch } from "../authFetch.mjs";
import { API_AUCTION_LISTINGS } from "../constants.mjs";

export async function deletePost(id) {
  if (!id) {
    throw new Error("Delete requires a post id");
  }

  const response = await authFetch(`${API_AUCTION_LISTINGS}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    await handleErrors(response);
  }
}
