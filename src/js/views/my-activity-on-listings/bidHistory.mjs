import { renderWinsByProfile } from "../../ui/renderers/renderWinsByProfile.mjs";
import { authGuard } from "../../utilities/authGuard.mjs";

export async function initBidHistory() {
  await authGuard();
  renderWinsByProfile();
}
