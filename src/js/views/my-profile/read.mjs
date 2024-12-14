import { displayLoggedInProfileInfo } from "../../ui/templates/displayLoggedInProfileInfo.mjs";
import { authGuard } from "../../utilities/authGuard.mjs";

export async function initReadMyProfile() {
  await authGuard();
  displayLoggedInProfileInfo();
}
