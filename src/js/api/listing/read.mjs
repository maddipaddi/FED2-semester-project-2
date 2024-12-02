import { API_AUCTION_LISTINGS, API_AUCTION_PROFILES } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

export const fetchSingleListing = async (id, options = {}) => {
  try {
    if (!id) {
      throw new Error("Read requires a post ID");
    }

    const query = new URLSearchParams(options);
    const url = `${API_AUCTION_LISTINGS}/${id}?${query.toString()}`;

    const response = await authFetch(url);
    if (!response.ok) throw new Error("Failed to fetch listings");
    const data = await response.json();
    const listing = data.data;
    return listing;
  } catch (error) {
    console.error("Error fetching listing:", error); // for dev purposes, remember to add user-friendly messages displayed to user later
  }
};

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

export const fetchListingsByProfile = async (name, options = {}) => {
  const query = new URLSearchParams(options);
  const url = `${API_AUCTION_PROFILES}/${name}/listings?${query.toString()}`;
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

export const fetchBidsByProfile = async (name, options = {}) => {
  const query = new URLSearchParams(options);
  const url = `${API_AUCTION_PROFILES}/${name}/bids?${query.toString()}`;
  try {
    const response = await authFetch(url);
    if (!response.ok) throw new Error("Failed to fetch listings");
    const data = await response.json();
    const bids = data.data;
    return bids;
  } catch (error) {
    console.error("Error fetching bids:", error); // for dev purposes, remember to add user-friendly messages displayed to user later
  }
};

export const fetchListingsWonByProfile = async (name) => {
  const url = `${API_AUCTION_PROFILES}/${name}/wins`;
  try {
    const response = await authFetch(url);
    if (!response.ok) throw new Error("Failed to fetch listings");
    const data = await response.json();
    const wins = data.data;
    return wins;
  } catch (error) {
    console.error("Error fetching bids:", error); // for dev purposes, remember to add user-friendly messages displayed to user later
  }
};
