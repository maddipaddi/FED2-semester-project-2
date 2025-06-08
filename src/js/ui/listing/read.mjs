import {
  fetchBidsByProfile,
  fetchListings,
  fetchListingsByProfile,
  fetchListingsBySearch,
  fetchListingsWonByProfile,
} from "../../api/listing/read.mjs";
import { inactiveListings } from "../../utilities/filterInactiveListings.mjs";
import { displayErrorMessage } from "../components/displayMessageToUser/displayMessage.mjs";
import { hideSpinner, showSpinner } from "../components/loadingSpinner/spinner.mjs";

async function safeApiCall(apiFn, ...params) {
  try {
    showSpinner();
    return await apiFn(...params);
  } catch (error) {
    displayErrorMessage(error);
    return null;
  } finally {
    hideSpinner();
  }
}

export async function readAllListings(page = 1) {
  const options = {
    _active: true,
    _bids: true,
    _seller: true,
    _tag: "luxuryauctionhouse",
    limit: 12,
    page,
  };
  const result = await safeApiCall(fetchListings, options);
  return result || { listings: [], meta: {} };
}

export async function readListingsByCategory() {
  const category = new URLSearchParams(window.location.search).get("category");
  const options = {
    _active: true,
    _tag: category,
    _bids: true,
    _seller: true,
  };
  const result = await safeApiCall(fetchListings, options);
  return result?.listings || [];
}

export async function readListingsBySearch(searchQuery) {
  const options = {
    _bids: true,
    _seller: true,
  };
  return await safeApiCall(fetchListingsBySearch, searchQuery, options) || [];
}

export async function readListingsByProfileActive(name) {
  const options = { _active: true };
  return await safeApiCall(fetchListingsByProfile, name, options) || [];
}

export async function readListingsByProfileInactive(name) {
  const options = { _bids: true, _active: false };
  const listings = await safeApiCall(fetchListingsByProfile, name, options);
  return listings ? inactiveListings(listings) : [];
}

export async function readBidsByProfileActive(name) {
  const options = { _active: true, _listings: true };
  return await safeApiCall(fetchBidsByProfile, name, options) || [];
}

export async function readWinsByProfile(name) {
  const options = { _bids: true, _seller: true };
  return await safeApiCall(fetchListingsWonByProfile, name, options) || [];
}
