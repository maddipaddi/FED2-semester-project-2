import { onUpdateProfile } from "../ui/profile/update.mjs";

export function updateProfileListener() {
  const form = document.forms.updateProfile;
  form.addEventListener("submit", onUpdateProfile);
}
