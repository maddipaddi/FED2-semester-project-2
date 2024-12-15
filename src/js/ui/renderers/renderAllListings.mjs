import { readAllListings } from "../listing/read.mjs";
import { displayListings } from "../templates/displayListings.mjs";
import { renderPagination } from "../renderers/renderPagination.mjs";
import { displayErrorMessage } from "../components/displayMessageToUser/displayMessage.mjs";

let isRendering = false;

export async function renderAllListings(page = 1) {
  if (isRendering) return;
  isRendering = true;

  try {
    const { listings, meta } = await readAllListings(page);

    const container = document.getElementById("all-listings");
    container.innerHTML = "";

    const listingElements = displayListings(listings);
    listingElements.forEach((listingElement) => {
      const card = document.createElement("div");
      card.className = "rounded-md shadow-md p-4 bg-white";
      card.appendChild(listingElement);
      container.appendChild(card);
    });

    await renderPagination(meta);
  } catch (error) {
    displayErrorMessage(error);
  } finally {
    isRendering = false;
  }
}
