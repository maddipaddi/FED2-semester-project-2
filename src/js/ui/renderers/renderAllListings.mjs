import { readAllListings } from "../listing/read.mjs";
import { displayListings } from "../templates/displayListings.mjs";
import { renderPagination } from "../renderers/renderPagination.mjs";

let isRendering = false;

export async function renderAllListings(page = 1) {
  if (isRendering) return; // Prevent duplicate invocations
  isRendering = true;

  try {
    const { listings, meta } = await readAllListings(page);

    // Clear previous listings, but preserve container classes
    const container = document.getElementById("all-listings");
    container.innerHTML = "";

    // Render listings
    const listingElements = displayListings(listings);
    listingElements.forEach((listingElement) => {
      const card = document.createElement("div");
      card.className = "rounded-md shadow-md p-4 bg-white";
      card.appendChild(listingElement);
      container.appendChild(card);
    });

    // Render pagination
    await renderPagination(meta);
  } catch (error) {
    console.error("Error rendering listings:", error);
  } finally {
    isRendering = false; // Reset rendering state
  }
}
