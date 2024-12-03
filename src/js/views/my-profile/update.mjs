import { updateProfileListener } from "../../listeners/updateprofileListener.mjs";
import { displayLoggedInProfile } from "../../ui/templates/displayLoggedInProfile.mjs";

export function initUpdateProfile() {
  displayLoggedInProfile();
  updateProfileListener();
}
