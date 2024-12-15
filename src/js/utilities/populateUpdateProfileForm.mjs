import { fetchSingleProfile } from "../api/profile/read.mjs";
import { displayErrorMessage } from "../ui/components/displayMessageToUser/displayMessage.mjs";
import { loggedInUser } from "./findLoggedInUser.mjs";

export async function populateProfileForm() {
  try {
    const user = loggedInUser();
    const userDetails = await fetchSingleProfile(user.name);
    document.getElementById("img").value = userDetails.avatar.url;
    document.getElementById("banner").value = userDetails.banner.url;
    document.getElementById("bio").value = userDetails.bio;
  } catch (error) {
    displayErrorMessage(error);
  }
}
