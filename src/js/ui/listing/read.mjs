import { fetchListings } from "../../api/listing/read.mjs";

export async function readListingsByCategory () {
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

  try {
    // Fetch listings based on the category
    const listings = await fetchListings({
      filters: { _tag: category },
    });

    return listings;

  } catch (error) {
    console.error("Error loading listings:", error); // implement error handling
  }

}