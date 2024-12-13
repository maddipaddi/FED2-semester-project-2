import { readListingsByCategory } from "../listing/read.mjs";
import { displayListings } from "../templates/displayListings.mjs";

export async function renderListingsByCategory() {
  const listings = await readListingsByCategory();
  const listingElements = displayListings(listings);

  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("category");
  if (category) {
    const categoryTitle = document.getElementById("categoryTitle");
    categoryTitle.innerText = `Luxury ${category}`;
  }

  const categoryContainer = document.getElementById("categoryContainer");

  listingElements.forEach((listingElement) => {
    const card = document.createElement("div");

    card.appendChild(listingElement);

    categoryContainer.appendChild(card);
  });
}
