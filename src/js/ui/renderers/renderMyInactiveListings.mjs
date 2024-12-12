import { loggedInUser } from "../../utilities/findLoggedInUser.mjs";
import { readListingsByProfileInactive } from "../listing/read.mjs";
import { displayMyInactiveListings } from "../templates/displayMyInactiveListings.mjs";

export async function renderMyInactiveListings() {
  const user = loggedInUser();
  const listings = await readListingsByProfileInactive(user.name);

  const listingElements = displayMyInactiveListings(listings);

  const myInactiveListingsContainer = document.getElementById(
    "my-inactive-listings"
  );

  if (listings.length === 0) {
    myInactiveListingsContainer.innerHTML =
      "<p>You have no inactive listings at the moment.</p>";
    return;
  }

  listingElements.forEach((listingElement) => {
    const card = document.createElement("div");

    card.appendChild(listingElement);

    myInactiveListingsContainer.appendChild(card);
  });
}
