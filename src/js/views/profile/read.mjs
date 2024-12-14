import { renderOtherProfilesPage } from "../../ui/renderers/renderOtherProfilesPage.mjs";
import { authGuard } from "../../utilities/authGuard.mjs";

export async function initReadProfile() {
  await authGuard();
  renderOtherProfilesPage();
}
