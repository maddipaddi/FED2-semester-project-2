import {
  fetchBidsByProfile,
  fetchListings,
  fetchListingsByProfile,
} from "../../api/listing/read.mjs";
import { inactiveListings } from "../../utilities/filterInactiveListings.mjs";
import { displayErrorMessage } from "../components/displayMessageToUser/displayMessage.mjs";

export async function readListingsByCategory() {
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("category");
  const options = {
    _tag: category,
    _bids: true,
    _seller: true,
  };
  try {
    // Fetch listings based on the category
    const listings = await fetchListings(options);
    return listings;
  } catch (error) {
    displayErrorMessage(error);
  }
}

export async function readListingsByProfileActive(name) {
  const options = {
    _active: true,
  };
  try {
    const listings = await fetchListingsByProfile(name, options);
    return listings;
  } catch (error) {
    displayErrorMessage(error);
  }
}

export async function readListingsByProfileInactive(name) {
  try {
    const listings = await fetchListingsByProfile(name);
    return inactiveListings(listings);
  } catch (error) {
    displayErrorMessage(error);
  }
}

export async function readBidsByProfileActive(name) {
  const options = {
    _active: true,
    _listings: true,
  };
  try {
    const bids = await fetchBidsByProfile(name, options);
    return bids;
  } catch (error) {
    displayErrorMessage(error);
  }
}
