import { updateProfileListener } from "../../listeners/updateprofileListener.mjs";
import { displayLoggedInProfileInfo } from "../../ui/templates/displayLoggedInProfileInfo.mjs";

export function initUpdateProfile() {
  displayLoggedInProfileInfo();
  updateProfileListener();
}
