import { API_AUCTION_LISTINGS } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

export const fetchListings = async (options = {}) => {
  const query = new URLSearchParams(options);
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
};