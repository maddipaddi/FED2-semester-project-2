import { updateProfileListener } from "../../listeners/updateprofileListener.mjs";
import { displayLoggedInProfileInfo } from "../../ui/templates/displayLoggedInProfileInfo.mjs";
import { authGuard } from "../../utilities/authGuard.mjs";

export async function initUpdateProfile() {
  await authGuard();
  displayLoggedInProfileInfo();
  updateProfileListener();
}
