import { updateProfileListener } from "../../listeners/updateProfileListener.mjs";
import { displayLoggedInProfileInfo } from "../../ui/templates/displayLoggedInProfileInfo.mjs";
import { authGuard } from "../../utilities/authGuard.mjs";
import { populateProfileForm } from "../../utilities/populateUpdateProfileForm.mjs";

export async function initUpdateProfile() {
  await authGuard();
  displayLoggedInProfileInfo();
  populateProfileForm();
  updateProfileListener();
}
