import { loggedInUser } from "../../utilities/findLoggedInUser.mjs";
import { readListingsByProfileActive } from "../listing/read.mjs";
import { displayMyActiveListings } from "../templates/displayMyActiveListings.mjs";

export async function renderMyActiveListings() {
  const user = loggedInUser();
  const listings = await readListingsByProfileActive(user.name);
  const listingElements = displayMyActiveListings(listings);

  const myActiveListingsContainer =
    document.getElementById("my-active-listings");

  if (listings.length === 0) {
    myActiveListingsContainer.innerHTML =
      "<p>You have no active listings at the moment.</p>";
    return;
  }

  listingElements.forEach((listingElement) => {
    const card = document.createElement("div");

    card.appendChild(listingElement);

    myActiveListingsContainer.appendChild(card);
  });
}
