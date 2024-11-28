import { fetchSingleProfile } from "../../api/profile/read.mjs";
import { loggedInUser } from "../../utilities/findLoggedInUser.mjs";

export async function displayLoggedInProfile() {
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
  profileBio.innerText = `${profile.bio}`;

  const profileCredits = document.getElementById("profile-credits");
  profileCredits.innerText = `Balance: $${profile.credits}`;
}
