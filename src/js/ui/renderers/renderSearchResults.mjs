import { readListingsBySearch } from "../listing/read.mjs";

import { displayListings } from "../templates/displayListings.mjs";

export async function renderSearchResults() {
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get("q");
  if (!searchQuery) {
    // If no search term is provided, display a message or default listings
    const container = document.getElementById("container");
    container.innerHTML = "<p>No search term provided. Try again!</p>";
    return;
  }
  try {
    // Fetch search results
    const listings = await readListingsBySearch(searchQuery);
    console.log(listings);

    // Clear the previous listings and render search results
    const container = document.getElementById("container");
    container.innerHTML = ""; // Clear the container

    if (listings.length === 0) {
      container.innerHTML = `<p>No results found for "${searchQuery}".</p>`;
      return;
    }

    const listingElements = displayListings(listings);

    listingElements.forEach((listingElement) => {
      const card = document.createElement("div");

      card.appendChild(listingElement);

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching search results:", error);
    const container = document.getElementById("container");
    container.innerHTML = `<p>Something went wrong while fetching search results. Please try again.</p>`;
  }
}
