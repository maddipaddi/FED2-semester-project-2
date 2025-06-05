import {
  fetchBidsByProfile,
  fetchListings,
  fetchListingsByProfile,
  fetchListingsBySearch,
} from "../../api/listing/read.mjs";
import { inactiveListings } from "../../utilities/filterInactiveListings.mjs";
import { displayErrorMessage } from "../components/displayMessageToUser/displayMessage.mjs";
import { hideSpinner, showSpinner } from "../components/loadingSpinner/spinner.mjs";

async function withSpinner(asyncFn) {
  try {
    showSpinner();
    return await asyncFn();
  } catch (error) {
    displayErrorMessage(error);
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
  return await withSpinner(async () => {
    const { listings, meta } = await fetchListings(options);
    return { listings, meta };
  });
}

export async function readListingsByCategory() {
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("category");
  const options = {
    _active: true,
    _tag: category,
    _bids: true,
    _seller: true,
  };
  return await withSpinner(async () => {
    const { listings } = await fetchListings(options);
    return listings;
  });
}

export async function readListingsBySearch(searchQuery) {
  const options = {
    _bids: true,
    _seller: true,
  };
  return await withSpinner(() => fetchListingsBySearch(searchQuery, options));
}

export async function readListingsByProfileActive(name) {
  const options = { _active: true };
  return await withSpinner(() => fetchListingsByProfile(name, options));
}

export async function readListingsByProfileInactive(name) {
  const options = {
    _bids: true,
    _active: false,
  };
  return await withSpinner(async () => {
    const listings = await fetchListingsByProfile(name, options);
    return inactiveListings(listings);
  });
}

export async function readBidsByProfileActive(name) {
  const options = {
    _active: true,
    _listings: true,
  };
  return await withSpinner(() => fetchBidsByProfile(name, options));
}
