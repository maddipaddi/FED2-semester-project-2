import { displayProfileInfo } from "../templates/displayOtherUsersProfileInfo.mjs";
import { renderOtherProfilesListings } from "./renderOtherProfilesListings.mjs";

export function renderOtherProfilesPage() {
  displayProfileInfo();
  renderOtherProfilesListings();
}
