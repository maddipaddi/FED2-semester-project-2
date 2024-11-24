import { readListingsByCategory } from "../../ui/listing/read.mjs";
import { displayListings } from "../../ui/templates/displayListings.mjs";



async function renderPosts() {
  const listings = await readListingsByCategory();
  const listingElements = displayListings(listings);

  const categoryContainer = document.getElementById("categoryContainer");

  listingElements.forEach((listingElement) => {
    const card = document.createElement("div");

    card.appendChild(listingElement);

    categoryContainer.appendChild(card);
  });
}

export async function initReadListings () {
await renderPosts();
    
};