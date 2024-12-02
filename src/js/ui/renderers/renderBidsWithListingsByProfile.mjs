import { loggedInUser } from "../../utilities/findLoggedInUser.mjs";
import { readBidsByProfileActive } from "../listing/read.mjs";
import { displayBidsWithListingsByProfile } from "../templates/displayBidsWithListingsByProfile.mjs";

export async function renderBidsWithListingsByProfile() {
  const user = loggedInUser();
  const bids = await readBidsByProfileActive(user.name);

  const listingElements = displayBidsWithListingsByProfile(bids);

  const myActiveListingsContainer = document.getElementById(
    "active-bids-container"
  );

  listingElements.forEach((listingElement) => {
    const card = document.createElement("div");

    card.appendChild(listingElement);

    myActiveListingsContainer.appendChild(card);
  });
}
