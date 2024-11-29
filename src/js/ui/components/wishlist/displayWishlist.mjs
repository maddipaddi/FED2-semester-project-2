import { fetchSingleListing } from "../../../api/listing/read.mjs";
import { formatDateWithDayTimeDate } from "../../../utilities/formatDate.mjs";
import { getUserWishlist } from "./getUserWishlist.mjs";

export async function displayWishlist() {
  const wishlist = getUserWishlist();
  const listingsContainer = document.getElementById("my-wishlist-container");

  if (wishlist.length === 0) {
    listingsContainer.innerHTML = "<p>Your wishlist is empty!</p>";
    return;
  }

  const listings = await Promise.all(
    wishlist.map((id) => fetchSingleListing(id))
  );

  listings.forEach((listing) => {
    const listingElement = document.createElement("div");

    const mediaContainer = document.createElement("div");
    if (listing.media && listing.media.length > 0) {
      const firstMedia = listing.media[0];
      const media = document.createElement("img");
      media.setAttribute("src", firstMedia.url);
      mediaContainer.appendChild(media);
    }

    const auctionEnd = document.createElement("p");
    auctionEnd.innerText = `Ending: ${formatDateWithDayTimeDate(listing.endsAt)}`;

    const linkToReadListing = document.createElement("a");
    linkToReadListing.setAttribute("href", `/listing/read?id=${listing.id}`);
    linkToReadListing.innerText = "Want to bid?";

    listingElement.append(mediaContainer, auctionEnd, linkToReadListing);
    listingsContainer.appendChild(listingElement);
  });
}
