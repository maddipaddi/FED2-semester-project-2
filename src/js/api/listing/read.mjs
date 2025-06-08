import { API_AUCTION_LISTINGS, API_AUCTION_PROFILES } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import { handleErrors } from "../../utilities/handleErrors.mjs";

/**
 * Fetch and handle errors for any URL, returning data and meta if available.
 * @param {string} url - Full URL to fetch.
 * @returns {Promise<{ data: any, meta?: any }>}
 */
const fetchData = async (url) => {
	const response = await authFetch(url);
	if (!response.ok) {
		await handleErrors(response);
	}
	const { data, meta } = await response.json();
	return { data, meta };
};

 /**
 * Construct a URL with optional query parameters.
 * @param {string} base - Base URL.
 * @param {string} path - Path to append.
 * @param {object} options - Query parameters as an object.
 * @returns {string} - Full URL.
 */
const buildUrl = (base, path = "", options = {}) => {
	const query = new URLSearchParams(options).toString();
	return `${base}${path}${query ? `?${query}` : ""}`;
};

  /**
 * Get a single listing by ID.
 * @param {string} id - Listing ID.
 * @param {object} options - Query parameters.
 * @returns {Promise<any>}
 */
export const fetchSingleListing = async (id, options = {}) => {
	if (!id) throw new Error("Read requires a post ID");
	const url = buildUrl(API_AUCTION_LISTINGS, `/${id}`, options);
	const { data } = await fetchData(url);
	return data;
};

/**
 * Get all listings with optional parameters (e.g., pagination).
 * @param {object} options
 * @returns {Promise<{ listings: any[], meta: object }>}
 */
export const fetchListings = async (options = {}) => {
  const url = buildUrl(API_AUCTION_LISTINGS, "", options);
	const { data: listings, meta } = await fetchData(url);
	return { listings, meta };
};

/**
 * Search for listings using a text query.
 * @param {string} searchQuery
 * @param {object} options
 * @returns {Promise<any[]>}
 */
export const fetchListingsBySearch = async (searchQuery, options = {}) => {
  const query = new URLSearchParams(options);
  const url = `${API_AUCTION_LISTINGS}/search?q=${searchQuery}&${query.toString()}`;
  const response = await authFetch(url);
  if (!response.ok) {
    await handleErrors(response);
  }
  const data = await response.json();
  const listings = data.data;
  return listings;
};

/**
 * Fetch data (listings, bids, wins) related to a profile.
 * @param {string} name - Profile name.
 * @param {string} endpoint - e.g., "listings", "bids".
 * @param {object} options
 * @returns {Promise<any[]>}
 */
const fetchProfileData = async (name, endpoint, options = {}) => {
	const url = buildUrl(API_AUCTION_PROFILES, `/${name}/${endpoint}`, options);
	const { data } = await fetchData(url);
	return data;
};

/**
 * Get listings created by a specific profile.
 * @param {string} name
 * @param {object} options
 * @returns {Promise<any[]>}
 */
export const fetchListingsByProfile = (name, options) =>
	fetchProfileData(name, "listings", options);

/**
 * Get bids made by a specific profile.
 * @param {string} name
 * @param {object} options
 * @returns {Promise<any[]>}
 */
export const fetchBidsByProfile = (name, options) =>
	fetchProfileData(name, "bids", options);

/**
 * Get listings won by a specific profile.
 * @param {string} name
 * @returns {Promise<any[]>}
 */
  export const fetchListingsWonByProfile = async (name, options = {}) => {
	const url = `${API_AUCTION_PROFILES}/${name}/wins`;
	const { data: wins } = await fetchData(url);
	return wins;
};
