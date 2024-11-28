import { formatDateWithDate } from "../../utilities/formatDate.mjs";
import { getHighestBid } from "../../utilities/getHighestBid.mjs";

export function displayListings(listings) {
  return listings.map((listing) => {
    const listingContainer = document.createElement("div");

    const mediaContainer = document.createElement("div");

    if (listing.media && listing.media.length > 0) {
      const firstMedia = listing.media[0];
      const media = document.createElement("img");
      media.setAttribute("src", firstMedia.url);
      mediaContainer.appendChild(media);
    }

    const seller = document.createElement("p");
    const sellerName = `${listing.seller.name}`;
    seller.innerText = sellerName;

    const currentBid = document.createElement("p");
    currentBid.innerText = `Current bid: ${getHighestBid(listing.bids)}`;

    const endingDate = document.createElement("p");
    endingDate.innerText = `Ending: ${formatDateWithDate(listing.endsAt)}`;

    const bidButton = document.createElement("a");
    bidButton.setAttribute("href", `/listing/read?id=${listing.id}`);
    bidButton.innerText = "Bid";

    listingContainer.append(
      mediaContainer,
      seller,
      currentBid,
      endingDate,
      bidButton
    );

    return listingContainer;
  });
}
