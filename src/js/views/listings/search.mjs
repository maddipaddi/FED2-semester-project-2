import { renderSearchResults } from "../../ui/renderers/renderSearchResults.mjs";

export async function initSearchListings() {
  renderSearchResults();
}

export const fetchListingsBySearch = async (searchQuery, options = {}) => {
  const query = new URLSearchParams(options);
  const url = `${API_AUCTION_LISTINGS}/search?q=${searchQuery}${query.toString()}`;

  const response = await authFetch(url);
  if (!response.ok) {
    await handleErrors(response);
  }
  const data = await response.json();
  const listings = data.data;
  return listings;
};
