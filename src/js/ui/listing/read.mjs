import {
  fetchListings,
  fetchListingsByProfile,
} from "../../api/listing/read.mjs";

export async function readListingsByCategory() {
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("category");
  const options = {
    _tag: category,
  };
  try {
    // Fetch listings based on the category
    const listings = await fetchListings(options);
    return listings;
  } catch (error) {
    console.error("Error loading listings:", error); // implement error handling
  }
}

export async function readListingsByProfile(name) {
  try {
    const listings = await fetchListingsByProfile(name);
    return listings;
  } catch (error) {
    console.error("Error loading listings:", error); // implement error handling
  }
}
