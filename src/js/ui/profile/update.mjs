import { updateProfile } from "../../api/profile/update.mjs";
import { loggedInUser } from "../../utilities/findLoggedInUser.mjs";
import { setSingleUrlAsObject } from "../../utilities/setSingleUrlAsObject.mjs";

export async function onUpdateProfile(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData.entries());

  const profileImage = setSingleUrlAsObject(formValues.img);
  const profileBanner = setSingleUrlAsObject(formValues.banner);

  const profileData = {
    avatar: profileImage,
    banner: profileBanner,
    bio: formValues.bio,
  };

  const user = loggedInUser();
  updateProfile(user.name, profileData);
}
