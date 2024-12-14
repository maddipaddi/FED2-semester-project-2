import { fetchListingsByProfile } from "../../api/listing/read.mjs";
import { displayOtherProfilesListings } from "../templates/displayOtherProfilesListings.mjs";

export async function renderOtherProfilesListings() {
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get("user");

  const options = {
    _active: true,
    _bids: true,
  };

  const listings = await fetchListingsByProfile(username, options);
  const listingElements = await displayOtherProfilesListings(listings);

  const listingsContainer = document.getElementById("listings-container");
  listingElements.forEach((listingElement) => {
    const card = document.createElement("div");

    card.appendChild(listingElement);

    listingsContainer.appendChild(card);
  });
}
