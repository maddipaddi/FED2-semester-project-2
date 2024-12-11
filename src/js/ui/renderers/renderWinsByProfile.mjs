import { fetchListingsWonByProfile } from "../../api/listing/read.mjs";
import { loggedInUser } from "../../utilities/findLoggedInUser.mjs";
import { displayWinsByProfile } from "../templates/displayWinsByProfile.mjs";

export async function renderWinsByProfile() {
  const user = loggedInUser();
  const wins = await fetchListingsWonByProfile(user.name);

  const listingElements = displayWinsByProfile(wins);

  const listingsWonContainer = document.getElementById(
    "listings-won-container"
  );

  if (wins.length === 0) {
    listingsWonContainer.innerHTML =
      "<p>You have not won any listings yet.</p>";
    return;
  }

  listingElements.forEach((listingElement) => {
    const card = document.createElement("div");

    card.appendChild(listingElement);

    listingsWonContainer.appendChild(card);
  });
}
