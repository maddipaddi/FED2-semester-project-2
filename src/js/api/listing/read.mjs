import { API_AUCTION_LISTINGS, API_AUCTION_PROFILES } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import { handleErrors } from "../../utilities/handleErrors.mjs";

export const fetchSingleListing = async (id, options = {}) => {
  if (!id) {
    throw new Error("Read requires a post ID");
  }

  const query = new URLSearchParams(options);
  const url = `${API_AUCTION_LISTINGS}/${id}?${query.toString()}`;

  const response = await authFetch(url);

  if (!response.ok) {
    await handleErrors(response);
  }

  const data = await response.json();
  const listing = data.data;
  return listing;
};

export const fetchListings = async (options = {}) => {
  const query = new URLSearchParams(options);
  const url = `${API_AUCTION_LISTINGS}?${query.toString()}`;

  const response = await authFetch(url);
  if (!response.ok) {
    await handleErrors(response);
  }
  const data = await response.json();
  const listings = data.data;
  const meta = data.meta;
  return { listings, meta };
};

export const fetchListingsByProfile = async (name, options = {}) => {
  const query = new URLSearchParams(options);
  const url = `${API_AUCTION_PROFILES}/${name}/listings?${query.toString()}`;

  const response = await authFetch(url);
  if (!response.ok) {
    await handleErrors(response);
  }
  const data = await response.json();
  const listings = data.data;
  return listings;
};

export const fetchBidsByProfile = async (name, options = {}) => {
  const query = new URLSearchParams(options);
  const url = `${API_AUCTION_PROFILES}/${name}/bids?${query.toString()}`;

  const response = await authFetch(url);
  if (!response.ok) {
    await handleErrors(response);
  }
  const data = await response.json();
  const bids = data.data;
  return bids;
};

export const fetchListingsWonByProfile = async (name) => {
  const url = `${API_AUCTION_PROFILES}/${name}/wins`;

  const response = await authFetch(url);
  if (!response.ok) {
    await handleErrors(response);
  }
  const data = await response.json();
  const wins = data.data;
  return wins;
};
