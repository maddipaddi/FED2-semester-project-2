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
    const errorMessage = await response.text(); // Get error details if provided
    throw new Error(
      `Failed to delete post: ${errorMessage || response.statusText}`
    );
  }
}
