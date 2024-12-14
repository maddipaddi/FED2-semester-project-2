import { renderMyActiveListings } from "../../ui/renderers/renderMyActiveListings.mjs";
import { authGuard } from "../../utilities/authGuard.mjs";

export async function initActive() {
  await authGuard();
  renderMyActiveListings();
}
