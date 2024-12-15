import { displayErrorMessage } from "../components/displayMessageToUser/displayMessage.mjs";
import { readListingsBySearch } from "../listing/read.mjs";

import { displayListings } from "../templates/displayListings.mjs";

export async function renderSearchResults() {
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get("q");
  if (!searchQuery) {
    const container = document.getElementById("container");
    container.innerHTML = "<p>No search term provided. Try again!</p>";
    return;
  }
  try {
    const listings = await readListingsBySearch(searchQuery);
    const container = document.getElementById("container");
    container.innerHTML = "";

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
    displayErrorMessage(error);
    const container = document.getElementById("container");
    container.innerHTML = `<p>Something went wrong while fetching search results. Please try again.</p>`;
  }
}
