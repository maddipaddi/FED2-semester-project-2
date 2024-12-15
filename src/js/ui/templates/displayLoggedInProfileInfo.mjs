import { fetchSingleProfile } from "../../api/profile/read.mjs";
import { loggedInUser } from "../../utilities/findLoggedInUser.mjs";

/**
 * Displays the logged-in user's profile information on the page.
 *
 * This function retrieves the currently logged-in user's profile data and populates
 * various elements on the page with the user's information, including their banner,
 * avatar, name, bio, and credits. If any required data is missing, appropriate fallback
 * messages are displayed.
 *
 * @async
 * @function
 * @returns {Promise<void>} Resolves when the profile information has been displayed.
 *
 * @example
 * await displayLoggedInProfileInfo();
 * // The logged-in user's profile information is displayed on the page.
 */

export async function displayLoggedInProfileInfo() {
  const user = loggedInUser();
  const username = user.name;

  const profile = await fetchSingleProfile(username);

  const profileBanner = document.getElementById("profile-banner");
  profileBanner.setAttribute("src", `${profile.banner.url}`);

  const profileImage = document.getElementById("profile-img");
  profileImage.setAttribute("src", `${profile.avatar.url}`);

  const profilename = document.getElementById("profilename");
  profilename.innerText = `${profile.name}`;

  const profileBio = document.getElementById("profile-bio");
  if (profileBio) {
    if (!profile.bio) {
      profileBio.innerText = "Update your profile to display your bio here";
    } else {
      profileBio.innerText = `${profile.bio}`;
    }
  }

  const profileCredits = document.getElementById("profile-credits");
  if (profileCredits) {
    profileCredits.innerText = `Balance: $${profile.credits}`;
  }
}
