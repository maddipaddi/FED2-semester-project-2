import {
  fetchBidsByProfile,
  fetchListings,
  fetchListingsByProfile,
  fetchListingsBySearch,
} from "../../api/listing/read.mjs";
import { inactiveListings } from "../../utilities/filterInactiveListings.mjs";
import { displayErrorMessage } from "../components/displayMessageToUser/displayMessage.mjs";
import {
  hideSpinner,
  showSpinner,
} from "../components/loadingSpinner/spinner.mjs";

export async function readAllListings(page = 1) {
  const options = {
    _active: true,
    _bids: true,
    _seller: true,
    _tag: "luxuryauctionhouse",
    limit: 12,
    page: page,
  };
  try {
    showSpinner();
    const { listings, meta } = await fetchListings(options);
    return { listings, meta };
  } catch (error) {
    displayErrorMessage(error);
  } finally {
    hideSpinner();
  }
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
  try {
    showSpinner();
    const { listings, meta } = await fetchListings(options);
    return listings;
  } catch (error) {
    displayErrorMessage(error);
  } finally {
    hideSpinner();
  }
}

export async function readListingsBySearch(searchQuery) {
  const options = {
    _bids: true,
    _seller: true,
  };
  try {
    showSpinner();
    const listings = await fetchListingsBySearch(searchQuery, options);
    return listings;
  } catch (error) {
    displayErrorMessage(error);
  } finally {
    hideSpinner();
  }
}

export async function readListingsByProfileActive(name) {
  const options = {
    _active: true,
  };
  try {
    showSpinner();
    const listings = await fetchListingsByProfile(name, options);
    return listings;
  } catch (error) {
    displayErrorMessage(error);
  } finally {
    hideSpinner();
  }
}

export async function readListingsByProfileInactive(name) {
  const options = {
    _bids: true,
    _active: false,
  };
  try {
    showSpinner();
    const listings = await fetchListingsByProfile(name, options);
    return inactiveListings(listings);
  } catch (error) {
    displayErrorMessage(error);
  } finally {
    hideSpinner();
  }
}

export async function readBidsByProfileActive(name) {
  const options = {
    _active: true,
    _listings: true,
  };
  try {
    showSpinner();
    const bids = await fetchBidsByProfile(name, options);
    return bids;
  } catch (error) {
    displayErrorMessage(error);
  } finally {
    hideSpinner();
  }
}
