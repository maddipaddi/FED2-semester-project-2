import {
  fetchListings,
  fetchListingsByProfile,
} from "../../api/listing/read.mjs";

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
    console.error("Error loading listings:", error); // implement error handling
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
    console.error("Error loading listings:", error); // implement error handling
  }
}
