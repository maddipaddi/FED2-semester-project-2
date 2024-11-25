import { renderListingsByCategory } from "../../ui/renderers/renderByCategory.mjs";

export async function initReadListings() {
  await renderListingsByCategory();
}
