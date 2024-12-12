import { renderMyInactiveListings } from "../../ui/renderers/renderMyInactiveListings.mjs";
import { authGuard } from "../../utilities/authGuard.mjs";

export async function initInactive() {
  await authGuard();
  renderMyInactiveListings();
}
