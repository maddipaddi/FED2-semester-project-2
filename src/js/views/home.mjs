import { displayCarousel } from "../ui/components/displayCarousel/displayCarousel.mjs";
import { renderAllListings } from "../ui/renderers/renderAllListings.mjs";

export async function initHome() {
  displayCarousel();

  renderAllListings();
}
