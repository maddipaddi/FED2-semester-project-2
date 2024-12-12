import { fetchSingleProfile } from "../../api/profile/read.mjs";

export const displayProfileInfo = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get("user");

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
      profileBio.innerText = "";
    } else {
      profileBio.innerText = `${profile.bio}`;
    }
  }
};
