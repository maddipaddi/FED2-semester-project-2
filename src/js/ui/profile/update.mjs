import { updateProfile } from "../../api/profile/update.mjs";
import { loggedInUser } from "../../utilities/findLoggedInUser.mjs";
import { setSingleUrlAsObject } from "../../utilities/setSingleUrlAsObject.mjs";
import {
  displayErrorMessage,
  displaySuccessMessage,
} from "../components/displayMessageToUser/displayMessage.mjs";
import { router } from "../../router/router.mjs";

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

  try {
    await updateProfile(user.name, profileData);
    displaySuccessMessage("Profile was updated.");
    setTimeout(function () {
      router.route("/my-profile/read");
    }, 2000);
  } catch (error) {
    displayErrorMessage(error);
  }
}
