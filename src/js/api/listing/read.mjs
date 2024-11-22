import { API_AUCTION_LISTINGS } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

export async function fetchListings({ include = [], filters = {} } = {}) {

  const query = new URLSearchParams();

  // Include additional properties (e.g., _seller, _bids)
  include.forEach((key) => query.append("_include", key));

  // Add filters to query string
  for (const [key, value] of Object.entries(filters)) {
    query.append(key, value);
  }

  const url = `${API_AUCTION_LISTINGS}?${query.toString()}`;

  try {
    const response = await authFetch(url);
    if (!response.ok) throw new Error("Failed to fetch listings");
    const data = await response.json();
    const listings = data.data; 
    return listings;
  } catch (error) {
    console.error("Error fetching listings:", error); // for dev purposes, remember to add user-friendly messages displayed to user later
  }
}
